import {
  coerceStickyDirection,
  coerceStickyPosition,
  compareStickiesComputed,
  getStuckedPositionTop,
  isStickyDirectionDown,
  isStickyPositionBottom,
} from '../../src/lib/sticky.helpers';
import {
  NgxStickyComputation,
  NgxStickyComputed,
  NgxStickyDirection,
  NgxStickyLine,
  NgxStickyPosition,
} from '../../src/lib/sticky.types';


describe('coerceStickyDirection', () => {
  it('should coerce given direction', () => {
    expect(coerceStickyDirection('up')).toBe('up');
    expect(coerceStickyDirection('down')).toBe('down');
    expect(coerceStickyDirection('')).toBe('down');
  });
});


describe('coerceStickyPosition', () => {
  it('should coerce given position', () => {
    expect(coerceStickyPosition('top')).toBe('top');
    expect(coerceStickyPosition('bottom')).toBe('bottom');
    expect(coerceStickyPosition('')).toBe('top');
  });
});


describe('compareStickiesComputed', () => {
  const viewportHeight = 0;
  const mockStickyComputed = (
    top: number,
    height: number,
    positionBottom: boolean,
    directionDown: boolean,
  ): NgxStickyComputed => ({
    boundary: {
      top,
      height,
    },
    positionBottom,
    directionDown,
    sortPoint: positionBottom
      ? directionDown
        ? -top - height + viewportHeight
        : top + height - viewportHeight
      : directionDown
        ? -top
        : top
      ,
  } as NgxStickyComputed);
  const a = mockStickyComputed(0, 10, false, true);
  const b = mockStickyComputed(20, 5, false, true);
  const c = mockStickyComputed(60, 25, true, true);
  const d = mockStickyComputed(160, 10, false, false);
  const e = mockStickyComputed(200, 5, true, false);

  it('should sort given stickies computed', () => {
    expect([a, b, d].sort(compareStickiesComputed)).toEqual([d, a, b]);
    expect([c, e].sort(compareStickiesComputed)).toEqual([e, c]);
  });
});


describe('getStuckedPositionTop', () => {
  it('should returns position top relative to given computation', () => {
    const computation = {
      snap: {
        sticky: {
          spot: undefined,
        },
        stickyComputed: {
          boundary: { top: 10, height: 50, offsetTop: 5, offsetBottom: 5 },
          directionDown: true,
          positionBottom: false,
          height: 2,
          top: 15,
        },
      },
      offsetSticked: 1,
      offsetStucked: 3,
      oppositeOffsetSticked: 4,
      oppositeOffsetStucked: 8,
    } as NgxStickyComputation;

    computation.snap.stickyComputed.directionDown = true;
    computation.snap.stickyComputed.positionBottom = false;

    expect(getStuckedPositionTop(computation)).toBe(10 + 50 - 2 - (5 - 2 - 3) /* 58 */);

    computation.snap.stickyComputed.directionDown = false;
    computation.snap.stickyComputed.positionBottom = false;

    expect(getStuckedPositionTop(computation)).toBe(10 + 3 /* 13 */);

    computation.snap.stickyComputed.directionDown = true;
    computation.snap.stickyComputed.positionBottom = true;

    expect(getStuckedPositionTop(computation)).toBe(10 + 50 - 2 - 3 /* 55 */);

    computation.snap.stickyComputed.directionDown = false;
    computation.snap.stickyComputed.positionBottom = true;

    expect(getStuckedPositionTop(computation)).toBe(10 + 5 - 2 - 3 /* 10 */);

    computation.snap.sticky.spot = {} as NgxStickyLine;

    expect(getStuckedPositionTop(computation)).toBe(10 + 5 - 2 - 3 /* 10 */ - (1 + 3 + 4 + 8/* 16 */));

    computation.snap.stickyComputed.directionDown = true;

    expect(getStuckedPositionTop(computation)).toBe(10 + 50 - 2 - 3 /* 55 */ + (1 + 3 + 4 + 8/* 16 */));
  });
});


describe('isStickyDirectionDown', () => {
  it('should returns true when direction is not "up"', () => {
    expect(isStickyDirectionDown('up')).toBe(false);
    expect(isStickyDirectionDown('down')).toBe(true);
    expect(isStickyDirectionDown('' as NgxStickyDirection)).toBe(true);
  });
});


describe('isStickyPositionBottom', () => {
  it('should returns true when position is "bottom"', () => {
    expect(isStickyPositionBottom('top')).toBe(false);
    expect(isStickyPositionBottom('bottom')).toBe(true);
    expect(isStickyPositionBottom('' as NgxStickyPosition)).toBe(false);
  });
});
