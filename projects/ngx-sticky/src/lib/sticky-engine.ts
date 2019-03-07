import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

import {
  NgxSticky,
  NgxStickyGhostStyle,
  NgxStickyOffsets,
  NgxStickyState,
  NgxStickyStyle,
} from './sticky.types';
import {
  getElementAbsoluteRect,
  getElementRelativeRect,
  getViewportScrollPosition,
  getViewportSize,
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

    sticky.styleOriginal = null;
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

    const container = sticky.container;
    const ghost = sticky.spot || sticky.ghost;
    const ghostRect = getElementAbsoluteRect(ghost);
    const positionBottom = sticky.position === 'bottom';
    const spotHeight = sticky.spot ? ghostRect.height : 0;
    const viewportSize = getViewportSize(win);
    let state: NgxStickyState = 'normal';
    let sticked = false;
    let stickedOffset = 0;

    if (positionBottom) {
      stickedOffset = ghostRect.top + offsets.top - scrollTop - viewportSize.height + ghostRect.height - spotHeight;
    } else {
      stickedOffset = scrollTop - ghostRect.top + offsets.top - spotHeight;
    }

    if (stickedOffset > 0) {
      state = 'sticked';
      sticked = true;
    }/* else if (sticky.spot) {
      const stickyRect = getElementAbsoluteRect(sticky.ghost);

      if (positionBottom) {
        stickedOffset = stickyRect.top + offsets.top - scrollTop - viewportSize.height;
      } else {
        stickedOffset = scrollTop - stickyRect.top + offsets.top - stickyRect.height;
      }

      if (stickedOffset > 0) {
        state = 'presticked';
      }
    }*/

    if (sticked && container) {
      const offset = offsets.top + offsets.bottom;
      const containerRect = getElementAbsoluteRect(container.element);
      const elementHeight = getElementAbsoluteRect(sticky.element).height;

      if (positionBottom) {
        if (containerRect.top > scrollTop + viewportSize.height - elementHeight - offset) {
          state = 'stucked';
        }
      } else {
        if (containerRect.top + containerRect.height < scrollTop + elementHeight + offset) {
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
  getScrollTopOffset(stickies: NgxSticky[], element: HTMLElement, offsetTop?: number): number {
    const elementRect = getElementAbsoluteRect(element);
    const scrollTopPosition = this.getScrollTopPosition(stickies, element, offsetTop);

    return elementRect.top - scrollTopPosition;
  }

  /**
   * Returns scroll top position to scroll to an element and considering stickies.
   *
   * @param stickies Sticky registry
   * @param element Target element
   * @param offsetTop Top offset
   * @returns Scroll top position
   */
  getScrollTopPosition(stickies: NgxSticky[], element: HTMLElement, offsetTop?: number): number {
    if (!offsetTop) {
      offsetTop = 0;
    }

    const elementRect = getElementAbsoluteRect(element);
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

      const stickyState = this.determineStickyState(_sticky, scrollTop);

      // when sticky has state sticked or stucked
      if (stickyState === 'sticked') {
        // substract height from stickies with stack is true
        if (_sticky.stack) {
          scrollTop -= _sticky.element.offsetHeight;
        // update the biggest sticky with stack is false
        } else if (_sticky.element.offsetHeight > maxStickyUnstacked) {
          maxStickyUnstacked = _sticky.element.offsetHeight;
        }
      }
    }

    scrollTop -= maxStickyUnstacked;

    return scrollTop;
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
    if (sticky.position !== 'top') {
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
  getSiblingOffets(stickies: NgxSticky[], sticky: NgxSticky): NgxStickyOffsets {
    const offsets = { top: 0, bottom: 0 };

    if (!sticky.enable) {
      return offsets;
    }

    const ghostRect = getElementAbsoluteRect(sticky.spot || sticky.ghost);
    const positionBottom = sticky.position === 'bottom';

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

      const _ghostRect = getElementAbsoluteRect(_sticky.spot || _sticky.ghost);
      const _elementHeight = getElementAbsoluteRect(_sticky.element).height;

      // when _sticky is below (or upper for position bottom)
      if (
        (!positionBottom && _ghostRect.top > ghostRect.top)
        || (positionBottom && _ghostRect.top < ghostRect.top)
      ) {
        // add offset bottom when stickies are in the same container
        if (_sticky.container === sticky.container) {
          offsets.bottom += _elementHeight;
        }
      } else {
        offsets.top += _elementHeight;
      }
    }

    if (sticky.container) {
      const win = getWindowRef();
      const containerStyle = win ? win.getComputedStyle(sticky.container.element) : {} as CSSStyleDeclaration;

      offsets.bottom += positionBottom
        ? sticky.container.offsetTop + (parseFloat(containerStyle.paddingTop) || 0)
        : sticky.container.offsetBottom + (parseFloat(containerStyle.paddingBottom) || 0);
    }

    return offsets;
  }

  /**
   * Returns styles of the given sticky and state.
   *
   * @param sticky Sticky
   * @param state State
   * @param offsets Top/bottom offsets
   * @returns Styles of the sticky state
   */
  getStickyStyle(sticky: NgxSticky, state: NgxStickyState, offsets?: NgxStickyOffsets): Partial<NgxStickyStyle> {
    const win = getWindowRef();

    if (!win || !state) {
      return null;
    }

    if (!offsets) {
      offsets = { top: 0, bottom: 0 };
    }

    const positionBottom = sticky.position === 'bottom';
    // const presticked = state === 'presticked';

    if (state === 'normal'/* || presticked*/) {
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
      const ghostTop = offsets.top;

      return {
        position: 'fixed',
        top: !positionBottom ? `${ghostTop}px` : '',
        bottom: positionBottom ? `${ghostTop}px` : '',
        left: `${ghostRect.left}px`,
      };
    }

    if (state === 'stucked') {
      const containerRect = getElementAbsoluteRect(sticky.container.element);
      const ghostRect = getElementAbsoluteRect(sticky.ghost);
      const parentRect = sticky.ghost.offsetParent !== sticky.container.element
        ? getElementAbsoluteRect(sticky.ghost.offsetParent as HTMLElement)
        : containerRect;

      let elementLeft = ghostRect.left;
      let elementTop = positionBottom
        ? containerRect.top + offsets.bottom
        : containerRect.top + containerRect.height - ghostRect.height - offsets.bottom;

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
      this.restoreStickyStyleOriginal(sticky);

      return;
    }

    this.saveStickyStyleOriginal(sticky);

    // show sticky ghost when state is normal
    if (state === 'normal') {
      this.showStickyGhost(sticky);
    }

    const elementStyle = this.getStickyStyle(sticky, state, offsets);

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
  restoreStickyStyleOriginal(sticky: NgxSticky): void {
    setElementStyles(this.renderer, sticky.element, sticky.styleOriginal);
  }

  /**
   * Saves origin styles of the given sticky.
   *
   * @param sticky Sticky
   */
  saveStickyStyleOriginal(sticky: NgxSticky): void {
    if (!sticky.styleOriginal) {
      sticky.styleOriginal = {
        position: sticky.element.style.position,
        width: sticky.element.style.width,
        top: sticky.element.style.top,
        bottom: sticky.element.style.bottom,
        left: sticky.element.style.left,
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
    const offsets = this.getSiblingOffets(stickies, sticky);
    const scrollTop = getViewportScrollPosition(win).top;
    const state = this.determineStickyState(sticky, scrollTop, offsets);
    const stateChanged = state !== previousState;

    // animate sticking when state is sticked and sticky has spot or is an orbit
    if (state === 'sticked' && (sticky.spot || sticky.orbit)) {
      const stickyRect = getElementAbsoluteRect(sticky.ghost);
      const ghostRect = sticky.spot ? getElementAbsoluteRect(sticky.spot) : stickyRect;
      const spotHeight = sticky.spot ? ghostRect.height : 0;
      let stickedOffset = 0;

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

    if (
      // refresh sticky when it has spot
      sticky.spot
      // or refresh sticky when is orbit
      || sticky.orbit
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
    }

    // update siblings when sticky has previous state and no state
    // or when sticky has state and no previous state
    if ((previousState && !state) || (!previousState && state)) {
      this.getStickySiblings(stickies, sticky).forEach(_sticky => {
        this.updateSticky(stickies, _sticky, fastCheck);
      });
    }
  }
}
