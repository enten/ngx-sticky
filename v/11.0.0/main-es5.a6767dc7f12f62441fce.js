(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\enten\code\ngx-sticky\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true
      };
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _enten_ngx_sticky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @enten/ngx-sticky */
      "24qi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AppComponent_span_813_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " stickyDisabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_ng_container_814_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " stickyPosition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "=\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function AppComponent_ng_container_815_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " stickyDirection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "=\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function AppComponent_span_881_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " stickyUnstacked");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_span_1014_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " stickyDisabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_span_1015_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " stickyUnstacked");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_ng_container_1016_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " stickyOffsetTop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "=\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.apiContainerStickyOffsetTop);
        }
      }

      function AppComponent_ng_container_1017_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " stickyOffsetBottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "=\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.apiContainerStickyOffsetBottom);
        }
      }

      function AppComponent_span_1189_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " intersectionDisabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(changeDetectorRef, win) {
          _classCallCheck(this, AppComponent);

          this.changeDetectorRef = changeDetectorRef;
          this.win = win;
          this.apiBoundaryStickyDisabled = false;
          this.apiBoundaryStickyOrbit = false;
          this.apiBoundaryStickyDirection = 'down';
          this.apiBoundaryStickyPosition = 'top';
          this.apiContainerStickyDisabled = false;
          this.apiContainerStickyOrbit = false;
          this.apiContainerStickyDirection = 'down';
          this.apiContainerStickyOffsetTop = 0;
          this.apiContainerStickyOffsetBottom = 0;
          this.apiContainerStickyPosition = 'top';
          this.apiInViewportStickyDisabled = false;
          this.apiInViewportStickyOrbit = false;
          this.apiInViewportStickyDirection = 'down';
          this.apiInViewportStickyPosition = 'top';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var smallBreakpoint$ = Object(_enten_ngx_sticky__WEBPACK_IMPORTED_MODULE_1__["fromMediaQuery"])(this.win, '(min-width: 640px)');
            this._smallBreakpointSubscription = smallBreakpoint$.subscribe(function (mqlEvent) {
              _this._isSmallScreen = !mqlEvent.matches;

              _this.changeDetectorRef.markForCheck();
            });
            this.changeDetectorRef.detectChanges();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._smallBreakpointSubscription) {
              this._smallBreakpointSubscription.unsubscribe();

              this._smallBreakpointSubscription = null;
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_enten_ngx_sticky__WEBPACK_IMPORTED_MODULE_1__["NGX_STICKY_WINDOW"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1208,
        vars: 92,
        consts: [["ngx-sticky", "", 1, "navigation"], [1, "container"], ["href", "https://github.com/enten/ngx-sticky"], [1, "header"], [1, "features", "container", "text"], [1, "installation", "container", "text"], ["data-header", "shell", 1, "code"], ["data-header", "ts", 1, "code"], [1, "ts-keyword"], [1, "ts-sign"], [1, "ts-user-declaration"], [1, "ts-string"], [1, "ts-decorator"], [1, "usage", "container", "text"], ["data-header", "html", 1, "code"], [1, "html-tag"], [1, "html-attr"], [1, "more", "container", "text"], [1, "examples"], [1, "example"], [1, "sidepanes"], ["ngx-sticky-boundary", "", 1, "controls"], ["ngx-sticky", "", "data-header", "html", 1, "code", 3, "stickyDisabled"], [1, "html-sign"], ["type", "checkbox", 3, "value", "change"], ["ngx-sticky-boundary", "", 1, "preview"], ["ngx-sticky", ""], ["exampleSticky1", "ngxSticky"], ["exampleStickyOutsideBoundary", "ngxSticky"], ["ngx-sticky-boundary", "", 2, "margin", "5rem auto", "height", "30rem", "width", "80%"], ["type", "checkbox", 3, "checked", "change"], [1, "preview"], ["ngx-sticky-boundary", "", "stickyUnstacked", "", 2, "margin", "5rem auto", "width", "80%"], ["exampleBoundaryUnstacked", "ngxStickyBoundary"], [2, "height", "5rem"], ["ngx-sticky", "", "stickyPosition", "top", "stickyDirection", "down"], [1, "html-attr-value"], ["ngx-sticky-boundary", "", "offsetTop", "0", "offsetBottom", "200", 1, "preview"], [2, "height", "800px"], ["ngx-sticky", "", "stickyPosition", "bottom", "stickyDirection", "up"], ["ngx-sticky", "", "stickyPosition", "bottom", "stickyDirection", "down"], ["ngx-sticky-container", "", 1, "preview", 2, "position", "relative", "overflow", "auto", "height", "40rem"], [2, "height", "12rem"], ["ngx-sticky-boundary", "", 2, "position", "relative"], [2, "height", "10rem"], ["ngx-sticky", "", "stickyPosition", "bottom"], [2, "height", "36rem"], [1, "example", "sticky-classes"], [1, "css-prop"], [1, "css-value"], [1, "css-user-value"], [2, "padding", "2rem 1rem"], ["ngx-sticky", "", "stickyClasses", "", "stickyDisabled", "false", 1, "header-sticky"], ["exampleStickyClasses", "ngxSticky"], ["type", "number", "value", "1500", 1, "html-attr-value", 2, "width", "5rem", 3, "change"], ["stickyWithSpotBlankHeight", ""], ["ngx-sticky", "", 3, "stickySpot"], ["exampleStickyWithSpot", "ngxSticky"], [2, "padding", "2em 1em", "background", "lightblue"], ["spot", ""], [1, "api"], ["ngx-sticky", "", 3, "stickyDisabled"], [1, "controls-header"], [1, "controls-group"], [1, "controls-group-header"], [3, "value", "change"], ["value", "top"], ["value", "bottom"], ["value", "up"], ["value", "down"], [3, "click"], [2, "height", "15rem"], ["apiSticky", "ngxSticky"], ["class", "html-attr", 4, "ngIf"], [4, "ngIf"], ["ngx-sticky-boundary", ""], ["apiBoundary", "ngxStickyBoundary"], ["ngx-sticky", "", 3, "stickyDisabled", "stickyPosition", "stickyDirection"], [1, "controls"], ["type", "number", 3, "value", "change"], ["ngx-sticky-container", "", 1, "preview", 2, "position", "relative", "height", "40rem", "overflow", "auto", 3, "stickyOffsetTop", "stickyOffsetBottom"], ["apiContainer", "ngxStickyContainer"], [2, "height", "30rem"], ["id", "apiContainerScrollTarget", 2, "background", "lightblue", "opacity", "1"], [2, "height", "40rem"], ["type", "text", 3, "value", "change"], ["ngx-sticky-container", "", 1, "preview", 2, "position", "relative", "height", "40rem", "overflow", "auto"], ["container", "ngxStickyContainer"], ["ngx-in-viewport", "", 2, "opacity", "1", "padding", "8rem 1rem", "background", "lightblue", "text-align", "center"], ["apiInViewport", "ngxInViewport"], ["ngx-sticky", "", "stickyPosition", "bottom", "stickyDirection", "up", 2, "margin-bottom", "0"], ["ngx-sticky", "", "stickyDirection", "up", "stickyPosition", "bottom", 1, "footer"], ["href", "http://enten.fr"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "header", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Stick all the things!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Super smooth!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tested in real world projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Support for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Angular Universal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Prevents page-jumping when switching to sticky mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "No jQuery or other dependencies - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "pure Angular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " solution");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Support for boundaries to make elements stop.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Installation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "with npm:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "pre", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "npm install @enten/ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "with yarn:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "pre", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "yarn add @enten/ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Now import the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "NgxStickyModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " in the corresponding Module");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "pre", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "import");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "NgxStickyModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "from");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "@enten/ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "';");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "@NgModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n  imports");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, ": [");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "NgxStickyModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " \n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "],");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " \n  declarations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ": [],");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n  providers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, ": [],");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "export");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "class");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "SomeModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "section", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "pre", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "<div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\n  I am sticky!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "section", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " For more information see: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "https://github.com/enten/ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "section", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Examples");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "pre", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "stickyDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_151_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](161);

              return _r0.config$.nextKeyValue("disabled", $event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "\n  I am sticky!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " I am sticky! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Sticky inside boundary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "pre", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "stickyDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_180_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](212);

              return _r1.config$.nextKeyValue("disabled", $event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\n    I am sticky!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "<div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "ngx-sticky-boundary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\n    Sticky inside boundary\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p", 26, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "I am sticky!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Sticky inside boundary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Sticky boundary unstacked");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "pre", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "<div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "ngx-sticky-boundary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "stickyUnstacked");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_234_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](272);

              return _r2.config$.nextKeyValue("unstacked", $event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, ">Sticky 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, ">Sticky 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, ">Sticky 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 32, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Sticky 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Sticky 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Sticky 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Sticky position bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "pre", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "<div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "ngx-sticky-boundary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "stickyPosition");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "stickyDirection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Sticky bottom direction up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "stickyPosition");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "stickyDirection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Sticky bottom direction down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "p", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, " Sticky bottom direction up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, " Sticky bottom direction down ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Sticky container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "pre", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "<div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "ngx-sticky-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "style");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "height: 400px; overflow: auto;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "\n>\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "<header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "stickyPosition");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "stickyDirection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "</header>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "<section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "ngx-sticky-boundary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "Sticky 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Sticky 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "Sticky 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "</section>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "<footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "stickyPosition");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "stickyDirection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "Footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "</footer>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "header", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](498, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "section", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](500, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "Sticky 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Sticky 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](506, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "p", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "Sticky 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](509, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](510, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "footer", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "Footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "Sticky classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "pre", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "<div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "class");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "<header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, "class");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, "</header>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "<div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "#headerSticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "stickyClasses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "class");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "header-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, "</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "<p></p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "<p></p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "<p></p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, "<style>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](594, "position");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, "relative");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "position");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "relative");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](604, ";\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "z-index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "display");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, ";\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, "position");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, "absolute");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, ";\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, "transform");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, "translateY(-100%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, ";\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, "transition");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, "transform 0.3s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, ";\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](639, "100%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, ";\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "z-index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "display");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, "block");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, "transform");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, "translateY(0%)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, "</style>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "header", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](664, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "div", 52, 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](667);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](668, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](669, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](670, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](673, "Sticky with spot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "pre", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, "<div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, "ngx-sticky-boundary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](684, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](685, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](687, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](690, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, "[stickySpot]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](695, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](697, "spot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](701, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "\n    Sticky with spot\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](704, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, "<div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](710, "[style.height.px]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "input", 54, 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_713_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](738);

              ctx.changeDetectorRef.detectChanges();
              return _r5.update();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](718, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, "</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](725, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, "#spot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](729, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, "Spot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, "</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "p", 56, 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, "Sticky with spot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](740, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "div", 58, 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, " Spot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](744, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "section", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "API");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](751, "NgxStickyDirective");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, " ngx-sticky ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759, " inputs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "stickyDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_763_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](803);

              return _r7.config$.nextKeyValue("disabled", $event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "stickyPosition");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "select", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_767_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](803);

              return _r7.config$.nextKeyValue("position", $event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "option", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](769, "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "option", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, "stickyDirection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "select", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_775_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](803);

              return _r7.config$.nextKeyValue("direction", $event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "option", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, "up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "option", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, "down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, " outputs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](785, "stickyState");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](789, " methods ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, "enableSticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_793_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](803);

              return _r7.enableSticky();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](794, "call");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](795, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](797, "disableSticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_798_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](803);

              return _r7.disableSticky();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, "call");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](801, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "p", 26, 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](804, " I am sticky! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](805, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "pre", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](809, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](810, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](812, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](813, AppComponent_span_813_Template, 2, 0, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](814, AppComponent_ng_container_814_Template, 9, 0, "ng-container", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](815, AppComponent_ng_container_815_Template, 9, 0, "ng-container", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](818, "\n  I am sticky!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](823, "NgxStickyBoundaryDirective");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, " ngx-sticky-boundary ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, " inputs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](834, "stickyUnstacked");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_835_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](862);

              return _r11.config$.nextKeyValue("unstacked", $event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](837, " ngx-sticky ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "stickyDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_842_listener() {
              return ctx.apiBoundaryStickyDisabled = !ctx.apiBoundaryStickyDisabled;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](845, "stickyPosition");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "select", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_846_listener($event) {
              return ctx.apiBoundaryStickyPosition = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](847, "option", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](848, "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "option", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](850, "bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, "stickyDirection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "select", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_854_listener($event) {
              return ctx.apiBoundaryStickyDirection = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "option", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, "up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "option", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](858, "down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](860, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "div", 75, 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](863, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "p", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](865, " Sticky 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](866, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "p", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](868, " Sticky 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](869, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "p", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](871, " Sticky 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](872, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](873, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "pre", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "<div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](878, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](880, "ngx-sticky-boundary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](881, AppComponent_span_881_Template, 2, 0, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](883, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](884, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](885, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](886, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](887, "  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](889, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](891, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](892, "Sticky 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](894, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](895, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](897, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](898, "  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](899, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](900, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](902, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](903, "Sticky 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](904, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](905, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](906, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](908, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](909, "  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](911, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](913, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](914, "Sticky 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](916, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](917, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](918, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](919, "</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](920, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](922, "NgxStickyContainerDirective");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](924, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](925, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](927, " ngx-sticky-container ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](928, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](930, " inputs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](931, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](933, "stickyDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](934, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_934_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](989);

              return _r13.config$.nextKeyValue("disabled", $event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](936, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, "stickyOffsetTop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "input", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_938_listener($event) {
              return ctx.apiContainerStickyOffsetTop = +$event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](939, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](940, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](941, "stickyOffsetBottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](942, "input", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_942_listener($event) {
              return ctx.apiContainerStickyOffsetBottom = +$event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](945, "stickyUnstacked");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](946, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_946_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](989);

              return _r13.config$.nextKeyValue("unstacked", $event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](947, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](948, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](949, " methods ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](950, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](952, "enableStickies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_953_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](989);

              return _r13.enableStickies();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](954, "call");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](955, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](956, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](957, "disableStickies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](958, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_958_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](989);

              return _r13.disableStickies();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](959, "call");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](960, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](962, "scrollToTop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_963_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](989);

              return _r13.scrollToTop("#apiContainerScrollTarget");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](964, "call");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](966, " ngx-sticky ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](968, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](970, "stickyDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_971_listener() {
              return ctx.apiContainerStickyDisabled = !ctx.apiContainerStickyDisabled;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](972, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](973, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](974, "stickyPosition");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "select", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_975_listener($event) {
              return ctx.apiContainerStickyPosition = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](976, "option", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](977, "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](978, "option", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](979, "bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](980, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](981, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](982, "stickyDirection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](983, "select", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_983_listener($event) {
              return ctx.apiContainerStickyDirection = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "option", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](985, "up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](986, "option", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](987, "down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](988, "div", 80, 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](990, "header", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, " Header ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](992, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](993, "p", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](994, " Sticky 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](995, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](996, "p", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](997, " Sticky 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](998, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](999, "p", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1000, " Sticky 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1001, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1002, "p", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1003, "Scroll target");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1004, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1005, "footer", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1006, " Footer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1007, "pre", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1008, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1009, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1010, "<div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1011, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1012, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1013, "ngx-sticky-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1014, AppComponent_span_1014_Template, 2, 0, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1015, AppComponent_span_1015_Template, 2, 0, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1016, AppComponent_ng_container_1016_Template, 9, 1, "ng-container", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1017, AppComponent_ng_container_1017_Template, 9, 1, "ng-container", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1018, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1019, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1020, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1021, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1022, "<header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1023, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1025, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1026, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1027, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1028, "\n    Header\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1029, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1030, "</header>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1031, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1032, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1033, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1034, "  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1036, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1037, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1038, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1039, "Sticky 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1040, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1041, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1042, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1043, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1044, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1045, "  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1046, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1047, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1048, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1049, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1050, "Sticky 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1051, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1052, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1053, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1054, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1055, "<p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1056, "  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1057, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1058, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1059, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1060, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1061, "Sticky 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1062, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1063, "</p>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1064, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1065, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1066, "<footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1067, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1068, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1069, "ngx-sticky");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1070, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1071, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1072, "stickyPosition");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1073, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1074, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1075, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1076, "bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1077, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1078, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1079, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1080, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1081, "stickyDirection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1082, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1083, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1084, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1085, "up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1086, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1087, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1088, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1089, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1090, "\n    Footer\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1091, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1092, "</footer>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1093, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1094, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1095, "</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1096, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1097, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1098, "NgxInViewportDirective");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1099, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1100, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1101, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1102, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1103, " ngx-in-viewport ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1104, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1105, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1106, " inputs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1107, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1108, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1109, "intersectionDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1110, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_1110_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1174);

              return _r19.config$.nextKeyValue("disabled", $event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1111, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1112, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1113, "intersectionThresholds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1114, "input", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_1114_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1174);

              return _r19.config$.nextKeyValue("thresholds", $event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1115, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1116, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1117, " methods ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1118, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1120, "enableIntersection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1121, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1121_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1174);

              return _r19.enableIntersection();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1122, "call");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1123, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1124, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1125, "disableIntersection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1126, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1126_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

              var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1174);

              return _r19.disableIntersection();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1127, "call");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1128, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1129, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1130, " outputs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1131, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1132, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1133, "intersectionState");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1134);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1135, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1136, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1137, "intersectionThreshold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1138);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1140, " ngx-sticky ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1141, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1142, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1143, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1144, "stickyDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1145, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_1145_listener() {
              return ctx.apiInViewportStickyDisabled = !ctx.apiInViewportStickyDisabled;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1146, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1147, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1148, "stickyPosition");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1149, "select", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_1149_listener($event) {
              return ctx.apiInViewportStickyPosition = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1150, "option", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1151, "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1152, "option", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1153, "bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1154, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1155, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1156, "stickyDirection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "select", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_1157_listener($event) {
              return ctx.apiInViewportStickyDirection = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1158, "option", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1159, "up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1160, "option", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1161, "down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1162, "div", 86, 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1164, "header", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1165, " Header ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1166, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1167, "p", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1168, " Sticky 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1169, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1170, "p", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1171, " Sticky 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1172, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1173, "p", 88, 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1175, " In viewport element ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1176, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1177, "p", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1178, " Sticky 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1179, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1180, "footer", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1181, " Footer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1182, "pre", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1183, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1184, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1185, "<div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1186, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1187, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1188, "ngx-in-viewport");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1189, AppComponent_span_1189_Template, 2, 0, "span", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1190, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1191, " intersectionThresholds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1192, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1193, "=\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1194, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1195);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1196, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1197, "\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1198, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1199, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1200, "\n  in viewport element\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1201, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1202, "</div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1203, "footer", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1204, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1205, "made with \u2615 by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1206, "a", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1207, "enten");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](161);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](212);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](272);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](666);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](714);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](742);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](803);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](862);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](989);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1174);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("{");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("}");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", "{", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "}", ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("{ }");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx._isSmallScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _r0.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx._isSmallScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _r1.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx._isSmallScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _r2.config.unstacked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx._isSmallScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](286);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n    ", "{{", " headerSticky.className ", "}}", "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n.container ", "{", "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](";\n", "}", "\n.header ", "{", "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](";\n", "}", "\n.header-sticky ", "{", "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](";\n", "}", "\n.header-sticky:not(.ngx-sticky--disabled) ", "{", "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](";\n", "}", "\n.header-sticky:not(.ngx-sticky--normal) ", "{", "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](";\n", "}", "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](".ngx-sticky--", _r3.state, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx._isSmallScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickySpot", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", _r4.value, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx._isSmallScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _r7.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _r7.config.position);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _r7.config.direction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r7.state, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.config.position === "bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.config.direction === "up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx._isSmallScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _r11.config.unstacked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.apiBoundaryStickyDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.apiBoundaryStickyPosition);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.apiBoundaryStickyDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx.apiBoundaryStickyDisabled)("stickyPosition", ctx.apiBoundaryStickyPosition)("stickyDirection", ctx.apiBoundaryStickyDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx.apiBoundaryStickyDisabled)("stickyPosition", ctx.apiBoundaryStickyPosition)("stickyDirection", ctx.apiBoundaryStickyDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx.apiBoundaryStickyDisabled)("stickyPosition", ctx.apiBoundaryStickyPosition)("stickyDirection", ctx.apiBoundaryStickyDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.config.unstacked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _r13.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.apiContainerStickyOffsetTop);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.apiContainerStickyOffsetBottom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _r13.config.unstacked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.apiContainerStickyDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.apiContainerStickyPosition);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.apiContainerStickyDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyOffsetTop", ctx.apiContainerStickyOffsetTop)("stickyOffsetBottom", ctx.apiContainerStickyOffsetBottom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx.apiContainerStickyDisabled)("stickyPosition", ctx.apiContainerStickyPosition)("stickyDirection", ctx.apiContainerStickyDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx.apiContainerStickyDisabled)("stickyPosition", ctx.apiContainerStickyPosition)("stickyDirection", ctx.apiContainerStickyDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx.apiContainerStickyDisabled)("stickyPosition", ctx.apiContainerStickyPosition)("stickyDirection", ctx.apiContainerStickyDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.config.unstacked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apiContainerStickyOffsetTop);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apiContainerStickyOffsetBottom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _r19.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _r19.config.thresholds.join(","));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r19.state || "null", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r19._intersectionThreshold, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.apiInViewportStickyDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.apiInViewportStickyPosition);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.apiInViewportStickyDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx.apiInViewportStickyDisabled)("stickyPosition", ctx.apiInViewportStickyPosition)("stickyDirection", ctx.apiInViewportStickyDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx.apiInViewportStickyDisabled)("stickyPosition", ctx.apiInViewportStickyPosition)("stickyDirection", ctx.apiInViewportStickyDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stickyDisabled", ctx.apiInViewportStickyDisabled)("stickyPosition", ctx.apiInViewportStickyPosition)("stickyDirection", ctx.apiInViewportStickyDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r19.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r19.config.thresholds.join(","));
          }
        },
        directives: [_enten_ngx_sticky__WEBPACK_IMPORTED_MODULE_1__["NgxStickyDirective"], _enten_ngx_sticky__WEBPACK_IMPORTED_MODULE_1__["NgxStickyBoundaryDirective"], _enten_ngx_sticky__WEBPACK_IMPORTED_MODULE_1__["NgxStickyContainerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _enten_ngx_sticky__WEBPACK_IMPORTED_MODULE_1__["NgxInViewportDirective"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n\n.navigation[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n  z-index: 5;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  background: rgba(207, 216, 220, 0.5);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);\n  font-size: 2.4rem;\n}\n\n.navigation[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline;\n  font-size: inherit;\n  margin: 0;\n}\n\n.header[_ngcontent-%COMP%], .api[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n  background: #eceff1;\n}\n\n.header[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: rgba(157, 166, 169, 0.8);\n  color: #eceff1;\n}\n\n.examples[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .api[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 12rem;\n}\n\n.sidepanes[_ngcontent-%COMP%]   .controls-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 1rem 0;\n}\n\n.sidepanes[_ngcontent-%COMP%]   .controls-group[_ngcontent-%COMP%] {\n  padding: 0;\n  line-height: 1.6em;\n  margin-bottom: 1.6rem;\n}\n\n.sidepanes[_ngcontent-%COMP%]   .controls-group-header[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.sidepanes[_ngcontent-%COMP%]   .controls-group[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 2rem;\n  min-width: 18rem;\n}\n\n.sidepanes[_ngcontent-%COMP%]   .controls-group[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > input[type=number][_ngcontent-%COMP%], .sidepanes[_ngcontent-%COMP%]   .controls-group[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > input[type=text][_ngcontent-%COMP%] {\n  width: 5rem;\n}\n\n.sidepanes[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.sidepanes[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\n  margin: 0;\n  min-height: 40rem;\n  padding: 1rem;\n  background: #fff;\n}\n\n.sidepanes[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], .sidepanes[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%], .sidepanes[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  min-height: 1rem;\n  padding: 0.5rem 1rem;\n}\n\n.sidepanes[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], .sidepanes[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  background: #cfd8dc;\n  z-index: 2;\n}\n\n.sidepanes[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   [ngx-sticky-boundary][_ngcontent-%COMP%] {\n  background: #eceff1;\n  padding: 1rem;\n}\n\n.sidepanes[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  min-height: 1rem;\n  padding: 0.5rem 1rem;\n  background: #cfd8dc;\n  opacity: 0.5;\n}\n\n.sidepanes[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   p[ngx-sticky][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.example.sticky-classes[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.example.sticky-classes[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n\n.example.sticky-classes[_ngcontent-%COMP%]   .header-sticky[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background: lightblue;\n  padding: 1rem;\n  left: 1rem;\n  right: 1rem;\n  z-index: 1;\n  transition: transform 0.3s;\n  transform: translateY(-100%);\n}\n\n.example.sticky-classes[_ngcontent-%COMP%]   .header-sticky[_ngcontent-%COMP%]:not(.ngx-sticky--disabled) {\n  display: block;\n}\n\n.example.sticky-classes[_ngcontent-%COMP%]   .header-sticky[_ngcontent-%COMP%]:not(.ngx-sticky--normal) {\n  transform: translateY(0%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBOztFQUVFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUlBOzs7RUFHRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FBREY7O0FBT0U7O0VBQ0Usb0JBQUE7QUFISjs7QUFVSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQVBOOztBQVVJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFSTjs7QUFVTTtFQUNFLGtCQUFBO0FBUlI7O0FBV007RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFUUjs7QUFZTTs7RUFFRSxXQUFBO0FBVlI7O0FBY0k7RUFDRSxhQUFBO0FBWk47O0FBZ0JFO0VBRUUsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBZko7O0FBaUJJOzs7RUFHRSxnQkFBQTtFQUNBLG9CQUFBO0FBZk47O0FBa0JJOztFQUVFLG1CQUFBO0VBQ0EsVUFBQTtBQWhCTjs7QUFtQkk7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFqQk47O0FBb0JJO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWxCTjs7QUFvQk07RUFDRSxVQUFBO0FBbEJSOztBQTBCRTtFQUNFLGtCQUFBO0FBdkJKOztBQTBCRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQXhCSjs7QUEwQkU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FBeEJKOztBQTBCSTtFQUNFLGNBQUE7QUF4Qk47O0FBMkJJO0VBQ0UseUJBQUE7QUF6Qk4iLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbixcclxuLmZvb3RlciB7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjA3LCAyMTYsIDIyMCwgMC41KS8qI2NmZDhkYyovO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xyXG5cclxuICBoMSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmhlYWRlcixcclxuLmFwaSxcclxuLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogI2VjZWZmMTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNTcsIDE2NiwgMTY5LCAwLjgwKS8qIzlkYTZhOSovO1xyXG4gIGNvbG9yOiAjZWNlZmYxO1xyXG59XHJcblxyXG5cclxuLmV4YW1wbGVzLFxyXG4uYXBpIHtcclxuICAuY29udGFpbmVyID4gZGl2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycmVtO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5zaWRlcGFuZXMge1xyXG4gIC5jb250cm9scyB7XHJcbiAgICAmLWhlYWRlciB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAmLWdyb3VwIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XHJcblxyXG4gICAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXYgPiBsYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDE4cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXYgPiBpbnB1dFt0eXBlPW51bWJlcl0sXHJcbiAgICAgIGRpdiA+IGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvZGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByZXZpZXcge1xyXG4gICAgLy8gd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgaGVhZGVyLFxyXG4gICAgZm9vdGVyLFxyXG4gICAgcCB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDFyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlcixcclxuICAgIGZvb3RlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjZmQ4ZGM7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgW25neC1zdGlja3ktYm91bmRhcnldIHtcclxuICAgICAgYmFja2dyb3VuZDogI2VjZWZmMTtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWluLWhlaWdodDogMXJlbTtcclxuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjZmQ4ZGM7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAgICZbbmd4LXN0aWNreV0ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uZXhhbXBsZS5zdGlja3ktY2xhc3NlcyB7XHJcbiAgLnByZXZpZXcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDZyZW07XHJcbiAgfVxyXG4gIGhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAuaGVhZGVyLXN0aWNreSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgICByaWdodDogMXJlbTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcblxyXG4gICAgJjpub3QoLm5neC1zdGlja3ktLWRpc2FibGVkKSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC5uZ3gtc3RpY2t5LS1ub3JtYWwpIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: Window,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_enten_ngx_sticky__WEBPACK_IMPORTED_MODULE_1__["NGX_STICKY_WINDOW"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _enten_ngx_sticky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @enten/ngx-sticky */
      "24qi");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _enten_ngx_sticky__WEBPACK_IMPORTED_MODULE_2__["NgxStickyModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _enten_ngx_sticky__WEBPACK_IMPORTED_MODULE_2__["NgxStickyModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _enten_ngx_sticky__WEBPACK_IMPORTED_MODULE_2__["NgxStickyModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.a6767dc7f12f62441fce.js.map