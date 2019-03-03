import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Renderer2,
  forwardRef,
} from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription, animationFrameScheduler, merge } from 'rxjs';
import { mapTo, share, takeUntil, throttleTime } from 'rxjs/operators';

import { NgxStickyContainerDirective } from './sticky-container.directive';
import { NgxStickyService } from './sticky.service';
import { NgxSticky, NgxStickyPosition, NgxStickyState } from './sticky.types';
import { coerceBooleanProperty, fromImageLoadEvents, getWindowRef } from './sticky.utils';


/**
 * @description
 * Defines a sticky.
 *
 * @ngModule NgxStickyModule
 * @publicApi
 */
@Directive({
  selector: '[ngxSticky], [ngx-sticky], ngx-sticky',
})
export class NgxStickyDirective implements NgxSticky, AfterViewInit, OnDestroy, OnInit {
  /**
   * Enable/disable sticky.
   *
   * Default value: `true`
   */
  @Input()
  get enable() {
    return this.enable$.getValue();
  }
  set enable(value: boolean) {
    value = coerceBooleanProperty(value);

    if (value !== this.enable) {
      this.enable$.next(value);
    }
  }
  enable$ = new BehaviorSubject<boolean>(true);

  /**
   * Indicate sticky element is an orbit.
   *
   * An orbit is a sticky element which isn't visible until
   * it's sticked.
   *
   * Generally an orbit spot on another element to be sticked.
   *
   * Default value: `false`
   */
  @Input()
  get orbit() {
    return this.orbit$.getValue();
  }
  set orbit(value: boolean) {
    value = coerceBooleanProperty(value);

    if (value !== this.orbit) {
      this.orbit$.next(value);
    }
  }
  orbit$ = new BehaviorSubject<boolean>(false);

  /**
   * Position of the sticky; one of 'top' or 'bottom'.
   *
   * Default value: `'top'`
   */
  @Input()
  get position() {
    return this.position$.getValue();
  }
  set position(value: NgxStickyPosition) {
    value = value === 'bottom' ? 'bottom' : 'top';

    if (value !== this.position) {
      this.position$.next(value);
    }
  }
  position$ = new BehaviorSubject<NgxStickyPosition>('top');

  /**
   * Reference to an element used to determine sticky state.
   *
   * The sticky directive will stick element only when spot
   * isn't visible.
   *
   * Default value: `null`
   */
  @Input()
  get spot() {
    return this.spot$.getValue();
  }
  set spot(value: HTMLElement | null) {
    if (value !== this.spot) {
      this.spot$.next(value);
    }
  }
  spot$ = new BehaviorSubject<HTMLElement | null>(null);

  /**
   * Enable/disable sticky element to be stacked with previous sticked elements.
   *
   * Default value: `true`
   */
  @Input()
  get stack() {
    return this.stack$.getValue();
  }
  set stack(value: boolean) {
    value = coerceBooleanProperty(value);

    if (value !== this.stack) {
      this.stack$.next(value);
    }
  }
  stack$ = new BehaviorSubject<boolean>(true);

  /**
   * Emit sticky itself when its state changed.
   */
  @Output()
  readonly sitkcyChange = new EventEmitter<NgxSticky>();

  @HostBinding('class.ngx-sticky')
  get cssClassSticky() { return this.enable; }

  @HostBinding('class.ngx-sticky--has-spot')
  get cssClassStickyHasSpot() { return this.enable && !!this.spot; }

  @HostBinding('class.ngx-sticky--is-orbit')
  get cssClassStickyPreticked() { return this.enable && this.orbit; }

  @HostBinding('class.ngx-sticky--top')
  get cssClassStickyTop() { return this.enable && this.position !== 'bottom'; }

  @HostBinding('class.ngx-sticky--bottom')
  get cssClassStickyBottom() { return this.enable && this.position === 'bottom'; }

  @HostBinding('class.ngx-sticky--normal')
  get cssClassStickyNormal() { return this.enable && this.state === 'normal'; }

  // @HostBinding('class.ngx-sticky--presticked')
  // get cssClassStickyPresticked() { return this.enable && this.state === 'presticked'; }

  @HostBinding('class.ngx-sticky--sticked')
  get cssClassStickySticked() { return this.enable && this.state === 'sticked'; }

  @HostBinding('class.ngx-sticky--stucked')
  get cssClassStickyStucked() { return this.enable && this.state === 'stucked'; }

  /**
   * Returns HTMLElement of the sticky.
   */
  get element() {
    return this.elementRef.nativeElement;
  }

  /**
   * Returns `true` when element isn't visible.
   */
  get hidden() {
    return !(this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.offsetHeight);
  }

  /**
   * State of the sticky.
   */
  get state() {
    return this.state$.getValue();
  }
  set state(value: NgxStickyState) {
    this.state$.next(value);
  }
  state$ = new BehaviorSubject<NgxStickyState>(null);

  /** Emits when the component is destroyed. */
  readonly destroyed$ = new Subject<void>();

  // ghost: HTMLElement;
  // styleOriginal: NgxStickyStyle;

  monitoring$: Observable<boolean>;
  monitoringSubscription: Subscription;

  constructor(
    @Optional() @Inject(forwardRef(() => NgxStickyContainerDirective)) readonly container: NgxStickyContainerDirective,
    readonly stickyService: NgxStickyService,
    readonly elementRef: ElementRef<HTMLElement>,
    readonly renderer: Renderer2,
    readonly changeDetectorRef: ChangeDetectorRef,
    readonly ngZone: NgZone,
  ) { }

  ngOnInit() {
    this.state$.subscribe(_state => this.ngZone.run(() => {
      this.changeDetectorRef.detectChanges();

      this.sitkcyChange.next(this);
    }));
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();

    if (this.monitoringSubscription) {
      this.monitoringSubscription.unsubscribe();
      this.monitoringSubscription = null;
    }

    this.stickyService.unregister(this);
  }

  ngAfterViewInit() {
    this.stickyService.register(this);

    this.ngZone.runOutsideAngular(() => this._initMonitoring());
  }

  _initMonitoring(): void {
    const win = getWindowRef();

    if (!win) {
      return null;
    }

    if (!this.monitoring$) {
      this.monitoring$ = merge(
        this.enable$,
        this.orbit$,
        this.position$,
        this.stack$,
        this.spot$,
        fromImageLoadEvents(this.elementRef.nativeElement),
        fromImageLoadEvents(this.spot),
      ).pipe(
        takeUntil(this.destroyed$),
        // Arbitrary throttle time to animation frame, less than a frame at 60fps (around 16.67ms)
        throttleTime(0, animationFrameScheduler),
        // Arbitrary set fastCheck to false
        mapTo(false),
        share(),
      );
    }

    if (!this.monitoringSubscription) {
      this.monitoringSubscription = this.monitoring$.subscribe(fastCheck => {
        this.stickyService.update(this, fastCheck);
      });
    }
  }
}
