import { NgxStickyBaseContainerController } from '../../src/lib/sticky-base-container.controller';
import { NgxStickyEngine } from '../../src/lib/sticky-engine';
import {
  NgxIntersection,
  NgxIntersectionComputation,
  NgxIntersectionController,
  NgxIntersectionSnap,
  NgxSticky,
  NgxStickyBoundaryController,
  NgxStickyComputation,
  NgxStickyContainer,
  NgxStickyContainerController,
  NgxStickyController,
  NgxStickySnap,
} from '../../src/lib/sticky.types';
import { addEntry, deleteEntry } from '../../src/lib/utils/collections';


jest.mock('../../src/lib/utils/collections', () => ({
  addEntry: jest.fn(),
  deleteEntry: jest.fn(),
}));


class NgxStickyEngineMock extends NgxStickyEngine {
  override getStickedOffset = jest.fn();
  override snapIntersection = jest.fn();
  override snapSticky = jest.fn();
  override determineIntersectionState = jest.fn();
  override determineStickyState = jest.fn();
}


class NgxStickyTestContainerController extends NgxStickyBaseContainerController {
  override containerParent?: NgxStickyContainerController;
  override stickyEngine = new NgxStickyEngineMock();
  override disabled = false;
  override beforeRefresh = jest.fn();
  override createScrollPlan = jest.fn();
  override disableStickies = jest.fn();
  override enableStickies = jest.fn();
  override getContainer = jest.fn<NgxStickyContainer, []>(() => null!);
  override getViewportHeight = jest.fn(() => 0);
  override getViewportLeft = jest.fn(() => 0);
  override getViewportTop = jest.fn(() => 0);
  override scrollToTop = jest.fn();
  override _computeContainer = jest.fn();
}


beforeEach(() => {
  jest.clearAllMocks();
});


describe('disableAllStickies', () => {
  it('should disable stickies in each container', () => {
    const container = new NgxStickyTestContainerController();

    container.containers.push(
      new NgxStickyTestContainerController(),
      new NgxStickyTestContainerController(),
    );

    container.disableAllStickies();

    expect(container.disableStickies).toBeCalled();
    expect(container.containers[0].disableStickies).toBeCalled();
    expect(container.containers[1].disableStickies).toBeCalled();
  });
});


describe('enableAllStickies', () => {
  it('should enable stickies in each container', () => {
    const container = new NgxStickyTestContainerController();

    container.containers.push(
      new NgxStickyTestContainerController(),
      new NgxStickyTestContainerController(),
    );

    container.enableAllStickies();

    expect(container.enableStickies).toBeCalled();
    expect(container.enableStickies).toBeCalled();
    expect(container.containers[0].enableStickies).toBeCalled();
    expect(container.containers[1].enableStickies).toBeCalled();
  });
});


describe('getStickedOffset', () => {
  it('should use sticky engine to get sticked offset', () => {
    const containerInstance = {} as NgxStickyContainer;
    const viewportHeight = 200;
    const stickedOffset = 11;
    const stickies: NgxSticky[] = [ {} as NgxSticky, {} as NgxSticky ];
    const container = new NgxStickyTestContainerController();

    container.getContainer.mockImplementation(() => containerInstance);
    container.getViewportHeight.mockImplementation(() => viewportHeight);
    container.stickyEngine.getStickedOffset.mockImplementation(() => stickedOffset);

    container.stickies.push(
      { getSticky: jest.fn(() => stickies[0]) as NgxStickyController['getSticky'] } as NgxStickyController,
      { getSticky: jest.fn(() => stickies[1]) as NgxStickyController['getSticky'] } as NgxStickyController,
    );

    expect(container.getStickedOffset('top', 42)).toBe(11);
    expect(container.stickyEngine.getStickedOffset).toBeCalledWith(
      containerInstance,
      stickies,
      'top',
      viewportHeight,
      42,
    );
  });
});


describe('fixViewportTop', () => {
  it('should fix given viewport top with getStickedOffset', () => {
    const container = new NgxStickyTestContainerController();

    container.containerParent = {} as NgxStickyContainerController;
    container.getContainer.mockImplementation(() => ({ top: 10 }) as NgxStickyContainer);
    container.getStickedOffset = () => 15;

    expect(container.fixViewportTop(50, 5)).toBe(50 - 5 - 15 - 10);
  });
});


describe('registerContainer', () => {
  it('should register given container', () => {
    const container = new NgxStickyTestContainerController();
    const child = {} as NgxStickyTestContainerController;

    container.registerContainer(child);

    expect(addEntry).toBeCalledTimes(1);
    expect(addEntry).toBeCalledWith(container.containers, child);
  });
});


describe('registerBoundary', () => {
  it('should register given boundary', () => {
    const container = new NgxStickyTestContainerController();
    const boundary = {} as NgxStickyBoundaryController;

    container.registerBoundary(boundary);

    expect(addEntry).toBeCalledTimes(1);
    expect(addEntry).toBeCalledWith(container.containers, boundary);
  });
});


describe('registerIntersection', () => {
  beforeAll(() => (addEntry as jest.Mock).mockImplementation(() => 0));
  afterAll(() => (addEntry as jest.Mock).mockClear());

  it('should register given intersection', () => {
    const container = new NgxStickyTestContainerController();
    const intersection = {} as NgxIntersectionController;

    container._intersectionSnaps[0] = {} as NgxIntersectionSnap;
    container._intersectionComputations[0] = {} as NgxIntersectionComputation;

    container.registerIntersection(intersection);

    expect(addEntry).toBeCalledTimes(1);
    expect(addEntry).toBeCalledWith(container.intersections, intersection);
    expect(container._intersectionSnaps[0]).toBe(null);
    expect(container._intersectionComputations[0]).toBe(null);
  });
});


describe('registerSticky', () => {
  beforeAll(() => (addEntry as jest.Mock).mockImplementation(() => 0));
  afterAll(() => (addEntry as jest.Mock).mockClear());

  it('should register given sticky', () => {
    const container = new NgxStickyTestContainerController();
    const sticky = {} as NgxStickyController;

    container._stickySnaps[0] = {} as NgxStickySnap;
    container._stickyComputations[0] = {} as NgxStickyComputation;

    container.registerSticky(sticky);

    expect(addEntry).toBeCalledTimes(1);
    expect(addEntry).toBeCalledWith(container.stickies, sticky);
    expect(container._stickySnaps[0]).toBe(null);
    expect(container._stickyComputations[0]).toBe(null);
  });
});


describe('updateAllStickies', () => {
  it('should update stickies in each container', () => {
    const container = new NgxStickyTestContainerController();

    container.containers.push(
      new NgxStickyTestContainerController(),
      new NgxStickyTestContainerController(),
    );

    container.updateStickies = jest.fn();
    container.containers[0].updateStickies = jest.fn();
    container.containers[1].updateStickies = jest.fn();

    container.updateAllStickies();

    expect(container.updateStickies).toBeCalled();
    expect(container.containers[0].updateStickies).toBeCalled();
    expect(container.containers[1].updateStickies).toBeCalled();
  });
});


describe('updateStickies', () => {
  it('should refresh boundaries', () => {
    const containerInstance = { top: 0 } as NgxStickyContainer;
    const viewportHeight = 20;
    const viewportTop = 50;
    const container = new NgxStickyTestContainerController();

    container.getContainer.mockImplementation(() => containerInstance);
    container.getViewportHeight.mockImplementation(() => viewportHeight);
    container.getViewportTop.mockImplementation(() => viewportTop);

    container.boundaries.push(
      { beforeRefresh: jest.fn() as NgxStickyBoundaryController['beforeRefresh'] } as NgxStickyBoundaryController,
      { beforeRefresh: jest.fn() as NgxStickyBoundaryController['beforeRefresh'] } as NgxStickyBoundaryController,
    );

    container.updateStickies(false);

    expect(container.boundaries[0].beforeRefresh).toBeCalled();
    expect(container.boundaries[1].beforeRefresh).toBeCalled();
  });

  it('should refresh stickies', () => {
    const containerInstance = { top: 0 } as NgxStickyContainer;
    const viewportHeight = 20;
    const viewportTop = 50;
    const stickies: NgxSticky[] = [ {} as NgxSticky, {} as NgxSticky ];
    const computation = {};
    const snap = {};
    const container = new NgxStickyTestContainerController();

    container.getContainer.mockImplementation(() => containerInstance);
    container.getViewportHeight.mockImplementation(() => viewportHeight);
    container.getViewportTop.mockImplementation(() => viewportTop);
    container.stickyEngine.determineStickyState.mockImplementation(() => computation);
    container.stickyEngine.snapSticky.mockImplementation(() => snap);

    container.stickies.push(
      {
        beforeRefresh: jest.fn() as NgxStickyController['beforeRefresh'],
        getSticky: () => stickies[0],
        refresh: jest.fn() as NgxStickyController['refresh'],
      } as NgxStickyController,
      {
        beforeRefresh: jest.fn() as NgxStickyController['beforeRefresh'],
        getSticky: () => stickies[1],
        refresh: jest.fn() as NgxStickyController['refresh'],
      } as NgxStickyController,
    );

    container.updateStickies(false);

    expect(container.beforeRefresh).toBeCalledTimes(1);
    expect(container.stickies[0].beforeRefresh).toBeCalledTimes(1);
    expect(container.stickies[1].beforeRefresh).toBeCalledTimes(1);
    expect(container.stickyEngine.snapSticky).toBeCalledTimes(2);
    expect(container.stickyEngine.snapSticky).toHaveBeenNthCalledWith(
      1,
      containerInstance,
      stickies,
      stickies[0],
      viewportHeight,
    );
    expect(container.stickyEngine.snapSticky).toHaveBeenNthCalledWith(
      2,
      containerInstance,
      stickies,
      stickies[1],
      viewportHeight,
    );
    expect(container.stickyEngine.determineStickyState).toBeCalledTimes(2);
    expect(container.stickyEngine.determineStickyState).toBeCalledWith(snap, viewportTop);
    expect(container.stickies[0].refresh).toBeCalledWith(computation);
    expect(container.stickies[1].refresh).toBeCalledWith(computation);
  });

  it('should refresh intersections', () => {
    const containerInstance = { top: 0 } as NgxStickyContainer;
    const viewportHeight = 20;
    const viewportTop = 50;
    const stickies: NgxSticky[] = [ {} as NgxSticky, {} as NgxSticky ];
    const intersections: NgxIntersection[] = [ {} as NgxIntersection, {} as NgxIntersection ];
    const computation = {};
    const snap = {};
    const container = new NgxStickyTestContainerController();

    container.getContainer.mockImplementation(() => containerInstance);
    container.getViewportHeight.mockImplementation(() => viewportHeight);
    container.getViewportTop.mockImplementation(() => viewportTop);
    container.stickyEngine.determineIntersectionState.mockImplementation(() => computation);
    container.stickyEngine.determineStickyState.mockImplementation(() => computation);
    container.stickyEngine.snapIntersection.mockImplementation(() => snap);
    container.stickyEngine.snapSticky.mockImplementation(() => snap);

    container.stickies.push(
      {
        beforeRefresh: jest.fn() as NgxStickyController['beforeRefresh'],
        getSticky: () => stickies[0],
        refresh: jest.fn() as NgxStickyController['refresh'],
      } as NgxStickyController,
      {
        beforeRefresh: jest.fn() as NgxStickyController['beforeRefresh'],
        getSticky: () => stickies[1],
        refresh: jest.fn() as NgxStickyController['refresh'],
      } as NgxStickyController,
    );

    container.intersections.push(
      {
        beforeRefresh: jest.fn() as NgxIntersectionController['beforeRefresh'],
        getIntersection: () => intersections[0],
        refresh: jest.fn() as NgxIntersectionController['refresh'],
      } as NgxIntersectionController,
      {
        beforeRefresh: jest.fn() as NgxIntersectionController['beforeRefresh'],
        getIntersection: () => intersections[1],
        refresh: jest.fn() as NgxIntersectionController['refresh'],
      } as NgxIntersectionController,
    );

    container.updateStickies(false);

    expect(container.beforeRefresh).toBeCalledTimes(1);
    expect(container.intersections[0].beforeRefresh).toBeCalledTimes(1);
    expect(container.intersections[1].beforeRefresh).toBeCalledTimes(1);
    expect(container.stickyEngine.snapIntersection).toBeCalledTimes(2);
    expect(container.stickyEngine.snapIntersection).toHaveBeenNthCalledWith(
      1,
      containerInstance,
      stickies,
      intersections[0],
      viewportHeight,
    );
    expect(container.stickyEngine.snapSticky).toHaveBeenNthCalledWith(
      2,
      containerInstance,
      stickies,
      intersections[1],
      viewportHeight,
    );
    expect(container.stickyEngine.determineIntersectionState).toBeCalledTimes(2);
    expect(container.stickyEngine.determineIntersectionState).toBeCalledWith(snap, viewportTop);
    expect(container.intersections[0].refresh).toBeCalledWith(computation);
    expect(container.intersections[1].refresh).toBeCalledWith(computation);
  });
});


describe('unregisterContainer', () => {
  it('should unregister given container', () => {
    const container = new NgxStickyTestContainerController();
    const child = {} as NgxStickyTestContainerController;

    container.unregisterContainer(child);

    expect(deleteEntry).toBeCalledTimes(1);
    expect(deleteEntry).toBeCalledWith(container.containers, child);
  });
});


describe('unregisterBoundary', () => {
  it('should unregister given boundary', () => {
    const container = new NgxStickyTestContainerController();
    const boundary = {} as NgxStickyBoundaryController;

    container.unregisterBoundary(boundary);

    expect(deleteEntry).toBeCalledTimes(1);
    expect(deleteEntry).toBeCalledWith(container.containers, boundary);
  });
});


describe('unregisterIntersection', () => {
  beforeAll(() => (deleteEntry as jest.Mock).mockImplementation(() => 0));
  afterAll(() => (deleteEntry as jest.Mock).mockClear());

  it('should unregister given intersection', () => {
    const container = new NgxStickyTestContainerController();
    const intersection = {} as NgxIntersectionController;

    container._intersectionSnaps[0] = {} as NgxIntersectionSnap;
    container._intersectionComputations[0] = {} as NgxIntersectionComputation;

    container.unregisterIntersection(intersection);

    expect(deleteEntry).toBeCalledTimes(1);
    expect(deleteEntry).toBeCalledWith(container.intersections, intersection);
    expect(container._intersectionSnaps[0]).toBe(null);
    expect(container._intersectionComputations[0]).toBe(null);
  });
});


describe('unregisterSticky', () => {
  beforeAll(() => (deleteEntry as jest.Mock).mockImplementation(() => 0));
  afterAll(() => (deleteEntry as jest.Mock).mockClear());

  it('should unregister given sticky', () => {
    const container = new NgxStickyTestContainerController();
    const sticky = {} as NgxStickyController;

    container._stickySnaps[0] = {} as NgxStickySnap;
    container._stickyComputations[0] = {} as NgxStickyComputation;

    container.unregisterSticky(sticky);

    expect(deleteEntry).toBeCalledTimes(1);
    expect(deleteEntry).toBeCalledWith(container.stickies, sticky);
    expect(container._stickySnaps[0]).toBe(null);
    expect(container._stickyComputations[0]).toBe(null);
  });
});
