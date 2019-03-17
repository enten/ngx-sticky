import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

import {
  NgxSticky,
  NgxStickyContainer,
  NgxStickyElementStyle,
  NgxStickyGhostStyle,
  NgxStickyOffsets,
  NgxStickyState,
} from './sticky.types';
import {
  getElementAbsoluteRect,
  getElementRelativeRect,
  getViewportScrollPositionTop,
  getViewportSizeHeight,
  getWindowRef,
  setElementStyles,
} from './sticky.utils';


/**
 * @description
 * Defines a sticky engine. Implemented in universal way.
 *
 * @ngModule NgxStickyModule
 */
@Injectable({
  providedIn: 'root',
})
export class NgxStickyEngine {
  readonly renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Destroys a sticky: refresh to state `null` and remove ghost.
   *
   * @param sticky Sticky to destroy
   */
  destroySticky(sticky: NgxSticky): void {
    this.refreshSticky(sticky, null);
    this.removeStickyGhost(sticky);

    sticky.elementStyle = null;
  }

  /**
   * Determines sticky state.
   *
   * @param sticky Sticky
   * @param scrollTop Scroll top position
   * @param offsets Top/bottom offsets
   * @returns Sticky state
   */
  determineStickyState(sticky: NgxSticky, scrollTop: number, offsets?: NgxStickyOffsets): NgxStickyState {
    const win = getWindowRef();

    if (!win) {
      return null;
    }

    if (!offsets) {
      offsets = { top: 0, bottom: 0 };
    }

    const ghostRect = getElementAbsoluteRect(sticky.ghost);
    const ghostHeight = sticky.forceElementHeight || ghostRect.height;
    const positionBottom = sticky.position !== 'top';
    const directionBottom = sticky.direction !== 'top';
    const spotRect = sticky.spot ? getElementAbsoluteRect(sticky.spot) : null;
    const spotHeight = spotRect ? sticky.forceSpotHeight || spotRect.height : 0;
    const beforeSpot = sticky.spot ? ghostRect.top < spotRect.top : false;
    const viewportHeight = getViewportSizeHeight(win);
    let state: NgxStickyState = 'normal';
    let stickedOffset = 0;

    if (positionBottom) {
      if (directionBottom) {
        stickedOffset = scrollTop - offsets.top + viewportHeight - ghostRect.top - ghostHeight;
      } else {
        stickedOffset = - scrollTop + offsets.bottom - viewportHeight + ghostRect.top + ghostHeight;
      }
    } else {
      if (directionBottom) {
        stickedOffset = scrollTop + offsets.top - ghostRect.top;
      } else {
        stickedOffset = - scrollTop - offsets.bottom + ghostRect.top;
      }
    }

    if (spotRect) {
      let spotStickedOffset = 0;

      if (beforeSpot) {
        if (directionBottom) {
          if (spotRect.top - ghostRect.top - ghostHeight > viewportHeight) {
            spotStickedOffset = - scrollTop + offsets.top - viewportHeight + spotRect.top;
          }
        } else {
          spotStickedOffset = 1;
        }
      } else {
        if (directionBottom) {
          spotStickedOffset = 1;
        } else {
          if (ghostRect.top - spotRect.top - spotHeight > viewportHeight) {
            spotStickedOffset = scrollTop + offsets.top - spotRect.top - spotHeight;
          }
        }
      }

      if (spotStickedOffset <= 0) {
        stickedOffset = 0;
      }
    }

    if (stickedOffset > 0) {
      state = 'sticked';

      if (sticky.container) {
        const containerRect = getElementAbsoluteRect(sticky.container.element);
        const containerOffsets = this.getStickyContainerOffsets(sticky.container);
        let stuckedOffset = 0;

        if (positionBottom) {
          if (directionBottom) {
            stuckedOffset = scrollTop
              + viewportHeight
              - containerRect.top
              - containerRect.height
              + containerOffsets.bottom;
          } else {
            stuckedOffset = - scrollTop
              + offsets.top
              + offsets.bottom
              - viewportHeight
              + containerRect.top
              + containerOffsets.top
              + ghostHeight;
          }
        } else {
          if (directionBottom) {
            stuckedOffset = scrollTop
              + offsets.top
              + offsets.bottom
              - containerRect.top
              - containerRect.height
              + containerOffsets.bottom
              + ghostHeight;
          } else {
            stuckedOffset = - scrollTop
              + containerRect.top
              + containerOffsets.top;
          }
        }

        if (stuckedOffset > 0) {
          state = 'stucked';
        }
      }
    }

    return state;
  }

  /**
   * Returns offset to an element by considering stickies.
   *
   * @param stickies Sticky registry
   * @param element Target element
   * @param offsetTop Top offset
   * @returns Offset top
   */
  getScrollOffsetTop(stickies: NgxSticky[], element: HTMLElement, offsetTop?: number): number {
    const elementRect = getElementAbsoluteRect(element);
    const scrollTop = this.getScrollPositionTop(stickies, element, offsetTop);

    return elementRect.top - scrollTop;
  }

  /**
   * Returns scroll top position to scroll to an element and considering stickies.
   *
   * @param stickies Sticky registry
   * @param element Target element
   * @param offsetTop Top offset
   * @returns Scroll top position
   */
  getScrollPositionTop(stickies: NgxSticky[], element: HTMLElement, offsetTop?: number): number {
    if (!offsetTop) {
      offsetTop = 0;
    }

    const elementRect = getElementAbsoluteRect(element);
    const offsets = { top: 0, bottom: 0 };
    let scrollTop = elementRect.top - offsetTop;
    let maxStickyUnstacked = 0;

    for (const _sticky of stickies) {
      if (
        // skip stickies with enable is false
        !_sticky.enable
        // skip stickies with hidden is true
        || _sticky.hidden
        // skip stickies with position is bottom
        || _sticky.position !== 'top'
      ) {
        continue;
      }

      const stickyState = this.determineStickyState(_sticky, scrollTop, offsets);

      // when sticky has state sticked or stucked
      if (stickyState === 'sticked') {
        const _elementHeight = _sticky.forceElementHeight || _sticky.element.offsetHeight;

        // substract height from stickies with stack is true
        if (_sticky.stack) {
          scrollTop -= _elementHeight;
          offsets.top += _elementHeight;
        // update the biggest sticky with stack is false
        } else if (_elementHeight > maxStickyUnstacked) {
          maxStickyUnstacked = _elementHeight;
        }
      }
    }

    scrollTop -= maxStickyUnstacked;

    return scrollTop;
  }

  /**
   * Returns styles of the given sticky and state.
   *
   * @param sticky Sticky
   * @param state State
   * @param offsets Top/bottom offsets
   * @returns Styles of the sticky state
   */
  getStickyElementStyle(
    sticky: NgxSticky,
    state: NgxStickyState,
    offsets?: NgxStickyOffsets,
  ): Partial<NgxStickyElementStyle> {
    const win = getWindowRef();

    if (!win || !state) {
      return null;
    }

    if (!offsets) {
      offsets = { top: 0, bottom: 0 };
    }

    const positionBottom = sticky.position === 'bottom';
    const directionBottom = sticky.direction !== 'top';

    if (state === 'normal') {
      // this.showGhost(sticky);

      const ghostRect = getElementRelativeRect(win, sticky.ghost);
      const ghostStyle = win.getComputedStyle(sticky.ghost);

      const elementWidth = ghostRect.width
        - ((parseFloat(ghostStyle.borderLeft) || 0) + (parseFloat(ghostStyle.borderRight) || 0))
        - ((parseFloat(ghostStyle.paddingLeft) || 0) + (parseFloat(ghostStyle.paddingRight) || 0));

      const styles = {
        position: 'absolute',
        width: `${elementWidth}px`,
        top: `${ghostRect.top}px`,
        bottom: '',
        left: `${ghostRect.left}px`,
        float: '',
        margin: '0px',
      };

      if (sticky.orbit/* || presticked */) {
        const ghostTop = -ghostRect.height;

        const ghostLeft = getElementAbsoluteRect(sticky.ghost).left;

        Object.assign(styles, {
          position: 'fixed',
          top: !positionBottom ? `${ghostTop}px` : '',
          bottom: positionBottom ? `${ghostTop}px` : '',
          left: `${ghostLeft}px`,
        });
      }

      return styles;
    }

    if (state === 'sticked') {
      const ghostRect = getElementAbsoluteRect(sticky.ghost);
      const ghostTop = directionBottom ? offsets.top : offsets.bottom;

      return {
        position: 'fixed',
        top: !positionBottom ? `${ghostTop}px` : '',
        bottom: positionBottom ? `${ghostTop}px` : '',
        left: `${ghostRect.left}px`,
      };
    }

    if (state === 'stucked') {
      const containerOffsets = this.getStickyContainerOffsets(sticky.container);
      const containerRect = getElementAbsoluteRect(sticky.container.element);
      const ghostRect = getElementAbsoluteRect(sticky.ghost);
      const ghostRectHeight = sticky.forceElementHeight || ghostRect.height;
      const offset = positionBottom ? offsets.top : offsets.bottom;
      const parentRect = sticky.ghost.offsetParent !== sticky.container.element
        ? getElementAbsoluteRect(sticky.ghost.offsetParent as HTMLElement)
        : containerRect;

      let elementLeft = ghostRect.left;
      let elementTop = directionBottom
        ? containerRect.top + containerRect.height - containerOffsets.bottom - ghostRectHeight - offset
        : containerRect.top + containerOffsets.top + offset;

      if (parentRect) {
        elementTop -= parentRect.top;
        elementLeft -= parentRect.left;
      }

      return {
        position: 'absolute',
        top: `${elementTop}px`,
        bottom: '',
        left: `${elementLeft}px`,
      };
    }

    // throw new Error(`Invalid state: ${state}`);
    return null;
  }

  /**
   * Returns sticky container offets.
   *
   * @param container Sticky container
   */
  getStickyContainerOffsets(container: NgxStickyContainer): NgxStickyOffsets {
    const win = getWindowRef();
    const containerStyle = win && container.element
      ? win.getComputedStyle(container.element)
      : {} as CSSStyleDeclaration;

    return {
      top: container.offsetTop + (parseFloat(containerStyle.paddingTop) || 0),
      bottom: container.offsetBottom + (parseFloat(containerStyle.paddingBottom) || 0),
    };
  }

  /**
   * Returns style of a sticky ghost.
   *
   * @param sticky Sticky
   */
  getStickyGhostStyle(sticky: NgxSticky): NgxStickyGhostStyle {
    const win = getWindowRef();

    if (!sticky.ghost || !win) {
      return null;
    }

    const element = sticky.element;
    const elementStyle = win.getComputedStyle(element);

    const ghostHeight = element.offsetHeight
      // substract vertical borders
      - (parseFloat(elementStyle.borderTopWidth) || 0)
      - (parseFloat(elementStyle.borderBottomWidth) || 0)
      // substract vertical paddings
      - (parseFloat(elementStyle.paddingTop) || 0)
      - (parseFloat(elementStyle.paddingBottom) || 0);

    const styles: NgxStickyGhostStyle = {
      width: element.style.width,
      height: `${ghostHeight}px`,
      borderTopWidth: elementStyle.borderTopWidth,
      borderBottomWidth: elementStyle.borderBottomWidth,
      borderLeftWidth: elementStyle.borderLeftWidth,
      borderRightWidth: elementStyle.borderRightWidth,
      cssFloat: elementStyle.cssFloat,
      marginTop: elementStyle.marginTop,
      marginBottom: elementStyle.marginBottom,
      marginLeft: elementStyle.marginLeft,
      marginRight: elementStyle.marginRight,
      paddingTop: elementStyle.paddingTop,
      paddingBottom: elementStyle.paddingBottom,
      paddingLeft: elementStyle.paddingLeft,
      paddingRight: elementStyle.paddingRight,
    };

    if (sticky.spot || sticky.orbit) {
      styles.width = element.style.width || elementStyle.width;
    }

    if (sticky.orbit) {
      styles.position = 'absolute';
    }

    return styles;
  }

  /**
   * Returns siblings of the given sticky.
   *
   * @param stickies Sticky registry
   * @param sticky Sticky
   */
  getStickySiblings(stickies: NgxSticky[], sticky: NgxSticky): NgxSticky[] {
    // reverse stickies when sticky position is bottom
    // if (sticky.position !== 'top') {
    if (sticky.direction !== 'top') {
      stickies = [ ...stickies ].reverse();
    }

    return stickies.filter(_sticky => this.isStickySibling(sticky, _sticky));
  }

  /**
   * Returns top/bottom offsets for siblings of the given sticky.
   *
   * @param stickies Sticky registry
   * @param sticky Sticky
   * @returns Top/bottom offsets of sticky siblings
   */
  getStickySiblingsOffets(stickies: NgxSticky[], sticky: NgxSticky): NgxStickyOffsets {
    const offsets = { top: 0, bottom: 0 };

    if (!sticky.enable) {
      return offsets;
    }

    const ghostRect = getElementAbsoluteRect(sticky.ghost);

    for (const _sticky of stickies) {
      if (
        // skip sticky itself
        _sticky === sticky
        // skip stickies with enable is false
        || !_sticky.enable
        // skip stickies with stack is false
        || !_sticky.stack
        // skip stickies with hidden is true
        || _sticky.hidden
        // skip stickies with position isn't the same as sticky
        || _sticky.position !== sticky.position
        // skip stickies with state is normal
        || _sticky.state === 'normal'
        // skip stickies with state is stucked and not in the same sticky container
        || (_sticky.state === 'stucked' && _sticky.container !== sticky.container)
      ) {
        continue;
      }

      const _ghostRect = getElementAbsoluteRect(_sticky.ghost);
      const _elementHeight = _sticky.forceElementHeight || _ghostRect.height;

      if (ghostRect.top < _ghostRect.top) {
        offsets.bottom += _elementHeight;
      } else {
        offsets.top += _elementHeight;
      }
    }

    return offsets;
  }

  /**
   * Hides sticky ghost.
   *
   * @param sticky Sticky
   */
  hideStickyGhost(sticky: NgxSticky): void {
    if (!sticky.ghost) {
      return;
    }

    this.renderer.setStyle(sticky.ghost, 'display', 'none');
  }

  /**
   * Inserts sticky ghost.
   *
   * @param sticky Sticky
   */
  insertStickyGhost(sticky: NgxSticky): void {
    if (!getWindowRef() || sticky.ghost) {
      return;
    }

    sticky.ghost = this.renderer.createElement('div');
    this.renderer.addClass(sticky.ghost, 'ngx-sticky-ghost');
    this.renderer.setStyle(sticky.ghost, 'borderStyle', 'solid');
    this.renderer.setStyle(sticky.ghost, 'borderColor', 'transparent');
    this.renderer.insertBefore(sticky.element.parentElement, sticky.ghost, sticky.element);
  }

  /**
   * Returns `true` when given stickies are sibling.
   *
   * @param sticky Sticky
   * @param _sticky Sticky tested for sibling
   */
  isStickySibling(sticky: NgxSticky, _sticky: NgxSticky) {
    return _sticky !== sticky
      && _sticky.enable
      && _sticky.position === sticky.position
      && !_sticky.hidden;
      // && _sticky.stack
      // && _sticky.state !== 'normal';
  }

  /**
   * Refreshs sticky state.
   *
   * @param sticky Sticky
   * @param state State
   * @param offsets Top/bottom offsets
   */
  refreshSticky(sticky: NgxSticky, state: NgxStickyState, offsets?: NgxStickyOffsets): void {
    const win = getWindowRef();

    if (!win) {
      return;
    }

    // hide ghost and refresh original style when state is null
    if (!state) {
      this.hideStickyGhost(sticky);
      this.restoreStickyElementStyle(sticky);

      return;
    }

    this.saveStickyElementStyle(sticky);

    // show sticky ghost when state is normal
    if (state === 'normal') {
      this.showStickyGhost(sticky);
    }

    const elementStyle = this.getStickyElementStyle(sticky, state, offsets);

    setElementStyles(this.renderer, sticky.element, elementStyle);
  }

  /**
   * Refreshs sticky ghost.
   *
   * @param sticky Sticky
   */
  refreshStickyGhost(sticky: NgxSticky): void {
    const ghostStyle = this.getStickyGhostStyle(sticky);

    setElementStyles(this.renderer, sticky.ghost, ghostStyle);
  }

  /**
   * Removes sticky ghost.
   *
   * @param sticky Sticky
   */
  removeStickyGhost(sticky: NgxSticky): void {
    if (sticky.ghost) {
      // this.renderer.removeChild(sticky.ghost.parentElement, sticky.ghost);
      sticky.ghost.remove();
      sticky.ghost = null;
    }
  }

  /**
   * Restore original styles of the given sticky.
   *
   * @param sticky Sticky
   */
  restoreStickyElementStyle(sticky: NgxSticky): void {
    setElementStyles(this.renderer, sticky.element, sticky.elementStyle);
  }

  /**
   * Saves origin styles of the given sticky.
   *
   * @param sticky Sticky
   */
  saveStickyElementStyle(sticky: NgxSticky): void {
    if (!sticky.elementStyle) {
      sticky.elementStyle = {
        position: sticky.element.style.position,
        width: sticky.element.style.width,
        top: sticky.element.style.top,
        bottom: sticky.element.style.bottom,
        left: sticky.element.style.left,
        cssFloat: sticky.element.style.cssFloat,
        margin: sticky.element.style.margin,
        marginTop: sticky.element.style.marginTop,
        marginRight: sticky.element.style.marginRight,
        marginBottom: sticky.element.style.marginBottom,
        marginLeft: sticky.element.style.marginLeft,
      };
    }
  }

  /**
   * Shows sticky ghost.
   *
   * @param sticky Sticky
   */
  showStickyGhost(sticky: NgxSticky): void {
    if (!sticky.ghost) {
      this.insertStickyGhost(sticky);
      this.refreshStickyGhost(sticky);
    } else if (sticky.ghost.style.display === 'none') {
      this.renderer.setStyle(sticky.ghost, 'display', 'block');
      this.refreshStickyGhost(sticky);
    }
  }

  /**
   * Update sticky.
   *
   * @param stickies Sticky registry
   * @param sticky Sticky
   * @param fastCheck Fast update
   */
  updateSticky(stickies: NgxSticky[], sticky: NgxSticky, fastCheck?: boolean): void {
    const win = getWindowRef();

    if (!win) {
      return;
    }

    // refresh sticky state to null when sticky is hidden
    if (sticky.hidden) {
      this.refreshSticky(sticky, null);

      return;
    }

    // refresh sticky state to null when sticky enable is false
    if (!sticky.enable) {
      this.refreshSticky(sticky, null);

      // update siblings when sticky enable is false and have a previous state
      if (sticky.state) {
        sticky.state = null;

        this.getStickySiblings(stickies, sticky).forEach(_sticky => {
          this.updateSticky(stickies, _sticky, fastCheck);
        });
      }

      return;
    }

    let setStickyNormal = false;

    // refresh sticky state to null and after to normal when fastCheck is false
    if (!fastCheck) {
      this.refreshSticky(sticky, null);
      this.refreshSticky(sticky, 'normal');

      setStickyNormal = true;
    // refresh sticky state to normal only when fastCheck is true and sticky has no previous state
    } else if (!sticky.state) {
      this.refreshSticky(sticky, 'normal');

      setStickyNormal = true;
    }

    const previousState = sticky.state;
    const offsets = this.getStickySiblingsOffets(stickies, sticky);
    const scrollTop = getViewportScrollPositionTop(win);
    const state = this.determineStickyState(sticky, scrollTop, offsets);
    const stateChanged = state !== previousState;

    // animate sticking when state is sticked and sticky has spot or is an orbit
    /*
    if (state === 'sticked' && (sticky.spot || sticky.orbit)) {
      const stickyRect = getElementAbsoluteRect(sticky.ghost);
      const ghostRect = sticky.spot ? getElementAbsoluteRect(sticky.spot) : stickyRect;
      const spotHeight = sticky.spot ? sticky.forceSpotHeight || ghostRect.height : 0;
      let stickedOffset = 0;

      if (sticky.reverseDirection) {
        if (sticky.position === 'bottom') {
        } else {
          // stickedOffset = scrollTop - ghostRect.top + offsets.top;
          stickedOffset = scrollTop - ghostRect.top + offsets.top - spotHeight;
        }

        if (stickedOffset < stickyRect.height) {
          offsets.top -= stickyRect.height - stickedOffset;
          // offsets.top -= stickyRect.height + stickedOffset;
        }
      } else {
        if (sticky.position === 'bottom') {
          const viewportSize = getViewportSize(win);

          stickedOffset = ghostRect.top + offsets.top - scrollTop - viewportSize.height + ghostRect.height - spotHeight;
        } else {
          stickedOffset = scrollTop - ghostRect.top + offsets.top - spotHeight;
        }

        if (stickedOffset < stickyRect.height) {
          offsets.top -= stickyRect.height - stickedOffset;
        }
      }
    }
    */

    if (
      // refresh sticky when it has spot
      sticky.spot
      // or refresh sticky when is orbit
      || sticky.orbit
      // || sticky.reverseDirection
      // or refresh sticky when state hasn't changed but sticky was refresh to normal state
      || (!stateChanged && setStickyNormal)
      // or refresh sticky when state has changed and state isn't normal
      // or state state has changed to normal state and sticky isn't already refresh
      || (stateChanged && (state !== 'normal' || !setStickyNormal))
    ) {
      this.refreshSticky(sticky, state, offsets);
    }

    // update sticky state when changed
    if (stateChanged) {
      sticky.state = state;

      // update siblings
      this.getStickySiblings(stickies, sticky).forEach(_sticky => {
        this.updateSticky(stickies, _sticky, false);
      });
    }
  }
}
