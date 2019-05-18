import { ElementRef, NgZone, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subject, Subscription } from 'rxjs';

import { NgxStickyRootContainerController } from '../../src/lib/sticky-root-container.controller';
import { NgxStickyDirective, NgxStickyElementStyle, NgxStickyGhostStyle } from '../../src/lib/sticky.directive';
import {
  NgxSticky,
  NgxStickyBoundaryController,
  NgxStickyComputation,
  NgxStickyContainerController,
} from '../../src/lib/sticky.types';


class RendererMock extends Renderer2 {
  data: { [key: string]: any; } = {}; // tslint:disable-line: no-any
  destroy = jest.fn();
  createElement = jest.fn();
  createComment = jest.fn();
  createText = jest.fn();
  appendChild = jest.fn();
  insertBefore = jest.fn();
  removeChild = jest.fn();
  selectRootElement = jest.fn();
  parentNode = jest.fn();
  nextSibling = jest.fn();
  setAttribute = jest.fn();
  removeAttribute = jest.fn();
  addClass = jest.fn();
  removeClass = jest.fn();
  setStyle = jest.fn();
  removeStyle = jest.fn();
  setProperty = jest.fn();
  setValue = jest.fn();
  listen = jest.fn();
}


let sticky: NgxStickyDirective;
let rootContainer: NgxStickyRootContainerController;
let stickyBoundary: NgxStickyBoundaryController;
let stickyContainer: NgxStickyContainerController;
let stickyParent: NgxStickyDirective;
let elementRef: ElementRef;
let renderer: RendererMock;
let ngZone: NgZone;
let win: Window;

// tslint:disable-next-line: no-any
const setup = (overrides: Record<string, any> = {}) => {
  rootContainer = 'rootContainer' in overrides
    ? overrides.rootContainer
    : TestBed.get(NgxStickyRootContainerController);
  stickyContainer = 'stickyContainer' in overrides
    ? overrides.stickyContainer
    : null;
  stickyBoundary = 'stickyBoundary' in overrides
    ? overrides.stickyBoundary
    : null;
  stickyParent = 'stickyParent' in overrides
    ? overrides.stickyParent
    : null;
  elementRef = 'elementRef' in overrides
    ? overrides.elementRef
    : { nativeElement: {} };
  renderer = 'renderer' in overrides
    ? overrides.renderer
    : new RendererMock();
  ngZone = 'ngZone' in overrides
    ? overrides.ngZone
    : {
      run: jest.fn(),
      runOutsideAngular: jest.fn(),
    } as {} as NgZone;
  win = 'win' in overrides
    ? overrides.win
    : null;

  sticky = new NgxStickyDirective(
    rootContainer,
    stickyContainer,
    stickyBoundary,
    stickyParent,
    elementRef,
    renderer,
    ngZone,
    win,
  );
};


beforeEach(() => {
  rootContainer = null;
  stickyContainer = null;
  stickyBoundary = null;
  stickyParent = null;
  elementRef = null;
  renderer = null;
  ngZone = null;
  win = null;
});


describe('cssClassSticky', () => {
  it('should returns true when sticky classes is true and has state', () => {
    setup();

    sticky.config$.nextKeyValue('classes', true);
    sticky._stickyState = 'sticked';

    expect(sticky.cssClassSticky).toBe(true);
  });
});


describe('cssClassStickyNormal', () => {
  it('should returns true when sticky classes is true and state is "normal"', () => {
    setup();

    sticky.config$.nextKeyValue('classes', true);
    sticky._stickyState = 'normal';

    expect(sticky.cssClassStickyNormal).toBe(true);
  });
});


describe('cssClassStickySticked', () => {
  it('should returns true when sticky classes is true and state is "sticked"', () => {
    setup();

    sticky.config$.nextKeyValue('classes', true);
    sticky._stickyState = 'sticked';

    expect(sticky.cssClassStickySticked).toBe(true);
  });
});


describe('cssClassStickyStucked', () => {
  it('should returns true when sticky classes is true and state is "stucked"', () => {
    setup();

    sticky.config$.nextKeyValue('classes', true);
    sticky._stickyState = 'stucked';

    expect(sticky.cssClassStickyStucked).toBe(true);
  });
});


describe('constructor', () => {
  it('should use root container as default container', () => {
    const registerSticky = jest.fn();

    setup({ rootContainer: { registerSticky } });

    expect(sticky.container).toBe(rootContainer);
    expect(registerSticky).toBeCalledWith(sticky);
  });

  it('should use sticky container when is given', () => {
    const registerSticky = jest.fn();

    setup({ stickyContainer: { registerSticky } });

    expect(sticky.container).toBe(stickyContainer);
    expect(registerSticky).toBeCalledWith(sticky);
  });

  it('should use boundary when is in same container', () => {
    const container = { registerSticky: jest.fn() };

    setup({ stickyContainer: container, stickyBoundary: {} });

    expect(sticky.boundary).not.toBe(stickyBoundary);

    setup({ stickyContainer: container, stickyBoundary: { container } });

    expect(sticky.boundary).toBe(stickyBoundary);
  });

  it('should not register sticky when it has sticky parent', () => {
    const registerSticky = jest.fn();

    setup({ stickyContainer: { registerSticky }, stickyParent: {} });

    expect(registerSticky).not.toBeCalledWith(sticky);
  });
});


describe('boundary', () => {
  it('should returns sticky boundary', () => {
    const container = { registerSticky: jest.fn() };

    setup({ stickyContainer: container, stickyBoundary: { container } });

    expect(sticky.boundary).toBe(stickyBoundary);
  });
});


describe('container', () => {
  it('should returns sticky container', () => {
    setup({ stickyContainer: { registerSticky: jest.fn() } });

    expect(sticky.container).toBe(stickyContainer);
  });
});


describe('config', () => {
  it('should returns config', () => {
    setup();

    expect(sticky.config).toBe(sticky.config$.getValue());
  });
});


describe('disabled', () => {
  it('should returns config disabled', () => {
    setup();

    expect(sticky.disabled).toBe(sticky.config.disabled);
  });
});


describe('state', () => {
  it('should returns sticky state', () => {
    setup();

    sticky._stickyState = 'sticked';

    expect(sticky.state).toBe('sticked');
  });
});


describe('ngOnChanges', () => {
  it('should apply changes to boundary config', () => {
    setup();

    sticky.config$.nextChanges = jest.fn();

    const simpleChanges = {};

    sticky.ngOnChanges(simpleChanges);

    expect(sticky.config$.nextChanges).toBeCalledWith(simpleChanges);
  });
});


describe('ngAfterViewInit', () => {
  it('should initializes monitoring', () => {
    setup();

    sticky._initMonitoring = jest.fn();

    sticky.ngAfterViewInit();

    expect(sticky._initMonitoring).toBeCalled();
  });

  it('should not initializes monitoring when sticky has parent', () => {
    setup({ stickyParent: {} });

    sticky._initMonitoring = jest.fn();

    sticky.ngAfterViewInit();

    expect(sticky._initMonitoring).not.toBeCalled();
  });
});


describe('ngOnDestroy', () => {
  it('should unregisters sticky and destroy monitoring', () => {
    const registerSticky = jest.fn();
    const unregisterSticky = jest.fn();

    setup({ rootContainer: { registerSticky, unregisterSticky } });

    sticky._destroyMonitoring = jest.fn();

    sticky.ngOnDestroy();

    expect(unregisterSticky).toBeCalledWith(sticky);
    expect(sticky._destroyed$.isStopped).toBe(true);
    expect(sticky._destroyMonitoring).toBeCalled();
  });
});


describe('beforeRefresh', () => {
  it('should clears sticky instance cached when fastUpdate is false', () => {
    setup();

    const stickyCached = {} as NgxSticky;

    sticky._sticky = stickyCached;

    sticky.beforeRefresh(true);

    expect(sticky._sticky).toBe(stickyCached);

    sticky.beforeRefresh(false);

    expect(sticky._sticky).toBe(null);
  });
});


describe('disableSticky', () => {
  it('should set config disabled to true', () => {
    setup();

    sticky.disableSticky();

    expect(sticky.config.disabled).toBe(true);
  });
});


describe('enableSticky', () => {
  it('should set config disabled to false', () => {
    setup();

    sticky.enableSticky();

    expect(sticky.config.disabled).toBe(false);
  });
});


describe('getSticky', () => {
  it('should returns sticky instance cached', () => {
    setup();

    const stickyCached = {} as NgxSticky;

    sticky._computeSticky = jest.fn(() => stickyCached);

    expect(sticky.getSticky()).toBe(stickyCached);
    expect(sticky.getSticky()).toBe(stickyCached);
    expect(sticky._computeSticky).toBeCalledTimes(1);
  });
});


describe('refresh', () => {
  it('should emit refresh sticky call', () => {
    setup();

    const computation = {} as NgxStickyComputation;

    sticky._refresh$.next = jest.fn();

    sticky.refresh(computation);

    expect(sticky._refresh$.next).toBeCalledWith(computation);
  });
});


describe('_computeSticky', () => {
  it('should returns sticky instance', () => {
    setup({
      win: {
        document: { body: { scrollHeight: 2000 }, documentElement: {} },
      },
    });

    elementRef.nativeElement.offsetTop = 60;
    elementRef.nativeElement.offsetHeight = 20;
    elementRef.nativeElement.offsetLeft = 5;
    elementRef.nativeElement.offsetWidth = 10;

    sticky._refreshStickyElement = jest.fn();

    sticky.config$.next({
      disabled: false,
      height: 10,
      spot: {
        offsetTop: 100,
        offsetHeight: 20,
        offsetLeft: 0,
        offsetWidth: 10,
      } as HTMLElement,
      spotHeight: 11,
    });

    expect(sticky._computeSticky()).toEqual({
      disabled: false,
      boundary: null,
      direction: 'down',
      position: 'top',
      top: 60,
      height: 10,
      spot: { top: 100, height: 11, left: 0, width: 10 },
    });
    expect(sticky._refreshStickyElement).toBeCalledTimes(2);
    expect(sticky._refreshStickyElement).toHaveBeenNthCalledWith(1, null);
    expect(sticky._refreshStickyElement).toHaveBeenNthCalledWith(2, 'normal');
  });
});


// describe('_createMonitoringObservable', () => {
//   it('should returns observable which emit when config change', done => {
//     setup();

//     elementRef.nativeElement = null;

//     const monitoringSubscriber = jest.fn();
//     const monitoring$ = sticky._createMonitoringObservable();

//     monitoring$.subscribe(monitoringSubscriber);

//     sticky._config.nextKeyValue('disabled', !sticky.config.disabled);

//     animationFrameScheduler.schedule(() => {
//       expect(monitoringSubscriber).toBeCalled();
//       done();
//     });
//   });
// });


describe('_destroyMonitoring', () => {
  it('shoud unsubscribe monitoring', () => {
    setup();

    const unsubscribe = jest.fn();

    sticky._monitoring = { unsubscribe } as {} as Subscription;

    sticky._destroyMonitoring();

    expect(sticky._monitoring).toBe(null);
    expect(unsubscribe).toBeCalled();
  });
});


describe('_getStickyElementStyle', () => {
  let ghost: HTMLElement;

  beforeEach(() => {
    ghost = {
      offsetTop: 60,
      offsetHeight: 20,
      offsetWidth: 10,
      offsetLeft: 5,
      style: {},
    } as HTMLElement;

    setup({
      win: {
        document: {
          body: {
            style: {},
          },
          documentElement: {
            offsetTop: 0,
            offsetLeft: 0,
          },
        },
        getComputedStyle: (_element: HTMLElement) => _element.style,
      },
    });

    sticky._spacerGenerated = ghost;
  });

  describe('state null', () => {
    it('should returns null when window or state is null', () => {
      setup({ win: null });

      expect(sticky._getStickyElementStyle(null)).toBe(null);

      setup({ win: {} });

      expect(sticky._getStickyElementStyle(null)).toBe(null);
    });
  });

  describe('state normal', () => {
    it('should returns style base on ghost', () => {
      ghost.style.borderLeft = '1px';
      ghost.style.borderRight = '1px';
      ghost.style.paddingLeft = '2px';
      ghost.style.paddingRight = '2px';

      expect(sticky._getStickyElementStyle('normal')).toEqual({
        position: 'absolute',
        width: '4px',
        top: '60px',
        right: '',
        bottom: '',
        left: '5px',
        float: '',
        margin: '0px',
      });
    });

    it('should adjust style when offset parent is the root element', () => {
      Object.assign(sticky, { _container: { getViewportTop: () => 10 } });

      Object.assign(ghost, { offsetParent: win.document.body });

      Object.assign(win.document.documentElement, {
        offsetTop: 10,
        offsetLeft: 5,
      });

      expect(sticky._getStickyElementStyle('normal')).toEqual({
        position: 'absolute',
        width: '10px',
        top: '60px',
        right: '',
        bottom: '',
        left: '10px',
        float: '',
        margin: '0px',
      });
    });
  });

  describe('state sticked', () => {
    it('should returns style position fixed when container is root', () => {
      const computation = {
        state: 'sticked',
        offsetSticked: 5,
        offsetStucked: 5,
        snap: {
          stickyComputed: {
            directionDown: true,
            positionBottom: false,
          },
        },
      } as NgxStickyComputation;

      Object.assign(win.document.documentElement, {
        offsetLeft: 5,
      });

      expect(sticky._getStickyElementStyle(computation.state, computation)).toEqual({
        position: 'fixed',
        top: '10px',
        bottom: '',
        left: '10px',
      });
    });

    it('should adjust style when container is not root and offset parent is root', () => {
      Object.assign(sticky, { _container: { getViewportTop: () => 10 } });

      Object.assign(ghost, { offsetParent: win.document.body });

      Object.assign(win.document.documentElement, {
        offsetTop: 5,
        offsetLeft: 5,
      });

      const computation = {
        state: 'sticked',
        offsetSticked: 5,
        offsetStucked: 5,
        snap: {
          container: {
            top: 30,
          },
          stickyComputed: {
            directionDown: true,
            positionBottom: false,
          },
        },
      } as NgxStickyComputation;

      expect(sticky._getStickyElementStyle(computation.state, computation)).toEqual({
        position: 'absolute',
        top: '45px',
        bottom: '',
        left: '10px',
      });
    });

    it('should adjust style when container is not root and offset parent is not root', () => {
      Object.assign(sticky, { _container: { getViewportTop: () => 10 } });

      Object.assign(ghost, {
        offsetParent: {
          offsetTop: 20,
          style: {},
        },
      });

      Object.assign(win.document.documentElement, {
        offsetTop: 5,
        offsetLeft: 5,
      });

      const computation = {
        state: 'sticked',
        offsetSticked: 5,
        offsetStucked: 5,
        snap: {
          container: {
            top: 30,
          },
          stickyComputed: {
            directionDown: true,
            positionBottom: false,
          },
        },
        viewportTop: 42,
      } as NgxStickyComputation;

      expect(sticky._getStickyElementStyle(computation.state, computation)).toEqual({
        position: 'absolute',
        top: '32px',
        bottom: '',
        left: '5px',
      });
    });
  });

  describe('state stucked', () => {
    it('should adjust style when offset parent is root', () => {
      Object.assign(ghost, { offsetParent: win.document.body });

      Object.assign(sticky, { _container: { getViewportTop: () => 10 } });

      Object.assign(win.document.documentElement, {
        offsetTop: 5,
        offsetLeft: 5,
      });

      const computation = {
        state: 'stucked',
        offsetSticked: 5,
        offsetStucked: 5,
        snap: {
          container: {
            top: 0,
            height: 50,
          },
          stickyComputed: {
            boundary: {
              top: 0,
              height: 50,
              offsetBottom: 10,
              offsetTop: 10,
            },
            height: 20,
            directionDown: true,
            positionBottom: false,
          },
        },
        viewportTop: 42,
      } as NgxStickyComputation;

      expect(sticky._getStickyElementStyle(computation.state, computation)).toEqual({
        position: 'absolute',
        top: '40px',
        bottom: '',
        left: '10px',
      });
    });

    it('should adjust style when offset parent is not root', () => {
      Object.assign(ghost, {
        offsetParent: {
          offsetTop: 0,
          style: {},
        },
      });

      Object.assign(win.document.documentElement, {
        offsetTop: 5,
        offsetLeft: 5,
      });

      const computation = {
        state: 'stucked',
        offsetSticked: 5,
        offsetStucked: 5,
        snap: {
          container: {
            top: 0,
            height: 50,
          },
          stickyComputed: {
            boundary: {
              top: 0,
              height: 50,
              offsetBottom: 10,
              offsetTop: 10,
            },
            height: 20,
            directionDown: true,
            positionBottom: false,
          },
        },
        viewportTop: 42,
      } as NgxStickyComputation;

      expect(sticky._getStickyElementStyle(computation.state, computation)).toEqual({
        position: 'absolute',
        top: '45px',
        bottom: '',
        left: '5px',
      });
    });
  });
});


describe('_getStickyGhostStyle', () => {
  it('should returns null when window is null or ghost is null', () => {
    setup({ win: null });

    expect(sticky._getStickyGhostStyle()).toBe(null);

    setup({ win: {} });

    expect(sticky._getStickyGhostStyle()).toBe(null);
  });

  it('should returns ghost style base on sticky element', () => {
    setup({
      win: {
        getComputedStyle: (_element: HTMLElement) => _element.style,
      },
    });

    sticky._spacerGenerated = {} as HTMLElement;

    elementRef.nativeElement.offsetHeight = 50;
    elementRef.nativeElement.style = {
      boxSizing: 'inherit',
      borderTopWidth: '2px',
      borderBottomWidth: '2px',
      paddingTop: '4px',
      paddingBottom: '4px',
      position: 'inherit',
    };

    expect(sticky._getStickyGhostStyle()).toEqual({
      borderBottom: undefined,
      borderLeft: undefined,
      borderRight: undefined,
      borderTop: undefined,
      bottom: undefined,
      boxSizing: 'inherit',
      cssFloat: undefined,
      height: '38px',
      left: undefined,
      marginBottom: undefined,
      marginLeft: undefined,
      marginRight: undefined,
      marginTop: undefined,
      paddingBottom: '4px',
      paddingLeft: undefined,
      paddingRight: undefined,
      paddingTop: '4px',
      position: 'inherit',
      right: undefined,
      top: undefined,
      width: undefined,
    });
  });
});


describe('_hideStickyGhost', () => {
  it('should do nothing when there is no spacer', () => {
    setup();

    sticky._hideStickyGhost();

    expect(renderer.setStyle).not.toBeCalled();
  });

  it('should hide spacer', () => {
    setup();

    sticky._spacerGenerated = {} as HTMLElement;

    sticky._hideStickyGhost();

    expect(renderer.setStyle).toBeCalledWith(sticky._spacerGenerated, 'display', 'none');
  });
});


describe('_initMonitoring', () => {
  it('should do nothing when window is null', () => {
    setup({ win: null });

    sticky._initMonitoring();

    expect(sticky._monitoring).toBeFalsy();
  });

  it('should do nothing when monitoring is alreasy initialized', () => {
    setup({ win: { document: { body: {}, documentElement: {} } } });

    const monitoring = {} as Subscription;

    sticky._monitoring = monitoring;
    sticky._createMonitoringObservable = jest.fn();

    sticky._initMonitoring();

    expect(sticky._monitoring).toBe(monitoring);
    expect(sticky._createMonitoringObservable).not.toBeCalled();
  });

  it('should initializes monitoring outside zone', () => {
    // tslint:disable-next-line: no-any
    const runOutsideAngular = jest.fn((fn: (...args: any[]) => any) => fn());
    const monitoring$ = new Subject<boolean>();

    setup({
      ngZone: { runOutsideAngular },
      win: {},
    });

    sticky._createMonitoringObservable = jest.fn(() => monitoring$);
    sticky._refreshSticky = jest.fn();
    sticky.update = jest.fn();

    sticky._initMonitoring();

    expect(sticky._monitoring).not.toBe(null);
    expect(runOutsideAngular).toBeCalled();
    expect(sticky._refreshSticky).not.toBeCalled();
    expect(sticky.update).not.toBeCalled();

    sticky._refresh$.next({} as NgxStickyComputation);
    monitoring$.next(true);

    sticky._destroyed$.next();
    sticky._destroyed$.complete();

    sticky._refresh$.next({} as NgxStickyComputation);
    monitoring$.next(false);

    expect(sticky._refreshSticky).toBeCalledTimes(1);
    expect(sticky.update).toBeCalledTimes(1);
  });
});


describe('_insertStickyGhostGenerated', () => {
  it('should generates spacer when sticky has no spacer', () => {
    setup();

    const parentElement = {} as HTMLElement;
    const ghost = {} as HTMLElement;

    elementRef.nativeElement.tagName = 'P';
    elementRef.nativeElement.parentElement = parentElement;
    renderer.createElement.mockImplementation(() => ghost);

    sticky._insertStickyGhostGenerated();

    expect(sticky._spacerGenerated).toBe(ghost);
    expect(renderer.createElement).toBeCalledWith('P');
    expect(renderer.insertBefore).toBeCalledWith(parentElement, ghost, elementRef.nativeElement);
  });
});


describe('_preventNestedStickyError', () => {
  it('should returns true when sticky has parent', () => {
    setup({ stickyParent: {} });

    expect(sticky._preventNestedStickyError()).toBe(true);
  });

  it('should returns false when sticky has not parent', () => {
    setup({ stickyParent: null });

    expect(sticky._preventNestedStickyError()).toBe(false);
  });
});


describe('_refreshSticky', () => {
  it('should emit state change in angular zone', () => {
    setup({
      ngZone: {
        run: jest.fn((fn: (...args: any[]) => any) => fn()), // tslint:disable-line: no-any
        runOutsideAngular: jest.fn((fn: (...args: any[]) => any) => fn()), // tslint:disable-line: no-any
      },
    });

    const nextState = jest.fn();

    sticky.stickyComputation.next = jest.fn();
    sticky.stickyState.next = nextState;
    sticky._refreshStickyElement = jest.fn();

    const computation = { state: 'sticked' } as NgxStickyComputation;

    sticky._refreshSticky(computation);

    expect(sticky._stickyComputation).toBe(computation);
    expect(sticky.stickyComputation.next).toBeCalledWith(computation);
    expect(sticky._stickyState).toBe(computation.state);
    expect(ngZone.run).toBeCalled();
    // expect(ngZone.run).toBeCalledBefore(nextState);
    expect(nextState).toBeCalledWith(computation.state);
  });
});


describe('_refreshStickyElement', () => {
  it('should do nothing when window is null', () => {
    setup({ win: null });

    sticky._hideStickyGhost = jest.fn();
    sticky._restoreStickyElementStyle = jest.fn();
    sticky._saveStickyElementStyle = jest.fn();
    sticky._showStickyGhost = jest.fn();

    sticky._refreshStickyElement(null);

    expect(sticky._hideStickyGhost).not.toBeCalled();
    expect(sticky._restoreStickyElementStyle).not.toBeCalled();
    expect(sticky._saveStickyElementStyle).not.toBeCalled();
    expect(sticky._showStickyGhost).not.toBeCalled();
  });

  it('should hide ghost and restore sticky element style when state is null', () => {
    setup({ win: {} });

    sticky._hideStickyGhost = jest.fn();
    sticky._restoreStickyElementStyle = jest.fn();

    sticky._refreshStickyElement(null);

    expect(sticky._stickyElementState).toBe(null);
    expect(sticky._hideStickyGhost).toBeCalled();
    expect(sticky._restoreStickyElementStyle).toBeCalled();
  });

  it('should save sticky element style and show ghost when state is not null', () => {
    setup({ win: {} });

    sticky._getStickyElementStyle = jest.fn(() => ({ top: '42px' }));
    sticky._saveStickyElementStyle = jest.fn();
    sticky._showStickyGhost = jest.fn();

    const computation = {} as NgxStickyComputation;

    sticky._refreshStickyElement('sticked', computation);

    expect(sticky._stickyElementState).toBe('sticked');
    expect(sticky._saveStickyElementStyle).toBeCalled();
    expect(sticky._showStickyGhost).toBeCalled();
    expect(sticky._getStickyElementStyle).toBeCalledWith('sticked', computation);
    expect(renderer.setStyle).toBeCalledWith(elementRef.nativeElement, 'top', '42px');
  });
});


describe('_refreshStickyGhost', () => {
  it('should refresh ghost style', () => {
    setup();

    const spacer = { style: { display: 'none' } } as HTMLElement;
    const ghostStyle = { top: '42px' } as NgxStickyGhostStyle;

    sticky.config$.nextKeyValue('spacer', spacer);
    sticky._getStickyGhostStyle = jest.fn(() => ghostStyle);

    sticky._refreshStickyGhost();

    expect(renderer.setStyle).toBeCalledWith(spacer, 'top', '42px');
  });
});


describe('_restoreStickyElementStyle', () => {
  it('should restore sticky element style', () => {
    setup();

    const elementOriginStyle = { cssFloat: 'left' } as NgxStickyElementStyle;

    sticky._elementOriginStyle = elementOriginStyle;

    sticky._restoreStickyElementStyle();

    expect(renderer.setStyle).toBeCalledWith(elementRef.nativeElement, 'cssFloat', 'left');
    expect(sticky._elementOriginStyle).toBe(null);
  });
});


describe('_saveStickyElementStyle', () => {
  it('should save sticky element style', () => {
    setup();

    elementRef.nativeElement.style = {};

    sticky._saveStickyElementStyle();

    expect(sticky._elementOriginStyle).toBeTruthy();
  });
});


describe('_showStickyGhost', () => {
  it('should generate spacer when sticky has no spacer', () => {
    setup();

    sticky._insertStickyGhostGenerated = jest.fn();
    sticky._refreshStickyGhost = jest.fn();

    sticky._showStickyGhost();

    expect(sticky._insertStickyGhostGenerated).toBeCalled();
    expect(sticky._refreshStickyGhost).toBeCalled();
  });

  it('should remove spacer generated when sticky has spacer', () => {
    setup();

    const spacer = { style: {} } as HTMLElement;
    const spacerGenerated = { remove: jest.fn() } as {} as HTMLElement;

    sticky._spacerGenerated = spacerGenerated;
    sticky.config$.nextKeyValue('spacer', spacer);

    sticky._showStickyGhost();

    expect(sticky._spacerGenerated).toBe(null);
    expect(spacerGenerated.remove).toBeCalled();
  });

  it('should show and refresh ghost when is hidden', () => {
    setup();

    const spacer = { style: { display: 'none' } } as HTMLElement;

    sticky.config$.nextKeyValue('spacer', spacer);
    sticky._refreshStickyGhost = jest.fn();

    sticky._showStickyGhost();

    expect(renderer.setStyle).toBeCalledWith(spacer, 'display', 'block');
    expect(sticky._refreshStickyGhost).toBeCalled();
  });
});
