import {
  Directive,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  SimpleChanges,
  forwardRef,
} from '@angular/core';
import { Observable, Subject, Subscription, animationFrameScheduler, merge } from 'rxjs';
import { mapTo, share, takeUntil } from 'rxjs/operators';

import { NgxStickyBaseBoundaryController } from './sticky-base-boundary.controller';
import { NgxStickyContainerDirective } from './sticky-container.directive';
import { NgxStickyRootContainerController } from './sticky-root-container.controller';
import { NGX_STICKY_WINDOW } from './sticky.tokens';
import { NgxStickyBoundary, NgxStickyContainerController } from './sticky.types';
import { coerceBooleanProperty } from './utils/coercion';
import { ConfigSubject, ConfigSubjectSchema } from './utils/config-subject';
import { getElementAbsoluteRect } from './utils/dom';


export interface NgxStickyBoundaryConfig {
  unstacked: boolean;
}


export const NGX_STICKY_BASE_BOUNDARY_CONFIG_SCHEMA: ConfigSubjectSchema<NgxStickyBoundaryConfig> = {
  unstacked: {
    aliasKey: 'stickyUnstacked',
    defaultValue: false,
    coercion: coerceBooleanProperty,
  },
};


/**
 * Defines a sticky boundary.
 */
@Directive({
  selector: '[ngxStickyBoundary], [ngx-sticky-boundary], ngx-sticky-boundary',
  exportAs: 'ngxStickyBoundary',
})
export class NgxStickyBoundaryDirective extends NgxStickyBaseBoundaryController implements OnChanges, OnDestroy, OnInit {
  static ngAcceptInputType_stickyUnstacked: boolean | string | null | undefined;

  /**
   * Enable/disable sticky stack inside boudary.
   *
   * Defaults to `false`.
   */
  @Input()
  stickyUnstacked: boolean;

  get config(): NgxStickyBoundaryConfig {
    return this.config$.getValue();
  }

  get container(): NgxStickyContainerController {
    return this._container;
  }

  /** Inputs config */
  readonly config$ = new ConfigSubject(NGX_STICKY_BASE_BOUNDARY_CONFIG_SCHEMA);

  /** Boundary line which reflect last call of _computeBoundary() */
  _boundary: NgxStickyBoundary;

  /** Boundary container controller */
  readonly _container: NgxStickyContainerController;

  /** Emits when the component is destroyed. */
  readonly _destroyed$ = new Subject<void>();

  /** Monitoring subscription which trigger update stickies */
  _monitoring: Subscription;

  constructor(
    readonly rootContainer: NgxStickyRootContainerController,
    @Optional() @Inject(forwardRef(() => NgxStickyContainerDirective))
    readonly stickyContainer: NgxStickyContainerController,
    readonly elementRef: ElementRef<HTMLElement>,
    readonly ngZone: NgZone,
    @Inject(NGX_STICKY_WINDOW)
    readonly _win: Window,
  ) {
    super();

    // use root container when boundary isn't in container
    this._container = stickyContainer || rootContainer;

    // register boundary in container for first update calls
    this.container.registerBoundary(this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.config$.nextChanges(changes);
  }

  ngOnInit(): void {
    this._initMonitoring();
  }

  ngOnDestroy(): void {
    this.container.unregisterBoundary(this);

    if (!this._destroyed$.isStopped) {
      this._destroyed$.next();
      this._destroyed$.complete();
    }

    this._destroyMonitoring();
  }

  beforeRefresh(fastUpdate?: boolean): void {
    if (!fastUpdate) {
      this._boundary = null;
    }
  }

  getBoundary(): NgxStickyBoundary {
    if (!this._boundary) {
      this._boundary = this._computeBoundary();
    }

    return this._boundary;
  }

  _computeBoundary(): NgxStickyBoundary {
    const boundary: NgxStickyBoundary = getElementAbsoluteRect(this.elementRef.nativeElement);

    if (this._win) {
      const boundaryStyle = this._win.getComputedStyle(this.elementRef.nativeElement);
      const paddingTop = parseFloat(boundaryStyle.paddingTop) || 0;
      const paddingBottom = parseFloat(boundaryStyle.paddingBottom) || 0;

      // substract paddings from computed boundary line
      boundary.top += paddingTop;
      boundary.height -= paddingTop + paddingBottom;
    }

    boundary.unstacked = this.config.unstacked;

    return boundary;
  }

  _createMonitoringObservable(): Observable<boolean> {
    return merge(
      this.config$,
      animationFrameScheduler,
    ).pipe(
      // throttleTime(0, animationFrameScheduler),
      mapTo(false),
    );
  }

  _destroyMonitoring(): void {
    if (this._monitoring) {
      this._monitoring.unsubscribe();
      this._monitoring = null;
    }
  }

  _initMonitoring(): void {
    if (!this._win || this._monitoring) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this._monitoring = this._createMonitoringObservable()
        .pipe(
          takeUntil(this._destroyed$),
          share(),
        )
        .subscribe(fastUpdate => {
          this.updateStickies(fastUpdate);
        });
    });
  }
}
