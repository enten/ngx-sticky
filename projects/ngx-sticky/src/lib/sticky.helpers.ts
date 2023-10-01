import {
  NgxStickyComputation,
  NgxStickyComputed,
  NgxStickyDirection,
  NgxStickyPosition,
} from './sticky.types';


export function coerceStickyPosition(value: any): NgxStickyPosition {
  return isStickyPositionBottom(value) ? 'bottom' : 'top';
}

export function coerceStickyDirection(value: any): NgxStickyDirection {
  return isStickyDirectionDown(value) ? 'down' : 'up';
}


export function compareStickiesComputed(a: NgxStickyComputed, b: NgxStickyComputed): number {
  return a.positionBottom === b.positionBottom
    ? a.sortPoint < b.sortPoint && a.boundary.top >= b.boundary.top ? 1 : -1
    : -1;
}


export function getStuckedPositionTop(computation: NgxStickyComputation): number {
  const {
    boundary,
    directionDown,
    height: elementHeight,
    positionBottom,
  } = computation.snap.stickyComputed;

  let result = directionDown
    ? boundary.top
      + boundary.height
      - elementHeight
      - (positionBottom
          ? computation.offsetStucked
          : boundary.offsetBottom - elementHeight - computation.offsetStucked)
    : positionBottom
      ? boundary.top + boundary.offsetTop - elementHeight - computation.offsetStucked
      : boundary.top + computation.offsetStucked
    ;

  // adjust position when sticky has spot
  if (computation.snap.sticky.spot) {
    result = directionDown
      ? result
        + computation.offsetSticked + computation.offsetStucked
        + computation.oppositeOffsetSticked + computation.oppositeOffsetStucked
      : result
        - computation.offsetSticked - computation.offsetStucked
        - computation.oppositeOffsetSticked - computation.oppositeOffsetStucked
      ;
  }

  return result;
}


export function isStickyPositionBottom(position: NgxStickyPosition): position is 'bottom' {
  return position === 'bottom';
}

export function isStickyDirectionDown(direction: NgxStickyDirection): direction is 'down' {
  return direction !== 'up';
}
