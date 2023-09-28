import { Directive, Input, NgZone, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Observable, Subject, Subscription, animationFrameScheduler, asyncScheduler, fromEvent, merge, of } from 'rxjs';
import { debounceTime, filter, map, startWith, switchMap, takeUntil, throttleTime } from 'rxjs/operators';

import { NgxStickyBaseContainerController } from './sticky-base-container.controller';
import { NgxStickyEngine } from './sticky-engine';
import { NgxScrollPlan, NgxStickyContainer, NgxStickyContainerController, NgxStickyController } from './sticky.types';
import { coerceBooleanProperty, coerceNumberProperty } from './utils/coercion';
import { ConfigSubject, ConfigSubjectSchema } from './utils/config-subject';
import {
  getDocumentHeightFactory,
  getDocumentWidthFactory,
  getElementAbsoluteRect,
  getWindowViewportHeight,
  getWindowViewportLeft,
  getWindowViewportTop,
  isElementScrollableY,
} from './utils/dom';


export interface NgxStickyContainerConfig {
  disabled: boolean;
  offsetTop: number;
  offsetBottom: number;
  unstacked: boolean;
}


export const NGX_STICKY_BASE_CONTAINER_CONFIG_SCHEMA: ConfigSubjectSchema<NgxStickyContainerConfig> = {
  disabled: {
    aliasKey: 'stickyDisabled',
    defaultValue: false,
    coercion: coerceBooleanProperty,
  },
  offsetTop: {
    aliasKey: 'stickyOffsetTop',
    defaultValue: 0,
    coercion: coerceNumberProperty,
  },
  offsetBottom: {
    aliasKey: 'stickyOffsetBottom',
    defaultValue: 0,
    coercion: coerceNumberProperty,
  },
  unstacked: {
    aliasKey: 'stickyUnstacked',
    defaultValue: false,
    coercion: coerceBooleanProperty,
  },
};


/**
 * Abstract sticky container directive.
 */
@Directive()
export abstract class NgxStickyBaseContainerDirective extends NgxStickyBaseContainerController implements OnChanges, OnDestroy {
  static ngAcceptInputType_stickyDisabled: boolean | string | null | undefined;
  static ngAcceptInputType_stickyOffsetBottom: number | string | null | undefined;
  static ngAcceptInputType_stickyOffsetTop: number | string | null | undefined;
  static ngAcceptInputType_stickyUnstacked: boolean | string | null | undefined;

  /**
   * Returns HTMLElement of the container or `null` in case of root container.
   */
  abstract readonly element: HTMLElement;

  /**
   * Disable sticky. container.
   *
   * Defaults to `false`.
   */
  @Input()
  stickyDisabled!: boolean;

  /**
   * Defines offset bottom inside the sticky container.
   */
  @Input()
  stickyOffsetBottom!: number;

  /**
   * Defines offset top inside the sticky container.
   */
  @Input()
  stickyOffsetTop!: number;

  /**
   * Enable/disable sticky stack inside container.
   *
   * Defaults to `false`.
   */
  @Input()
  stickyUnstacked!: boolean;

  get config(): NgxStickyContainerConfig {
    return this.config$.getValue();
  }

  get disabled(): boolean {
    return this.config.disabled;
  }

  /** Inputs config */
  readonly config$ = new ConfigSubject(NGX_STICKY_BASE_CONTAINER_CONFIG_SCHEMA);

  /** Container which reflect last call of _computeContainer() */
  _container!: NgxStickyContainer;

  /** Emits when the service is destroyed. */
  readonly destroyed$ = new Subject<void>();

  /** Monitoring subscription which trigger update stickies */
  _monitoring!: Subscription;

  /** Emits when updateStickies() is called */
  _updateStickies$ = new Subject<boolean>();

  /** Getter for document height */
  readonly _getDocumentHeight: () => number;
  /** Getter for document width */
  readonly _getDocumentWidth: () => number;

  constructor(
    readonly containerParent: NgxStickyContainerController,
    readonly stickyEngine: NgxStickyEngine,
    readonly ngZone: NgZone,
    readonly _win: Window,
  ) {
    super();

    if (this.containerParent) {
      this.containerParent.registerContainer(this);
    }

    this._getDocumentHeight = getDocumentHeightFactory(this._win);
    this._getDocumentWidth = getDocumentWidthFactory(this._win);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.config$.nextChanges(changes);
  }

  ngOnDestroy(): void {
    if (this.containerParent) {
      this.containerParent.unregisterContainer(this);
    }

    if (!this.destroyed$.isStopped) {
      this.destroyed$.next();
      this.destroyed$.complete();
    }

    this._destroyMonitoring();
  }

  beforeRefresh(fastUpdate?: boolean): void {
    if (!fastUpdate) {
      this._container = null!;
    }
  }

  createScrollPlan(target: number | string | HTMLElement, userOffsetTop?: number): NgxScrollPlan {
    const scrollPlan: NgxScrollPlan = [];

    if (!this._win) {
      return scrollPlan;
    }

    const scrollToFn = this.element
      ? this.element.scrollTo.bind(this.element)
      : this._win.scrollTo.bind(this._win);

    let containsElement = false;

    if (typeof target === 'string') {
      const elementAsNumber = parseFloat(target as string);

      if (!isNaN(elementAsNumber)) {
        target = elementAsNumber;
      } else {
        if (this.element) {
          target = this.element.querySelector<HTMLElement>(target)!;
        } else {
          target = this._win.document.querySelector<HTMLElement>(target)!;
        }

        if (target) {
          containsElement = true;
        }
      }
    }

    if (typeof target === 'number' && !isNaN(target)) {
      const elementTop = this.fixViewportTop(target, userOffsetTop);

      scrollPlan.push({
        scrollToOptions: { left: this.getViewportLeft(), top: elementTop },
        scrollToFn,
      });

      return scrollPlan;
    }

    // if (!target || !(target instanceof HTMLElement)) {
    if (!target || !((target as HTMLElement).tagName)) {
      return scrollPlan;
    }

    containsElement = containsElement || !this.element || this.element.contains(target as HTMLElement);

    if (!containsElement) {
      return scrollPlan;
    }

    let targetContainer!: NgxStickyBaseContainerDirective;
    let targetContainerScrollPlan!: NgxScrollPlan;

    for (const containerController of (this.containers as NgxStickyBaseContainerDirective[])) {
      const containerScrollPlan = containerController.createScrollPlan(target, userOffsetTop);

      if (containerScrollPlan.length) {
        targetContainerScrollPlan = containerScrollPlan;
        targetContainer = containerController as NgxStickyBaseContainerDirective;

        break;
      }
    }

    const containerScrollable = !this.element || isElementScrollableY(this._win, this.element);

    if (containerScrollable) {
      const targetLine = targetContainer
        ? targetContainer.getContainer()
        : getElementAbsoluteRect(target as HTMLElement);
      const targetTopFixed = this.fixViewportTop(targetLine.top, userOffsetTop);

      scrollPlan.push({
        scrollToFn,
        scrollToOptions: { left: this.getViewportLeft(), top: targetTopFixed },
      });
    }

    if (targetContainerScrollPlan) {
      scrollPlan.push(...targetContainerScrollPlan);
    }

    return scrollPlan;
  }

  disableStickies(): void {
    this.config$.nextKeyValue('disabled', true, { skipCoercion: true });
  }

  enableStickies(): void {
    this.config$.nextKeyValue('disabled', false, { skipCoercion: true });
  }

  getContainer(): NgxStickyContainer {
    if (!this._container) {
      this._container = this._computeContainer();
    }

    return this._container;
  }

  getViewportHeight(): number {
    return getWindowViewportHeight(this._win);
  }

  getViewportLeft(): number {
    return getWindowViewportLeft(this._win);
  }

  getViewportTop(): number {
    return getWindowViewportTop(this._win);
  }

  override registerSticky(sticky: NgxStickyController): void {
    super.registerSticky(sticky);

    if (this.stickies.length) {
      this._initMonitoring();
    }
  }

  override unregisterSticky(sticky: NgxStickyController): void {
    super.unregisterSticky(sticky);

    if (!this.stickies.length) {
      this._destroyMonitoring();
    }
  }

  scrollToTop(target: number | string | HTMLElement, userOffsetTop?: number): void {
    const scrollPlan = this.createScrollPlan(target, userOffsetTop);

    for (const scrollStep of scrollPlan) {
      scrollStep.scrollToFn(scrollStep.scrollToOptions);
    }
  }

  override updateStickies(fastUpdate?: boolean): void {
    // intercept update stickies to throttle calls
    this._updateStickies$.next(!!fastUpdate);
  }

  _computeContainer(): NgxStickyContainer {
    const config = this.config$.getValue();

    const containerRect = this.element ? getElementAbsoluteRect(this.element) : null;

    return {
      disabled: this.disabled,
      height: containerRect ? this.element.scrollHeight : this._getDocumentHeight(),
      left: containerRect ? containerRect.left : 0,
      offsetBottom: config.offsetBottom,
      offsetTop: config.offsetTop,
      top: containerRect ? containerRect.top : 0,
      unstacked: config.unstacked,
      width: containerRect ? this.element.scrollWidth : this._getDocumentWidth(),
    };
  }

  _createMonitoringObservable(): Observable<boolean> {
    if (!this._win) {
      return of();
    }

    const updateStickiesFast$ = merge(
      this._updateStickies$.pipe(filter(fastUpdate => fastUpdate)),
      fromEvent(this.element || this._win, 'scroll', { passive: true }),
    ).pipe(
      throttleTime(0, animationFrameScheduler, { leading: true, trailing: true }),
    );

    const updateStickiesFull$ = merge(
      this.config$,
      this._updateStickies$.pipe(filter(fastUpdate => !fastUpdate)),
      fromEvent(this._win.document, 'DOMContentLoaded', { passive: true }),
      fromEvent(this._win, 'load', { passive: true }),
      fromEvent(this._win, 'pageshow', { passive: true }),
      // fromEvent(this._win, 'visibilitychange', { passive: true }),
      fromEvent(this._win, 'orientationchange', { passive: true }),
      fromEvent(this._win, 'resize', { passive: true }),
    ).pipe(
      debounceTime(0, asyncScheduler),
    );

    return updateStickiesFull$.pipe(
      takeUntil(this.destroyed$),
      switchMap(() => {
        return updateStickiesFast$.pipe(
          map(() => true),
          startWith(false),
          takeUntil(this.destroyed$),
        );
      }),
    );
  }

  _destroyMonitoring(): void {
    if (this._monitoring) {
      this._monitoring.unsubscribe();
      this._monitoring = null!;
    }
  }

  _initMonitoring(): void {
    if (!this._win || this._monitoring) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this._monitoring = this._createMonitoringObservable().pipe(
        takeUntil(this.destroyed$),
      ).subscribe(fastUpdate => {
        this._updateStickies(fastUpdate);
      });

      // fromMediaQuery(this._win, 'print').pipe(
      //   takeUntil(this.destroyed$),
      // ).subscribe(mqlEvent => {
      //   if (mqlEvent.matches) {
      //     this.disableStickies();
      //   } else {
      //     this.enableStickies();
      //   }
      // });
    });
  }

  _updateStickies(fastUpdate?: boolean): void {
    super.updateStickies(fastUpdate);
  }
}
