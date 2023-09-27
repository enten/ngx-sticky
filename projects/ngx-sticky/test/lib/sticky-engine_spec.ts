import { NgxStickyEngine } from '../../src/lib/sticky-engine';
import { NgxIntersection, NgxIntersectionSnap, NgxSticky, NgxStickyDirection, NgxStickyPosition } from '../../src/lib/sticky.types';


const engine = new NgxStickyEngine();


describe('computeStickyBoundary', () => {
  it('should use container as default boundary', () => {
    expect(engine.computeStickyBoundary(
      { top: 0, height: 50, left: 0, width: 100, unstacked: true },
      null,
      { top: 15, height: 2 },
      true,
      null,
      10,
    )).toEqual({ top: 0, height: 50, left: 0, width: 100, unstacked: true, offsetTop: 0, offsetBottom: 0 });
  });

  it('should use given boundary', () => {
    expect(engine.computeStickyBoundary(
      { top: 0, height: 50, left: 0, width: 100, unstacked: false },
      { top: 10, height: 20, left: 0, width: 100, unstacked: false },
      { top: 15, height: 2 },
      true,
      null,
      10,
    )).toEqual({ top: 10, height: 20, left: 0, width: 100, unstacked: false, offsetTop: 0, offsetBottom: 0 });
  });

  it('should adjust boundary relative to spot', () => {
    const container = { top: 0, height: 50, left: 0, width: 100, unstacked: false };
    const boundary = { top: 10, height: 20, left: 0, width: 80, unstacked: false };

    expect(engine.computeStickyBoundary(
      container,
      boundary,
      { top: 15, height: 2 },
      true,
      { top: 30, height: 5 },
      10,
    )).toEqual({ top: 10, height: 12, left: 0, width: 80, unstacked: false, offsetTop: 0, offsetBottom: 0 });

    expect(engine.computeStickyBoundary(
      container,
      boundary,
      { top: 15, height: 2 },
      true,
      { top: 18, height: 5 },
      10,
    )).toEqual({ top: 0, height: 0, left: 0, width: 80, unstacked: false, offsetTop: 0, offsetBottom: 0 });

    expect(engine.computeStickyBoundary(
      container,
      boundary,
      { top: 15, height: 2 },
      false,
      { top: 0, height: 5 },
      10,
    )).toEqual({ top: 15, height: 15, left: 0, width: 80, unstacked: false, offsetTop: 0, offsetBottom: 0 });

    expect(engine.computeStickyBoundary(
      container,
      boundary,
      { top: 15, height: 2 },
      false,
      { top: 10, height: 5 },
      10,
    )).toEqual({ top: 0, height: 0, left: 0, width: 80, unstacked: false, offsetTop: 0, offsetBottom: 0 });
  });
});


describe('computeStickyStickedLine', () => {
  it('should compute sticked line relative to given params', () => {
    expect(engine.computeStickyStickedLine({ top: 10, height: 20 }, { top: 15, height: 2 }, false, true, 10))
      .toEqual({ top: 15, height: 15 });

    expect(engine.computeStickyStickedLine({ top: 10, height: 20 }, { top: 15, height: 2 }, false, false, 10))
      .toEqual({ top: 10, height: 5 });

    expect(engine.computeStickyStickedLine({ top: 10, height: 20 }, { top: 15, height: 2 }, true, true, 10))
      .toEqual({ top: 7, height: 13 });

    expect(engine.computeStickyStickedLine({ top: 10, height: 20 }, { top: 15, height: 2 }, true, false, 10))
      .toEqual({ top: 0, height: 5 });
  });
});


describe('computeStickySortPoint', () => {
  it('should compute sort point relative to given params', () => {
    expect(engine.computeStickySortPoint({ top: 10, height: 2 }, false, true, 20)).toBe(-10);
    expect(engine.computeStickySortPoint({ top: 10, height: 2 }, false, false, 20)).toBe(10);
    expect(engine.computeStickySortPoint({ top: 10, height: 2 }, true, true, 20)).toBe(8);
    expect(engine.computeStickySortPoint({ top: 10, height: 2 }, true, false, 20)).toBe(-8);
  });
});


describe('determineIntersectionState', () => {
  it('should returns state relative to viewport top', () => {
    const container = { top: 0, height: 50, left: 0, width: 100 };

    const boundaryComputed = {
      height: 50,
      left: 0,
      offsetBottom: 10,
      offsetTop: 0,
      top: 0,
      unstacked: false,
      width: 100,
    };

    const enterStickyComputed = {
      boundary: {
        top: 9,
        height: 2,
        left: 0,
        offsetTop: 0,
        offsetBottom: 0,
        unstacked: false,
        width: 100,
      },
      directionDown: true,
      disabled: false,
      height: 1,
      positionBottom: true,
      sortPoint: 0,
      sticked: { top: 0, height: 1 },
      top: 9,
    };

    const exitStickyComputed = {
      boundary: {
        top: 10,
        height: 1,
        left: 0,
        offsetTop: 0,
        offsetBottom: 0,
        unstacked: false,
        width: 100,
      },
      directionDown: true,
      disabled: false,
      height: 1,
      positionBottom: false,
      sortPoint: -10,
      sticked: { top: 10, height: 1 },
      top: 10,
    };

    const snap = {
      container,
      enter: {
        boundaries: { '0,50': boundaryComputed },
        container,
        stickies: [
          {
            boundary: boundaryComputed,
            directionDown: true,
            disabled: false,
            height: 2,
            left: 0,
            positionBottom: true,
            sortPoint: 2,
            sticked: { top: -2, height: 42 },
            top: 6,
            width: 100,
          },
          enterStickyComputed,
        ],
        sticky: {
          boundary: { top: 9, height: 2, left: 0, width: 100 },
          direction: 'down' as NgxStickyDirection,
          disabled: undefined,
          height: 1,
          position: 'bottom' as NgxStickyPosition,
          top: 9,
        },
        stickyComputed: enterStickyComputed,
        viewportHeight: 10,
      },
      exit: {
        boundaries: { '0,50': boundaryComputed },
        container,
        stickies: [
          {
            boundary: boundaryComputed,
            directionDown: true,
            disabled: false,
            height: 2,
            positionBottom: false,
            sortPoint: -2,
            sticked: { top: 2, height: 48 },
            top: 2,
          },
          {
            boundary: boundaryComputed,
            directionDown: true,
            disabled: false,
            height: 2,
            positionBottom: false,
            sortPoint: -8,
            sticked: { top: 8, height: 42 },
            top: 8,
          },
          exitStickyComputed,
        ],
        sticky: {
          boundary: { top: 10, height: 1, left: 0, width: 100 },
          direction: 'down' as NgxStickyDirection,
          disabled: undefined,
          height: 1,
          position: 'top' as NgxStickyPosition,
          top: 10,
        },
        stickyComputed: exitStickyComputed,
        viewportHeight: 10,
      },
      intersection: {
        disabled: undefined!,
        height: 2,
        thresholds: [ 0, 1 ],
        top: 10,
      },
      viewportHeight: 10,
    } as NgxIntersectionSnap;

    expect(engine.determineIntersectionState(snap, 0)).toEqual({
      snap,
      enter: engine.determineStickyState(snap.enter, 0),
      exit: engine.determineStickyState(snap.exit, 0),
      state: null,
      height: 0,
      intersecting: false,
      ratio: 0,
      viewportTop: 0,
    });

    expect(engine.determineIntersectionState(snap, 3)).toEqual({
      snap,
      enter: engine.determineStickyState(snap.enter, 3),
      exit: engine.determineStickyState(snap.exit, 3),
      state: 'enter',
      height: 1,
      intersecting: true,
      ratio: 0.5,
      viewportTop: 3,
    });

    expect(engine.determineIntersectionState(snap, 4)).toEqual({
      snap,
      enter: engine.determineStickyState(snap.enter, 4),
      exit: engine.determineStickyState(snap.exit, 4),
      state: 'entered',
      height: 2,
      intersecting: true,
      ratio: 1,
      viewportTop: 4,
    });

    expect(engine.determineIntersectionState(snap, 7)).toEqual({
      snap,
      enter: engine.determineStickyState(snap.enter, 7),
      exit: engine.determineStickyState(snap.exit, 7),
      state: 'exit',
      height: 1,
      intersecting: true,
      ratio: 0.5,
      viewportTop: 7,
    });

    expect(engine.determineIntersectionState(snap, 8)).toEqual({
      snap,
      enter: engine.determineStickyState(snap.enter, 8),
      exit: engine.determineStickyState(snap.exit, 8),
      state: 'exited',
      height: 0,
      intersecting: false,
      ratio: 0,
      viewportTop: 8,
    });
  });
});


describe('determineStickyState', () => {
  it('should returns state relative to viewport top', () => {
    const container = { top: 0, height: 50, left: 0, width: 100 };
    const sticky: NgxSticky = { top: 15, height: 2 };

    const boundaryComputed = {
      height: 50,
      left: 0,
      offsetBottom: 10,
      offsetTop: 0,
      top: 0,
      unstacked: false,
      width: 100,
    };

    const stickyComputed = {
      boundary: boundaryComputed,
      directionDown: true,
      disabled: false,
      height: 2,
      positionBottom: false,
      sortPoint: -15,
      sticked: { top: 15, height: 35 },
      top: 15,
    };

    const snap = {
      boundaries: { '0,50': boundaryComputed },
      container,
      stickies: [
        {
          boundary: boundaryComputed,
          directionDown: true,
          disabled: false,
          height: 2,
          positionBottom: false,
          sortPoint: -2,
          sticked: { top: 2, height: 48 },
          top: 2,
        },
        {
          boundary: boundaryComputed,
          directionDown: true,
          disabled: false,
          height: 2,
          positionBottom: false,
          sortPoint: -8,
          sticked: { top: 8, height: 42 },
          top: 8,
        },
        stickyComputed,
      ],
      sticky,
      stickyComputed,
      viewportHeight: 10,
    };

    expect(engine.determineStickyState(snap, 0)).toEqual({
      snap,
      state: 'normal',
      offsetSticked: 0,
      offsetStucked: 0,
      viewportTop: 0,
    });

    expect(engine.determineStickyState(snap, 15)).toEqual({
      snap,
      state: 'sticked',
      offsetSticked: 0,
      offsetStucked: 4,
      viewportTop: 15,
    });

    expect(engine.determineStickyState(snap, 48)).toEqual({
      snap,
      state: 'stucked',
      offsetSticked: 0,
      offsetStucked: 4,
      viewportTop: 48,
    });
  });
});


describe('getStickedOffset', () => {
  it('should returns sticked offset for given position', () => {
    const container = { top: 0, height: 50, left: 0, width: 100 };
    const stickies: NgxSticky[] = [
      { top: 2, height: 2 },
      { top: 4, height: 2, disabled: true },
      { top: 6, height: 2, position: 'bottom' },
      { top: 8, height: 5 },
      { top: 15, height: 2 },
      { top: 20, height: 2 },
    ];

    expect(engine.getStickedOffset(container, stickies, 'top', 10, 0)).toBe(0);
    expect(engine.getStickedOffset(container, stickies, 'top', 10, 5)).toBe(2);
    expect(engine.getStickedOffset(container, stickies, 'top', 10, 10)).toBe(9);
    expect(engine.getStickedOffset(container, stickies, 'top', 10, 20)).toBe(11);
    expect(engine.getStickedOffset(container, stickies, 'bottom', 10, 20)).toBe(2);
  });
});


describe('snapIntersection', () => {
  it('should snap given intersection', () => {
    const container = { top: 0, height: 50, left: 0, width: 100 };
    const intersection: NgxIntersection = { top: 10, height: 2 };
    const stickies: NgxSticky[] = [
      { top: 2, height: 2 },
      { top: 4, height: 2, disabled: true },
      { top: 6, height: 2, position: 'bottom' },
      { top: 8, height: 2 },
      { top: 15, height: 2 },
      { top: 20, height: 2 },
    ];

    const boundaryComputed = {
      height: 50,
      left: 0,
      offsetBottom: 10,
      offsetTop: 0,
      top: 0,
      unstacked: false,
      width: 100,
    };

    const enterStickyComputed = {
      boundary: {
        top: 9,
        height: 2,
        left: 0,
        width: 100,
        offsetTop: 0,
        offsetBottom: 0,
        unstacked: false,
      },
      directionDown: true,
      disabled: false,
      height: 1,
      positionBottom: true,
      sortPoint: 0,
      sticked: { top: 0, height: 1 },
      top: 9,
    };

    const exitStickyComputed = {
      boundary: {
        top: 10,
        height: 1,
        left: 0,
        width: 100,
        offsetTop: 0,
        offsetBottom: 0,
        unstacked: false,
      },
      directionDown: true,
      disabled: false,
      height: 1,
      positionBottom: false,
      sortPoint: -10,
      sticked: { top: 10, height: 1 },
      top: 10,
    };

    const snap = {
      container,
      enter: {
        boundaries: { '0,50': boundaryComputed },
        container,
        stickies: [
          {
            boundary: boundaryComputed,
            directionDown: true,
            disabled: false,
            height: 2,
            positionBottom: true,
            sortPoint: 2,
            sticked: { top: -2, height: 42 },
            top: 6,
          },
          enterStickyComputed,
        ],
        sticky: {
          boundary: { top: 9, height: 2, left: 0, width: 100 },
          direction: 'down',
          disabled: undefined,
          height: 1,
          position: 'bottom',
          top: 9,
        },
        stickyComputed: enterStickyComputed,
        viewportHeight: 10,
      },
      exit: {
        boundaries: { '0,50': boundaryComputed },
        container,
        stickies: [
          {
            boundary: boundaryComputed,
            directionDown: true,
            disabled: false,
            height: 2,
            positionBottom: false,
            sortPoint: -2,
            sticked: { top: 2, height: 48 },
            top: 2,
          },
          {
            boundary: boundaryComputed,
            directionDown: true,
            disabled: false,
            height: 2,
            positionBottom: false,
            sortPoint: -8,
            sticked: { top: 8, height: 42 },
            top: 8,
          },
          exitStickyComputed,
        ],
        sticky: {
          boundary: { top: 10, height: 1, left: 0, width: 100 },
          direction: 'down',
          disabled: undefined,
          height: 1,
          position: 'top',
          top: 10,
        },
        stickyComputed: exitStickyComputed,
        viewportHeight: 10,
      },
      intersection: {
        disabled: undefined,
        height: 2,
        thresholds: [ 0, 1 ],
        top: 10,
      },
      viewportHeight: 10,
    };

    expect(engine.snapIntersection(container, stickies, intersection, 10)).toEqual(snap);
  });
});


describe('snapSticky', () => {
  it('should snap given sticky', () => {
    const container = { top: 0, height: 50, left: 0, width: 100 };
    const sticky: NgxSticky = { top: 15, height: 2 };
    const stickies: NgxSticky[] = [
      { top: 2, height: 2 },
      { top: 4, height: 2, disabled: true },
      { top: 6, height: 2, position: 'bottom' },
      { top: 8, height: 2 },
      sticky,
      { top: 20, height: 2 },
    ];

    const boundaryComputed = {
      height: 50,
      left: 0,
      offsetBottom: 10,
      offsetTop: 0,
      top: 0,
      unstacked: false,
      width: 100,
    };

    const stickyComputed = {
      boundary: boundaryComputed,
      directionDown: true,
      disabled: false,
      height: 2,
      positionBottom: false,
      sortPoint: -15,
      sticked: { top: 15, height: 35 },
      top: 15,
    };

    const snap = {
      boundaries: { '0,50': boundaryComputed },
      container,
      stickies: [
        {
          boundary: boundaryComputed,
          directionDown: true,
          disabled: false,
          height: 2,
          positionBottom: false,
          sortPoint: -2,
          sticked: { top: 2, height: 48 },
          top: 2,
        },
        {
          boundary: boundaryComputed,
          directionDown: true,
          disabled: false,
          height: 2,
          positionBottom: false,
          sortPoint: -8,
          sticked: { top: 8, height: 42 },
          top: 8,
        },
        stickyComputed,
      ],
      sticky,
      stickyComputed,
      viewportHeight: 10,
    };

    expect(engine.snapSticky(container, stickies, sticky, 10)).toEqual(snap);
  });
});
