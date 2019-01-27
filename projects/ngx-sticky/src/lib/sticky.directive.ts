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


@Directive({
  selector: '[ngxSticky], [ngx-sticky], ngx-sticky',
})
export class NgxStickyDirective implements NgxSticky, AfterViewInit, OnDestroy, OnInit {
  enable$ = new BehaviorSubject<boolean>(true);
  get enable() {
    return this.enable$.getValue();
  }
  @Input()
  set enable(value: boolean) {
    value = coerceBooleanProperty(value);

    if (value !== this.enable) {
      this.enable$.next(value);
    }
  }

  position$ = new BehaviorSubject<NgxStickyPosition>('top');
  get position() {
    return this.position$.getValue();
  }
  @Input()
  set position(value: NgxStickyPosition) {
    value = value === 'bottom' ? 'bottom' : 'top';

    if (value !== this.position) {
      this.position$.next(value);
    }
  }

  spot$ = new BehaviorSubject<HTMLElement | null>(null);
  get spot() {
    return this.spot$.getValue();
  }
  @Input()
  set spot(value: HTMLElement | null) {
    if (value !== this.spot) {
      this.spot$.next(value);
    }
  }

  stack$ = new BehaviorSubject<boolean>(true);
  get stack() {
    return this.stack$.getValue();
  }
  @Input()
  set stack(value: boolean) {
    value = coerceBooleanProperty(value);

    if (value !== this.stack) {
      this.stack$.next(value);
    }
  }

  @Output()
  readonly sitkcyState = new EventEmitter<NgxStickyState>();

  @HostBinding('class.ngx-sticky')
  get cssClassSticky() { return this.enable; }

  @HostBinding('class.ngx-sticky--has-spot')
  get cssClassStickyHasSpot() { return this.enable && !!this.spot; }

  @HostBinding('class.ngx-sticky--top')
  get cssClassStickyTop() { return this.enable && this.position !== 'bottom'; }

  @HostBinding('class.ngx-sticky--bottom')
  get cssClassStickyBottom() { return this.enable && this.position === 'bottom'; }

  @HostBinding('class.ngx-sticky--normal')
  get cssClassStickyNormal() { return this.enable && this.state === 'normal'; }

  @HostBinding('class.ngx-sticky--sticked')
  get cssClassStickySticked() { return this.enable && this.state === 'sticked'; }

  @HostBinding('class.ngx-sticky--stucked')
  get cssClassStickyStucked() { return this.enable && this.state === 'stucked'; }

  get element() {
    return this.elementRef.nativeElement;
  }

  get hidden() {
    return !(this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.offsetHeight);
  }

  state$ = new BehaviorSubject<NgxStickyState>(null);
  get state() {
    return this.state$.getValue();
  }
  set state(value: NgxStickyState) {
    this.state$.next(value);
  }

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
    this.state$.subscribe(state => this.ngZone.run(() => {
      this.changeDetectorRef.detectChanges();

      this.sitkcyState.next(state);
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
