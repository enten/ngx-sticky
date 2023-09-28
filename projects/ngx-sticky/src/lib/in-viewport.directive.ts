import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  SimpleChanges,
  forwardRef,
} from '@angular/core';
import { Observable, Subject, Subscription, animationFrameScheduler } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';

import { NgxStickyBaseContainerDirective } from './sticky-base-container.directive';
import { NgxStickyContainerDirective } from './sticky-container.directive';
import { NgxStickyRootContainerController } from './sticky-root-container.controller';
import { NGX_STICKY_WINDOW } from './sticky.tokens';
import {
  NgxIntersection,
  NgxIntersectionComputation,
  NgxIntersectionController,
  NgxIntersectionState,
  NgxStickyContainerController,
} from './sticky.types';
import { coerceBooleanProperty } from './utils/coercion';
import { ConfigSubject, ConfigSubjectSchema } from './utils/config-subject';
import { getElementAbsoluteRect } from './utils/dom';
import { coerceIntersectionThresholds, getCrossedThreshold } from './utils/intersection';


export interface NgxIntersectionConfig {
  disabled: boolean;
  thresholds: number[];
}


export const NGX_BASE_INTERSECTION_CONFIG_SCHEMA: ConfigSubjectSchema<NgxIntersectionConfig> = {
  disabled: {
    aliasKey: 'intersectionDisabled',
    defaultValue: false,
    coercion: coerceBooleanProperty,
  },
  thresholds: {
    aliasKey: 'intersectionThresholds',
    defaultValue: [ 0, 1 ],
    coercion: coerceIntersectionThresholds,
  },
};


@Directive({
  selector: '[ngxInViewport], [ngx-in-viewport], ngx-in-viewport',
  exportAs: 'ngxInViewport',
})
export class NgxInViewportDirective implements NgxIntersectionController, AfterViewInit, OnChanges, OnDestroy {
  static ngAcceptInputType_intersectionDisabled: boolean | string | null | undefined;
  static ngAcceptInputType_intersectionThresholds: number[] | string | null | undefined;

  /**
   * Disable intersection.
   *
   * Defaults to `false`.
   */
  @Input()
  intersectionDisabled!: boolean;

  /**
   * Intersection thresholds.
   *
   * Defaults to `[ 0, 1 ]`.
   */
  @Input()
  intersectionThresholds!: number[];

  /**
   * Emit intersection.
   */
  @Output()
  readonly intersection = new EventEmitter<NgxIntersectionComputation>();

  /**
   * Emit intersection computation.
   */
  @Output()
  readonly intersectionComputation = new EventEmitter<NgxIntersectionComputation>();

  /**
   * Emit intersection state.
   */
  @Output()
  readonly intersectionState = new EventEmitter<NgxIntersectionState>();

  /**
   * Emit intersection threshold.
   */
  @Output()
  readonly intersectionThreshold = new EventEmitter<number>();

  get container(): NgxStickyContainerController {
    return this._container;
  }

  get config(): NgxIntersectionConfig {
    return this.config$.getValue();
  }

  get disabled(): boolean {
    return this.config.disabled;
  }

  /**
   * State of the intersection.
   */
  get state(): NgxIntersectionState {
    return this._intersectionState;
  }

  /** Inputs config */
  readonly config$ = new ConfigSubject<NgxIntersectionConfig>(NGX_BASE_INTERSECTION_CONFIG_SCHEMA);

  /** Intersection container controller */
  readonly _container: NgxStickyBaseContainerDirective;

  /** Emits when the component is destroyed. */
  readonly _destroyed$ = new Subject<void>();

  /** Intersection which reflect last call of _computeIntersection() */
  _intersection!: NgxIntersection;

  /** Intersection computation which reflect last call of _refreshIntersection()  */
  _intersectionComputation!: NgxIntersectionComputation;

  /** Intersection computation with last threshold crossed */
  _intersectionCrossed!: NgxIntersectionComputation;

  /** Last inetersection state crossed */
  _intersectionState!: NgxIntersectionState;

  /** Last inetersection threshold crossed */
  _intersectionThreshold!: number;

  /** Monitoring subscription which trigger update stickies and handle refresh */
  _monitoring!: Subscription;

  /** Emits when refresh() is called */
  readonly _refresh$ = new Subject<NgxIntersectionComputation>();

  constructor(
    readonly rootContainer: NgxStickyRootContainerController,
    @Optional() @Inject(forwardRef(() => NgxStickyContainerDirective))
    readonly stickyContainer: NgxStickyContainerDirective,
    readonly elementRef: ElementRef<HTMLElement>,
    readonly ngZone: NgZone,
    @Inject(NGX_STICKY_WINDOW)
    readonly _win: Window,
  ) {
    // use root container when sticky isn't in container
    this._container = stickyContainer || rootContainer;

    // register in parent container for first update calls
    this.container.registerIntersection(this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.config$.nextChanges(changes);
  }

  ngAfterViewInit(): void {
    this._initMonitoring();
  }

  ngOnDestroy(): void {
    this.container.unregisterIntersection(this);

    if (!this._destroyed$.isStopped) {
      this._destroyed$.next();
      this._destroyed$.complete();
    }

    this._destroyMonitoring();
  }

  beforeRefresh(fastUpdate?: boolean): void {
    if (!fastUpdate) {
      this._intersection = null!;
    }
  }

  disableIntersection(): void {
    this.config$.nextKeyValue('disabled', true, { skipCoercion: true });
  }

  enableIntersection(): void {
    this.config$.nextKeyValue('disabled', false, { skipCoercion: true });
  }

  getIntersection(): NgxIntersection {
    if (!this._intersection) {
      this._intersection = this._computeIntersection();
    }

    return this._intersection;
  }

  refresh(computation: NgxIntersectionComputation): void {
    this._refresh$.next(computation);
  }

  update(fastUpdate?: boolean): void {
    this.container.updateStickies(fastUpdate);
  }

  _computeIntersection(): NgxIntersection {
    const config = this.config$.getValue();

    const elementRect = getElementAbsoluteRect(this.elementRef.nativeElement);

    return {
      disabled: config.disabled,
      height: elementRect.height,
      top: elementRect.top,
      thresholds: config.thresholds,
    };
  }

  /**
   * Create intersection monitoring observable.
   */
  _createMonitoringObservable(): Observable<boolean> {
    return this.config$.pipe(
      debounceTime(0, animationFrameScheduler),
      map(() => false),
      takeUntil(this._destroyed$),
    );
  }

  /**
   * Destroy intersection monitoring subscription.
   */
  _destroyMonitoring(): void {
    if (this._monitoring) {
      this._monitoring.unsubscribe();
      this._monitoring = null!;
    }
  }

  /**
   * Init intersection monitoring.
   */
  _initMonitoring(): void {
    if (!this._win || this._monitoring) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      const handleRefreshSubscription = this._refresh$.pipe(
        distinctUntilChanged(),
        takeUntil(this._destroyed$),
      ).subscribe(computation => {
        this._refreshIntersection(computation);
      });

      const triggerUpdateSubscription = this._createMonitoringObservable().pipe(
        takeUntil(this._destroyed$),
      ).subscribe(fastUpdate => {
        this.update(fastUpdate);
      });

      this._monitoring = new Subscription();
      this._monitoring.add(handleRefreshSubscription);
      this._monitoring.add(triggerUpdateSubscription);
    });
  }

  /**
   * Refresh intersection with given computation.
   *
   * @param computation Intersection state computation
   */
  _refreshIntersection(computation: NgxIntersectionComputation): void {
    this._intersectionComputation = computation;
    this.intersectionComputation.next(computation);

    if (computation.state !== this._intersectionState) {
      this.ngZone.run(() => {
        this._intersectionState = computation.state;
        this.intersectionState.next(computation.state);
      });
    }

    const oldEntry = this._intersectionCrossed;
    const newEntry = computation;

    const oldRatio = oldEntry ? oldEntry.ratio : 0;
    const newRatio = newEntry.ratio;

    // ignore when ratios are unchanged
    if (oldEntry && oldRatio === newRatio) {
      return;
    }

    const crossedThreshold = getCrossedThreshold(computation.snap.intersection.thresholds, oldRatio, newRatio);

    // ignore when no treshold is crossed
    if (isNaN(crossedThreshold)) {
      return;
    }

    this._intersectionCrossed = newEntry;

    this.ngZone.run(() => {
      this._intersectionThreshold = crossedThreshold;
      this.intersectionThreshold.next(crossedThreshold);

      this.intersection.emit(newEntry);
    });
  }
}
