import {
  NgxStickyComputation,
  NgxStickyDirection,
  NgxStickyPosition,
} from './sticky.types';


export function coerceStickyPosition(value: any): NgxStickyPosition { // tslint:disable-line: no-any
  return isStickyPositionBottom(value) ? 'bottom' : 'top';
}

export function coerceStickyDirection(value: any): NgxStickyDirection { // tslint:disable-line: no-any
  return isStickyDirectionDown(value) ? 'down' : 'up';
}


export function getStuckedPositionTop(computation: NgxStickyComputation): number {
  const {
    boundary,
    directionDown,
    height: elementHeight,
    positionBottom,
  } = computation.snap.stickyComputed;

  return directionDown
    ? boundary.top
      + boundary.height
      - elementHeight
      - (positionBottom
          ? computation.offsetStucked
          : boundary.offsetBottom - elementHeight - computation.offsetStucked)
    : positionBottom
      ? boundary.top + boundary.offsetTop - elementHeight - computation.offsetStucked
      : boundary.top + computation.offsetStucked;
}


export function isStickyPositionBottom(position: NgxStickyPosition) {
  return position === 'bottom';
}

export function isStickyDirectionDown(direction: NgxStickyDirection) {
  return direction !== 'up';
}
