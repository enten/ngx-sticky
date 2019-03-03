import { Inject, Injectable, NgZone } from '@angular/core';
import { Observable, Subject, Subscription, animationFrameScheduler, fromEvent, merge } from 'rxjs';
import { mapTo, share, takeUntil, throttleTime } from 'rxjs/operators';

import { NgxStickyEngine } from './sticky-engine';
import { NGX_STICKY_REGISTRY } from './sticky.providers';
import { NgxSticky, NgxStickyContainer, NgxStickyOffsets, NgxStickyState } from './sticky.types';
import { getViewportScrollPosition, getWindowRef, queryElementSelector } from './sticky.utils';


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

  init(): void {
    this.ngZone.runOutsideAngular(() => this._initMonitoringAll());
  }

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

  determineState(sticky: NgxSticky, scrollTop: number, offsets?: NgxStickyOffsets): NgxStickyState {
    return this.engine.determineStickyState(sticky, scrollTop, offsets);
  }

  getScrollTopOffset(element: HTMLElement, offsetTop?: number): number {
    return this.engine.getScrollTopOffset(this.stickies, element, offsetTop);
  }

  getScrollTopPosition(element: HTMLElement, offsetTop?: number): number {
    return this.engine.getScrollTopPosition(this.stickies, element, offsetTop);
  }

  getSiblingOffets(sticky: NgxSticky): NgxStickyOffsets {
    return this.engine.getSiblingOffets(this.stickies, sticky);
  }

  register(sticky: NgxSticky): void {
    if (this.destroyed$.isStopped) {
      return;
    }

    if (this.stickies.indexOf(sticky) === -1) {
      this.stickies.push(sticky);
    }
  }

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

  update(sticky: NgxSticky, fastCheck?: boolean) {
    this.engine.updateSticky(this.stickies, sticky, fastCheck);
  }

  updateAll(fastCheck?: boolean): void {
    this.stickies.forEach(_sticky => this.update(_sticky, fastCheck));
  }

  updateContainer(container: NgxStickyContainer, fastCheck?: boolean): void {
    const stickies = this.stickies.filter(_sticky => _sticky.container === container);

    stickies.forEach(_sticky => this.update(_sticky, fastCheck));
  }

  updateSiblings(sticky: NgxSticky, fastCheck?: boolean): void {
    const stickies = this.engine.getStickySiblings(this.stickies, sticky);

    stickies.forEach(_sticky => this.update(_sticky, fastCheck));
  }

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
