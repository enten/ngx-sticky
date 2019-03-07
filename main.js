(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ngx-sticky/src/lib/sticky-container.directive.ts":
/*!*******************************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky-container.directive.ts ***!
  \*******************************************************************/
/*! exports provided: NgxStickyContainerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStickyContainerDirective", function() { return NgxStickyContainerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _sticky_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sticky.service */ "./projects/ngx-sticky/src/lib/sticky.service.ts");
/* harmony import */ var _sticky_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sticky.utils */ "./projects/ngx-sticky/src/lib/sticky.utils.ts");





/**
 * @description
 * Defines a sticky container.
 *
 * @ngModule NgxStickyModule
 * @publicApi
 */
var NgxStickyContainerDirective = /** @class */ (function () {
    function NgxStickyContainerDirective(stickyService, elementRef) {
        this.stickyService = stickyService;
        this.elementRef = elementRef;
        this.offsetTop$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.offsetBottom$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
    }
    Object.defineProperty(NgxStickyContainerDirective.prototype, "offsetTop", {
        /**
         * Defines offset top inside the sticky container.
         */
        get: function () {
            return this.offsetTop$.getValue();
        },
        set: function (value) {
            value = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value);
            if (value !== this.offsetTop) {
                this.offsetTop$.next(value);
                this.update(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyContainerDirective.prototype, "offsetBottom", {
        /**
         * Defines offset bottom inside the sticky container.
         */
        get: function () {
            return this.offsetBottom$.getValue();
        },
        set: function (value) {
            value = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value);
            if (value !== this.offsetBottom) {
                this.offsetBottom$.next(value);
                this.update(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyContainerDirective.prototype, "element", {
        /**
         * Returns HTMLElement of the sticky container.
         */
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates stickies of the sticky container.
     *
     * @param fastCheck Fast update.
     */
    NgxStickyContainerDirective.prototype.update = function (fastCheck) {
        this.stickyService.updateContainer(this, fastCheck);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], NgxStickyContainerDirective.prototype, "offsetTop", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], NgxStickyContainerDirective.prototype, "offsetBottom", null);
    NgxStickyContainerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngxStickyContainer], [ngx-sticky-container], ngx-sticky-container',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sticky_service__WEBPACK_IMPORTED_MODULE_3__["NgxStickyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NgxStickyContainerDirective);
    return NgxStickyContainerDirective;
}());



/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky-engine.ts":
/*!******************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky-engine.ts ***!
  \******************************************************/
/*! exports provided: NgxStickyEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStickyEngine", function() { return NgxStickyEngine; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sticky_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sticky.utils */ "./projects/ngx-sticky/src/lib/sticky.utils.ts");



/**
 * @description
 * Defines a sticky engine. Implemented in universal way.
 *
 * @ngModule NgxStickyModule
 */
var NgxStickyEngine = /** @class */ (function () {
    function NgxStickyEngine(rendererFactory) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * Destroys a sticky: refresh to state `null` and remove ghost.
     *
     * @param sticky Sticky to destroy
     */
    NgxStickyEngine.prototype.destroySticky = function (sticky) {
        this.refreshSticky(sticky, null);
        this.removeStickyGhost(sticky);
        sticky.styleOriginal = null;
    };
    /**
     * Determines sticky state.
     *
     * @param sticky Sticky
     * @param scrollTop Scroll top position
     * @param offsets Top/bottom offsets
     * @returns Sticky state
     */
    NgxStickyEngine.prototype.determineStickyState = function (sticky, scrollTop, offsets) {
        var win = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getWindowRef"])();
        if (!win) {
            return null;
        }
        if (!offsets) {
            offsets = { top: 0, bottom: 0 };
        }
        var container = sticky.container;
        var ghost = sticky.spot || sticky.ghost;
        var ghostRect = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(ghost);
        var positionBottom = sticky.position === 'bottom';
        var spotHeight = sticky.spot ? ghostRect.height : 0;
        var viewportSize = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getViewportSize"])(win);
        var state = 'normal';
        var sticked = false;
        var stickedOffset = 0;
        if (positionBottom) {
            stickedOffset = ghostRect.top + offsets.top - scrollTop - viewportSize.height + ghostRect.height - spotHeight;
        }
        else {
            stickedOffset = scrollTop - ghostRect.top + offsets.top - spotHeight;
        }
        if (stickedOffset > 0) {
            state = 'sticked';
            sticked = true;
        } /* else if (sticky.spot) {
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
            var offset = offsets.top + offsets.bottom;
            var containerRect = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(container.element);
            var elementHeight = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(sticky.element).height;
            if (positionBottom) {
                if (containerRect.top > scrollTop + viewportSize.height - elementHeight - offset) {
                    state = 'stucked';
                }
            }
            else {
                if (containerRect.top + containerRect.height < scrollTop + elementHeight + offset) {
                    state = 'stucked';
                }
            }
        }
        return state;
    };
    /**
     * Returns offset to an element by considering stickies.
     *
     * @param stickies Sticky registry
     * @param element Target element
     * @param offsetTop Top offset
     * @returns Offset top
     */
    NgxStickyEngine.prototype.getScrollTopOffset = function (stickies, element, offsetTop) {
        var elementRect = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(element);
        var scrollTopPosition = this.getScrollTopPosition(stickies, element, offsetTop);
        return elementRect.top - scrollTopPosition;
    };
    /**
     * Returns scroll top position to scroll to an element and considering stickies.
     *
     * @param stickies Sticky registry
     * @param element Target element
     * @param offsetTop Top offset
     * @returns Scroll top position
     */
    NgxStickyEngine.prototype.getScrollTopPosition = function (stickies, element, offsetTop) {
        if (!offsetTop) {
            offsetTop = 0;
        }
        var elementRect = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(element);
        var scrollTop = elementRect.top - offsetTop;
        var maxStickyUnstacked = 0;
        for (var _i = 0, stickies_1 = stickies; _i < stickies_1.length; _i++) {
            var _sticky = stickies_1[_i];
            if (
            // skip stickies with enable is false
            !_sticky.enable
                // skip stickies with hidden is true
                || _sticky.hidden
                // skip stickies with position is bottom
                || _sticky.position !== 'top') {
                continue;
            }
            var stickyState = this.determineStickyState(_sticky, scrollTop);
            // when sticky has state sticked or stucked
            if (stickyState === 'sticked') {
                // substract height from stickies with stack is true
                if (_sticky.stack) {
                    scrollTop -= _sticky.element.offsetHeight;
                    // update the biggest sticky with stack is false
                }
                else if (_sticky.element.offsetHeight > maxStickyUnstacked) {
                    maxStickyUnstacked = _sticky.element.offsetHeight;
                }
            }
        }
        scrollTop -= maxStickyUnstacked;
        return scrollTop;
    };
    /**
     * Returns style of a sticky ghost.
     *
     * @param sticky Sticky
     */
    NgxStickyEngine.prototype.getStickyGhostStyle = function (sticky) {
        var win = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getWindowRef"])();
        if (!sticky.ghost || !win) {
            return null;
        }
        var element = sticky.element;
        var elementStyle = win.getComputedStyle(element);
        var ghostHeight = element.offsetHeight
            // substract vertical borders
            - (parseFloat(elementStyle.borderTopWidth) || 0)
            - (parseFloat(elementStyle.borderBottomWidth) || 0)
            // substract vertical paddings
            - (parseFloat(elementStyle.paddingTop) || 0)
            - (parseFloat(elementStyle.paddingBottom) || 0);
        var styles = {
            width: element.style.width,
            height: ghostHeight + "px",
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
    };
    /**
     * Returns siblings of the given sticky.
     *
     * @param stickies Sticky registry
     * @param sticky Sticky
     */
    NgxStickyEngine.prototype.getStickySiblings = function (stickies, sticky) {
        var _this = this;
        // reverse stickies when sticky position is bottom
        if (sticky.position !== 'top') {
            stickies = stickies.slice().reverse();
        }
        return stickies.filter(function (_sticky) { return _this.isStickySibling(sticky, _sticky); });
    };
    /**
     * Returns top/bottom offsets for siblings of the given sticky.
     *
     * @param stickies Sticky registry
     * @param sticky Sticky
     * @returns Top/bottom offsets of sticky siblings
     */
    NgxStickyEngine.prototype.getSiblingOffets = function (stickies, sticky) {
        var offsets = { top: 0, bottom: 0 };
        if (!sticky.enable) {
            return offsets;
        }
        var ghostRect = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(sticky.spot || sticky.ghost);
        var positionBottom = sticky.position === 'bottom';
        for (var _i = 0, stickies_2 = stickies; _i < stickies_2.length; _i++) {
            var _sticky = stickies_2[_i];
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
                || (_sticky.state === 'stucked' && _sticky.container !== sticky.container)) {
                continue;
            }
            var _ghostRect = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(_sticky.spot || _sticky.ghost);
            var _elementHeight = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(_sticky.element).height;
            // when _sticky is below (or upper for position bottom)
            if ((!positionBottom && _ghostRect.top > ghostRect.top)
                || (positionBottom && _ghostRect.top < ghostRect.top)) {
                // add offset bottom when stickies are in the same container
                if (_sticky.container === sticky.container) {
                    offsets.bottom += _elementHeight;
                }
            }
            else {
                offsets.top += _elementHeight;
            }
        }
        if (sticky.container) {
            var win = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getWindowRef"])();
            var containerStyle = win ? win.getComputedStyle(sticky.container.element) : {};
            offsets.bottom += positionBottom
                ? sticky.container.offsetTop + (parseFloat(containerStyle.paddingTop) || 0)
                : sticky.container.offsetBottom + (parseFloat(containerStyle.paddingBottom) || 0);
        }
        return offsets;
    };
    /**
     * Returns styles of the given sticky and state.
     *
     * @param sticky Sticky
     * @param state State
     * @param offsets Top/bottom offsets
     * @returns Styles of the sticky state
     */
    NgxStickyEngine.prototype.getStickyStyle = function (sticky, state, offsets) {
        var win = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getWindowRef"])();
        if (!win || !state) {
            return null;
        }
        if (!offsets) {
            offsets = { top: 0, bottom: 0 };
        }
        var positionBottom = sticky.position === 'bottom';
        // const presticked = state === 'presticked';
        if (state === 'normal' /* || presticked*/) {
            // this.showGhost(sticky);
            var ghostRect = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementRelativeRect"])(win, sticky.ghost);
            var ghostStyle = win.getComputedStyle(sticky.ghost);
            var elementWidth = ghostRect.width
                - ((parseFloat(ghostStyle.borderLeft) || 0) + (parseFloat(ghostStyle.borderRight) || 0))
                - ((parseFloat(ghostStyle.paddingLeft) || 0) + (parseFloat(ghostStyle.paddingRight) || 0));
            var styles = {
                position: 'absolute',
                width: elementWidth + "px",
                top: ghostRect.top + "px",
                bottom: '',
                left: ghostRect.left + "px",
                margin: '0px',
            };
            if (sticky.orbit /* || presticked */) {
                var ghostTop = -ghostRect.height;
                var ghostLeft = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(sticky.ghost).left;
                Object.assign(styles, {
                    position: 'fixed',
                    top: !positionBottom ? ghostTop + "px" : '',
                    bottom: positionBottom ? ghostTop + "px" : '',
                    left: ghostLeft + "px",
                });
            }
            return styles;
        }
        if (state === 'sticked') {
            var ghostRect = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(sticky.ghost);
            var ghostTop = offsets.top;
            return {
                position: 'fixed',
                top: !positionBottom ? ghostTop + "px" : '',
                bottom: positionBottom ? ghostTop + "px" : '',
                left: ghostRect.left + "px",
            };
        }
        if (state === 'stucked') {
            var containerRect = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(sticky.container.element);
            var ghostRect = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(sticky.ghost);
            var parentRect = sticky.ghost.offsetParent !== sticky.container.element
                ? Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(sticky.ghost.offsetParent)
                : containerRect;
            var elementLeft = ghostRect.left;
            var elementTop = positionBottom
                ? containerRect.top + offsets.bottom
                : containerRect.top + containerRect.height - ghostRect.height - offsets.bottom;
            if (parentRect) {
                elementTop -= parentRect.top;
                elementLeft -= parentRect.left;
            }
            return {
                position: 'absolute',
                top: elementTop + "px",
                bottom: '',
                left: elementLeft + "px",
            };
        }
        // throw new Error(`Invalid state: ${state}`);
        return null;
    };
    /**
     * Hides sticky ghost.
     *
     * @param sticky Sticky
     */
    NgxStickyEngine.prototype.hideStickyGhost = function (sticky) {
        if (!sticky.ghost) {
            return;
        }
        this.renderer.setStyle(sticky.ghost, 'display', 'none');
    };
    /**
     * Inserts sticky ghost.
     *
     * @param sticky Sticky
     */
    NgxStickyEngine.prototype.insertStickyGhost = function (sticky) {
        if (!Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getWindowRef"])() || sticky.ghost) {
            return;
        }
        sticky.ghost = this.renderer.createElement('div');
        this.renderer.addClass(sticky.ghost, 'ngx-sticky-ghost');
        this.renderer.setStyle(sticky.ghost, 'borderStyle', 'solid');
        this.renderer.setStyle(sticky.ghost, 'borderColor', 'transparent');
        this.renderer.insertBefore(sticky.element.parentElement, sticky.ghost, sticky.element);
    };
    /**
     * Returns `true` when given stickies are sibling.
     *
     * @param sticky Sticky
     * @param _sticky Sticky tested for sibling
     */
    NgxStickyEngine.prototype.isStickySibling = function (sticky, _sticky) {
        return _sticky !== sticky
            && _sticky.enable
            && _sticky.position === sticky.position
            && !_sticky.hidden;
        // && _sticky.stack
        // && _sticky.state !== 'normal';
    };
    /**
     * Refreshs sticky state.
     *
     * @param sticky Sticky
     * @param state State
     * @param offsets Top/bottom offsets
     */
    NgxStickyEngine.prototype.refreshSticky = function (sticky, state, offsets) {
        var win = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getWindowRef"])();
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
        var elementStyle = this.getStickyStyle(sticky, state, offsets);
        Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["setElementStyles"])(this.renderer, sticky.element, elementStyle);
    };
    /**
     * Refreshs sticky ghost.
     *
     * @param sticky Sticky
     */
    NgxStickyEngine.prototype.refreshStickyGhost = function (sticky) {
        var ghostStyle = this.getStickyGhostStyle(sticky);
        Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["setElementStyles"])(this.renderer, sticky.ghost, ghostStyle);
    };
    /**
     * Removes sticky ghost.
     *
     * @param sticky Sticky
     */
    NgxStickyEngine.prototype.removeStickyGhost = function (sticky) {
        if (sticky.ghost) {
            // this.renderer.removeChild(sticky.ghost.parentElement, sticky.ghost);
            sticky.ghost.remove();
            sticky.ghost = null;
        }
    };
    /**
     * Restore original styles of the given sticky.
     *
     * @param sticky Sticky
     */
    NgxStickyEngine.prototype.restoreStickyStyleOriginal = function (sticky) {
        Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["setElementStyles"])(this.renderer, sticky.element, sticky.styleOriginal);
    };
    /**
     * Saves origin styles of the given sticky.
     *
     * @param sticky Sticky
     */
    NgxStickyEngine.prototype.saveStickyStyleOriginal = function (sticky) {
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
    };
    /**
     * Shows sticky ghost.
     *
     * @param sticky Sticky
     */
    NgxStickyEngine.prototype.showStickyGhost = function (sticky) {
        if (!sticky.ghost) {
            this.insertStickyGhost(sticky);
            this.refreshStickyGhost(sticky);
        }
        else if (sticky.ghost.style.display === 'none') {
            this.renderer.setStyle(sticky.ghost, 'display', 'block');
            this.refreshStickyGhost(sticky);
        }
    };
    /**
     * Update sticky.
     *
     * @param stickies Sticky registry
     * @param sticky Sticky
     * @param fastCheck Fast update
     */
    NgxStickyEngine.prototype.updateSticky = function (stickies, sticky, fastCheck) {
        var _this = this;
        var win = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getWindowRef"])();
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
                this.getStickySiblings(stickies, sticky).forEach(function (_sticky) {
                    _this.updateSticky(stickies, _sticky, fastCheck);
                });
            }
            return;
        }
        var setStickyNormal = false;
        // refresh sticky state to null and after to normal when fastCheck is false
        if (!fastCheck) {
            this.refreshSticky(sticky, null);
            this.refreshSticky(sticky, 'normal');
            setStickyNormal = true;
            // refresh sticky state to normal only when fastCheck is true and sticky has no previous state
        }
        else if (!sticky.state) {
            this.refreshSticky(sticky, 'normal');
            setStickyNormal = true;
        }
        var previousState = sticky.state;
        var offsets = this.getSiblingOffets(stickies, sticky);
        var scrollTop = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getViewportScrollPosition"])(win).top;
        var state = this.determineStickyState(sticky, scrollTop, offsets);
        var stateChanged = state !== previousState;
        // animate sticking when state is sticked and sticky has spot or is an orbit
        if (state === 'sticked' && (sticky.spot || sticky.orbit)) {
            var stickyRect = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(sticky.ghost);
            var ghostRect = sticky.spot ? Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getElementAbsoluteRect"])(sticky.spot) : stickyRect;
            var spotHeight = sticky.spot ? ghostRect.height : 0;
            var stickedOffset = 0;
            if (sticky.position === 'bottom') {
                var viewportSize = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_2__["getViewportSize"])(win);
                stickedOffset = ghostRect.top + offsets.top - scrollTop - viewportSize.height + ghostRect.height - spotHeight;
            }
            else {
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
            || (stateChanged && (state !== 'normal' || !setStickyNormal))) {
            this.refreshSticky(sticky, state, offsets);
        }
        // update sticky state when changed
        if (stateChanged) {
            sticky.state = state;
        }
        // update siblings when sticky has previous state and no state
        // or when sticky has state and no previous state
        if ((previousState && !state) || (!previousState && state)) {
            this.getStickySiblings(stickies, sticky).forEach(function (_sticky) {
                _this.updateSticky(stickies, _sticky, fastCheck);
            });
        }
    };
    NgxStickyEngine = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]])
    ], NgxStickyEngine);
    return NgxStickyEngine;
}());



/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky.directive.ts":
/*!*********************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky.directive.ts ***!
  \*********************************************************/
/*! exports provided: NgxStickyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStickyDirective", function() { return NgxStickyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sticky_container_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sticky-container.directive */ "./projects/ngx-sticky/src/lib/sticky-container.directive.ts");
/* harmony import */ var _sticky_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sticky.service */ "./projects/ngx-sticky/src/lib/sticky.service.ts");
/* harmony import */ var _sticky_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sticky.utils */ "./projects/ngx-sticky/src/lib/sticky.utils.ts");







/**
 * @description
 * Defines a sticky.
 *
 * @ngModule NgxStickyModule
 * @publicApi
 */
var NgxStickyDirective = /** @class */ (function () {
    function NgxStickyDirective(container, stickyService, elementRef, renderer, changeDetectorRef, ngZone) {
        this.container = container;
        this.stickyService = stickyService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.enable$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.orbit$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.position$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('top');
        this.spot$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.stack$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        /**
         * Emit sticky itself when its state changed.
         */
        this.sitkcyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        /** Emits when the component is destroyed. */
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(NgxStickyDirective.prototype, "enable", {
        /**
         * Enable/disable sticky.
         *
         * Default value: `true`
         */
        get: function () {
            return this.enable$.getValue();
        },
        set: function (value) {
            value = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
            if (value !== this.enable) {
                this.enable$.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "orbit", {
        /**
         * Indicate sticky element is an orbit.
         *
         * An orbit is a sticky element which isn't visible until
         * it's sticked.
         *
         * Generally an orbit spot on another element to be sticked.
         *
         * Default value: `false`
         */
        get: function () {
            return this.orbit$.getValue();
        },
        set: function (value) {
            value = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
            if (value !== this.orbit) {
                this.orbit$.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "position", {
        /**
         * Position of the sticky; one of 'top' or 'bottom'.
         *
         * Default value: `'top'`
         */
        get: function () {
            return this.position$.getValue();
        },
        set: function (value) {
            value = value === 'bottom' ? 'bottom' : 'top';
            if (value !== this.position) {
                this.position$.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "spot", {
        /**
         * Reference to an element used to determine sticky state.
         *
         * The sticky directive will stick element only when spot
         * isn't visible.
         *
         * Default value: `null`
         */
        get: function () {
            return this.spot$.getValue();
        },
        set: function (value) {
            if (value !== this.spot) {
                this.spot$.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "stack", {
        /**
         * Enable/disable sticky element to be stacked with previous sticked elements.
         *
         * Default value: `true`
         */
        get: function () {
            return this.stack$.getValue();
        },
        set: function (value) {
            value = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
            if (value !== this.stack) {
                this.stack$.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "cssClassSticky", {
        get: function () { return this.enable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "cssClassStickyHasSpot", {
        get: function () { return this.enable && !!this.spot; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "cssClassStickyPreticked", {
        get: function () { return this.enable && this.orbit; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "cssClassStickyTop", {
        get: function () { return this.enable && this.position !== 'bottom'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "cssClassStickyBottom", {
        get: function () { return this.enable && this.position === 'bottom'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "cssClassStickyNormal", {
        get: function () { return this.enable && this.state === 'normal'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "cssClassStickySticked", {
        // @HostBinding('class.ngx-sticky--presticked')
        // get cssClassStickyPresticked() { return this.enable && this.state === 'presticked'; }
        get: function () { return this.enable && this.state === 'sticked'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "cssClassStickyStucked", {
        get: function () { return this.enable && this.state === 'stucked'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "element", {
        /**
         * Returns HTMLElement of the sticky.
         */
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "hidden", {
        /**
         * Returns `true` when element isn't visible.
         */
        get: function () {
            return !(this.elementRef && this.elementRef.nativeElement && this.elementRef.nativeElement.offsetHeight);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStickyDirective.prototype, "state", {
        /**
         * State of the sticky.
         */
        get: function () {
            return this.state$.getValue();
        },
        set: function (value) {
            this.state$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    NgxStickyDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.state$.subscribe(function (_state) { return _this.ngZone.run(function () {
            _this.changeDetectorRef.detectChanges();
            _this.sitkcyChange.next(_this);
        }); });
    };
    NgxStickyDirective.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
        if (this.monitoringSubscription) {
            this.monitoringSubscription.unsubscribe();
            this.monitoringSubscription = null;
        }
        this.stickyService.unregister(this);
    };
    NgxStickyDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.stickyService.register(this);
        this.ngZone.runOutsideAngular(function () { return _this._initMonitoring(); });
    };
    NgxStickyDirective.prototype.update = function (fastCheck) {
        this.stickyService.update(this, fastCheck);
    };
    NgxStickyDirective.prototype._initMonitoring = function () {
        var _this = this;
        var win = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_6__["getWindowRef"])();
        if (!win) {
            return null;
        }
        if (!this.monitoring$) {
            this.monitoring$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.enable$, this.orbit$, this.position$, this.stack$, this.spot$, Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_6__["fromImageLoadEvents"])(this.elementRef.nativeElement), Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_6__["fromImageLoadEvents"])(this.spot)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$), 
            // Arbitrary throttle time to animation frame, less than a frame at 60fps (around 16.67ms)
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), 
            // Arbitrary set fastCheck to false
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        }
        if (!this.monitoringSubscription) {
            this.monitoringSubscription = this.monitoring$.subscribe(function (fastCheck) {
                _this.update(fastCheck);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], NgxStickyDirective.prototype, "enable", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], NgxStickyDirective.prototype, "orbit", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], NgxStickyDirective.prototype, "position", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", HTMLElement),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [HTMLElement])
    ], NgxStickyDirective.prototype, "spot", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], NgxStickyDirective.prototype, "stack", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxStickyDirective.prototype, "sitkcyChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ngx-sticky'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgxStickyDirective.prototype, "cssClassSticky", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ngx-sticky--has-spot'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgxStickyDirective.prototype, "cssClassStickyHasSpot", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ngx-sticky--is-orbit'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgxStickyDirective.prototype, "cssClassStickyPreticked", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ngx-sticky--top'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgxStickyDirective.prototype, "cssClassStickyTop", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ngx-sticky--bottom'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgxStickyDirective.prototype, "cssClassStickyBottom", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ngx-sticky--normal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgxStickyDirective.prototype, "cssClassStickyNormal", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ngx-sticky--sticked'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgxStickyDirective.prototype, "cssClassStickySticked", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ngx-sticky--stucked'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgxStickyDirective.prototype, "cssClassStickyStucked", null);
    NgxStickyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngxSticky], [ngx-sticky], ngx-sticky',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return _sticky_container_directive__WEBPACK_IMPORTED_MODULE_4__["NgxStickyContainerDirective"]; }))),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sticky_container_directive__WEBPACK_IMPORTED_MODULE_4__["NgxStickyContainerDirective"],
            _sticky_service__WEBPACK_IMPORTED_MODULE_5__["NgxStickyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], NgxStickyDirective);
    return NgxStickyDirective;
}());



/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky.module.ts":
/*!******************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky.module.ts ***!
  \******************************************************/
/*! exports provided: NgxStickyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStickyModule", function() { return NgxStickyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sticky_container_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sticky-container.directive */ "./projects/ngx-sticky/src/lib/sticky-container.directive.ts");
/* harmony import */ var _sticky_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sticky.directive */ "./projects/ngx-sticky/src/lib/sticky.directive.ts");





/**
 * @description
 * Adds sticky directives and providers.
 *
 * Managing sticky elements is one of the hardest parts of building web applications.
 *
 * The NgxStickyDirective try to solve problems when maning sticky elements.
 *
 * @usageNotes
 * NgxStickyModule can be imported multiple times: once per lazily-loaded bundle.
 *
 * ```
 * @NgModule({
 *   imports: [NgxStickyModule]
 * })
 * class MyNgModule {}
 * ```
 *
 * @publicApi
 */
var NgxStickyModule = /** @class */ (function () {
    function NgxStickyModule() {
    }
    NgxStickyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _sticky_directive__WEBPACK_IMPORTED_MODULE_4__["NgxStickyDirective"],
                _sticky_container_directive__WEBPACK_IMPORTED_MODULE_3__["NgxStickyContainerDirective"],
            ],
            exports: [
                _sticky_directive__WEBPACK_IMPORTED_MODULE_4__["NgxStickyDirective"],
                _sticky_container_directive__WEBPACK_IMPORTED_MODULE_3__["NgxStickyContainerDirective"],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        })
    ], NgxStickyModule);
    return NgxStickyModule;
}());



/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky.providers.ts":
/*!*********************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky.providers.ts ***!
  \*********************************************************/
/*! exports provided: NGX_STICKY_REGISTRY, NGX_STICKY_REGISTRY_FACTORY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_REGISTRY", function() { return NGX_STICKY_REGISTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_REGISTRY_FACTORY", function() { return NGX_STICKY_REGISTRY_FACTORY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * A DI Token representing the list of stickies registered with NgxStickyService.

 * @publicApi
 */
var NGX_STICKY_REGISTRY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NGX_STICKY_REGISTRY', {
    providedIn: 'root',
    factory: NGX_STICKY_REGISTRY_FACTORY,
});
/**
 * Factory used to create an empty sticky registy.
 */
function NGX_STICKY_REGISTRY_FACTORY() {
    return [];
}


/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky.service.ts":
/*!*******************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky.service.ts ***!
  \*******************************************************/
/*! exports provided: NgxStickyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStickyService", function() { return NgxStickyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sticky_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sticky-engine */ "./projects/ngx-sticky/src/lib/sticky-engine.ts");
/* harmony import */ var _sticky_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sticky.providers */ "./projects/ngx-sticky/src/lib/sticky.providers.ts");
/* harmony import */ var _sticky_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sticky.utils */ "./projects/ngx-sticky/src/lib/sticky.utils.ts");







/**
 * @description
 * Defines a sticky manager. Implemented in universal way.
 *
 * @ngModule NgxStickyModule
 * @publicApi
 */
var NgxStickyService = /** @class */ (function () {
    function NgxStickyService(stickies, engine, ngZone) {
        this.stickies = stickies;
        this.engine = engine;
        this.ngZone = ngZone;
        /** Emits when the service is destroyed. */
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.init();
    }
    /**
     * Initializes service.
     */
    NgxStickyService.prototype.init = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () { return _this._initMonitoringAll(); });
    };
    /**
     * Destroys service.
     */
    NgxStickyService.prototype.destroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
        if (this.monitoringAllSubscription) {
            this.monitoringAllSubscription.unsubscribe();
            this.monitoringAllSubscription = null;
        }
        for (var _i = 0, _a = this.stickies; _i < _a.length; _i++) {
            var sticky = _a[_i];
            this.unregister(sticky);
        }
    };
    /**
     * Determines sticky state.
     *
     * @param sticky Sticky
     * @param scrollTop Scroll top position
     * @param offsets Top/bottom offsets
     * @returns Sticky state
     */
    NgxStickyService.prototype.determineState = function (sticky, scrollTop, offsets) {
        return this.engine.determineStickyState(sticky, scrollTop, offsets);
    };
    /**
     * Returns offset to an element by considering stickies.
     *
     * @param stickies Sticky registry
     * @param element Target element
     * @param offsetTop Top offset
     * @returns Offset top
     */
    NgxStickyService.prototype.getScrollTopOffset = function (element, offsetTop) {
        return this.engine.getScrollTopOffset(this.stickies, element, offsetTop);
    };
    /**
     * Returns scroll top position to scroll to an element and considering stickies.
     *
     * @param stickies Sticky registry
     * @param element Target element
     * @param offsetTop Top offset
     * @returns Scroll top position
     */
    NgxStickyService.prototype.getScrollTopPosition = function (element, offsetTop) {
        return this.engine.getScrollTopPosition(this.stickies, element, offsetTop);
    };
    /**
     * Returns top/bottom offsets for siblings of the given sticky.
     *
     * @param stickies Sticky registry
     * @param sticky Sticky
     * @returns Top/bottom offsets of sticky siblings
     */
    NgxStickyService.prototype.getSiblingOffets = function (sticky) {
        return this.engine.getSiblingOffets(this.stickies, sticky);
    };
    /**
     * Registers sticky.
     *
     * @param sticky Sticky
     */
    NgxStickyService.prototype.register = function (sticky) {
        if (this.destroyed$.isStopped) {
            return;
        }
        if (this.stickies.indexOf(sticky) === -1) {
            this.stickies.push(sticky);
        }
    };
    /**
     * Scroll to the given element and considering stickies.
     *
     * @param element Element
     * @param offsetTop Top offset
     */
    NgxStickyService.prototype.scrollToElement = function (element, offsetTop) {
        var win = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_6__["getWindowRef"])();
        if (!win) {
            return;
        }
        if (typeof element === 'string') {
            element = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_6__["queryElementSelector"])(win.document, element);
        }
        if (!element) {
            return;
        }
        var scrollPosition = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_6__["getViewportScrollPosition"])(win);
        var scrollTop = this.engine.getScrollTopPosition(this.stickies, element, offsetTop);
        win.scrollTo(scrollPosition.left, scrollTop);
    };
    /**
     * Update sticky state.
     *
     * @param sticky Sticky
     * @param fastCheck Fast update
     */
    NgxStickyService.prototype.update = function (sticky, fastCheck) {
        this.engine.updateSticky(this.stickies, sticky, fastCheck);
    };
    /**
     * Update all stickies.
     *
     * @param fastCheck Fast update
     */
    NgxStickyService.prototype.updateAll = function (fastCheck) {
        var _this = this;
        this.stickies.forEach(function (_sticky) { return _this.update(_sticky, fastCheck); });
    };
    /**
     * Update stickies in a container.
     *
     * @param container Sticky container
     * @param fastCheck Fast update
     */
    NgxStickyService.prototype.updateContainer = function (container, fastCheck) {
        var _this = this;
        var stickies = this.stickies.filter(function (_sticky) { return _sticky.container === container; });
        stickies.forEach(function (_sticky) { return _this.update(_sticky, fastCheck); });
    };
    /**
     * Update sticky siblings.
     *
     * @param sticky Sticky
     * @param fastCheck Fast update
     */
    NgxStickyService.prototype.updateSiblings = function (sticky, fastCheck) {
        var _this = this;
        var stickies = this.engine.getStickySiblings(this.stickies, sticky);
        stickies.forEach(function (_sticky) { return _this.update(_sticky, fastCheck); });
    };
    /**
     * Unregisters sticky.
     *
     * @param sticky Sticky
     */
    NgxStickyService.prototype.unregister = function (sticky) {
        var stickyIndex = this.stickies.indexOf(sticky);
        if (stickyIndex !== -1) {
            this.stickies.splice(stickyIndex, 1);
        }
        this.engine.destroySticky(sticky);
    };
    NgxStickyService.prototype._initMonitoringAll = function () {
        var _this = this;
        var win = Object(_sticky_utils__WEBPACK_IMPORTED_MODULE_6__["getWindowRef"])();
        if (!win) {
            return null;
        }
        if (!this.monitoringAll$) {
            this.monitoringAll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(win, 'load').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])()), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(win, 'orientationchange').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])()), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(win, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])()), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(win, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])()), rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$), 
            // Arbitrary throttle time to animation frame, less than a frame at 60fps (around 16.67ms)
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        }
        if (!this.monitoringAllSubscription) {
            this.monitoringAllSubscription = this.monitoringAll$.subscribe(function (fastCheck) {
                _this.updateAll(fastCheck);
            });
        }
    };
    NgxStickyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sticky_providers__WEBPACK_IMPORTED_MODULE_5__["NGX_STICKY_REGISTRY"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array, _sticky_engine__WEBPACK_IMPORTED_MODULE_4__["NgxStickyEngine"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], NgxStickyService);
    return NgxStickyService;
}());



/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky.utils.ts":
/*!*****************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky.utils.ts ***!
  \*****************************************************/
/*! exports provided: WINDOW_REF, getWindowRef, setWindowRef, coerceBooleanProperty, coerceNumberProperty, _isNumberValue, fromImageLoadEvents, getElementAbsoluteRect, getElementRelativeRect, getViewportScrollPosition, getViewportSize, queryElementSelector, setElementStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_REF", function() { return WINDOW_REF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowRef", function() { return getWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWindowRef", function() { return setWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromImageLoadEvents", function() { return fromImageLoadEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementAbsoluteRect", function() { return getElementAbsoluteRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementRelativeRect", function() { return getElementRelativeRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewportScrollPosition", function() { return getViewportScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewportSize", function() { return getViewportSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryElementSelector", function() { return queryElementSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setElementStyles", function() { return setElementStyles; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var WINDOW_REF = typeof window !== 'undefined' ? window : null;
var getWindowRef = function () { return WINDOW_REF; };
var setWindowRef = function (win) { return WINDOW_REF = win; };
/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(value)) && !isNaN(Number(value)); // tslint:disable-line: no-any
}
function fromImageLoadEvents(element) {
    if (!element) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])();
    }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observable) {
        var images = [];
        var loadListener;
        var addLoadListener;
        var removeLoadListener;
        loadListener = function (event) {
            var image = event.target;
            removeLoadListener(image);
            observable.next(image);
        };
        addLoadListener = function (image) {
            images.push(image);
            image.addEventListener('load', loadListener);
        };
        removeLoadListener = function (image) {
            images.splice(images.indexOf(image), 1);
            image.removeEventListener('load', loadListener);
        };
        if (element instanceof HTMLImageElement) {
            addLoadListener(element);
        }
        else {
            element.querySelectorAll('img').forEach(addLoadListener);
        }
        return function () { return images.forEach(removeLoadListener); };
    });
}
function getElementAbsoluteRect(element) {
    if (!element) {
        return null;
    }
    var width = Math.max(element.offsetWidth, element.clientWidth, element.scrollWidth);
    var height = Math.max(element.offsetHeight, element.clientHeight, element.scrollHeight);
    var top = 0;
    var left = 0;
    var currentElement = element;
    do {
        top += currentElement.offsetTop || 0;
        left += currentElement.offsetLeft || 0;
        currentElement = currentElement.offsetParent;
    } while (currentElement);
    return {
        top: top,
        left: left,
        width: width,
        height: height,
    };
}
function getElementRelativeRect(win, element) {
    if (!element) {
        return null;
    }
    var width = Math.max(element.offsetWidth, element.clientWidth, element.scrollWidth);
    var height = Math.max(element.offsetHeight, element.clientHeight, element.scrollHeight);
    var top = 0;
    var left = 0;
    var currentElement = element;
    var currentElementStyle;
    do {
        currentElementStyle = currentElement !== element ? win.getComputedStyle(currentElement) : {};
        if (currentElementStyle.position === 'relative') {
            break;
        }
        if (currentElementStyle.position !== 'absolute') {
            top += currentElement.offsetTop || 0;
            left += currentElement.offsetLeft || 0;
        }
        currentElement = currentElement.offsetParent;
    } while (currentElement);
    return {
        top: top,
        left: left,
        width: width,
        height: height,
    };
}
function getViewportScrollPosition(win) {
    // While we can get a reference to the fake document
    // during SSR, it doesn't have getBoundingClientRect.
    if (!win) {
        return { top: 0, left: 0 };
    }
    // The top-left-corner of the viewport is determined by the scroll position of the document
    // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
    // whether `document.body` or `document.documentElement` is the scrolled element, so reading
    // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
    // `document.documentElement` works consistently, where the `top` and `left` values will
    // equal negative the scroll position.
    var documentElement = win.document.documentElement;
    var documentRect = documentElement.getBoundingClientRect();
    var top = -documentRect.top
        || win.document.body.scrollTop
        || win.scrollY
        || documentElement.scrollTop
        || 0;
    var left = -documentRect.left
        || win.document.body.scrollLeft
        || win.scrollX
        || documentElement.scrollLeft
        || 0;
    return { top: top, left: left };
}
function getViewportSize(win) {
    if (!win) {
        return { width: 0, height: 0 };
    }
    return {
        width: win.innerWidth,
        height: win.innerHeight,
    };
}
function queryElementSelector(doc, selector) {
    var nodeList = doc.querySelectorAll(selector);
    if (!nodeList.length) {
        return null;
    }
    return nodeList.item(0);
}
// export function setElementClasses(
//   renderer: Renderer2,
//   element: HTMLElement,
//   classes: { [prop: string]: boolean },
// ): void {
//   if (!element || !classes) {
//     return;
//   }
//   const classNames = Object.keys(classes);
//   for (const className of classNames) {
//     const value = classes[className];
//     if (value) {
//       renderer.addClass(element, className);
//     } else {
//       renderer.removeClass(element, className);
//     }
//   }
// }
function setElementStyles(renderer, element, styles) {
    if (!element || !styles) {
        return;
    }
    var propKeys = Object.keys(styles);
    for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
        var prop = propKeys_1[_i];
        var value = styles[prop];
        if (value) {
            renderer.setStyle(element, prop, value);
        }
        else {
            renderer.removeStyle(element, prop);
        }
    }
}


/***/ }),

/***/ "./projects/ngx-sticky/src/public_api.ts":
/*!***********************************************!*\
  !*** ./projects/ngx-sticky/src/public_api.ts ***!
  \***********************************************/
/*! exports provided: NgxStickyContainerDirective, NgxStickyEngine, NgxStickyDirective, NgxStickyModule, NGX_STICKY_REGISTRY, NGX_STICKY_REGISTRY_FACTORY, NgxStickyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_sticky_container_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/sticky-container.directive */ "./projects/ngx-sticky/src/lib/sticky-container.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyContainerDirective", function() { return _lib_sticky_container_directive__WEBPACK_IMPORTED_MODULE_0__["NgxStickyContainerDirective"]; });

/* harmony import */ var _lib_sticky_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/sticky-engine */ "./projects/ngx-sticky/src/lib/sticky-engine.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyEngine", function() { return _lib_sticky_engine__WEBPACK_IMPORTED_MODULE_1__["NgxStickyEngine"]; });

/* harmony import */ var _lib_sticky_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/sticky.directive */ "./projects/ngx-sticky/src/lib/sticky.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyDirective", function() { return _lib_sticky_directive__WEBPACK_IMPORTED_MODULE_2__["NgxStickyDirective"]; });

/* harmony import */ var _lib_sticky_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/sticky.module */ "./projects/ngx-sticky/src/lib/sticky.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyModule", function() { return _lib_sticky_module__WEBPACK_IMPORTED_MODULE_3__["NgxStickyModule"]; });

/* harmony import */ var _lib_sticky_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/sticky.providers */ "./projects/ngx-sticky/src/lib/sticky.providers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_REGISTRY", function() { return _lib_sticky_providers__WEBPACK_IMPORTED_MODULE_4__["NGX_STICKY_REGISTRY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_REGISTRY_FACTORY", function() { return _lib_sticky_providers__WEBPACK_IMPORTED_MODULE_4__["NGX_STICKY_REGISTRY_FACTORY"]; });

/* harmony import */ var _lib_sticky_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/sticky.service */ "./projects/ngx-sticky/src/lib/sticky.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyService", function() { return _lib_sticky_service__WEBPACK_IMPORTED_MODULE_5__["NgxStickyService"]; });

/*
 * Public API Surface of @enten/ngx-sticky
 */








/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h1><a href=\"https://github.com/enten/ngx-sticky\">@enten/ngx-sticky</a> Demo!</h1>\n</section>\n\n<section>\n  <h3>Features:</h3>\n  <ul>\n    <li>Stick all the things!</li>\n    <li>Super smooth!</li>\n    <li>Tested in real world projects</li>\n    <li>Support for <strong>Angular Universal</strong></li>\n    <li>Prevents page-jumping when switching to sticky mode</li>\n    <li>No jQuery or other dependencies - <strong>pure Angular</strong> solution</li>\n    <li>Support for boundaries to make elements stop.</li>\n  </ul>\n  <h3>Usage:</h3>\n  <pre><code>&lt;div ngx-sticky&gt;\n  I am sticky!\n&lt;/div&gt;</code></pre>\n  <h3>More:</h3>\n  <div>\n    For more information see: <a href=\"https://github.com/enten/ngx-sticky\">https://github.com/enten/ngx-sticky</a>.\n  </div>\n</section>\n\n<section class=\"example\">\n  <h3>Sticky</h3>\n  <pre class=\"code\"><code>&lt;p ngx-sticky&gt;\n  Sticky\n&lt;/p&gt;</code></pre>\n  <div ngx-sticky-container class=\"demo\">\n    <div>\n      <p ngx-sticky>Sticky</p>\n    </div>\n  </div>\n</section>\n\n<section class=\"example\">\n  <h3>Sticky inside container</h3>\n  <pre class=\"code\"><code>&lt;div ngx-sticky-container&gt;\n  &lt;p ngx-sticky&gt;\n    Sticky inside container\n  &lt;/p&gt;\n&lt;/div&gt;</code></pre>\n  <div ngx-sticky-container class=\"demo\">\n    <div>\n      <p></p>\n      <p ngx-sticky>Sticky inside container</p>\n      <p></p>\n      <p></p>\n    </div>\n  </div>\n</section>\n\n<section class=\"example\">\n  <h3>Sticky position bottom</h3>\n  <pre class=\"code\"><code>&lt;div ngx-sticky-container&gt;\n  &lt;p ngx-sticky position=&quot;bottom&quot;&gt;\n    Sticky position bottom\n  &lt;/p&gt;\n&lt;/div&gt;</code></pre>\n  <div ngx-sticky-container offsetTop=\"0\" offsetBottom=\"200\" class=\"demo\">\n    <div class=\"bottom\">\n      <p></p>\n      <p></p>\n      <p ngx-sticky position=\"bottom\">Sticky position bottom</p>\n      <p></p>\n    </div>\n  </div>\n</section>\n\n<section class=\"example\">\n  <h3>Sticky stack true</h3>\n  <pre class=\"code\"><code>&lt;div ngx-sticky-container&gt;\n  &lt;p ngx-sticky stack&gt;\n    Sticky 1\n  &lt;/p&gt;\n  &lt;p ngx-sticky stack&gt;\n    Sticky 2\n  &lt;/p&gt;\n  &lt;p ngx-sticky stack&gt;\n    Sticky 3\n  &lt;/p&gt;\n&lt;/div&gt;</code></pre>\n  <div ngx-sticky-container class=\"demo\">\n    <div>\n      <p></p>\n      <p ngx-sticky stack>Sticky 1</p>\n      <p></p>\n      <p></p>\n      <p ngx-sticky stack>Sticky 2</p>\n      <p></p>\n      <p></p>\n      <p ngx-sticky stack>Sticky 3</p>\n      <p></p>\n      <p></p>\n    </div>\n  </div>\n</section>\n\n<section class=\"example\">\n  <h3>Sticky stack false</h3>\n  <pre class=\"code\"><code>&lt;div ngx-sticky-container&gt;\n  &lt;p ngx-sticky stack=&quot;false&quot;&gt;\n    Sticky 1\n  &lt;/p&gt;\n  &lt;p ngx-sticky stack=&quot;false&quot;&gt;\n    Sticky 2\n  &lt;/p&gt;\n  &lt;p ngx-sticky stack=&quot;false&quot;&gt;\n    Sticky 3\n  &lt;/p&gt;\n&lt;/div&gt;</code></pre>\n  <div ngx-sticky-container class=\"demo\">\n    <div>\n      <p></p>\n      <p ngx-sticky stack=\"false\">Sticky 1</p>\n      <p></p>\n      <p></p>\n      <p ngx-sticky stack=\"false\">Sticky 2</p>\n      <p></p>\n      <p></p>\n      <p ngx-sticky stack=\"false\">Sticky 3</p>\n      <p></p>\n      <p></p>\n    </div>\n  </div>\n</section>\n\n<section class=\"example\">\n  <h3>Sticky orbit</h3>\n  <pre class=\"code\"><code>&lt;div ngx-sticky-container&gt;\n  &lt;p ngx-sticky orbit&gt;\n    Sticky orbit\n  &lt;/p&gt;\n&lt;/div&gt;</code></pre>\n  <div ngx-sticky-container class=\"demo\">\n    <div>\n      <p></p>\n      <p ngx-sticky orbit>Sticky orbit</p>\n      <p></p>\n      <p></p>\n    </div>\n  </div>\n</section>\n\n<section class=\"example\">\n  <h3>Sticky spot</h3>\n  <pre class=\"code\"><code>&lt;div ngx-sticky-container&gt;\n  &lt;p ngx-sticky [spot]=\"spot\"&gt;\n    Sticky spot\n  &lt;/p&gt;\n  &lt;p #spot&gt;\n    Spot\n  &lt;/p&gt;\n&lt;/div&gt;</code></pre>\n  <div ngx-sticky-container class=\"demo\">\n    <div>\n      <p></p>\n      <p ngx-sticky [spot]=\"spot\">Sticky spot</p>\n      <p></p>\n      <p #spot style=\"padding: 5em 1em; text-align: center\">\n        Spot<br>\n      </p>\n      <p></p>\n      <p></p>\n      <p></p>\n      <p></p>\n    </div>\n  </div>\n</section>\n\n<section class=\"example\">\n  <h3>Scroll</h3>\n  <pre class=\"code\"><code>constructor(readonly stickyService: NgxStickyService) {{ '{' }} {{ '}' }}\n\nscrollToAnchor() {{ '{' }}\n  this.stickyService.scrollToElement('#scroll-target');\n{{ '}' }}</code></pre>\n  <div ngx-sticky-container class=\"demo\">\n    <div>\n      <p></p>\n      <p ngx-sticky style=\"text-align: center;\">\n        <button (click)=\"scrollToAnchor('scroll-target', true)\">Scroll to anchor natively</button>\n        <button (click)=\"scrollToAnchor('scroll-target')\">Scroll to anchor with StickyService</button>\n      </p>\n      <p></p>\n      <p ngx-sticky>Sticky</p>\n      <p></p>\n      <p ngx-sticky>Sticky</p>\n      <p></p>\n      <p id=\"scroll-target\" style=\"padding: 0.5em 1em 9.5em; text-align: center\">\n        Scroll target<br>\n      </p>\n      <p></p>\n      <p></p>\n      <p></p>\n      <p></p>\n    </div>\n  </div>\n</section>\n\n<section class=\"example\">\n  <p ngx-sticky><strong>fyi:</strong> Boundary is optional - I'll scroll all the way down. </p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <div style=\"height: 200vh\"></div>\n  <p></p>\n</section>\n\n<section>\n  <p>thanks to <a href=\"https://github.com/w11k/angular-sticky-things\">@w11k/angular-sticky-things</a></p>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  background: #fcfff5;\n  color: #193441;\n  padding: 2em; }\n  section.example {\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh; }\n  section .code {\n    background: #fff;\n    border: 1px solid grey;\n    border-radius: 3px;\n    color: #24292e;\n    max-width: 100%;\n    padding: 0.5em 1em;\n    overflow: auto; }\n  section .demo {\n    flex-grow: 1;\n    position: relative;\n    background: #f1f1f1;\n    padding: 1em; }\n  section .demo > div {\n    position: absolute;\n    top: 1em;\n    left: 1em;\n    right: 1em; }\n  section .demo > div.bottom {\n      top: auto;\n      bottom: 1em; }\n  section p {\n    min-height: 1em;\n    padding: 0.5em 1em;\n    background: #3e606f;\n    color: #fcfff5; }\n  section p[ngx-sticky] {\n      background: #193441; }\n  section:nth-child(2n+0) {\n    background: #d1dbbd; }\n  section:nth-child(3n+0) {\n    background: #3e606f;\n    color: #d1dbbd; }\n  section:nth-child(3n+0) p {\n      background: #fcfff5;\n      color: #3e606f; }\n  section:nth-child(3n+0) p[ngx-sticky] {\n        background: #d1dbbd; }\n  section:nth-child(4n+0) {\n    background: #193441;\n    color: #d1dbbd; }\n  section:nth-child(4n+0) p {\n      background: #fcfff5;\n      color: #193441; }\n  section:nth-child(4n+0) p[ngx-sticky] {\n        background: #d1dbbd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0ZXZlbi9jb2RlL25neC1zdGlja3kvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVksRUFBQTtFQUhkO0lBTUksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCLEVBQUE7RUFUckI7SUFhSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7RUFuQmxCO0lBdUJJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtFQTFCaEI7SUE4Qkksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVSxFQUFBO0VBakNkO01Bb0NNLFNBQVM7TUFDVCxXQUFXLEVBQUE7RUFyQ2pCO0lBMENJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWMsRUFBQTtFQTdDbEI7TUFnRE0sbUJBQW1CLEVBQUE7RUFoRHpCO0lBcURJLG1CQUFtQixFQUFBO0VBckR2QjtJQXlESSxtQkFBbUI7SUFDbkIsY0FBYyxFQUFBO0VBMURsQjtNQTZETSxtQkFBbUI7TUFDbkIsY0FBYyxFQUFBO0VBOURwQjtRQWlFUSxtQkFBbUIsRUFBQTtFQWpFM0I7SUF1RUksbUJBQW1CO0lBQ25CLGNBQWMsRUFBQTtFQXhFbEI7TUEyRU0sbUJBQW1CO01BQ25CLGNBQWMsRUFBQTtFQTVFcEI7UUErRVEsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZjZmZmNTtcbiAgY29sb3I6ICMxOTM0NDE7XG4gIHBhZGRpbmc6IDJlbTtcbiAgXG4gICYuZXhhbXBsZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cblxuICAuY29kZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBjb2xvcjogIzI0MjkyZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLmRlbW8ge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBwYWRkaW5nOiAxZW07XG4gIH1cblxuICAuZGVtbyA+IGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMWVtO1xuICAgIGxlZnQ6IDFlbTtcbiAgICByaWdodDogMWVtO1xuXG4gICAgJi5ib3R0b20ge1xuICAgICAgdG9wOiBhdXRvO1xuICAgICAgYm90dG9tOiAxZW07XG4gICAgfVxuICB9XG5cbiAgcCB7XG4gICAgbWluLWhlaWdodDogMWVtO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBiYWNrZ3JvdW5kOiAjM2U2MDZmO1xuICAgIGNvbG9yOiAjZmNmZmY1O1xuICBcbiAgICAmW25neC1zdGlja3ldIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxOTM0NDE7XG4gICAgfVxuICB9XG5cbiAgJjpudGgtY2hpbGQoMm4rMCkge1xuICAgIGJhY2tncm91bmQ6ICNkMWRiYmQ7XG4gIH1cblxuICAmOm50aC1jaGlsZCgzbiswKSB7XG4gICAgYmFja2dyb3VuZDogIzNlNjA2ZjtcbiAgICBjb2xvcjogI2QxZGJiZDtcblxuICAgIHAge1xuICAgICAgYmFja2dyb3VuZDogI2ZjZmZmNTtcbiAgICAgIGNvbG9yOiAjM2U2MDZmO1xuICAgICAgXG4gICAgICAmW25neC1zdGlja3ldIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2QxZGJiZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOm50aC1jaGlsZCg0biswKSB7XG4gICAgYmFja2dyb3VuZDogIzE5MzQ0MTtcbiAgICBjb2xvcjogI2QxZGJiZDtcblxuICAgIHAge1xuICAgICAgYmFja2dyb3VuZDogI2ZjZmZmNTtcbiAgICAgIGNvbG9yOiAjMTkzNDQxO1xuXG4gICAgICAmW25neC1zdGlja3ldIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2QxZGJiZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_ngx_sticky_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/ngx-sticky/src/public_api */ "./projects/ngx-sticky/src/public_api.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(stickyService) {
        this.stickyService = stickyService;
    }
    AppComponent.prototype.scrollToAnchor = function (anchorId, natively) {
        if (natively) {
            document.getElementById(anchorId).scrollIntoView(true);
            return;
        }
        this.stickyService.scrollToElement('#' + anchorId, 0);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_projects_ngx_sticky_src_public_api__WEBPACK_IMPORTED_MODULE_2__["NgxStickyService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _projects_ngx_sticky_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/ngx-sticky/src/public_api */ "./projects/ngx-sticky/src/public_api.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _projects_ngx_sticky_src_public_api__WEBPACK_IMPORTED_MODULE_3__["NgxStickyModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/steven/code/ngx-sticky/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map