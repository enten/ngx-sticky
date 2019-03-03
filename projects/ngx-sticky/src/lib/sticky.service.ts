import { Inject, Injectable, NgZone } from '@angular/core';
import { Observable, Subject, Subscription, animationFrameScheduler, fromEvent, merge } from 'rxjs';
import { mapTo, share, takeUntil, throttleTime } from 'rxjs/operators';

import { NgxStickyEngine } from './sticky-engine';
import { NGX_STICKY_REGISTRY } from './sticky.providers';
import { NgxSticky, NgxStickyContainer, NgxStickyOffsets, NgxStickyState } from './sticky.types';
import { getViewportScrollPosition, getWindowRef, queryElementSelector } from './sticky.utils';

/**
 * @description
 * Defines a sticky manager. Implemented in universal way.
 *
 * @ngModule NgxStickyModule
 * @publicApi
 */
@Injectable({
  providedIn: 'root',
})
export class NgxStickyService {
  /** Emits when the service is destroyed. */
  readonly destroyed$ = new Subject<void>();

  monitoringAll$: Observable<boolean>;
  monitoringAllSubscription: Subscription;

  constructor(
    @Inject(NGX_STICKY_REGISTRY) readonly stickies: NgxSticky[],
    readonly engine: NgxStickyEngine,
    readonly ngZone: NgZone,
  ) {
    this.init();
  }

  /**
   * Initializes service.
   */
  init(): void {
    this.ngZone.runOutsideAngular(() => this._initMonitoringAll());
  }

  /**
   * Destroys service.
   */
  destroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();

    if (this.monitoringAllSubscription) {
      this.monitoringAllSubscription.unsubscribe();
      this.monitoringAllSubscription = null;
    }

    for (const sticky of this.stickies) {
      this.unregister(sticky);
    }
  }

  /**
   * Determines sticky state.
   *
   * @param sticky Sticky
   * @param scrollTop Scroll top position
   * @param offsets Top/bottom offsets
   * @returns Sticky state
   */
  determineState(sticky: NgxSticky, scrollTop: number, offsets?: NgxStickyOffsets): NgxStickyState {
    return this.engine.determineStickyState(sticky, scrollTop, offsets);
  }

  /**
   * Returns offset to an element by considering stickies.
   *
   * @param stickies Sticky registry
   * @param element Target element
   * @param offsetTop Top offset
   * @returns Offset top
   */
  getScrollTopOffset(element: HTMLElement, offsetTop?: number): number {
    return this.engine.getScrollTopOffset(this.stickies, element, offsetTop);
  }

  /**
   * Returns scroll top position to scroll to an element and considering stickies.
   *
   * @param stickies Sticky registry
   * @param element Target element
   * @param offsetTop Top offset
   * @returns Scroll top position
   */
  getScrollTopPosition(element: HTMLElement, offsetTop?: number): number {
    return this.engine.getScrollTopPosition(this.stickies, element, offsetTop);
  }

  /**
   * Returns top/bottom offsets for siblings of the given sticky.
   *
   * @param stickies Sticky registry
   * @param sticky Sticky
   * @returns Top/bottom offsets of sticky siblings
   */
  getSiblingOffets(sticky: NgxSticky): NgxStickyOffsets {
    return this.engine.getSiblingOffets(this.stickies, sticky);
  }

  /**
   * Registers sticky.
   *
   * @param sticky Sticky
   */
  register(sticky: NgxSticky): void {
    if (this.destroyed$.isStopped) {
      return;
    }

    if (this.stickies.indexOf(sticky) === -1) {
      this.stickies.push(sticky);
    }
  }

  /**
   * Scroll to the given element and considering stickies.
   *
   * @param element Element
   * @param offsetTop Top offset
   */
  scrollToElement(element: string | HTMLElement, offsetTop?: number): void {
    const win = getWindowRef();

    if (!win) {
      return;
    }

    if (typeof element === 'string') {
      element = queryElementSelector<HTMLElement>(win.document, element);
    }

    if (!element) {
      return;
    }

    const scrollPosition = getViewportScrollPosition(win);
    const scrollTop = this.engine.getScrollTopPosition(this.stickies, element, offsetTop);

    win.scrollTo(scrollPosition.left, scrollTop);
  }

  /**
   * Update sticky state.
   *
   * @param sticky Sticky
   * @param fastCheck Fast update
   */
  update(sticky: NgxSticky, fastCheck?: boolean) {
    this.engine.updateSticky(this.stickies, sticky, fastCheck);
  }

  /**
   * Update all stickies.
   *
   * @param fastCheck Fast update
   */
  updateAll(fastCheck?: boolean): void {
    this.stickies.forEach(_sticky => this.update(_sticky, fastCheck));
  }

  /**
   * Update stickies in a container.
   *
   * @param container Sticky container
   * @param fastCheck Fast update
   */
  updateContainer(container: NgxStickyContainer, fastCheck?: boolean): void {
    const stickies = this.stickies.filter(_sticky => _sticky.container === container);

    stickies.forEach(_sticky => this.update(_sticky, fastCheck));
  }

  /**
   * Update sticky siblings.
   *
   * @param sticky Sticky
   * @param fastCheck Fast update
   */
  updateSiblings(sticky: NgxSticky, fastCheck?: boolean): void {
    const stickies = this.engine.getStickySiblings(this.stickies, sticky);

    stickies.forEach(_sticky => this.update(_sticky, fastCheck));
  }

  /**
   * Unregisters sticky.
   *
   * @param sticky Sticky
   */
  unregister(sticky: NgxSticky) {
    const stickyIndex = this.stickies.indexOf(sticky);

    if (stickyIndex !== -1) {
      this.stickies.splice(stickyIndex, 1);
    }

    this.engine.destroySticky(sticky);
  }

  _initMonitoringAll(): void {
    const win = getWindowRef();

    if (!win) {
      return null;
    }

    if (!this.monitoringAll$) {
      this.monitoringAll$ = merge(
        fromEvent(win, 'load').pipe(mapTo(false), share()),
        fromEvent(win, 'orientationchange').pipe(mapTo(false), share()),
        fromEvent(win, 'resize').pipe(mapTo(false), share()),
        fromEvent(win, 'scroll').pipe(mapTo(true), share()),
        animationFrameScheduler,
      ).pipe(
        takeUntil(this.destroyed$),
        // Arbitrary throttle time to animation frame, less than a frame at 60fps (around 16.67ms)
        throttleTime(0, animationFrameScheduler),
        share(),
      );
    }

    if (!this.monitoringAllSubscription) {
      this.monitoringAllSubscription = this.monitoringAll$.subscribe(fastCheck => {
        this.updateAll(fastCheck);
      });
    }
  }
}
