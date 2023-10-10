import { ElementRef, NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subject, Subscription } from 'rxjs';

import { NgxInViewportDirective } from '../../src/lib/in-viewport.directive';
import { NgxStickyContainerDirective } from '../../src/lib/sticky-container.directive';
import { NgxStickyEngine } from '../../src/lib/sticky-engine';
import { NgxStickyRootContainerController } from '../../src/lib/sticky-root-container.controller';
import { NgxIntersectionComputation, NgxSticky } from '../../src/lib/sticky.types';


let inViewport: NgxInViewportDirective;
let rootContainer: NgxStickyRootContainerController;
let stickyEngine: NgxStickyEngine;
let stickyContainer: NgxStickyContainerDirective;
let elementRef: ElementRef;
let ngZone: NgZone;
let win: Window;

const setup = (overrides: Record<string, any> = {}) => {
  stickyEngine = 'stickyEngine' in overrides
    ? overrides['stickyEngine']
    : TestBed.get(NgxStickyEngine);
  stickyContainer = 'stickyContainer' in overrides
    ? overrides['stickyContainer']
    : null;
  elementRef = 'elementRef' in overrides
    ? overrides['elementRef']
    : { nativeElement: {} };
  ngZone = 'ngZone' in overrides
    ? overrides['ngZone']
    : {
      run: jest.fn() as NgZone['run'],
      runOutsideAngular: jest.fn() as NgZone['runOutsideAngular'],
    } as NgZone;
  win = 'win' in overrides
    ? overrides['win']
    : null;
  rootContainer = 'rootContainer' in overrides
    ? overrides['rootContainer']
    : new NgxStickyRootContainerController(stickyEngine, ngZone, win);

  inViewport = new NgxInViewportDirective(
    rootContainer,
    stickyContainer,
    elementRef,
    ngZone,
    win,
  );
};


beforeEach(() => {
  rootContainer = null!;
  stickyContainer = null!;
  elementRef = null!;
  ngZone = null!;
  win = null!;
});


describe('constructor', () => {
  it('should use root container as default container', () => {
    const registerIntersection = jest.fn();

    setup({ rootContainer: { registerIntersection } });

    expect(inViewport.container).toBe(rootContainer);
    expect(registerIntersection).toBeCalledWith(inViewport);
  });

  it('should use sticky container when is given', () => {
    const registerIntersection = jest.fn();

    setup({ stickyContainer: { registerIntersection } });

    expect(inViewport.container).toBe(stickyContainer);
    expect(registerIntersection).toBeCalledWith(inViewport);
  });
});


describe('container', () => {
  it('should returns sticky container', () => {
    setup({ stickyContainer: { registerIntersection: jest.fn() } });

    expect(inViewport.container).toBe(stickyContainer);
  });
});


describe('config', () => {
  it('should returns config', () => {
    setup();

    expect(inViewport.config).toBe(inViewport.config$.getValue());
  });
});


describe('disabled', () => {
  it('should returns config disabled', () => {
    setup();

    expect(inViewport.disabled).toBe(inViewport.config.disabled);
  });
});


describe('state', () => {
  it('should returns intersection state', () => {
    setup();

    inViewport._intersectionState = 'enter';

    expect(inViewport.state).toBe('enter');
  });
});


describe('ngOnChanges', () => {
  it('should apply changes to boundary config', () => {
    setup();

    inViewport.config$.nextChanges = jest.fn();

    const simpleChanges = {};

    inViewport.ngOnChanges(simpleChanges);

    expect(inViewport.config$.nextChanges).toBeCalledWith(simpleChanges);
  });
});


describe('ngAfterViewInit', () => {
  it('should initializes monitoring', () => {
    setup();

    inViewport._initMonitoring = jest.fn();

    inViewport.ngAfterViewInit();

    expect(inViewport._initMonitoring).toBeCalled();
  });
});


describe('ngOnDestroy', () => {
  it('should unregisters intersection and destroy monitoring', () => {
    const registerIntersection = jest.fn();
    const unregisterIntersection = jest.fn();

    setup({ rootContainer: { registerIntersection, unregisterIntersection } });

    inViewport._destroyMonitoring = jest.fn();

    inViewport.ngOnDestroy();

    expect(unregisterIntersection).toBeCalledWith(inViewport);
    expect(inViewport._destroyed$.isStopped).toBe(true);
    expect(inViewport._destroyMonitoring).toBeCalled();
  });
});


describe('beforeRefresh', () => {
  it('should clears intersection instance cached when fastUpdate is false', () => {
    setup();

    const intersectionCached = {} as NgxSticky;

    inViewport._intersection = intersectionCached;

    inViewport.beforeRefresh(true);

    expect(inViewport._intersection).toBe(intersectionCached);

    inViewport.beforeRefresh(false);

    expect(inViewport._intersection).toBe(null);
  });
});


describe('disableIntersection', () => {
  it('should set config disabled to true', () => {
    setup();

    inViewport.disableIntersection();

    expect(inViewport.config.disabled).toBe(true);
  });
});


describe('enableIntersection', () => {
  it('should set config disabled to false', () => {
    setup();

    inViewport.enableIntersection();

    expect(inViewport.config.disabled).toBe(false);
  });
});


describe('getIntersection', () => {
  it('should returns intersection instance cached', () => {
    setup();

    const intersectionCached = {} as NgxSticky;

    inViewport._computeIntersection = jest.fn(() => intersectionCached);

    expect(inViewport.getIntersection()).toBe(intersectionCached);
    expect(inViewport.getIntersection()).toBe(intersectionCached);
    expect(inViewport._computeIntersection).toBeCalledTimes(1);
  });
});


describe('refresh', () => {
  it('should emit refresh sticky call', () => {
    setup();

    const computation = {} as NgxIntersectionComputation;

    inViewport._refresh$.next = jest.fn();

    inViewport.refresh(computation);

    expect(inViewport._refresh$.next).toBeCalledWith(computation);
  });
});


describe('update', () => {
  it('should update stickies in container', () => {
    setup({
      stickyContainer: {
        registerIntersection: jest.fn(),
        updateStickies: jest.fn(),
      },
    });

    inViewport.update(true);

    expect(stickyContainer.updateStickies).toBeCalledWith(true);
  });
});


describe('_computeIntersection', () => {
  it('should returns intersection instance', () => {
    setup();

    elementRef.nativeElement.offsetTop = 60;
    elementRef.nativeElement.offsetHeight = 20;

    inViewport.config$.next({
      disabled: false,
      thresholds: [ 0, 1 ],
    });

    expect(inViewport._computeIntersection()).toEqual({
      disabled: false,
      height: 20,
      top: 60,
      thresholds: [ 0, 1 ],
    });
  });
});


// describe('_createMonitoringObservable', () => {
//   it('should returns observable which emit when config change', done => {
//     setup();

//     const monitoringSubscriber = jest.fn();
//     const monitoring$ = inViewport._createMonitoringObservable();

//     monitoring$.subscribe(monitoringSubscriber);

//     inViewport._config.nextKeyValue('disabled', !inViewport.config.disabled);

//     animationFrameScheduler.schedule(() => {
//       expect(monitoringSubscriber).toBeCalledWith(false);
//       done();
//     });
//   });
// });


describe('_destroyMonitoring', () => {
  it('shoud unsubscribe monitoring', () => {
    setup();

    const unsubscribe = jest.fn() as Subscription['unsubscribe'];

    inViewport._monitoring = { unsubscribe } as Subscription;

    inViewport._destroyMonitoring();

    expect(inViewport._monitoring).toBe(null);
    expect(unsubscribe).toBeCalled();
  });
});


describe('_initMonitoring', () => {
  it('should do nothing when window is null', () => {
    setup({ win: null });

    inViewport._initMonitoring();

    expect(inViewport._monitoring).toBeFalsy();
  });

  it('should do nothing when monitoring is alreasy initialized', () => {
    setup({
      win: {
        document: {
          documentElement: {},
          body: {},
        },
      },
    });

    const monitoring = {} as Subscription;

    inViewport._monitoring = monitoring;
    inViewport._createMonitoringObservable = jest.fn();

    inViewport._initMonitoring();

    expect(inViewport._monitoring).toBe(monitoring);
    expect(inViewport._createMonitoringObservable).not.toBeCalled();
  });

  it('should initializes monitoring outside zone', () => {
    const runOutsideAngular = jest.fn((fn: (...args: any[]) => any) => fn());
    const monitoring$ = new Subject<boolean>();

    setup({
      ngZone: { runOutsideAngular },
      win: {
        document: {
          documentElement: {},
          body: {},
        },
      },
    });

    inViewport._createMonitoringObservable = jest.fn(() => monitoring$);
    inViewport._refreshIntersection = jest.fn();
    inViewport.update = jest.fn();

    inViewport._initMonitoring();

    expect(inViewport._monitoring).not.toBe(null);
    expect(runOutsideAngular).toBeCalled();
    expect(inViewport._refreshIntersection).not.toBeCalled();
    expect(inViewport.update).not.toBeCalled();

    inViewport._refresh$.next({} as NgxIntersectionComputation);
    monitoring$.next(true);

    inViewport._destroyed$.next();
    inViewport._destroyed$.complete();

    inViewport._refresh$.next({} as NgxIntersectionComputation);
    monitoring$.next(false);

    expect(inViewport._refreshIntersection).toBeCalledTimes(1);
    expect(inViewport.update).toBeCalledTimes(1);
  });
});


describe('_refreshIntersection', () => {
  let run: jest.Mock;

  beforeEach(() => {
    run = jest.fn((fn: (...args: any[]) => any) => fn());

    setup({
      ngZone: { run },
      win: {
        document: {
          documentElement: {},
          body: {},
        },
      },
    });
  });

  it('should emit intersection computation', () => {
    inViewport.intersectionState.next = jest.fn();
    inViewport.intersection.emit = jest.fn();

    const computation = {
      state: 'enter',
      snap: {
        intersection: {
          thresholds: [ 0, 1 ],
        },
      },
    } as NgxIntersectionComputation;

    inViewport._refreshIntersection(computation);

    expect(run).toBeCalledTimes(2);
    expect(inViewport._intersectionState).toBe(computation.state);
    expect(inViewport.intersectionState.next).toBeCalledWith(computation.state);
    expect(inViewport.intersection.emit).toBeCalledWith(computation);
  });
});
