import {
  coerceStickyDirection,
  coerceStickyPosition,
  getStuckedPositionTop,
  isStickyDirectionDown,
  isStickyPositionBottom,
} from '../../src/lib/sticky.helpers';
import { NgxStickyComputation } from '../../src/lib/sticky.types';


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


describe('getStuckedPositionTop', () => {
  it('should returns position top relative to given computation', () => {
    const computation = {
      snap: {
        stickyComputed: {
          boundary: { top: 10, height: 50, offsetTop: 5, offsetBottom: 5 },
          directionDown: true,
          positionBottom: false,
          height: 2,
          top: 15,
        },
      },
      offsetStucked: 3,
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
  });
});


describe('isStickyDirectionDown', () => {
  it('should returns true when direction is not "up"', () => {
    expect(isStickyDirectionDown('up')).toBe(false);
    expect(isStickyDirectionDown('down')).toBe(true);
    expect(isStickyDirectionDown('' as any)).toBe(true);
  });
});


describe('isStickyPositionBottom', () => {
  it('should returns true when position is "bottom"', () => {
    expect(isStickyPositionBottom('top')).toBe(false);
    expect(isStickyPositionBottom('bottom')).toBe(true);
    expect(isStickyPositionBottom('' as any)).toBe(false);
  });
});
