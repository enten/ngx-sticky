import { ElementRef, NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subject, Subscription } from 'rxjs';

import { NgxStickyBoundaryDirective } from '../../src/lib/sticky-boundary.directive';
import { NgxStickyRootContainerController } from '../../src/lib/sticky-root-container.controller';
import { NgxStickyBoundary, NgxStickyContainerController } from '../../src/lib/sticky.types';


let boundary: NgxStickyBoundaryDirective;
let rootContainer: NgxStickyRootContainerController;
let stickyContainer: NgxStickyContainerController;
let elementRef: ElementRef;
let ngZone: NgZone;
let win: Window;

const setup = (overrides: Record<string, any> = {}) => {
  rootContainer = 'rootContainer' in overrides
    ? overrides.rootContainer
    : TestBed.get(NgxStickyRootContainerController);
  stickyContainer = 'stickyContainer' in overrides
    ? overrides.stickyContainer
    : null;
  elementRef = 'elementRef' in overrides
    ? overrides.elementRef
    : { nativeElement: {} };
  ngZone = 'ngZone' in overrides
    ? overrides.ngZone
    : {
      run: jest.fn() as NgZone['run'],
      runOutsideAngular: jest.fn() as NgZone['runOutsideAngular'],
    } as NgZone;
  win = 'win' in overrides
    ? overrides.win
    : null;

  boundary = new NgxStickyBoundaryDirective(rootContainer, stickyContainer, elementRef, ngZone, win);
};


beforeEach(() => {
  rootContainer = null;
  stickyContainer = null;
  elementRef = null;
  ngZone = null;
  win = null;
});


describe('constructor', () => {
  it('should use root container as default container', () => {
    const registerBoundary = jest.fn();

    setup({ rootContainer: { registerBoundary } });

    expect(boundary.container).toBe(rootContainer);
    expect(registerBoundary).toBeCalledWith(boundary);
  });

  it('should use sticky container when is given', () => {
    const registerBoundary = jest.fn();

    setup({ stickyContainer: { registerBoundary } });

    expect(boundary.container).toBe(stickyContainer);
    expect(registerBoundary).toBeCalledWith(boundary);
  });
});


describe('ngOnChanges', () => {
  it('should apply changes to boundary config', () => {
    setup();

    boundary.config$.nextChanges = jest.fn();

    const simpleChanges = {};

    boundary.ngOnChanges(simpleChanges);

    expect(boundary.config$.nextChanges).toBeCalledWith(simpleChanges);
  });
});


describe('ngOnInit', () => {
  it('should initializes monitoring', () => {
    setup();

    boundary._initMonitoring = jest.fn();

    boundary.ngOnInit();

    expect(boundary._initMonitoring).toBeCalled();
  });
});


describe('ngOnDestroy', () => {
  it('should unregisters boundary and destroy monitoring', () => {
    const registerBoundary = jest.fn();
    const unregisterBoundary = jest.fn();

    setup({ rootContainer: { registerBoundary, unregisterBoundary } });

    boundary._destroyMonitoring = jest.fn();

    boundary.ngOnDestroy();

    expect(unregisterBoundary).toBeCalledWith(boundary);
    expect(boundary._destroyed$.isStopped).toBe(true);
    expect(boundary._destroyMonitoring).toBeCalled();
  });
});


describe('beforeRefresh', () => {
  it('should clears boundary instance cached when fastUpdate is false', () => {
    setup();

    const boundaryCached = {} as NgxStickyBoundary;

    boundary._boundary = boundaryCached;

    boundary.beforeRefresh(true);

    expect(boundary._boundary).toBe(boundaryCached);

    boundary.beforeRefresh(false);

    expect(boundary._boundary).toBe(null);
  });
});


describe('getBoundary', () => {
  it('should returns boundary instance cached', () => {
    setup();

    const boundaryCached = {} as NgxStickyBoundary;

    boundary._computeBoundary = jest.fn(() => boundaryCached);

    expect(boundary.getBoundary()).toBe(boundaryCached);
    expect(boundary.getBoundary()).toBe(boundaryCached);
    expect(boundary._computeBoundary).toBeCalledTimes(1);
  });
});


describe('_computeBoundary', () => {
  it('should returns boundary instance', () => {
    setup({
      win: { getComputedStyle: (element: HTMLElement) => element.style },
    });

    boundary.config$.nextKeyValue('unstacked', true);

    elementRef.nativeElement.offsetHeight = 50;
    elementRef.nativeElement.offsetWidth = 20;
    elementRef.nativeElement.offsetTop = 10;
    elementRef.nativeElement.offsetLeft = 5;
    elementRef.nativeElement.style = {
      paddingTop: 10,
      paddingBottom: 10,
    };

    expect(boundary._computeBoundary()).toEqual({
      height: 30,
      width: 20,
      top: 20,
      left: 5,
      unstacked: true,
    });
  });
});


// describe('_createMonitoringObservable', () => {
//   it('should returns observable which emit when config change', done => {
//     setup();

//     const monitoringSubscriber = jest.fn();
//     const monitoring$ = boundary._createMonitoringObservable();

//     monitoring$.subscribe(monitoringSubscriber);

//     boundary.config$.nextKeyValue('unstacked', !boundary.config.unstacked);

//     animationFrameScheduler.schedule(() => {
//       expect(monitoringSubscriber).toBeCalled();
//       done();
//     });
//   });
// });


describe('_destroyMonitoring', () => {
  it('shoud unsubscribe monitoring', () => {
    setup();

    const unsubscribe = jest.fn() as Subscription['unsubscribe'];

    boundary._monitoring = { unsubscribe } as Subscription;

    boundary._destroyMonitoring();

    expect(boundary._monitoring).toBe(null);
    expect(unsubscribe).toBeCalled();
  });
});


describe('_initMonitoring', () => {
  it('should do nothing when window is null', () => {
    setup({ win: null });

    boundary._initMonitoring();

    expect(boundary._monitoring).toBeFalsy();
  });

  it('should do nothing when monitoring is alreasy initialized', () => {
    setup({ win: {} });

    const monitoring = {} as Subscription;

    boundary._monitoring = monitoring;
    boundary._createMonitoringObservable = jest.fn();

    boundary._initMonitoring();

    expect(boundary._monitoring).toBe(monitoring);
    expect(boundary._createMonitoringObservable).not.toBeCalled();
  });

  it('should initializes monitoring outside zone', () => {
    const runOutsideAngular = jest.fn((fn: (...args: any[]) => any) => fn());
    const monitoring$ = new Subject<boolean>();

    setup({ ngZone: { runOutsideAngular }, win: {} });

    boundary._createMonitoringObservable = jest.fn(() => monitoring$);
    boundary.updateStickies = jest.fn();

    boundary._initMonitoring();

    expect(boundary._monitoring).not.toBe(null);
    expect(runOutsideAngular).toBeCalled();
    expect(boundary.updateStickies).not.toBeCalled();

    monitoring$.next(true);

    boundary._destroyed$.next();
    boundary._destroyed$.complete();

    monitoring$.next(false);

    expect(boundary.updateStickies).toBeCalledTimes(1);
  });
});
