import { Injectable } from '@angular/core';

import { isStickyDirectionDown, isStickyPositionBottom } from './sticky.helpers';
import {
  NgxIntersection,
  NgxIntersectionComputation,
  NgxIntersectionSnap,
  NgxSticky,
  NgxStickyBoundary,
  NgxStickyBoundaryComputed,
  NgxStickyComputation,
  NgxStickyComputed,
  NgxStickyContainer,
  NgxStickyLine,
  NgxStickyPosition,
  NgxStickySnap,
  NgxStickyState,
} from './sticky.types';


export const NGX_STICKY_ENGINE_INTERCEPTION_STATE_MAP = {
  'sticked,normal': 'enter',
  'stucked,normal': 'entered',
  'sticked,sticked': 'entered',
  'stucked,sticked': 'exit',
  'stucked,stucked': 'exited',
};


/**
 * Defines a sticky engine. Implemented in universal way.
 */
@Injectable({
  providedIn: 'root',
})
export class NgxStickyEngine {
  /**
   * Compute sticky boundary.
   *
   * @param container Container
   * @param boundary Sticky boundary
   * @param sticky Sticky line
   * @param directionDown Direction down
   * @param spot Spot line
   * @param viewportHeight Viewport height
   * @returns Boundary instance
   */
  computeStickyBoundary(
    container: NgxStickyContainer,
    boundary: NgxStickyBoundary | null,
    sticky: NgxStickyLine,
    directionDown: boolean,
    spot: NgxStickyLine | null,
    viewportHeight: number,
  ): NgxStickyBoundaryComputed {
    let {
      height: boundaryHeight,
      top: boundaryTop,
      left: boundaryLeft,
      width: boundaryWidth,
    } = boundary || container;

    boundaryHeight = boundaryHeight || 0;
    boundaryTop = boundaryTop || 0;
    boundaryWidth = boundaryWidth || 0;
    boundaryLeft = boundaryLeft || 0;

    if (spot && spot.height) {
      const beforeSpot = sticky.top < spot.top;

      if (beforeSpot) {
        // when sticky direction is bottom and is before its spot
        if (directionDown) {
          const spotPoint = spot.top - viewportHeight;

          // disable sticky when is in same viewport height as its spot
          if (spotPoint < sticky.top) {
            boundaryHeight = 0;
            boundaryTop = 0;
          // adjust sticky boundary height according to its spot when spot point is in base boundary
          } else if (spotPoint < boundaryTop + boundaryHeight) {
            boundaryHeight = spotPoint - boundaryTop + sticky.height;
          }
        }
      } else {
        // when sticky direction is top and is after its spot
        if (!directionDown) {
          const spotPoint = spot.top + spot.height + viewportHeight;

          // disable sticky when is in same viewport height as its spot
          if (spotPoint > sticky.top) {
            boundaryHeight = 0;
            boundaryTop = 0;
            // adjust sticky boundary top according to its spot when spot point is in base boundary
          } else if (spotPoint > boundaryTop && spotPoint < boundaryTop + boundaryHeight) {
            boundaryHeight -= spotPoint - boundaryTop;
            boundaryTop = spotPoint;
          }
        }
      }
    }

    return {
      height: boundaryHeight,
      top: boundaryTop,
      width: boundaryWidth,
      left: boundaryLeft,
      unstacked: boundary && boundary.unstacked || container.unstacked || false,
      offsetBottom: 0,
      offsetTop: 0,
    };
  }

  /**
   * Compute sticky sticked line.
   *
   * @param boundary Sticky boundary line
   * @param sticky Sticky line
   * @param positionBottom Position bottom
   * @param directionDown Direction down
   * @param viewportHeight Viewport height
   * @returns Sticked line
   */
  computeStickyStickedLine(
    boundary: NgxStickyLine,
    sticky: NgxStickyLine,
    positionBottom: boolean,
    directionDown: boolean,
    viewportHeight: number,
  ): NgxStickyLine {
    let stickedTop: number;
    let stickedHeight: number;

    if (positionBottom) {
      if (directionDown) {
        stickedTop = sticky.top + sticky.height - viewportHeight;
        stickedHeight = boundary.height + boundary.top - stickedTop - viewportHeight;
      } else {
        stickedTop = boundary.top - viewportHeight;
        stickedHeight = sticky.top - stickedTop - viewportHeight;
      }
    } else {
      if (directionDown) {
        stickedTop = sticky.top;
        stickedHeight = boundary.height + boundary.top - stickedTop;
      } else {
        stickedTop = boundary.top;
        stickedHeight = sticky.top - stickedTop;
      }
    }

    return { top: stickedTop, height: stickedHeight };
  }

  /**
   * Compute sticky sort point.
   *
   * @param sticky Sticky line
   * @param positionBottom Position bottom
   * @param directionDown Direction down
   * @param viewportHeight Viewport height
   * @returns Sticky sort point
   */
  computeStickySortPoint(
    sticky: NgxStickyLine,
    positionBottom: boolean,
    directionDown: boolean,
    viewportHeight: number,
  ): number {
    let sortPoint: number;

    if (positionBottom) {
      sortPoint = directionDown
        ? -sticky.top - sticky.height + viewportHeight
        : sticky.top + sticky.height - viewportHeight;
    } else {
      sortPoint = directionDown
        ? -sticky.top
        : sticky.top;
    }

    return sortPoint;
  }

  /**
   * Determines intersection state.
   *
   * @param snap Intersection snap
   * @param viewportTop Viewport/scroll top position
   * @returns Intersection computation
   */
  determineIntersectionState(snap: NgxIntersectionSnap, viewportTop: number): NgxIntersectionComputation {
    const enter = this.determineStickyState(snap.enter, viewportTop);
    const exit = this.determineStickyState(snap.exit, viewportTop);

    // Intersection state can be easily determined from enter sticky and exit sticky states:
    // - enter: when enter sticky (on bottom) is _sticked_ and exit sticky (on top) is _normal_ ;
    // - entered: when enter (on bottom) and exit (on top) stickies are _sticked_ ;
    // - entered: when enter sticky (on bottom) is _stucked_ and exit sticky (on top) is _normal_ ;
    // - exit: when enter sticky (on bottom) is _stucked_ and exit sticky (on top) is _sticked_ ;
    // - exited: when enter (on bottom) and exit (on top) stickies are _stucked_.
    const stateKey = [ enter.state, exit.state ].join(',');
    const state = NGX_STICKY_ENGINE_INTERCEPTION_STATE_MAP[stateKey] || null;

    const viewportOffsetless = snap.viewportHeight - enter.offsetSticked - exit.offsetSticked;
    const maxHeightVisible = Math.min(snap.intersection.height, viewportOffsetless);
    let height = 0;
    let intersecting = false;

    if (state === 'entered') {
      height = maxHeightVisible;
      intersecting = true;
    } else if (state === 'enter') {
      height = viewportTop + snap.viewportHeight - snap.intersection.top - enter.offsetSticked;
      intersecting = true;
    } else if (state === 'exit') {
      height = snap.intersection.top + snap.intersection.height - viewportTop - exit.offsetSticked;
      intersecting = true;
    }

    const computation: NgxIntersectionComputation = {
      enter,
      exit,
      snap,
      height,
      intersecting,
      ratio: Math.min(1, height / maxHeightVisible),
      state,
      viewportTop,
    };

    return computation;
  }

  /**
   * Determines sticky state.
   *
   * @param snap Sticky snap
   * @param viewportTop Viewport/scroll top position
   * @returns Sticky computation
   */
  determineStickyState(snap: NgxStickySnap, viewportTop: number): NgxStickyComputation {
    const computation: NgxStickyComputation = {
      offsetSticked: 0,
      offsetStucked: 0,
      state: 'normal',
      snap,
      viewportTop,
    };

    // cancel computation when stickyComputed is outside its boundary
    if (snap.stickyComputed.disabled) {
      return computation;
    }

    // last value stored in _stickyComputedState will be related to stickyComputed
    let _stickyComputedState: NgxStickyState;

    // compute state for each sibling and stickyComputed in last
    for (const _stickyComputed of snap.stickies) {
      const boundaryOffset = _stickyComputed.directionDown
        ? _stickyComputed.boundary.offsetBottom
        : _stickyComputed.boundary.offsetTop;
      let {
        top: _stickedTop,
        height: _stickedHeight,
      } = _stickyComputed.sticked;

      // adjust _stickyComputed sticked line with previous sibling
      if (_stickyComputed.positionBottom) {
        if (_stickyComputed.directionDown) {
          _stickedTop += computation.offsetSticked + computation.offsetStucked;
          _stickedHeight -= computation.offsetStucked;
        } else {
          _stickedTop += boundaryOffset;
          _stickedTop += computation.offsetSticked;
          _stickedHeight -= boundaryOffset - computation.offsetStucked;
          _stickedHeight += _stickyComputed.height;
        }
      } else {
        if (_stickyComputed.directionDown) {
          _stickedTop -= computation.offsetSticked + computation.offsetStucked;
          _stickedHeight += computation.offsetStucked;
          _stickedHeight -= boundaryOffset;
        } else {
          _stickedTop -= computation.offsetSticked;
          _stickedHeight -= computation.offsetStucked;
        }
      }

      // set default state to "normal"
      _stickyComputedState = 'normal';

      // determine _stickyComputed state with its sticked line adjusted
      // if (viewportTop > _stickedTop) {
      if (viewportTop >= _stickedTop) {
        _stickyComputedState = 'sticked';

        if (viewportTop > _stickedTop + _stickedHeight) {
          _stickyComputedState = _stickyComputed.directionDown ? 'stucked' : 'normal';
        }
      } else if (!_stickyComputed.directionDown) {
        _stickyComputedState = 'stucked';
      }

      // cumulate sibling height to the right offset
      if (
        // when _stickyComputed isn't stickyComputed
        _stickyComputed !== snap.stickyComputed
        // and state determined is "sticked" or "stucked"
        && _stickyComputedState !== 'normal'
        // and _stickyComputed is stacked
        && !_stickyComputed.boundary.unstacked
      ) {
        if (
          _stickyComputed.boundary.top === snap.stickyComputed.boundary.top
            && _stickyComputed.boundary.height === snap.stickyComputed.boundary.height
        ) {
          computation.offsetStucked += _stickyComputed.height;
        } else if (_stickyComputedState === 'sticked') {
          computation.offsetSticked += _stickyComputed.height;
        }
      }
      // (computation as { _state: NgxStickyState })._state = _stickyComputedState;
    }

    computation.state = _stickyComputedState;

    return computation;
  }

  /**
   * Returns scroll top offset height used by stickies for a given viewport position.
   *
   * @param container Container
   * @param stickies Stickies
   * @param position Position `"top"` or `"bottom"`
   * @param viewportHeight Viewport height
   * @param offsetTop Viewport top
   * @returns Top offset height used by stickies.
   */
  getStickedOffset(
    container: NgxStickyContainer,
    stickies: NgxSticky[],
    position: NgxStickyPosition,
    viewportHeight: number,
    viewportTop: number,
  ): number {
    const positionBottom = isStickyPositionBottom(position);
    let maxStickyUnstackedHeight = 0;
    let stickedOffset = 0;

    for (const _sticky of stickies) {
      // skip sticky when is position bottom
      if (isStickyPositionBottom(_sticky.position) !== positionBottom) {
        continue;
      }

      const snap = this.snapSticky(container, stickies, _sticky, viewportHeight);

      // skip sticky when is disabled
      if (snap.sticky.disabled) {
        continue;
      }

      const computation = this.determineStickyState(snap, viewportTop);

      // add sticky height to offset top when state is sticked
      if (computation.state === 'sticked') {
        const _elementHeight = snap.stickyComputed.height;

        // substract height when sticy is stacked
        if (!snap.stickyComputed.boundary.unstacked) {
          stickedOffset += _elementHeight;
        // or update the biggest sticky unstacked
        } else if (_elementHeight > maxStickyUnstackedHeight) {
          maxStickyUnstackedHeight = _elementHeight;
        }
      }
    }

    stickedOffset += maxStickyUnstackedHeight;

    if (positionBottom) {
      stickedOffset += container.offsetBottom || 0;
    } else {
      stickedOffset += container.offsetTop || 0;
    }

    return stickedOffset;
  }

  /**
   * Create intersection snap.
   *
   * @param container Container
   * @param stickies Stickies
   * @param intersection Intersection
   * @param viewportHeight Viewport height
   * @returns Intersection snap
   */
  snapIntersection(
    container: NgxStickyContainer,
    stickies: NgxSticky[],
    intersection: NgxIntersection,
    viewportHeight: number,
  ): NgxIntersectionSnap {
    const disabled = intersection.disabled;

    // enter sticky is sticked on bottom
    const enterSticky: NgxSticky = {
      boundary: {
        top: intersection.top - 1,
        height: intersection.height,
        left: container.left,
        width: container.width,
      },
      disabled,
      top: intersection.top - 1,
      height: 1,
      position: 'bottom',
      direction: 'down',
    };

    // exit sticky is sticked on top
    const exitSticky: NgxSticky = {
      boundary: {
        top: intersection.top,
        height: intersection.height - 1,
        left: container.left,
        width: container.width,
      },
      disabled,
      top: intersection.top,
      height: 1,
      position: 'top',
      direction: 'down',
    };

    return {
      container,
      enter: this.snapSticky(container, stickies, enterSticky, viewportHeight),
      exit: this.snapSticky(container, stickies, exitSticky, viewportHeight),
      intersection: {
        disabled,
        height: intersection.height,
        thresholds: intersection.thresholds ? [ ...intersection.thresholds ] : [ 0, 1 ],
        top: intersection.top,
      },
      viewportHeight,
    };
  }

  /**
   * Create sticky snap.
   *
   * @param container Container
   * @param stickies Stickies
   * @param sticky Sticky
   * @param viewportHeight Viewport height
   * @returns Sticky snap
   */
  snapSticky(
    container: NgxStickyContainer,
    stickies: NgxSticky[],
    sticky: NgxSticky,
    viewportHeight: number,
  ): NgxStickySnap {
    const boundariesMap: Record<string, NgxStickyBoundaryComputed> = {};

    const directionDown = isStickyDirectionDown(sticky.direction);
    const positionBottom = isStickyPositionBottom(sticky.position);

    const stickyComputed: NgxStickyComputed = {
      boundary: this.computeStickyBoundary(
        container,
        sticky.boundary,
        sticky,
        directionDown,
        sticky.spot,
        viewportHeight,
      ),
      directionDown,
      disabled: false,
      height: sticky.height,
      positionBottom,
      sortPoint: this.computeStickySortPoint(sticky, positionBottom, directionDown, viewportHeight),
      sticked: null,
      top: sticky.top,
    };

    if (
      container.disabled
      || sticky.disabled
      || !sticky.height
      || sticky.top < stickyComputed.boundary.top
      || sticky.top > stickyComputed.boundary.top + stickyComputed.boundary.height
    ) {
      stickyComputed.disabled = true;
      stickyComputed.sticked = { height: 0, top: 0 };
    } else {
      stickyComputed.sticked = this.computeStickyStickedLine(
        stickyComputed.boundary,
        sticky,
        positionBottom,
        directionDown,
        viewportHeight,
      );
    }

    const stickiesComputed: NgxStickyComputed[] = [];
    let offsetSpacer: NgxSticky;

    if (sticky.disabled) {
      return {
        boundaries: boundariesMap,
        container,
        stickies: stickiesComputed,
        sticky,
        stickyComputed,
        viewportHeight,
      };
    }

    // insert fake sticky which represent container offset top
    if (container.offsetTop && !stickyComputed.positionBottom) {
      offsetSpacer = {
        boundary: container,
        direction: 'down',
        height: container.offsetTop,
        position: 'top',
        disabled: false,
        top: container.top,
      };

      stickies = [ offsetSpacer, ...stickies ];
    }

    // insert fake sticky which represent container offset bottom
    if (container.offsetBottom && stickyComputed.positionBottom) {
      offsetSpacer = {
        boundary: container,
        direction: 'up',
        height: container.offsetBottom,
        position: 'bottom',
        disabled: false,
        top: container.top + container.height - container.offsetBottom,
      };

      stickies = [ offsetSpacer, ...stickies ];
    }

    // remove 1px to fix round sizes (offsetLeft and offsetWidth)
    const stickyComputedBoundaryRight = stickyComputed.boundary.left + stickyComputed.boundary.width - 1;

    for (let _stickyIndex = 0; _stickyIndex < stickies.length; ++_stickyIndex) {
      const _sticky = stickies[_stickyIndex];
      let _directionDown: boolean;
      let _positionBottom: boolean;
      let _stickyComputed: NgxStickyComputed;
      let _stickyComputedBoundaryRight: number;

      if (_sticky === sticky) {
        _directionDown = stickyComputed.directionDown;
        _positionBottom = stickyComputed.positionBottom;
        _stickyComputed = stickyComputed;
        _stickyComputedBoundaryRight = stickyComputedBoundaryRight;
      } else {
        _directionDown = isStickyDirectionDown(_sticky.direction);
        _positionBottom = isStickyPositionBottom(_sticky.position);

        _stickyComputed = {
          boundary: this.computeStickyBoundary(
            container,
            _sticky.boundary,
            _sticky,
            _directionDown,
            _sticky.spot,
            viewportHeight,
          ),
          disabled: false,
          directionDown: _directionDown,
          height: _sticky.height,
          positionBottom: _positionBottom,
          sortPoint: this.computeStickySortPoint(_sticky, _positionBottom, _directionDown, viewportHeight),
          sticked: null,
          top: _sticky.top,
        };

        // remove 1px to fix round sizes (offsetLeft and offsetWidth)
        _stickyComputedBoundaryRight = _stickyComputed.boundary.left + _stickyComputed.boundary.width - 1;

        if (
          _sticky.disabled
          || !_sticky.height
          // skip sticky which isn't in its boundary
          || _sticky.top < _stickyComputed.boundary.top
          || _sticky.top > _stickyComputed.boundary.top + _stickyComputed.boundary.height
          // skip sticky sibling when its boundary isn't align horizontaly
          || stickyComputedBoundaryRight <= _stickyComputed.boundary.left
          || stickyComputed.boundary.left >= _stickyComputedBoundaryRight
        ) {
          _stickyComputed.disabled = true;
          _stickyComputed.sticked = { height: 0, top: 0 };
        } else {
          _stickyComputed.sticked = this.computeStickyStickedLine(
            _stickyComputed.boundary,
            _sticky,
            _positionBottom,
            _directionDown,
            viewportHeight,
          );
        }
      }

      // compute boundary unique key
      const boundaryKey = [ _stickyComputed.boundary.top, _stickyComputed.boundary.height ].join(',');

      // ensure stickies computed to use same boundary instance
      if (boundariesMap[boundaryKey]) {
        _stickyComputed.boundary = boundariesMap[boundaryKey];
      } else {
        boundariesMap[boundaryKey] = _stickyComputed.boundary;
      }

      // skip sticky sibling when is disabled
      if (_stickyComputed.disabled) {
        continue;
      }

      // set sticky sibling height as max boundary offset when it unstacked
      if (_stickyComputed.boundary.unstacked) {
        if (_directionDown) {
          if (_sticky.height > _stickyComputed.boundary.offsetBottom) {
            _stickyComputed.boundary.offsetBottom = _sticky.height;
          }
        } else {
          if (_sticky.height > _stickyComputed.boundary.offsetTop) {
            _stickyComputed.boundary.offsetTop = _sticky.height;
          }
        }
      // add sticky sibling height to right boundary offset when it stacked
      } else {
        if (_directionDown) {
          _stickyComputed.boundary.offsetBottom += _sticky.height;
        } else {
          _stickyComputed.boundary.offsetTop += _sticky.height;
        }
      }

      // pushforce offset spacer as sticky siblings
      if (_sticky === offsetSpacer) {
        stickiesComputed.push(_stickyComputed);

        continue;
      }

      // collect stickyComputed siblings
      if (
        // when _stickyComputed isn't stickyComputed
        _stickyComputed !== stickyComputed
        // and its position equals to stickyComputed position
        && _stickyComputed.positionBottom === stickyComputed.positionBottom
        // and its sticked line intersects top of stickyComputed sticked line
        && stickyComputed.sticked.top >= _stickyComputed.sticked.top
        && stickyComputed.sticked.top <= _stickyComputed.sticked.top + _stickyComputed.sticked.height
        // and its top is before stickyComputed top according to its own position
        && (
          _stickyComputed.directionDown
            ? _stickyComputed.top < stickyComputed.top
            : _stickyComputed.top > stickyComputed.top
        )
      ) {
        stickiesComputed.push(_stickyComputed);
      }
    }

    // sort stickyComputed siblings according to their respective sortPoint and boundary top
    stickiesComputed.sort((a, b) => {
      return a.positionBottom === stickyComputed.positionBottom
        ? a.sortPoint < b.sortPoint && a.boundary.top >= b.boundary.top ? 1 : -1
        : -1;
    });

    // add stickyComputed in last position
    stickiesComputed.push(stickyComputed);

    return {
      container,
      boundaries: boundariesMap,
      stickies: stickiesComputed,
      sticky,
      stickyComputed,
      viewportHeight,
    };
  }
}
