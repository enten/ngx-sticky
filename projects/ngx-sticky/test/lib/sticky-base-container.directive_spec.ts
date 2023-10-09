import { NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subject, Subscription, animationFrameScheduler, timer } from 'rxjs';

import { NgxStickyBaseContainerDirective } from '../../src/lib/sticky-base-container.directive';
import { NgxStickyEngine } from '../../src/lib/sticky-engine';
import {
  NgxStickyContainer,
  NgxStickyContainerController,
  NgxStickyController,
} from '../../src/lib/sticky.types';


class NgxStickyTestContainerDirective extends NgxStickyBaseContainerDirective {
  element: HTMLElement = null!;
}


let container: NgxStickyBaseContainerDirective;
let stickyEngine: NgxStickyEngine;
let containerParent: NgxStickyContainerController;
let ngZone: NgZone;
let win: Window;

const setup = (overrides: Record<string, any> = {}) => {
  containerParent = 'containerParent' in overrides
    ? overrides['containerParent']
    : null;
  stickyEngine = 'stickyEngine' in overrides
    ? overrides['stickyEngine']
    : TestBed.get(NgxStickyEngine);
  ngZone = 'ngZone' in overrides
    ? overrides['ngZone']
    : {
      run: jest.fn() as NgZone['run'],
      runOutsideAngular: jest.fn() as NgZone['runOutsideAngular'],
    } as NgZone;
  win = 'win' in overrides
    ? overrides['win']
    : null;

  container = new NgxStickyTestContainerDirective(containerParent, stickyEngine, ngZone, win);

  if ('element' in overrides) {
    Object.assign(container, { element: overrides['element'] });
  }
};


beforeEach(() => {
  containerParent = null!;
  stickyEngine = null!;
  ngZone = null!;
  win = null!;
});


describe('constructor', () => {
  it('should register in container parent when is given', () => {
    const registerContainer = jest.fn();

    setup({ containerParent: { registerContainer }});

    expect(registerContainer).toBeCalledWith(container);
  });
});


describe('ngOnChanges', () => {
  it('should apply changes to container config', () => {
    setup();

    container.config$.nextChanges = jest.fn();

    const simpleChanges = {};

    container.ngOnChanges(simpleChanges);

    expect(container.config$.nextChanges).toBeCalledWith(simpleChanges);
  });
});


describe('ngOnDestroy', () => {
  it('should unregisters container and destroy monitoring', () => {
    const registerContainer = jest.fn();
    const unregisterContainer = jest.fn();

    setup({ containerParent: { registerContainer, unregisterContainer } });

    container._destroyMonitoring = jest.fn();

    container.ngOnDestroy();

    expect(unregisterContainer).toBeCalledWith(container);
    expect(container.destroyed$.isStopped).toBe(true);
    expect(container._destroyMonitoring).toBeCalled();
  });
});


describe('beforeRefresh', () => {
  it('should clears container instance cached when fastUpdate is false', () => {
    setup();

    const containerCached = {} as NgxStickyContainer;

    container._container = containerCached;

    container.beforeRefresh(true);

    expect(container._container).toBe(containerCached);

    container.beforeRefresh(false);

    expect(container._container).toBe(null);
  });
});


describe('createScrollPlan', () => {
  it('should returns empty scroll plan when window does not exist', () => {
    setup({ win: null });

    expect(container.createScrollPlan(42)).toEqual([ ]);
  });

  it('should returns scroll plan with one step when target is a number', () => {
    setup({
      win: {
        document: { body: { scrollHeight: 2000 }, documentElement: {} },
        innerHeight: 600,
        scrollTo: () => {},
      },
    });

    container.fixViewportTop = jest.fn(() => 33);
    container.getViewportLeft = jest.fn(() => 5);

    const scrollPlan = container.createScrollPlan('42');

    expect(scrollPlan.length).toBe(1);
    expect(scrollPlan[0].scrollToOptions).toEqual({ top: 33, left: 5 });
  });

  it('should returns scroll plan with multiple steps when target is in child container', () => {
    const target = { tagName: 'P', offsetTop: 11 };

    setup({
      win: {
        document: {
          body: { scrollHeight: 2000 },
          documentElement: {},
          querySelector: () => target,
        },
        innerHeight: 600,
        getComputedStyle: (_element: HTMLElement) => _element.style,
        scrollTo: () => {},
      },
    });

    container.fixViewportTop = jest.fn(() => 33);
    container.getViewportLeft = jest.fn(() => 5);

    const child = new NgxStickyTestContainerDirective(
      container,
      stickyEngine,
      ngZone,
      win,
    );
    child.element = {
      tagName: 'DIV',
      offsetHeight: 50,
      offsetWidth: 10,
      offsetTop: 10,
      offsetLeft: 10,
      scrollHeight: 200,
      style: {
        overflowY: 'auto',
      },
      contains: (() => true) as HTMLElement['contains'],
      querySelector: (() => target) as HTMLElement['querySelector'],
      scrollTo: () => {},
    } as HTMLElement;
    child.fixViewportTop = jest.fn(() => 22);
    child.getViewportLeft = jest.fn(() => 2);

    container.containers.push(child);

    const scrollPlan = container.createScrollPlan('#target', 10);

    expect(container.fixViewportTop).toBeCalledWith(10, 10);
    expect(child.fixViewportTop).toBeCalledWith(11, 10);
    expect(scrollPlan.length).toBe(2);
    expect(scrollPlan[0].scrollToOptions).toEqual({ top: 33, left: 5 });
    expect(scrollPlan[1].scrollToOptions).toEqual({ top: 22, left: 2 });
  });
});


describe('disableStickies', () => {
  it('should set config disabled to true', () => {
    setup();

    container.disableStickies();

    expect(container.config.disabled).toBe(true);
  });
});


describe('enableStickies', () => {
  it('should set config disabled to false', () => {
    setup();

    container.enableStickies();

    expect(container.config.disabled).toBe(false);
  });
});


describe('getContainer', () => {
  it('should returns container instance cached', () => {
    setup();

    const containerCached = {} as NgxStickyContainer;

    container._computeContainer = jest.fn(() => containerCached);

    expect(container.getContainer()).toBe(containerCached);
    expect(container.getContainer()).toBe(containerCached);
    expect(container._computeContainer).toBeCalledTimes(1);
  });
});


describe('getViewportHeight', () => {
  it('should returns window viewport height', () => {
    setup({
      win: {
        document: { body: { scrollHeight: 2000 }, documentElement: {} },
        innerHeight: 600,
      },
    });

    expect(container.getViewportHeight()).toBe(600);
  });
});


describe('getViewportLeft', () => {
  it('should returns window viewport left', () => {
    setup({
      win: {
        document: {
          body: { scrollHeight: 2000 },
          documentElement: { getBoundingClientRect: () => ({ left: -10 }) },
        },
      },
    });

    expect(container.getViewportLeft()).toBe(10);
  });
});


describe('getViewportTop', () => {
  it('should returns window viewport top', () => {
    setup({
      win: {
        document: {
          body: { scrollHeight: 2000 },
          documentElement: { getBoundingClientRect: () => ({ top: -10 }) },
        },
      },
    });

    expect(container.getViewportTop()).toBe(10);
  });
});


describe('registerSticky', () => {
  it('should initialzes monitoring when there are stickies', () => {
    setup();

    container._initMonitoring = jest.fn();

    container.registerSticky({} as NgxStickyController);

    expect(container._initMonitoring).toBeCalled();
  });
});


describe('unregisterSticky', () => {
  it('should destroy monitoring when there are no stickies', () => {
    setup();

    const sticky = {} as NgxStickyController;

    container.stickies.push(sticky);
    container._destroyMonitoring = jest.fn();

    container.unregisterSticky(sticky);

    expect(container._destroyMonitoring).toBeCalled();
  });
});


describe('scrollToTop', () => {
  it('should scroll with scroll plan', () => {
    setup();

    const scrollPlan = [
      { scrollToFn: jest.fn(), scrollToOptions: {} },
      { scrollToFn: jest.fn(), scrollToOptions: {} },
    ];

    container.createScrollPlan = jest.fn(() => scrollPlan);

    container.scrollToTop(42, 10);

    expect(container.createScrollPlan).toBeCalledWith(42, 10);
    expect(scrollPlan[0].scrollToFn).toBeCalledWith(scrollPlan[0].scrollToOptions);
    expect(scrollPlan[1].scrollToFn).toBeCalledWith(scrollPlan[1].scrollToOptions);
  });
});


describe('updateStickies', () => {
  it('should emit update sticky call', () => {
    setup();

    container._updateStickies$.next = jest.fn();

    container.updateStickies(true);

    expect(container._updateStickies$.next).toBeCalledWith(true);
  });
});


describe('_computeContainer', () => {
  it('should returns window container sizes when container is root', () => {
    setup({
      win: {
        document: { body: { scrollHeight: 2000, scrollWidth: 800 }, documentElement: {} },
      },
    });

    container.config$.nextKeyValue('disabled', false);
    container.config$.nextKeyValue('unstacked', true);
    container.config$.nextKeyValue('offsetTop', 10);
    container.config$.nextKeyValue('offsetBottom', 10);

    expect(container._computeContainer()).toEqual({
      disabled: false,
      top: 0,
      left: 0,
      width: 800,
      height: 2000,
      offsetTop: 10,
      offsetBottom: 10,
      unstacked: true,
    });
  });

  it('should returns container element sizes when exists', () => {
    setup({
      element: {
        offsetHeight: 50,
        offsetWidth: 20,
        offsetTop: 10,
        offsetLeft: 5,
        scrollHeight: 200,
        scrollWidth: 100,
      },
      win: {
        document: { body: { scrollHeight: 2000, scrollWidth: 800 }, documentElement: {} },
      },
    });

    container.config$.nextKeyValue('disabled', false);
    container.config$.nextKeyValue('unstacked', true);
    container.config$.nextKeyValue('offsetTop', 10);
    container.config$.nextKeyValue('offsetBottom', 10);

    expect(container._computeContainer()).toEqual({
      disabled: false,
      top: 10,
      height: 200,
      left: 5,
      width: 100,
      offsetTop: 10,
      offsetBottom: 10,
      unstacked: true,
    });
  });
});


describe('_createMonitoringObservable', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should returns observable which emit when config change', async () => {
    setup({
      win: {
        document: {
          body: { scrollHeight: 2000 },
          documentElement: {},
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        },
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      },
    });

    const monitoringSubscriber = jest.fn();
    const monitoringInputs$ = container._createMonitoringObservable();

    monitoringInputs$.subscribe(monitoringSubscriber);

    container.config$.nextKeyValue('unstacked', !container.config.unstacked);
    await timer(0, animationFrameScheduler).toPromise();

    expect(monitoringSubscriber).toBeCalledWith(false);
  });

  it('should returns observable which emit when window fires events', async () => {
    const winAddEventListener = jest.fn();
    const winRemoveEventListener = jest.fn();
    const doc = {
      body: { scrollHeight: 2000 },
      documentElement: {},
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };

    setup({
      win: {
        document: doc,
        addEventListener: winAddEventListener,
        removeEventListener: winRemoveEventListener,
      },
    });

    const monitoringSubscriber = jest.fn();
    const monitoringInputs$ = container._createMonitoringObservable();

    monitoringInputs$.subscribe(monitoringSubscriber);

    expect(monitoringSubscriber).not.toBeCalled();
    expect(doc.addEventListener).toBeCalledTimes(1);
    expect(doc.addEventListener).toBeCalledWith('DOMContentLoaded', expect.any(Function), { passive: true });
    expect(winAddEventListener).toBeCalledTimes(4);
    expect(winAddEventListener).toHaveBeenNthCalledWith(1, 'load', expect.any(Function), { passive: true });
    expect(winAddEventListener).toHaveBeenNthCalledWith(2, 'pageshow', expect.any(Function), { passive: true });
    expect(winAddEventListener).toHaveBeenNthCalledWith(3, 'orientationchange', expect.any(Function), { passive: true });
    expect(winAddEventListener).toHaveBeenNthCalledWith(4, 'resize', expect.any(Function), { capture: true, passive: true });
    expect(winAddEventListener).not.toBeCalledWith('scroll', expect.any(Function), { passive: true });

    const loadHandler = winAddEventListener.mock.calls[0][1];
    loadHandler();
    await timer(0, animationFrameScheduler).toPromise();
    expect(monitoringSubscriber).toBeCalledTimes(1);
    expect(monitoringSubscriber).not.toBeCalledWith(true);

    const pageshowHandler = winAddEventListener.mock.calls[1][1];
    pageshowHandler();
    await timer(0, animationFrameScheduler).toPromise();
    expect(monitoringSubscriber).toBeCalledTimes(2);
    expect(monitoringSubscriber).not.toBeCalledWith(true);

    const orientationchangeHandler = winAddEventListener.mock.calls[2][1];
    orientationchangeHandler();
    await timer(0, animationFrameScheduler).toPromise();
    expect(monitoringSubscriber).toBeCalledTimes(3);
    expect(monitoringSubscriber).not.toBeCalledWith(true);

    const resizeHandler = winAddEventListener.mock.calls[3][1];
    resizeHandler();
    await timer(0, animationFrameScheduler).toPromise();
    expect(monitoringSubscriber).toBeCalledTimes(4);
    expect(monitoringSubscriber).toBeCalledWith(false);
    expect(monitoringSubscriber).not.toBeCalledWith(true);

    expect(winAddEventListener).toBeCalledTimes(8);
    expect(winAddEventListener).toBeCalledWith('scroll', expect.any(Function), { passive: true });
    const scrollHandler = winAddEventListener.mock.calls[7][1];
    scrollHandler();
    await timer(0, animationFrameScheduler).toPromise();
    expect(monitoringSubscriber).toBeCalledTimes(5);
    expect(monitoringSubscriber).toBeCalledWith(true);
  });

  it('should returns observable which emit when window scroll', async () => {
    const winAddEventListener = jest.fn();
    const winRemoveEventListener = jest.fn();
    const doc = {
      body: { scrollHeight: 2000 },
      documentElement: {},
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };

    setup({
      win: {
        document: doc,
        addEventListener: winAddEventListener,
        removeEventListener: winRemoveEventListener,
      },
    });

    const monitoringSubscriber = jest.fn();
    const monitoringInputs$ = container._createMonitoringObservable();

    monitoringInputs$.subscribe(monitoringSubscriber);

    expect(winAddEventListener).not.toBeCalledWith('scroll', expect.anything(), { passive: true });
    expect(doc.addEventListener.mock.calls).toHaveProperty([0, 0], 'DOMContentLoaded');
    const domContentLoadedHandler = doc.addEventListener.mock.calls[0][1];
    expect(doc.addEventListener).toBeCalledWith('DOMContentLoaded', domContentLoadedHandler, { passive: true });

    domContentLoadedHandler();
    await timer(0, animationFrameScheduler).toPromise();

    expect(monitoringSubscriber).toBeCalledTimes(1);
    expect(monitoringSubscriber).toBeCalledWith(false);

    expect(winAddEventListener).toBeCalled();
    expect(winAddEventListener.mock.calls).toHaveProperty([4, 0], 'scroll');
    const scrollHandler = winAddEventListener.mock.calls[4][1];
    expect(winAddEventListener).toBeCalledWith('scroll', scrollHandler, { passive: true });

    scrollHandler();
    await timer(0, animationFrameScheduler).toPromise();
    scrollHandler();
    await timer(0, animationFrameScheduler).toPromise();
    scrollHandler();
    await timer(0, animationFrameScheduler).toPromise();

    expect(monitoringSubscriber).toBeCalledTimes(4);
    expect(monitoringSubscriber).toBeCalledWith(true);
  });

  it('should returns observable which emit when container element scroll', async () => {
    const doc = {
      body: { scrollHeight: 2000 },
      documentElement: {},
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };
    const element = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };

    setup({
      element,
      win: {
        document: doc,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      },
    });

    const monitoringSubscriber = jest.fn();
    const monitoringInputs$ = container._createMonitoringObservable();

    monitoringInputs$.subscribe(monitoringSubscriber);

    expect(element.addEventListener).not.toBeCalled();
    expect(doc.addEventListener.mock.calls).toHaveProperty([0, 0], 'DOMContentLoaded');
    const domContentLoadedHandler = doc.addEventListener.mock.calls[0][1];
    expect(doc.addEventListener).toBeCalledWith('DOMContentLoaded', domContentLoadedHandler, { passive: true });

    domContentLoadedHandler();
    await timer(0, animationFrameScheduler).toPromise();

    expect(monitoringSubscriber).toBeCalledTimes(1);
    expect(monitoringSubscriber).toBeCalledWith(false);

    expect(element.addEventListener).toBeCalled();
    expect(element.addEventListener.mock.calls).toHaveProperty([0, 0], 'scroll');
    const scrollHandler = element.addEventListener.mock.calls[0][1];
    expect(element.addEventListener).toBeCalledWith('scroll', scrollHandler, { passive: true });

    scrollHandler();
    await timer(0, animationFrameScheduler).toPromise();
    scrollHandler();
    await timer(0, animationFrameScheduler).toPromise();
    scrollHandler();
    await timer(0, animationFrameScheduler).toPromise();

    expect(monitoringSubscriber).toBeCalledTimes(4);
    expect(monitoringSubscriber).toBeCalledWith(true);
  });
});


describe('_destroyMonitoring', () => {
  it('shoud unsubscribe monitoring', () => {
    setup();

    const unsubscribe = jest.fn() as Subscription['unsubscribe'];

    container._monitoring = { unsubscribe } as Subscription;

    container._destroyMonitoring();

    expect(container._monitoring).toBe(null);
    expect(unsubscribe).toBeCalled();
  });
});


describe('_initMonitoring', () => {
  it('should do nothing when window is null', () => {
    setup({ win: null });

    container._initMonitoring();

    expect(container._monitoring).toBeFalsy();
  });

  it('should do nothing when monitoring is alreasy initialized', () => {
    setup({ win: { document: { body: {}, documentElement: {} } } });

    const monitoring = {} as Subscription;

    container._monitoring = monitoring;
    container._createMonitoringObservable = jest.fn();

    container._initMonitoring();

    expect(container._monitoring).toBe(monitoring);
    expect(container._createMonitoringObservable).not.toBeCalled();
  });

  it('should initializes monitoring outside zone', () => {
    const runOutsideAngular = jest.fn((fn: (...args: any[]) => any) => fn());
    const monitoring$ = new Subject<boolean>();

    setup({
      ngZone: { runOutsideAngular },
      win: { document: { body: {}, documentElement: {} } },
    });

    container._createMonitoringObservable = jest.fn(() => monitoring$);
    container._updateStickies = jest.fn();

    container._initMonitoring();

    expect(container._monitoring).not.toBe(null);
    expect(runOutsideAngular).toBeCalled();
    expect(container._updateStickies).not.toBeCalled();

    monitoring$.next(true);

    expect(container._updateStickies).toBeCalledTimes(1);
    expect(container._updateStickies).toBeCalledWith(true);

    container.destroyed$.next();
    container.destroyed$.complete();

    monitoring$.next(false);

    expect(container._updateStickies).toBeCalledTimes(1);
  });
});


describe('_updateStickies', () => {
  it('should call super updateStickies', () => {
    setup();

    container.beforeRefresh = jest.fn();

    container._updateStickies(true);

    expect(container.beforeRefresh).not.toBeCalled();

    container._updateStickies(false);

    expect(container.beforeRefresh).toBeCalled();
  });
});
