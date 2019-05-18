(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav ngx-sticky class=\"navigation\">\n  <section class=\"container\">\n    <a href=\"https://github.com/enten/ngx-sticky\">\n      <h1>ngx-sticky</h1>\n    </a>\n  </section>\n</nav>\n\n<header class=\"header\">\n  <section class=\"features container text\">\n    <h2>Features</h2>\n    <ul>\n      <li>Stick all the things!</li>\n      <li>Super smooth!</li>\n      <li>Tested in real world projects</li>\n      <li>Support for <strong>Angular Universal</strong></li>\n      <li>Prevents page-jumping when switching to sticky mode</li>\n      <li>No jQuery or other dependencies - <strong>pure Angular</strong> solution</li>\n      <li>Support for boundaries to make elements stop.</li>\n    </ul>\n  </section>\n  <section class=\"installation container text\">\n    <h2>Installation</h2>\n    <p>with npm:</p>\n    <pre data-header=\"shell\" class=\"code\"><code>npm install @enten/ngx-sticky</code></pre>\n    <p>with yarn:</p>\n    <pre data-header=\"shell\" class=\"code\"><code>yarn add @enten/ngx-sticky</code></pre>\n    <p>Now import the <code>NgxStickyModule</code> in the corresponding Module</p>\n    <pre data-header=\"ts\" class=\"code\"><code><span class=\"ts-keyword\">import</span> <span class=\"ts-sign\">{{ '{' }}</span> <span class=\"ts-user-declaration\">NgxStickyModule</span> <span class=\"ts-sign\">{{ '}' }}</span> <span class=\"ts-keyword\">from</span> <span class=\"ts-sign\">'</span><span class=\"ts-string\">@enten/ngx-sticky</span><span class=\"ts-sign\">';</span>\n\n<span class=\"ts-decorator\">@NgModule</span><span class=\"ts-sign\">({{ '{' }}</span>\n  imports<span class=\"ts-sign\">: [</span>\n    <span class=\"ts-user-declaration\">NgxStickyModule</span><span class=\"ts-sign\">,</span> \n  <span class=\"ts-sign\">],</span> \n  declarations<span class=\"ts-sign\">: [],</span>\n  providers<span class=\"ts-sign\">: [],</span>\n<span class=\"ts-sign\">{{ '}' }})</span>\n<span class=\"ts-keyword\">export</span> <span class=\"ts-keyword\">class</span> <span class=\"ts-user-declaration\">SomeModule</span> <span class=\"ts-sign\">{{ '{ }' }}</span></code></pre>\n  </section>\n  <section class=\"usage container text\">\n    <h2>Usage</h2>\n    <pre data-header=\"html\" class=\"code\"><code><span class=\"html-tag\">&lt;div</span> <span class=\"html-attr\">ngx-sticky</span><span class=\"html-tag\">&gt;</span>\n  I am sticky!\n<span class=\"html-tag\">&lt;/div&gt;</span></code></pre>\n  </section>\n  <section class=\"more container text\">\n    <h2>More</h2>\n    <div>\n      For more information see: <a href=\"https://github.com/enten/ngx-sticky\">https://github.com/enten/ngx-sticky</a>.\n    </div>\n  </section>\n</header>\n\n<section class=\"examples\">\n  <div class=\"container\">\n    <h2>Examples</h2>\n\n    <div class=\"example\">\n      <h3>Sticky</h3>\n      <div class=\"sidepanes\">\n        <div ngx-sticky-boundary class=\"controls\">\n          <pre ngx-sticky [stickyDisabled]=\"_isSmallScreen\" data-header=\"html\" class=\"code\"><code><span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">ngx-sticky</span> <span class=\"html-attr\">stickyDisabled</span><span class=\"html-sign\">=&quot;</span><input type=\"checkbox\" [value]=\"exampleSticky1.disabled\" (change)=\"exampleSticky1.config$.nextKeyValue('disabled', $event.target.checked)\"><span class=\"html-sign\">&quot;</span><span class=\"html-tag\">&gt;</span>\n  I am sticky!\n<span class=\"html-tag\">&lt;/p&gt;</span></code></pre>\n        </div>\n        <div ngx-sticky-boundary class=\"preview\">\n          <p ngx-sticky #exampleSticky1=\"ngxSticky\">\n            I am sticky!\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"example\">\n      <h3>Sticky inside boundary</h3>\n      <div class=\"sidepanes\">\n        <div ngx-sticky-boundary class=\"controls\">\n          <pre ngx-sticky [stickyDisabled]=\"_isSmallScreen\" data-header=\"html\" class=\"code\"><code><span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">ngx-sticky</span><span class=\"html-attr\">stickyDisabled</span><span class=\"html-sign\">=&quot;</span><input type=\"checkbox\" [value]=\"exampleStickyOutsideBoundary.disabled\" (change)=\"exampleStickyOutsideBoundary.config$.nextKeyValue('disabled', $event.target.checked)\"><span class=\"html-sign\">&quot;</span><span class=\"html-tag\">&gt;</span>\n  I am sticky!\n<span class=\"html-tag\">&lt;/p&gt;</span>\n\n<span class=\"html-tag\">&lt;div</span> <span class=\"html-attr\">ngx-sticky-boundary</span><span class=\"html-tag\">&gt;</span>\n  <span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">ngx-sticky</span><span class=\"html-tag\">&gt;</span>\n    Sticky inside boundary\n  <span class=\"html-tag\">&lt;/p&gt;</span>\n<span class=\"html-tag\">&lt;/div&gt;</span></code></pre>\n        </div>\n        <div ngx-sticky-boundary class=\"preview\">\n          <p #exampleStickyOutsideBoundary=\"ngxSticky\" ngx-sticky>I am sticky!</p>\n          <div ngx-sticky-boundary style=\"margin: 5rem auto; height: 30rem; width: 80%;\">\n            <p ngx-sticky>Sticky inside boundary</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"example\">\n      <h3>Sticky boundary unstacked</h3>\n      <div class=\"sidepanes\">\n        <div ngx-sticky-boundary class=\"controls\">\n          <pre ngx-sticky [stickyDisabled]=\"_isSmallScreen\" data-header=\"html\" class=\"code\"><code><span class=\"html-tag\">&lt;div</span>\n  <span class=\"html-attr\">ngx-sticky-boundary</span>\n  <span class=\"html-attr\">stickyUnstacked</span><span class=\"html-sign\">=&quot;</span><input type=\"checkbox\" [checked]=\"exampleBoundaryUnstacked.config.unstacked\" (change)=\"exampleBoundaryUnstacked.config$.nextKeyValue('unstacked', $event.target.checked)\"><span class=\"html-sign\">&quot;</span>\n<span class=\"html-tag\">&gt;</span>\n  <span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">ngx-sticky</span>&gt;Sticky 1<span class=\"html-tag\">&lt;/p&gt;</span>\n  <span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">ngx-sticky</span>&gt;Sticky 2<span class=\"html-tag\">&lt;/p&gt;</span>\n  <span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">ngx-sticky</span>&gt;Sticky 3<span class=\"html-tag\">&lt;/p&gt;</span>\n<span class=\"html-tag\">&lt;/div&gt;</span></code></pre>\n        </div>\n        <div class=\"preview\">\n          <div #exampleBoundaryUnstacked=\"ngxStickyBoundary\" ngx-sticky-boundary stickyUnstacked style=\"margin: 5rem auto; width: 80%;\">\n            <div style=\"height: 5rem\"></div>\n            <p ngx-sticky stickyPosition=\"top\" stickyDirection=\"down\">Sticky 1</p>\n            <div style=\"height: 5rem\"></div>\n            <p ngx-sticky stickyPosition=\"top\" stickyDirection=\"down\">Sticky 2</p>\n            <div style=\"height: 5rem\"></div>\n            <p ngx-sticky stickyPosition=\"top\" stickyDirection=\"down\">Sticky 3</p>\n            <div style=\"height: 5rem\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"example\">\n      <h3>Sticky position bottom</h3>\n      <div class=\"sidepanes\">\n        <div ngx-sticky-boundary class=\"controls\">\n          <pre ngx-sticky [stickyDisabled]=\"_isSmallScreen\" data-header=\"html\" class=\"code\"><code><span class=\"html-tag\">&lt;div</span> <span class=\"html-attr\">ngx-sticky-boundary</span><span class=\"html-tag\">&gt;</span>\n  <span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">ngx-sticky</span>\n    <span class=\"html-attr\">stickyPosition</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">bottom</span><span class=\"html-sign\">&quot;</span>\n    <span class=\"html-attr\">stickyDirection</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">up</span><span class=\"html-sign\">&quot;</span>\n  <span class=\"html-tag\">&gt;</span>Sticky bottom direction up<span class=\"html-tag\">&lt;/p&gt;</span>\n  <span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">ngx-sticky</span>\n    <span class=\"html-attr\">stickyPosition</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">bottom</span><span class=\"html-sign\">&quot;</span>\n    <span class=\"html-attr\">stickyDirection</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">down</span><span class=\"html-sign\">&quot;</span>\n  <span class=\"html-tag\">&gt;</span>Sticky bottom direction down<span class=\"html-tag\">&lt;/p&gt;</span>\n<span class=\"html-tag\">&lt;/div&gt;</span></code></pre>\n        </div>\n        <div ngx-sticky-boundary offsetTop=\"0\" offsetBottom=\"200\" class=\"preview\">\n          <div style=\"height: 800px;\"></div>\n          <p ngx-sticky stickyPosition=\"bottom\" stickyDirection=\"up\">\n            Sticky bottom direction up\n          </p>\n          <p ngx-sticky stickyPosition=\"bottom\" stickyDirection=\"down\">\n            Sticky bottom direction down\n          </p>\n          <div style=\"height: 800px;\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"example\">\n      <h3>Sticky container</h3>\n      <div class=\"sidepanes\">\n        <div ngx-sticky-boundary class=\"controls\">\n          <pre data-header=\"html\" class=\"code\"><code><span class=\"html-tag\">&lt;div</span> <span class=\"html-attr\">ngx-sticky-container</span>\n  <span class=\"html-attr\">style</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">height: 400px; overflow: auto;</span><span class=\"html-sign\">&quot;</span>\n&gt;\n  <span class=\"html-tag\">&lt;header</span> <span class=\"html-attr\">ngx-sticky</span>\n    <span class=\"html-attr\">stickyPosition</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">top</span><span class=\"html-sign\">&quot;</span>\n    <span class=\"html-attr\">stickyDirection</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">down</span><span class=\"html-sign\">&quot;</span>\n  <span class=\"html-tag\">&gt;</span>Header<span class=\"html-tag\">&lt;/header&gt;</span>\n  <span class=\"html-tag\">&lt;section</span> <span class=\"html-attr\">ngx-sticky-boundary</span><span class=\"html-tag\">&gt;</span>\n    <span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">ngx-sticky</span><span class=\"html-tag\">&gt;</span>Sticky 1<span class=\"html-tag\">&lt;/p&gt;</span>\n    <span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">ngx-sticky</span><span class=\"html-tag\">&gt;</span>Sticky 2<span class=\"html-tag\">&lt;/p&gt;</span>\n    <span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">ngx-sticky</span><span class=\"html-tag\">&gt;</span>Sticky 3<span class=\"html-tag\">&lt;/p&gt;</span>\n  <span class=\"html-tag\">&lt;/section&gt;</span>\n  <span class=\"html-tag\">&lt;footer</span> <span class=\"html-attr\">ngx-sticky</span>\n    <span class=\"html-attr\">stickyPosition</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">bottom</span><span class=\"html-sign\">&quot;</span>\n    <span class=\"html-attr\">stickyDirection</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">up</span><span class=\"html-sign\">&quot;</span>\n  <span class=\"html-tag\">&gt;</span>Footer<span class=\"html-tag\">&lt;/div&gt;</span>\n<span class=\"html-tag\">&lt;/footer&gt;</span></code></pre>\n        </div>\n        <div ngx-sticky-container class=\"preview\" style=\"position: relative; overflow: auto; height: 40rem\">\n          <header ngx-sticky>Header</header>\n          <div style=\"height: 12rem\"></div>\n          <section ngx-sticky-boundary style=\"position: relative;\">\n            <!-- <p ngx-sticky style=\"position: absolute; top: 50px; right: 50px; width: 50px; height: 50px; padding: 0; background: lightsteelblue;\">\n              Sticky\n            </p> -->\n            <div style=\"height: 10rem;\"></div>\n            <p ngx-sticky>Sticky 1</p>\n            <div style=\"height: 5rem;\"></div>\n            <p ngx-sticky>Sticky 2</p>\n            <div style=\"height: 5rem;\"></div>\n            <p ngx-sticky stickyPosition=\"bottom\">Sticky 3</p>\n            <div style=\"height: 10rem;\"></div>\n          </section>\n          <div style=\"height: 36rem\"></div>\n          <footer ngx-sticky stickyPosition=\"bottom\" stickyDirection=\"up\">Footer</footer>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"example sticky-classes\">\n      <h3>Sticky classes</h3>\n      <div class=\"sidepanes\">\n        <div ngx-sticky-boundary class=\"controls\">\n          <pre data-header=\"html\" class=\"code\"><code><span class=\"html-tag\">&lt;div</span> <span class=\"html-attr\">class</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">container</span><span class=\"html-sign\">&quot;</span><span class=\"html-tag\">&gt;</span>\n  <span class=\"html-tag\">&lt;header</span> <span class=\"html-attr\">class</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">header</span><span class=\"html-sign\">&quot;</span><span class=\"html-tag\">&gt;</span>Header<span class=\"html-tag\">&lt;/header&gt;</span>\n  <span class=\"html-tag\">&lt;div</span> <span class=\"html-attr\">#headerSticky</span>\n    <span class=\"html-attr\">ngx-sticky</span>\n    <span class=\"html-attr\">stickyClasses</span>\n    <span class=\"html-attr\">class</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">header-sticky</span><span class=\"html-sign\">&quot;</span>\n  <span class=\"html-tag\">&gt;</span>\n    {{ '{{' }} headerSticky.className {{ '\\}\\}' }}\n  <span class=\"html-tag\">&lt;/div&gt;</span>\n  <span class=\"html-tag\">&lt;p&gt;&lt;/p&gt;</span>\n  <span class=\"html-tag\">&lt;p&gt;&lt;/p&gt;</span>\n  <span class=\"html-tag\">&lt;p&gt;&lt;/p&gt;</span>\n<span class=\"html-tag\">&lt;/div&gt;</span>\n\n<span class=\"html-tag\">&lt;style&gt;</span>\n.container {{ '{' }}\n  <span class=\"css-prop\">position</span>: <span class=\"css-value\">relative</span>;\n{{ '\\}' }}\n.header {{ '{' }}\n  <span class=\"css-prop\">position</span>: <span class=\"css-value\">relative</span>;\n  <span class=\"css-prop\">z-index</span>: <span class=\"css-user-value\">2</span>;\n{{ '\\}' }}\n.header-sticky {{ '{' }}\n  <span class=\"css-prop\">display</span>: <span class=\"css-value\">none</span>;\n  <span class=\"css-prop\">position</span>: <span class=\"css-value\">absolute</span>;\n  <span class=\"css-prop\">transform</span>: <span class=\"css-user-value\">translateY(-100%)</span>;\n  <span class=\"css-prop\">transition</span>: <span class=\"css-user-value\">transform 0.3s</span>;\n  <span class=\"css-prop\">width</span>: <span class=\"css-user-value\">100%</span>;\n  <span class=\"css-prop\">z-index</span>: <span class=\"css-user-value\">1</span>;\n{{ '\\}' }}\n.header-sticky:not(.ngx-sticky--disabled) {{ '{' }}\n  <span class=\"css-prop\">display</span>: <span class=\"css-value\">block</span>;\n{{ '\\}' }}\n.header-sticky:not(.ngx-sticky--normal) {{ '{' }}\n  <span class=\"css-prop\">transform</span>: <span class=\"css-user-value\">translateY(0%)</span>;\n{{ '\\}' }}\n<span class=\"html-tag\">&lt;/style&gt;</span>\n</code></pre>\n        </div>\n        <div ngx-sticky-boundary class=\"preview\">\n          <header style=\"padding: 2rem 1rem\">Header</header>\n          <div #exampleStickyClasses=\"ngxSticky\" ngx-sticky stickyClasses stickyDisabled=\"false\" class=\"header-sticky\">.ngx-sticky--{{ exampleStickyClasses.state }}</div>\n          <p></p>\n          <p></p>\n          <p></p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"example\">\n      <h3>Sticky with spot</h3>\n      <div class=\"sidepanes\">\n        <div ngx-sticky-boundary class=\"controls\">\n          <pre ngx-sticky [stickyDisabled]=\"_isSmallScreen\" data-header=\"html\" class=\"code\"><code><span class=\"html-tag\">&lt;div</span> <span class=\"html-attr\">ngx-sticky-boundary</span><span class=\"html-tag\">&gt;</span>\n  <span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">ngx-sticky</span> <span class=\"html-attr\">[stickySpot]</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">spot</span><span class=\"html-sign\">&quot;</span><span class=\"html-tag\">&gt;</span>\n    Sticky with spot\n  <span class=\"html-tag\">&lt;/p&gt;</span>\n  <span class=\"html-tag\">&lt;div</span> <span class=\"html-attr\">[style.height.px]</span><span class=\"html-sign\">=&quot;</span><input #stickyWithSpotBlankHeight type=\"number\" value=\"1500\" class=\"html-attr-value\" style=\"width: 5rem;\" (change)=\"changeDetectorRef.detectChanges(); exampleStickyWithSpot.update()\"><span class=\"html-sign\">&quot;</span><span class=\"html-tag\">&gt;</span>\n  <span class=\"html-tag\">&lt;/div&gt;</span>\n  <span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">#spot</span><span class=\"html-tag\">&gt;</span>Spot<span class=\"html-tag\">&lt;/p&gt;</span>\n<span class=\"html-tag\">&lt;/div&gt;</span></code></pre>\n        </div>\n        <div ngx-sticky-boundary class=\"preview\">\n          <p #exampleStickyWithSpot=\"ngxSticky\" ngx-sticky [stickySpot]=\"spot\">Sticky with spot</p>\n          <div [style.height.px]=\"stickyWithSpotBlankHeight.value\"></div>\n          <div #spot style=\"padding: 2em 1em; background: lightblue;\">\n            Spot<br>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n\n<section class=\"api\">\n  <div class=\"container\">\n    <h2>API</h2>\n\n    <div>\n      <h3>NgxStickyDirective</h3>\n      <div class=\"sidepanes\">\n        <div class=\"controls\" ngx-sticky-boundary>\n          <div ngx-sticky [stickyDisabled]=\"_isSmallScreen\">\n            <div class=\"controls-header\">\n              ngx-sticky\n            </div>\n            <div class=\"controls-group\">\n              <div class=\"controls-group-header\">\n                inputs\n              </div>\n              <div>\n                <label>stickyDisabled</label>\n                <input type=\"checkbox\"\n                  [checked]=\"apiSticky.disabled\"\n                  (change)=\"apiSticky.config$.nextKeyValue('disabled', $event.target.checked)\"\n                >\n              </div>\n              <div>\n                <label>stickyPosition</label>\n                <select\n                  [value]=\"apiSticky.config.position\"\n                  (change)=\"apiSticky.config$.nextKeyValue('position', $event.target.value)\"\n                >\n                  <option value=\"top\">top</option>\n                  <option value=\"bottom\">bottom</option>\n                </select>\n              </div>\n              <div>\n                <label>stickyDirection</label>\n                <select\n                  [value]=\"apiSticky.config.direction\"\n                  (change)=\"apiSticky.config$.nextKeyValue('direction', $event.target.value)\"\n                >\n                  <option value=\"up\">up</option>\n                  <option value=\"down\">down</option>\n                </select>\n              </div>\n              <!--\n              <div>\n                <label>stickyOrbit</label>\n                <input type=\"checkbox\"\n                  [checked]=\"apiSticky.config.orbit\"\n                  (change)=\"apiSticky.config$.nextKeyValue('orbit', $event.target.checked)\"\n                >\n              </div>\n              -->\n            </div>\n            <div class=\"controls-group\">\n              <div class=\"controls-group-header\">\n                outputs\n              </div>\n              <div>\n                <label>stickyState</label>\n                {{ apiSticky.state }}\n              </div>\n            </div>\n            <div class=\"controls-group\">\n              <div class=\"controls-group-header\">\n                methods\n              </div>\n              <div>\n                <label>enableSticky</label>\n                <button (click)=\"apiSticky.enableSticky()\">call</button>\n              </div>\n              <div>\n                <label>disableSticky</label>\n                <button (click)=\"apiSticky.disableSticky()\">call</button>\n              </div>\n              <!--\n              <div>\n                <label>update</label>\n                <button (click)=\"apiSticky.update()\">call</button>\n              </div>\n              -->\n            </div>\n          </div>\n        </div>\n  \n        <div ngx-sticky-boundary class=\"preview\">\n          <div style=\"height: 15rem;\"></div>\n          <p #apiSticky=\"ngxSticky\" ngx-sticky>\n            I am sticky!\n          </p>\n          <div style=\"height: 15rem;\"></div>\n        </div>\n      </div>\n  \n      <pre data-header=\"html\" class=\"code\"><code><span class=\"html-tag\">&lt;p</span> <span class=\"html-attr\">ngx-sticky</span><span *ngIf=\"apiSticky.disabled\" class=\"html-attr\"> stickyDisabled</span><!--<span *ngIf=\"apiSticky.config.orbit\" class=\"html-attr\"> stickyOrbit</span>--><ng-container *ngIf=\"apiSticky.config.position === 'bottom'\"><span class=\"html-attr\"> stickyPosition</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">bottom</span><span class=\"html-sign\">&quot;</span></ng-container><ng-container *ngIf=\"apiSticky.config.direction === 'up'\"><span class=\"html-attr\"> stickyDirection</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">up</span><span class=\"html-sign\">&quot;</span></ng-container><span class=\"html-tag\">&gt;</span>\n  I am sticky!\n<span class=\"html-tag\">&lt;/p&gt;</span></code></pre>\n    </div>\n\n    <div>\n      <h3>NgxStickyBoundaryDirective</h3>\n      <div class=\"sidepanes\">\n        <div class=\"controls\" ngx-sticky-boundary>\n          <div ngx-sticky [stickyDisabled]=\"_isSmallScreen\">\n            <div class=\"controls-header\">\n              ngx-sticky-boundary\n            </div>\n            <div class=\"controls-group\">\n              <div class=\"controls-group-header\">\n                inputs\n              </div>\n              <div>\n                <label>stickyUnstacked</label>\n                <input type=\"checkbox\"\n                  [checked]=\"apiBoundary.config.unstacked\"\n                  (change)=\"apiBoundary.config$.nextKeyValue('unstacked', $event.target.checked)\"\n                >\n              </div>\n            </div>\n            <!--\n            <div class=\"controls-group\">\n              <div class=\"controls-group-header\">\n                methods\n              </div>\n              <div>\n                <label>updateStickies</label>\n                <button (click)=\"apiBoundary.updateStickies()\">call</button>\n              </div>\n            </div>\n            -->\n            <div class=\"controls-header\">\n              ngx-sticky\n            </div>\n            <div class=\"controls-group\">\n              <div>\n                <label>stickyDisabled</label>\n                <input type=\"checkbox\"\n                  [checked]=\"apiBoundaryStickyDisabled\"\n                  (change)=\"apiBoundaryStickyDisabled = !apiBoundaryStickyDisabled\"\n                >\n              </div>\n              <div>\n                <label>stickyPosition</label>\n                <select\n                  [value]=\"apiBoundaryStickyPosition\"\n                  (change)=\"apiBoundaryStickyPosition = $event.target.value\"\n                >\n                  <option value=\"top\">top</option>\n                  <option value=\"bottom\">bottom</option>\n                </select>\n              </div>\n              <div>\n                <label>stickyDirection</label>\n                <select\n                  [value]=\"apiBoundaryStickyDirection\"\n                  (change)=\"apiBoundaryStickyDirection = $event.target.value\"\n                >\n                  <option value=\"up\">up</option>\n                  <option value=\"down\">down</option>\n                </select>\n              </div>\n              <!--\n              <div>\n                <label>stickyOrbit</label>\n                <input type=\"checkbox\"\n                  [checked]=\"stickyOrbit\"\n                  (change)=\"stickyOrbit = !stickyOrbit\"\n                >\n              </div>\n              -->\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"preview\">\n          <div style=\"height: 5rem;\"></div>\n          <div #apiBoundary=\"ngxStickyBoundary\" ngx-sticky-boundary>\n            <div style=\"height: 10rem;\"></div>\n            <p ngx-sticky\n              [stickyDisabled]=\"apiBoundaryStickyDisabled\"\n              [stickyPosition]=\"apiBoundaryStickyPosition\"\n              [stickyDirection]=\"apiBoundaryStickyDirection\"\n            >\n              Sticky 1\n            </p>\n            <div style=\"height: 5rem\"></div>\n            <p ngx-sticky\n              [stickyDisabled]=\"apiBoundaryStickyDisabled\"\n              [stickyPosition]=\"apiBoundaryStickyPosition\"\n              [stickyDirection]=\"apiBoundaryStickyDirection\"\n            >\n              Sticky 2\n            </p>\n            <div style=\"height: 5rem\"></div>\n            <p ngx-sticky\n              [stickyDisabled]=\"apiBoundaryStickyDisabled\"\n              [stickyPosition]=\"apiBoundaryStickyPosition\"\n              [stickyDirection]=\"apiBoundaryStickyDirection\"\n            >\n              Sticky 3\n            </p>\n            <div style=\"height: 10rem;\"></div>\n          </div>\n          <div style=\"height: 5rem;\"></div>\n        </div>\n      </div>\n      <pre data-header=\"html\" class=\"code\"><code><span class=\"html-tag\">&lt;div</span> <span class=\"html-attr\">ngx-sticky-boundary</span><span *ngIf=\"apiBoundary.config.unstacked\" class=\"html-attr\"> stickyUnstacked</span><span class=\"html-tag\">&gt;</span>\n  <span class=\"html-tag\">&lt;p</span>  <span class=\"html-attr\">ngx-sticky</span><span class=\"html-tag\">&gt;</span>Sticky 1<span class=\"html-tag\">&lt;/p&gt;</span>\n  <span class=\"html-tag\">&lt;p</span>  <span class=\"html-attr\">ngx-sticky</span><span class=\"html-tag\">&gt;</span>Sticky 2<span class=\"html-tag\">&lt;/p&gt;</span>\n  <span class=\"html-tag\">&lt;p</span>  <span class=\"html-attr\">ngx-sticky</span><span class=\"html-tag\">&gt;</span>Sticky 3<span class=\"html-tag\">&lt;/p&gt;</span>\n<span class=\"html-tag\">&lt;/div&gt;</span></code></pre>\n    </div>\n\n    <div>\n      <h3>NgxStickyContainerDirective</h3>\n      <div class=\"sidepanes\">\n        <div class=\"controls\">\n          <div>\n            <div class=\"controls-header\">\n              ngx-sticky-container\n            </div>\n            <div class=\"controls-group\">\n              <div class=\"controls-group-header\">\n                inputs\n              </div>\n              <div>\n                <label>stickyDisabled</label>\n                <input type=\"checkbox\"\n                  [checked]=\"apiContainer.disabled\"\n                  (change)=\"apiContainer.config$.nextKeyValue('disabled', $event.target.checked)\"\n                >\n              </div>\n              <div>\n                <label>stickyOffsetTop</label>\n                <input type=\"number\"\n                  [value]=\"apiContainerStickyOffsetTop\"\n                  (change)=\"apiContainerStickyOffsetTop = +$event.target.value\"\n                >\n              </div>\n              <div>\n                <label>stickyOffsetBottom</label>\n                <input type=\"number\"\n                  [value]=\"apiContainerStickyOffsetBottom\"\n                  (change)=\"apiContainerStickyOffsetBottom = +$event.target.value\"\n                >\n              </div>\n              <div>\n                <label>stickyUnstacked</label>\n                <input type=\"checkbox\"\n                  [checked]=\"apiContainer.config.unstacked\"\n                  (change)=\"apiContainer.config$.nextKeyValue('unstacked', $event.target.checked)\"\n                >\n              </div>\n            </div>\n            <div class=\"controls-group\">\n              <div class=\"controls-group-header\">\n                methods\n              </div>\n              <div>\n                <label>enableStickies</label>\n                <button (click)=\"apiContainer.enableStickies()\">call</button>\n              </div>\n              <div>\n                <label>disableStickies</label>\n                <button (click)=\"apiContainer.disableStickies()\">call</button>\n              </div>\n              <div>\n                <label>scrollToTop</label>\n                <button (click)=\"apiContainer.scrollToTop('#apiContainerScrollTarget')\">call</button>\n              </div>\n              <!--\n              <div>\n                <label>updateStickies</label>\n                <button (click)=\"apiContainer.updateStickies()\">call</button>\n              </div>\n              -->\n            </div>\n            <div class=\"controls-header\">\n              ngx-sticky\n            </div>\n            <div class=\"controls-group\">\n              <div>\n                <label>stickyDisabled</label>\n                <input type=\"checkbox\"\n                  [checked]=\"apiContainerStickyDisabled\"\n                  (change)=\"apiContainerStickyDisabled = !apiContainerStickyDisabled\"\n                >\n              </div>\n              <div>\n                <label>stickyPosition</label>\n                <select\n                  [value]=\"apiContainerStickyPosition\"\n                  (change)=\"apiContainerStickyPosition = $event.target.value\"\n                >\n                  <option value=\"top\">top</option>\n                  <option value=\"bottom\">bottom</option>\n                </select>\n              </div>\n              <div>\n                <label>stickyDirection</label>\n                <select\n                  [value]=\"apiContainerStickyDirection\"\n                  (change)=\"apiContainerStickyDirection = $event.target.value\"\n                >\n                  <option value=\"up\">up</option>\n                  <option value=\"down\">down</option>\n                </select>\n              </div>\n              <!--\n              <div>\n                <label>stickyOrbit</label>\n                <input type=\"checkbox\"\n                  [checked]=\"stickyOrbit\"\n                  (change)=\"stickyOrbit = !stickyOrbit\"\n                >\n              </div>\n              -->\n            </div>\n          </div>\n        </div>\n  \n        <div #apiContainer=\"ngxStickyContainer\" ngx-sticky-container\n          [stickyOffsetTop]=\"apiContainerStickyOffsetTop\"\n          [stickyOffsetBottom]=\"apiContainerStickyOffsetBottom\"\n          class=\"preview\"\n          style=\"position: relative; height: 40rem; overflow: auto;\"\n        >\n          <header ngx-sticky>\n            Header\n          </header>\n          <div style=\"height: 30rem;\"></div>\n          <p ngx-sticky\n            [stickyDisabled]=\"apiContainerStickyDisabled\"\n            [stickyPosition]=\"apiContainerStickyPosition\"\n            [stickyDirection]=\"apiContainerStickyDirection\"\n          >\n            Sticky 1\n          </p>\n          <div style=\"height: 5rem;\"></div>\n          <p ngx-sticky\n            [stickyDisabled]=\"apiContainerStickyDisabled\"\n            [stickyPosition]=\"apiContainerStickyPosition\"\n            [stickyDirection]=\"apiContainerStickyDirection\"\n          >\n            Sticky 2\n          </p>\n          <div style=\"height: 5rem;\"></div>\n          <p ngx-sticky\n            [stickyDisabled]=\"apiContainerStickyDisabled\"\n            [stickyPosition]=\"apiContainerStickyPosition\"\n            [stickyDirection]=\"apiContainerStickyDirection\"\n          >\n            Sticky 3\n          </p>\n          <div style=\"height: 5rem;\"></div>\n          <p id=\"apiContainerScrollTarget\" style=\"background: lightblue; opacity: 1;\">Scroll target</p>\n          <div style=\"height: 40rem;\"></div>\n          <footer ngx-sticky stickyPosition=\"bottom\" stickyDirection=\"up\">\n            Footer\n          </footer>\n        </div>\n      </div>\n      <pre data-header=\"html\" class=\"code\"><code><span class=\"html-tag\">&lt;div</span> <span class=\"html-attr\">ngx-sticky-container</span><span *ngIf=\"apiContainer.disabled\" class=\"html-attr\"> stickyDisabled</span><span *ngIf=\"apiContainer.config.unstacked\" class=\"html-attr\"> stickyUnstacked</span><ng-container *ngIf=\"apiContainerStickyOffsetTop\" ><span class=\"html-attr\"> stickyOffsetTop</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">{{ apiContainerStickyOffsetTop }}</span><span class=\"html-sign\">&quot;</span></ng-container><ng-container *ngIf=\"apiContainerStickyOffsetBottom\"><span class=\"html-attr\"> stickyOffsetBottom</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">{{ apiContainerStickyOffsetBottom }}</span><span class=\"html-sign\">&quot;</span></ng-container><span class=\"html-tag\">&gt;</span>\n  <span class=\"html-tag\">&lt;header</span> <span class=\"html-attr\">ngx-sticky</span><span class=\"html-tag\">&gt;</span>\n    Header\n  <span class=\"html-tag\">&lt;/header&gt;</span>\n  <span class=\"html-tag\">&lt;p</span>  <span class=\"html-attr\">ngx-sticky</span><span class=\"html-tag\">&gt;</span>Sticky 1<span class=\"html-tag\">&lt;/p&gt;</span>\n  <span class=\"html-tag\">&lt;p</span>  <span class=\"html-attr\">ngx-sticky</span><span class=\"html-tag\">&gt;</span>Sticky 2<span class=\"html-tag\">&lt;/p&gt;</span>\n  <span class=\"html-tag\">&lt;p</span>  <span class=\"html-attr\">ngx-sticky</span><span class=\"html-tag\">&gt;</span>Sticky 3<span class=\"html-tag\">&lt;/p&gt;</span>\n  <span class=\"html-tag\">&lt;footer</span> <span class=\"html-attr\">ngx-sticky</span> <span class=\"html-attr\">stickyPosition</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">bottom</span><span class=\"html-sign\">&quot;</span> <span class=\"html-attr\">stickyDirection</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">up</span><span class=\"html-sign\">&quot;</span><span class=\"html-tag\">&gt;</span>\n    Footer\n  <span class=\"html-tag\">&lt;/footer&gt;</span>\n<span class=\"html-tag\">&lt;/div&gt;</span></code></pre>\n    </div>\n\n    <div>\n      <h3>NgxInViewportDirective</h3>\n      <div class=\"sidepanes\">\n        <div class=\"controls\">\n          <div>\n            <div class=\"controls-header\">\n              ngx-in-viewport\n            </div>\n            <div class=\"controls-group\">\n              <div class=\"controls-group-header\">\n                inputs\n              </div>\n              <div>\n                <label>intersectionDisabled</label>\n                <input type=\"checkbox\"\n                  [checked]=\"apiInViewport.disabled\"\n                  (change)=\"apiInViewport.config$.nextKeyValue('disabled', $event.target.checked)\"\n                >\n              </div>\n              <div>\n                <label>intersectionThresholds</label>\n                <input type=\"text\"\n                  [value]=\"apiInViewport.config.thresholds.join(',')\"\n                  (change)=\"apiInViewport.config$.nextKeyValue('thresholds', $event.target.value)\"\n                >\n              </div>\n            </div>\n            <div class=\"controls-group\">\n              <div class=\"controls-group-header\">\n                methods\n              </div>\n              <div>\n                <label>enableIntersection</label>\n                <button (click)=\"apiInViewport.enableIntersection()\">call</button>\n              </div>\n              <div>\n                <label>disableIntersection</label>\n                <button (click)=\"apiInViewport.disableIntersection()\">call</button>\n              </div>\n              <!--\n              <div>\n                <label>update</label>\n                <button (click)=\"apiInViewport.update()\">call</button>\n              </div>\n              -->\n            </div>\n            <div class=\"controls-group\">\n              <div class=\"controls-group-header\">\n                outputs\n              </div>\n              <div>\n                <label>intersectionState</label>\n                {{ apiInViewport.state || 'null' }}\n              </div>\n              <div>\n                <label>intersectionThreshold</label>\n                {{ apiInViewport._intersectionThreshold }}\n              </div>\n              <!--\n              <div>\n                <label>intersectionComputation</label>\n                <pre class=\"code\" style=\"margin: 0\"><code>{{ getIntersectionComputationAsText() }}</code></pre>\n              </div>\n              -->\n            </div>\n            <div class=\"controls-header\">\n              ngx-sticky\n            </div>\n            <div class=\"controls-group\">\n              <div>\n                <label>stickyDisabled</label>\n                <input type=\"checkbox\"\n                  [checked]=\"apiInViewportStickyDisabled\"\n                  (change)=\"apiInViewportStickyDisabled = !apiInViewportStickyDisabled\"\n                >\n              </div>\n              <div>\n                <label>stickyPosition</label>\n                <select\n                  [value]=\"apiInViewportStickyPosition\"\n                  (change)=\"apiInViewportStickyPosition = $event.target.value\"\n                >\n                  <option value=\"top\">top</option>\n                  <option value=\"bottom\">bottom</option>\n                </select>\n              </div>\n              <div>\n                <label>stickyDirection</label>\n                <select\n                  [value]=\"apiInViewportStickyDirection\"\n                  (change)=\"apiInViewportStickyDirection = $event.target.value\"\n                >\n                  <option value=\"up\">up</option>\n                  <option value=\"down\">down</option>\n                </select>\n              </div>\n              <!--\n              <div>\n                <label>stickyOrbit</label>\n                <input type=\"checkbox\"\n                  [checked]=\"apiInViewportStickyOrbit\"\n                  (change)=\"apiInViewportStickyOrbit = !apiInViewportStickyOrbit\"\n                >\n              </div>\n              -->\n            </div>\n          </div>\n        </div>\n  \n        <div #container=\"ngxStickyContainer\" ngx-sticky-container class=\"preview\" style=\"position: relative; height: 40rem; overflow: auto;\">\n          <header ngx-sticky>\n            Header\n          </header>\n          <div style=\"height: 30rem;\"></div>\n          <p ngx-sticky\n            [stickyDisabled]=\"apiInViewportStickyDisabled\"\n            [stickyPosition]=\"apiInViewportStickyPosition\"\n            [stickyDirection]=\"apiInViewportStickyDirection\"\n          >\n            Sticky 1\n          </p>\n          <div style=\"height: 5rem;\"></div>\n          <p ngx-sticky\n            [stickyDisabled]=\"apiInViewportStickyDisabled\"\n            [stickyPosition]=\"apiInViewportStickyPosition\"\n            [stickyDirection]=\"apiInViewportStickyDirection\"\n          >\n            Sticky 2\n          </p>\n          <div style=\"height: 5rem;\"></div>\n          <p #apiInViewport=\"ngxInViewport\" ngx-in-viewport style=\"opacity: 1; padding: 8rem 1rem; background: lightblue; text-align: center\">\n            In viewport element\n          </p>\n          <div style=\"height: 5rem;\"></div>\n          <p ngx-sticky\n            [stickyDisabled]=\"apiInViewportStickyDisabled\"\n            [stickyPosition]=\"apiInViewportStickyPosition\"\n            [stickyDirection]=\"apiInViewportStickyDirection\"\n          >\n            Sticky 3\n          </p>\n          <div style=\"height: 40rem;\"></div>\n          <footer ngx-sticky\n            stickyPosition=\"bottom\"\n            stickyDirection=\"up\"\n            style=\"margin-bottom: 0;\"\n          >\n            Footer\n          </footer>\n        </div>\n      </div>\n      <pre data-header=\"html\" class=\"code\"><code><span class=\"html-tag\">&lt;div</span> <span class=\"html-attr\">ngx-in-viewport</span><span *ngIf=\"apiInViewport.disabled\" class=\"html-attr\"> intersectionDisabled</span><span class=\"html-attr\"> intersectionThresholds</span><span class=\"html-sign\">=&quot;</span><span class=\"html-attr-value\">{{ apiInViewport.config.thresholds.join(',') }}</span><span class=\"html-sign\">&quot;</span><span class=\"html-tag\">&gt;</span>\n  in viewport element\n<span class=\"html-tag\">&lt;/div&gt;</span></code></pre>\n    </div>\n  </div>\n</section>\n\n<footer class=\"footer\">\n  <p class=\"container\">made with ☕ by <a href=\"http://enten.fr\">enten</a></p>\n</footer>\n  \n  "

/***/ }),

/***/ "./projects/ngx-sticky/src/lib/in-viewport.directive.ts":
/*!**************************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/in-viewport.directive.ts ***!
  \**************************************************************/
/*! exports provided: NGX_BASE_INTERSECTION_CONFIG_SCHEMA, NgxInViewportDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_BASE_INTERSECTION_CONFIG_SCHEMA", function() { return NGX_BASE_INTERSECTION_CONFIG_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxInViewportDirective", function() { return NgxInViewportDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _sticky_container_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sticky-container.directive */ "./projects/ngx-sticky/src/lib/sticky-container.directive.ts");
/* harmony import */ var _sticky_root_container_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sticky-root-container.controller */ "./projects/ngx-sticky/src/lib/sticky-root-container.controller.ts");
/* harmony import */ var _sticky_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sticky.tokens */ "./projects/ngx-sticky/src/lib/sticky.tokens.ts");
/* harmony import */ var _utils_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/coercion */ "./projects/ngx-sticky/src/lib/utils/coercion.ts");
/* harmony import */ var _utils_config_subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/config-subject */ "./projects/ngx-sticky/src/lib/utils/config-subject.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/dom */ "./projects/ngx-sticky/src/lib/utils/dom.ts");
/* harmony import */ var _utils_intersection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/intersection */ "./projects/ngx-sticky/src/lib/utils/intersection.ts");











const NGX_BASE_INTERSECTION_CONFIG_SCHEMA = {
    disabled: {
        aliasKey: 'intersectionDisabled',
        defaultValue: false,
        coercion: _utils_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"],
    },
    thresholds: {
        aliasKey: 'intersectionThresholds',
        defaultValue: [0, 1],
        coercion: _utils_intersection__WEBPACK_IMPORTED_MODULE_10__["coerceIntersectionThresholds"],
    },
};
let NgxInViewportDirective = class NgxInViewportDirective {
    constructor(rootContainer, stickyContainer, elementRef, ngZone, _win) {
        this.rootContainer = rootContainer;
        this.stickyContainer = stickyContainer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this._win = _win;
        /**
         * Emit intersection.
         */
        this.intersection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emit intersection computation.
         */
        this.intersectionComputation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emit intersection state.
         */
        this.intersectionState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emit intersection threshold.
         */
        this.intersectionThreshold = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Inputs config */
        this.config$ = new _utils_config_subject__WEBPACK_IMPORTED_MODULE_8__["ConfigSubject"](NGX_BASE_INTERSECTION_CONFIG_SCHEMA);
        /** Emits when the component is destroyed. */
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Emits when refresh() is called */
        this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // use root container when sticky isn't in container
        this._container = stickyContainer || rootContainer;
        // register in parent container for first update calls
        this.container.registerIntersection(this);
    }
    get container() {
        return this._container;
    }
    get config() {
        return this.config$.getValue();
    }
    get disabled() {
        return this.config.disabled;
    }
    /**
     * State of the intersection.
     */
    get state() {
        return this._intersectionState;
    }
    ngOnChanges(changes) {
        this.config$.nextChanges(changes);
    }
    ngAfterViewInit() {
        this._initMonitoring();
    }
    ngOnDestroy() {
        this.container.unregisterIntersection(this);
        if (!this._destroyed$.isStopped) {
            this._destroyed$.next();
            this._destroyed$.complete();
        }
        this._destroyMonitoring();
    }
    beforeRefresh(fastUpdate) {
        if (!fastUpdate) {
            this._intersection = null;
        }
    }
    disableIntersection() {
        this.config$.nextKeyValue('disabled', true, { skipCoercion: true });
    }
    enableIntersection() {
        this.config$.nextKeyValue('disabled', false, { skipCoercion: true });
    }
    getIntersection() {
        if (!this._intersection) {
            this._intersection = this._computeIntersection();
        }
        return this._intersection;
    }
    refresh(computation) {
        this._refresh$.next(computation);
    }
    update(fastUpdate) {
        this.container.updateStickies(fastUpdate);
    }
    _computeIntersection() {
        const config = this.config$.getValue();
        const elementRect = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_9__["getElementAbsoluteRect"])(this.elementRef.nativeElement);
        return {
            disabled: config.disabled,
            height: elementRect.height,
            top: elementRect.top,
            thresholds: config.thresholds,
        };
    }
    /**
     * Create intersection monitoring observable.
     */
    _createMonitoringObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.config$, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]).pipe(
        // throttleTime(0, animationFrameScheduler),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false));
    }
    /**
     * Destroy intersection monitoring subscription.
     */
    _destroyMonitoring() {
        if (this._monitoring) {
            this._monitoring.unsubscribe();
            this._monitoring = null;
        }
    }
    /**
     * Init intersection monitoring.
     */
    _initMonitoring() {
        if (!this._win || this._monitoring) {
            return;
        }
        this.ngZone.runOutsideAngular(() => {
            const handleRefreshSubscription = this._refresh$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"], { leading: true, trailing: true }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])())
                .subscribe(computation => {
                this._refreshIntersection(computation);
            });
            const triggerUpdateSubscription = this._createMonitoringObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])())
                .subscribe(fastUpdate => {
                this.update(fastUpdate);
            });
            this._monitoring = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
            this._monitoring.add(handleRefreshSubscription);
            this._monitoring.add(triggerUpdateSubscription);
        });
    }
    /**
     * Refresh intersection with given computation.
     *
     * @param computation Intersection state computation
     */
    _refreshIntersection(computation) {
        this._intersectionComputation = computation;
        this.intersectionComputation.next(computation);
        if (computation.state !== this._intersectionState) {
            this.ngZone.run(() => {
                this._intersectionState = computation.state;
                this.intersectionState.next(computation.state);
            });
        }
        const oldEntry = this._intersectionCrossed;
        const newEntry = computation;
        const oldRatio = oldEntry ? oldEntry.ratio : 0;
        const newRatio = newEntry.ratio;
        // ignore when ratios are unchanged
        if (oldEntry && oldRatio === newRatio) {
            return;
        }
        const crossedThreshold = Object(_utils_intersection__WEBPACK_IMPORTED_MODULE_10__["getCrossedThreshold"])(computation.snap.intersection.thresholds, oldRatio, newRatio);
        // ignore when no treshold is crossed
        if (isNaN(crossedThreshold)) {
            return;
        }
        this._intersectionCrossed = newEntry;
        this.ngZone.run(() => {
            this._intersectionThreshold = crossedThreshold;
            this.intersectionThreshold.next(crossedThreshold);
            this.intersection.emit(newEntry);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], NgxInViewportDirective.prototype, "intersectionDisabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], NgxInViewportDirective.prototype, "intersectionThresholds", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NgxInViewportDirective.prototype, "intersection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NgxInViewportDirective.prototype, "intersectionComputation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NgxInViewportDirective.prototype, "intersectionState", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NgxInViewportDirective.prototype, "intersectionThreshold", void 0);
NgxInViewportDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ngxInViewport], [ngx-in-viewport], ngx-in-viewport',
        exportAs: 'ngxInViewport',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _sticky_container_directive__WEBPACK_IMPORTED_MODULE_4__["NgxStickyContainerDirective"]))),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sticky_tokens__WEBPACK_IMPORTED_MODULE_6__["NGX_STICKY_WINDOW"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sticky_root_container_controller__WEBPACK_IMPORTED_MODULE_5__["NgxStickyRootContainerController"],
        _sticky_container_directive__WEBPACK_IMPORTED_MODULE_4__["NgxStickyContainerDirective"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        Window])
], NgxInViewportDirective);



/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky-base-boundary.controller.ts":
/*!************************************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky-base-boundary.controller.ts ***!
  \************************************************************************/
/*! exports provided: NgxStickyBaseBoundaryController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStickyBaseBoundaryController", function() { return NgxStickyBaseBoundaryController; });
/**
 * Abstract sticky boundary controller.
 */
class NgxStickyBaseBoundaryController {
    updateStickies(fastUpdate) {
        this.container.updateStickies(fastUpdate);
    }
}


/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky-base-container.controller.ts":
/*!*************************************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky-base-container.controller.ts ***!
  \*************************************************************************/
/*! exports provided: NgxStickyBaseContainerController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStickyBaseContainerController", function() { return NgxStickyBaseContainerController; });
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/collections */ "./projects/ngx-sticky/src/lib/utils/collections.ts");

/**
 * Abstract sticky container controller.
 */
class NgxStickyBaseContainerController {
    constructor() {
        this.boundaries = [];
        this.containers = [];
        this.intersections = [];
        this.stickies = [];
        this._stickyComputations = {};
        this._stickySnaps = {};
        this._intersectionComputations = {};
        this._intersectionSnaps = {};
    }
    disableAllStickies() {
        this.disableStickies();
        for (const container of this.containers) {
            container.disableStickies();
        }
    }
    enableAllStickies() {
        this.enableStickies();
        for (const container of this.containers) {
            container.enableStickies();
        }
    }
    getStickedOffset(position, viewportTop) {
        const container = this.getContainer();
        const viewportHeight = this.getViewportHeight();
        const stickies = [];
        for (const stickyController of this.stickies) {
            stickies.push(stickyController.getSticky());
        }
        return this.stickyEngine.getStickedOffset(container, stickies, position, viewportHeight, viewportTop);
    }
    fixViewportTop(viewportTop, userOffsetTop) {
        // const container = this.getContainer();
        const viewportTopOffsetless = viewportTop - (userOffsetTop || 0);
        const stickedOffsetTop = this.getStickedOffset('top', viewportTopOffsetless);
        let viewportTopFixed = viewportTopOffsetless /* - container.offsetTop*/ - stickedOffsetTop;
        if (this.containerParent) {
            viewportTopFixed -= this.getContainer().top;
        }
        return viewportTopFixed;
    }
    registerContainer(containerController) {
        Object(_utils_collections__WEBPACK_IMPORTED_MODULE_0__["addEntry"])(this.containers, containerController);
    }
    registerBoundary(boundaryController) {
        Object(_utils_collections__WEBPACK_IMPORTED_MODULE_0__["addEntry"])(this.boundaries, boundaryController);
    }
    registerIntersection(intersectionController) {
        const intersectionIndex = Object(_utils_collections__WEBPACK_IMPORTED_MODULE_0__["addEntry"])(this.intersections, intersectionController);
        if (intersectionIndex !== -1) {
            this._intersectionSnaps[intersectionIndex] = null;
            this._intersectionComputations[intersectionIndex] = null;
        }
    }
    registerSticky(stickyController) {
        const stickyIndex = Object(_utils_collections__WEBPACK_IMPORTED_MODULE_0__["addEntry"])(this.stickies, stickyController);
        if (stickyIndex !== -1) {
            this._stickySnaps[stickyIndex] = null;
            this._stickyComputations[stickyIndex] = null;
        }
    }
    updateAllStickies(fastUpdate) {
        this.updateStickies(fastUpdate);
        for (const containerController of this.containers) {
            containerController.updateAllStickies(fastUpdate);
        }
    }
    updateStickies(fastUpdate) {
        // // avoid update when there is no stickies
        // if (!this.stickies.length) {
        //   return;
        // }
        // // force full update when container size change
        // if (this.getContainerHeight() !== this._stickySnapContainerHeight) {
        //   fastUpdate = false;
        // }
        if (!fastUpdate) {
            this.beforeRefresh(fastUpdate);
            for (const boundaryController of this.boundaries) {
                boundaryController.beforeRefresh(fastUpdate);
            }
            for (let stickyIndex = 0; stickyIndex < this.stickies.length; ++stickyIndex) {
                this._stickyComputations[stickyIndex] = null;
                this._stickySnaps[stickyIndex] = null;
                this.stickies[stickyIndex].beforeRefresh(fastUpdate);
            }
            for (let intersectionIndex = 0; intersectionIndex < this.intersections.length; ++intersectionIndex) {
                this._intersectionComputations[intersectionIndex] = null;
                this._intersectionSnaps[intersectionIndex] = null;
                this.intersections[intersectionIndex].beforeRefresh(fastUpdate);
            }
        }
        //   // legacy code
        //   const viewportHeight = this.getViewportHeight() - this.stickyOffsetTop - this.stickyOffsetBottom;
        //   const viewportTop = this.getViewportTop() + this.getContainer().top + this.stickyOffsetTop;
        const container = this.getContainer();
        const viewportHeight = this.getViewportHeight();
        // compute absolute viewport top
        const viewportTop = this.getViewportTop() + this.getContainer().top;
        let stickies;
        // refresh stickies
        for (let stickyIndex = 0; stickyIndex < this.stickies.length; ++stickyIndex) {
            const stickyController = this.stickies[stickyIndex];
            let stickyComputation = this._stickyComputations[stickyIndex];
            if (!stickyComputation || stickyComputation.viewportTop !== viewportTop) {
                let stickySnap = this._stickySnaps[stickyIndex];
                if (!stickySnap) {
                    if (!stickies) {
                        stickies = [];
                        for (const _stickyController of this.stickies) {
                            stickies.push(_stickyController.getSticky());
                        }
                    }
                    stickySnap = this.stickyEngine.snapSticky(container, stickies, stickies[stickyIndex], viewportHeight);
                    this._stickySnaps[stickyIndex] = stickySnap;
                }
                stickyComputation = this.stickyEngine.determineStickyState(stickySnap, viewportTop);
                this._stickyComputations[stickyIndex] = stickyComputation;
            }
            stickyController.refresh(stickyComputation);
        }
        // refresh intersections
        for (let intersectionIndex = 0; intersectionIndex < this.intersections.length; ++intersectionIndex) {
            const intersectionController = this.intersections[intersectionIndex];
            let intersectionComputation = this._intersectionComputations[intersectionIndex];
            if (!intersectionComputation || intersectionComputation.viewportTop !== viewportTop) {
                let intersectionSnap = this._intersectionSnaps[intersectionIndex];
                if (!intersectionSnap) {
                    if (!stickies) {
                        stickies = [];
                        for (const _stickyController of this.stickies) {
                            stickies.push(_stickyController.getSticky());
                        }
                    }
                    const intersection = intersectionController.getIntersection();
                    intersectionSnap = this.stickyEngine.snapIntersection(container, stickies, intersection, viewportHeight);
                    this._intersectionSnaps[intersectionIndex] = intersectionSnap;
                }
                intersectionComputation = this.stickyEngine.determineIntersectionState(intersectionSnap, viewportTop);
                this._intersectionComputations[intersectionIndex] = intersectionComputation;
            }
            intersectionController.refresh(intersectionComputation);
        }
    }
    unregisterContainer(container) {
        Object(_utils_collections__WEBPACK_IMPORTED_MODULE_0__["deleteEntry"])(this.containers, container);
    }
    unregisterBoundary(boundary) {
        Object(_utils_collections__WEBPACK_IMPORTED_MODULE_0__["deleteEntry"])(this.boundaries, boundary);
    }
    unregisterIntersection(intersectionController) {
        const intersectionIndex = Object(_utils_collections__WEBPACK_IMPORTED_MODULE_0__["deleteEntry"])(this.intersections, intersectionController);
        if (intersectionIndex !== -1) {
            this._intersectionSnaps[intersectionIndex] = null;
            this._intersectionComputations[intersectionIndex] = null;
        }
    }
    unregisterSticky(sticky) {
        const stickyIndex = Object(_utils_collections__WEBPACK_IMPORTED_MODULE_0__["deleteEntry"])(this.stickies, sticky);
        if (stickyIndex !== -1) {
            this._stickySnaps[stickyIndex] = null;
            this._stickyComputations[stickyIndex] = null;
        }
    }
}


/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky-base-container.directive.ts":
/*!************************************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky-base-container.directive.ts ***!
  \************************************************************************/
/*! exports provided: NGX_STICKY_BASE_CONTAINER_CONFIG_SCHEMA, NgxStickyBaseContainerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_BASE_CONTAINER_CONFIG_SCHEMA", function() { return NGX_STICKY_BASE_CONTAINER_CONFIG_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStickyBaseContainerDirective", function() { return NgxStickyBaseContainerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _sticky_base_container_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sticky-base-container.controller */ "./projects/ngx-sticky/src/lib/sticky-base-container.controller.ts");
/* harmony import */ var _utils_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/coercion */ "./projects/ngx-sticky/src/lib/utils/coercion.ts");
/* harmony import */ var _utils_config_subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/config-subject */ "./projects/ngx-sticky/src/lib/utils/config-subject.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/dom */ "./projects/ngx-sticky/src/lib/utils/dom.ts");








const NGX_STICKY_BASE_CONTAINER_CONFIG_SCHEMA = {
    disabled: {
        aliasKey: 'stickyDisabled',
        defaultValue: false,
        coercion: _utils_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"],
    },
    offsetTop: {
        aliasKey: 'stickyOffsetTop',
        defaultValue: 0,
        coercion: _utils_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"],
    },
    offsetBottom: {
        aliasKey: 'stickyOffsetBottom',
        defaultValue: 0,
        coercion: _utils_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"],
    },
    unstacked: {
        aliasKey: 'stickyUnstacked',
        defaultValue: false,
        coercion: _utils_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"],
    },
};
/**
 * Abstract sticky container directive.
 */
// tslint:disable-next-line: max-line-length
class NgxStickyBaseContainerDirective extends _sticky_base_container_controller__WEBPACK_IMPORTED_MODULE_4__["NgxStickyBaseContainerController"] {
    constructor(containerParent, stickyEngine, ngZone, _win) {
        super();
        this.containerParent = containerParent;
        this.stickyEngine = stickyEngine;
        this.ngZone = ngZone;
        this._win = _win;
        /** Inputs config */
        this.config$ = new _utils_config_subject__WEBPACK_IMPORTED_MODULE_6__["ConfigSubject"](NGX_STICKY_BASE_CONTAINER_CONFIG_SCHEMA);
        /** Emits when the service is destroyed. */
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Emits when updateStickies() is called */
        this._updateStickies$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        if (this.containerParent) {
            this.containerParent.registerContainer(this);
        }
        this._getDocumentHeight = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_7__["getDocumentHeightFactory"])(this._win);
        this._getDocumentWidth = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_7__["getDocumentWidthFactory"])(this._win);
    }
    get config() {
        return this.config$.getValue();
    }
    get disabled() {
        return this.config.disabled;
    }
    ngOnChanges(changes) {
        this.config$.nextChanges(changes);
    }
    ngOnDestroy() {
        if (this.containerParent) {
            this.containerParent.unregisterContainer(this);
        }
        if (!this.destroyed$.isStopped) {
            this.destroyed$.next();
            this.destroyed$.complete();
        }
        this._destroyMonitoring();
    }
    beforeRefresh(fastUpdate) {
        if (!fastUpdate) {
            this._container = null;
        }
    }
    createScrollPlan(target, userOffsetTop) {
        const scrollPlan = [];
        if (!this._win) {
            return scrollPlan;
        }
        const scrollToFn = this.element
            ? this.element.scrollTo.bind(this.element)
            : this._win.scrollTo.bind(this._win);
        let containsElement = false;
        if (typeof target === 'string') {
            const elementAsNumber = parseFloat(target);
            if (!isNaN(elementAsNumber)) {
                target = elementAsNumber;
            }
            else {
                if (this.element) {
                    target = this.element.querySelector(target);
                }
                else {
                    target = this._win.document.querySelector(target);
                }
                if (target) {
                    containsElement = true;
                }
            }
        }
        if (typeof target === 'number' && !isNaN(target)) {
            const elementTop = this.fixViewportTop(target, userOffsetTop);
            scrollPlan.push({
                scrollToOptions: { left: this.getViewportLeft(), top: elementTop },
                scrollToFn,
            });
            return scrollPlan;
        }
        // if (!target || !(target instanceof HTMLElement)) {
        if (!target || !(target.tagName)) {
            return scrollPlan;
        }
        containsElement = containsElement || !this.element || this.element.contains(target);
        if (!containsElement) {
            return scrollPlan;
        }
        let targetContainer;
        let targetContainerScrollPlan;
        for (const containerController of this.containers) {
            const containerScrollPlan = containerController.createScrollPlan(target, userOffsetTop);
            if (containerScrollPlan.length) {
                targetContainerScrollPlan = containerScrollPlan;
                targetContainer = containerController;
                break;
            }
        }
        const containerScrollable = !this.element || Object(_utils_dom__WEBPACK_IMPORTED_MODULE_7__["isElementScrollableY"])(this._win, this.element);
        if (containerScrollable) {
            const targetLine = targetContainer
                ? targetContainer.getContainer()
                : Object(_utils_dom__WEBPACK_IMPORTED_MODULE_7__["getElementAbsoluteRect"])(target);
            const targetTopFixed = this.fixViewportTop(targetLine.top, userOffsetTop);
            scrollPlan.push({
                scrollToFn,
                scrollToOptions: { left: this.getViewportLeft(), top: targetTopFixed },
            });
        }
        if (targetContainerScrollPlan) {
            scrollPlan.push(...targetContainerScrollPlan);
        }
        return scrollPlan;
    }
    disableStickies() {
        this.config$.nextKeyValue('disabled', true, { skipCoercion: true });
    }
    enableStickies() {
        this.config$.nextKeyValue('disabled', false, { skipCoercion: true });
    }
    getContainer() {
        if (!this._container) {
            this._container = this._computeContainer();
        }
        return this._container;
    }
    getViewportHeight() {
        return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_7__["getWindowViewportHeight"])(this._win);
    }
    getViewportLeft() {
        return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_7__["getWindowViewportLeft"])(this._win);
    }
    getViewportTop() {
        return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_7__["getWindowViewportTop"])(this._win);
    }
    registerSticky(sticky) {
        super.registerSticky(sticky);
        if (this.stickies.length) {
            this._initMonitoring();
        }
    }
    unregisterSticky(sticky) {
        super.unregisterSticky(sticky);
        if (!this.stickies.length) {
            this._destroyMonitoring();
        }
    }
    scrollToTop(target, userOffsetTop) {
        const scrollPlan = this.createScrollPlan(target, userOffsetTop);
        for (const scrollStep of scrollPlan) {
            scrollStep.scrollToFn(scrollStep.scrollToOptions);
        }
    }
    updateStickies(fastUpdate) {
        // intercept update stickies to throttle calls
        this._updateStickies$.next(fastUpdate);
    }
    _computeContainer() {
        const config = this.config$.getValue();
        const containerRect = this.element ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_7__["getElementAbsoluteRect"])(this.element) : null;
        return {
            disabled: this.disabled,
            height: containerRect ? this.element.scrollHeight : this._getDocumentHeight(),
            left: containerRect ? containerRect.left : 0,
            offsetBottom: config.offsetBottom,
            offsetTop: config.offsetTop,
            top: containerRect ? containerRect.top : 0,
            unstacked: config.unstacked,
            width: containerRect ? this.element.scrollWidth : this._getDocumentWidth(),
        };
    }
    _createMonitoringObservable() {
        if (!this._win) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this._createMonitoringInputsObservable(), this._createMonitoringScrollObservable(), this._createMonitoringWindowObservable(), this._updateStickies$, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]) /*.pipe(throttleTime(0, animationFrameScheduler))*/;
    }
    _createMonitoringInputsObservable() {
        return this.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0), 
        // throttleTime(0, animationFrameScheduler),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false));
    }
    _createMonitoringScrollObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element || this._win, 'scroll', { passive: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true));
    }
    _createMonitoringWindowObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this._win, 'load', { passive: true }), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this._win, 'orientationchange', { passive: true }), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this._win, 'resize', { passive: true })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false));
    }
    _destroyMonitoring() {
        if (this._monitoring) {
            this._monitoring.unsubscribe();
            this._monitoring = null;
        }
    }
    _initMonitoring() {
        if (!this._win || this._monitoring) {
            return;
        }
        this.ngZone.runOutsideAngular(() => {
            this._monitoring = this._createMonitoringObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$), 
            // throttleTime(0, animationFrameScheduler),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])())
                .subscribe(fastUpdate => {
                this._updateStickies(fastUpdate);
            });
            // fromMediaQuery(this._win, 'print').subscribe(mqlEvent => {
            //   if (mqlEvent.matches) {
            //     this.disableStickies();
            //   } else {
            //     this.enableStickies();
            //   }
            // });
        });
    }
    _updateStickies(fastUpdate) {
        super.updateStickies(fastUpdate);
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], NgxStickyBaseContainerDirective.prototype, "stickyDisabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], NgxStickyBaseContainerDirective.prototype, "stickyOffsetBottom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], NgxStickyBaseContainerDirective.prototype, "stickyOffsetTop", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], NgxStickyBaseContainerDirective.prototype, "stickyUnstacked", void 0);


/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky-base.controller.ts":
/*!***************************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky-base.controller.ts ***!
  \***************************************************************/
/*! exports provided: NgxStickyBaseController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStickyBaseController", function() { return NgxStickyBaseController; });
/**
 * Abstract sticky controller.
 */
class NgxStickyBaseController {
    update(fastUpdate) {
        // all stickies need to be updated when one of them changed
        this.container.updateStickies(fastUpdate);
    }
}


/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky-boundary.directive.ts":
/*!******************************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky-boundary.directive.ts ***!
  \******************************************************************/
/*! exports provided: NGX_STICKY_BASE_BOUNDARY_CONFIG_SCHEMA, NgxStickyBoundaryDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_BASE_BOUNDARY_CONFIG_SCHEMA", function() { return NGX_STICKY_BASE_BOUNDARY_CONFIG_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStickyBoundaryDirective", function() { return NgxStickyBoundaryDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _sticky_base_boundary_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sticky-base-boundary.controller */ "./projects/ngx-sticky/src/lib/sticky-base-boundary.controller.ts");
/* harmony import */ var _sticky_container_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sticky-container.directive */ "./projects/ngx-sticky/src/lib/sticky-container.directive.ts");
/* harmony import */ var _sticky_root_container_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sticky-root-container.controller */ "./projects/ngx-sticky/src/lib/sticky-root-container.controller.ts");
/* harmony import */ var _sticky_tokens__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sticky.tokens */ "./projects/ngx-sticky/src/lib/sticky.tokens.ts");
/* harmony import */ var _utils_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/coercion */ "./projects/ngx-sticky/src/lib/utils/coercion.ts");
/* harmony import */ var _utils_config_subject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/config-subject */ "./projects/ngx-sticky/src/lib/utils/config-subject.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/dom */ "./projects/ngx-sticky/src/lib/utils/dom.ts");











const NGX_STICKY_BASE_BOUNDARY_CONFIG_SCHEMA = {
    unstacked: {
        aliasKey: 'stickyUnstacked',
        defaultValue: false,
        coercion: _utils_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"],
    },
};
/**
 * Defines a sticky boundary.
 */
let NgxStickyBoundaryDirective = 
// tslint:disable-next-line: max-line-length
class NgxStickyBoundaryDirective extends _sticky_base_boundary_controller__WEBPACK_IMPORTED_MODULE_4__["NgxStickyBaseBoundaryController"] {
    constructor(rootContainer, stickyContainer, elementRef, ngZone, _win) {
        super();
        this.rootContainer = rootContainer;
        this.stickyContainer = stickyContainer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this._win = _win;
        /** Inputs config */
        this.config$ = new _utils_config_subject__WEBPACK_IMPORTED_MODULE_9__["ConfigSubject"](NGX_STICKY_BASE_BOUNDARY_CONFIG_SCHEMA);
        /** Emits when the component is destroyed. */
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // use root container when boundary isn't in container
        this._container = stickyContainer || rootContainer;
        // register boundary in container for first update calls
        this.container.registerBoundary(this);
    }
    get config() {
        return this.config$.getValue();
    }
    get container() {
        return this._container;
    }
    ngOnChanges(changes) {
        this.config$.nextChanges(changes);
    }
    ngOnInit() {
        this._initMonitoring();
    }
    ngOnDestroy() {
        this.container.unregisterBoundary(this);
        if (!this._destroyed$.isStopped) {
            this._destroyed$.next();
            this._destroyed$.complete();
        }
        this._destroyMonitoring();
    }
    beforeRefresh(fastUpdate) {
        if (!fastUpdate) {
            this._boundary = null;
        }
    }
    getBoundary() {
        if (!this._boundary) {
            this._boundary = this._computeBoundary();
        }
        return this._boundary;
    }
    _computeBoundary() {
        const boundary = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_10__["getElementAbsoluteRect"])(this.elementRef.nativeElement);
        if (this._win) {
            const boundaryStyle = this._win.getComputedStyle(this.elementRef.nativeElement);
            const paddingTop = parseFloat(boundaryStyle.paddingTop) || 0;
            const paddingBottom = parseFloat(boundaryStyle.paddingBottom) || 0;
            // substract paddings from computed boundary line
            boundary.top += paddingTop;
            boundary.height -= paddingTop + paddingBottom;
        }
        boundary.unstacked = this.config.unstacked;
        return boundary;
    }
    _createMonitoringObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.config$, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]).pipe(
        // throttleTime(0, animationFrameScheduler),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false));
    }
    _destroyMonitoring() {
        if (this._monitoring) {
            this._monitoring.unsubscribe();
            this._monitoring = null;
        }
    }
    _initMonitoring() {
        if (!this._win || this._monitoring) {
            return;
        }
        this.ngZone.runOutsideAngular(() => {
            this._monitoring = this._createMonitoringObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])())
                .subscribe(fastUpdate => {
                this.updateStickies(fastUpdate);
            });
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], NgxStickyBoundaryDirective.prototype, "stickyUnstacked", void 0);
NgxStickyBoundaryDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ngxStickyBoundary], [ngx-sticky-boundary], ngx-sticky-boundary',
        exportAs: 'ngxStickyBoundary',
    })
    // tslint:disable-next-line: max-line-length
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _sticky_container_directive__WEBPACK_IMPORTED_MODULE_5__["NgxStickyContainerDirective"]))),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sticky_tokens__WEBPACK_IMPORTED_MODULE_7__["NGX_STICKY_WINDOW"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sticky_root_container_controller__WEBPACK_IMPORTED_MODULE_6__["NgxStickyRootContainerController"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        Window])
], NgxStickyBoundaryDirective);



/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sticky_base_container_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sticky-base-container.directive */ "./projects/ngx-sticky/src/lib/sticky-base-container.directive.ts");
/* harmony import */ var _sticky_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sticky-engine */ "./projects/ngx-sticky/src/lib/sticky-engine.ts");
/* harmony import */ var _sticky_root_container_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sticky-root-container.controller */ "./projects/ngx-sticky/src/lib/sticky-root-container.controller.ts");
/* harmony import */ var _sticky_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sticky.tokens */ "./projects/ngx-sticky/src/lib/sticky.tokens.ts");

var NgxStickyContainerDirective_1;





/**
 * Defines a sticky container.
 */
let NgxStickyContainerDirective = NgxStickyContainerDirective_1 = class NgxStickyContainerDirective extends _sticky_base_container_directive__WEBPACK_IMPORTED_MODULE_2__["NgxStickyBaseContainerDirective"] {
    constructor(rootContainer, stickyContainerParent, stickyEngine, ngZone, elementRef, _win) {
        // use root container when boundary isn't in container
        super(stickyContainerParent || rootContainer, stickyEngine, ngZone, _win);
        this.rootContainer = rootContainer;
        this.stickyContainerParent = stickyContainerParent;
        this.stickyEngine = stickyEngine;
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this._win = _win;
    }
    /**
     * Returns HTMLElement of the container.
     */
    get element() {
        return this.elementRef.nativeElement;
    }
    getViewportHeight() {
        return this.element.offsetHeight;
    }
    getViewportLeft() {
        return this.element.scrollLeft;
    }
    getViewportTop() {
        return this.element.scrollTop;
    }
};
NgxStickyContainerDirective = NgxStickyContainerDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ngxStickyContainer], [ngx-sticky-container], ngx-sticky-container',
        exportAs: 'ngxStickyContainer',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => NgxStickyContainerDirective_1))),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sticky_tokens__WEBPACK_IMPORTED_MODULE_5__["NGX_STICKY_WINDOW"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sticky_root_container_controller__WEBPACK_IMPORTED_MODULE_4__["NgxStickyRootContainerController"], Object, _sticky_engine__WEBPACK_IMPORTED_MODULE_3__["NgxStickyEngine"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        Window])
], NgxStickyContainerDirective);



/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky-engine.ts":
/*!******************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky-engine.ts ***!
  \******************************************************/
/*! exports provided: NGX_STICKY_ENGINE_INTERCEPTION_STATE_MAP, NgxStickyEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_ENGINE_INTERCEPTION_STATE_MAP", function() { return NGX_STICKY_ENGINE_INTERCEPTION_STATE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStickyEngine", function() { return NgxStickyEngine; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sticky_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sticky.helpers */ "./projects/ngx-sticky/src/lib/sticky.helpers.ts");



const NGX_STICKY_ENGINE_INTERCEPTION_STATE_MAP = {
    'sticked,normal': 'enter',
    'stucked,normal': 'entered',
    'sticked,sticked': 'entered',
    'stucked,sticked': 'exit',
    'stucked,stucked': 'exited',
};
/**
 * Defines a sticky engine. Implemented in universal way.
 */
let NgxStickyEngine = class NgxStickyEngine {
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
    computeStickyBoundary(container, boundary, sticky, directionDown, spot, viewportHeight) {
        let { height: boundaryHeight, top: boundaryTop, left: boundaryLeft, width: boundaryWidth, } = boundary || container;
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
                    }
                    else if (spotPoint < boundaryTop + boundaryHeight) {
                        boundaryHeight = spotPoint - boundaryTop + sticky.height;
                    }
                }
            }
            else {
                // when sticky direction is top and is after its spot
                if (!directionDown) {
                    const spotPoint = spot.top + spot.height + viewportHeight;
                    // disable sticky when is in same viewport height as its spot
                    if (spotPoint > sticky.top) {
                        boundaryHeight = 0;
                        boundaryTop = 0;
                        // adjust sticky boundary top according to its spot when spot point is in base boundary
                    }
                    else if (spotPoint > boundaryTop && spotPoint < boundaryTop + boundaryHeight) {
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
    computeStickyStickedLine(boundary, sticky, positionBottom, directionDown, viewportHeight) {
        let stickedTop;
        let stickedHeight;
        if (positionBottom) {
            if (directionDown) {
                stickedTop = sticky.top + sticky.height - viewportHeight;
                stickedHeight = boundary.height + boundary.top - stickedTop - viewportHeight;
            }
            else {
                stickedTop = boundary.top - viewportHeight;
                stickedHeight = sticky.top - stickedTop - viewportHeight;
            }
        }
        else {
            if (directionDown) {
                stickedTop = sticky.top;
                stickedHeight = boundary.height + boundary.top - stickedTop;
            }
            else {
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
    computeStickySortPoint(sticky, positionBottom, directionDown, viewportHeight) {
        let sortPoint;
        if (positionBottom) {
            sortPoint = directionDown
                ? -sticky.top - sticky.height + viewportHeight
                : sticky.top + sticky.height - viewportHeight;
        }
        else {
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
    determineIntersectionState(snap, viewportTop) {
        const enter = this.determineStickyState(snap.enter, viewportTop);
        const exit = this.determineStickyState(snap.exit, viewportTop);
        // Intersection state can be easily determined from enter sticky and exit sticky states:
        // - enter: when enter sticky (on bottom) is _sticked_ and exit sticky (on top) is _normal_ ;
        // - entered: when enter (on bottom) and exit (on top) stickies are _sticked_ ;
        // - entered: when enter sticky (on bottom) is _stucked_ and exit sticky (on top) is _normal_ ;
        // - exit: when enter sticky (on bottom) is _stucked_ and exit sticky (on top) is _sticked_ ;
        // - exited: when enter (on bottom) and exit (on top) stickies are _stucked_.
        const stateKey = [enter.state, exit.state].join(',');
        const state = NGX_STICKY_ENGINE_INTERCEPTION_STATE_MAP[stateKey] || null;
        const viewportOffsetless = snap.viewportHeight - enter.offsetSticked - exit.offsetSticked;
        const maxHeightVisible = Math.min(snap.intersection.height, viewportOffsetless);
        let height = 0;
        let intersecting = false;
        if (state === 'entered') {
            height = maxHeightVisible;
            intersecting = true;
        }
        else if (state === 'enter') {
            height = viewportTop + snap.viewportHeight - snap.intersection.top - enter.offsetSticked;
            intersecting = true;
        }
        else if (state === 'exit') {
            height = snap.intersection.top + snap.intersection.height - viewportTop - exit.offsetSticked;
            intersecting = true;
        }
        const computation = {
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
    determineStickyState(snap, viewportTop) {
        const computation = {
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
        let _stickyComputedState;
        // compute state for each sibling and stickyComputed in last
        for (const _stickyComputed of snap.stickies) {
            const boundaryOffset = _stickyComputed.directionDown
                ? _stickyComputed.boundary.offsetBottom
                : _stickyComputed.boundary.offsetTop;
            let { top: _stickedTop, height: _stickedHeight, } = _stickyComputed.sticked;
            // adjust _stickyComputed sticked line with previous sibling
            if (_stickyComputed.positionBottom) {
                if (_stickyComputed.directionDown) {
                    _stickedTop += computation.offsetSticked + computation.offsetStucked;
                    _stickedHeight -= computation.offsetStucked;
                }
                else {
                    _stickedTop += boundaryOffset;
                    _stickedTop += computation.offsetSticked;
                    _stickedHeight -= boundaryOffset - computation.offsetStucked;
                    _stickedHeight += _stickyComputed.height;
                }
            }
            else {
                if (_stickyComputed.directionDown) {
                    _stickedTop -= computation.offsetSticked + computation.offsetStucked;
                    _stickedHeight += computation.offsetStucked;
                    _stickedHeight -= boundaryOffset;
                }
                else {
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
            }
            else if (!_stickyComputed.directionDown) {
                _stickyComputedState = 'stucked';
            }
            // cumulate sibling height to the right offset
            if (
            // when _stickyComputed isn't stickyComputed
            _stickyComputed !== snap.stickyComputed
                // and state determined is "sticked" or "stucked"
                && _stickyComputedState !== 'normal'
                // and _stickyComputed is stacked
                && !_stickyComputed.boundary.unstacked) {
                if (_stickyComputed.boundary.top === snap.stickyComputed.boundary.top
                    && _stickyComputed.boundary.height === snap.stickyComputed.boundary.height) {
                    computation.offsetStucked += _stickyComputed.height;
                }
                else if (_stickyComputedState === 'sticked') {
                    computation.offsetSticked += _stickyComputed.height;
                }
            }
            // (computation as any)._state = _stickyComputedState;
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
    getStickedOffset(container, stickies, position, viewportHeight, viewportTop) {
        const positionBottom = Object(_sticky_helpers__WEBPACK_IMPORTED_MODULE_2__["isStickyPositionBottom"])(position);
        let maxStickyUnstackedHeight = 0;
        let stickedOffset = 0;
        for (const _sticky of stickies) {
            // skip sticky when is position bottom
            if (Object(_sticky_helpers__WEBPACK_IMPORTED_MODULE_2__["isStickyPositionBottom"])(_sticky.position) !== positionBottom) {
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
                }
                else if (_elementHeight > maxStickyUnstackedHeight) {
                    maxStickyUnstackedHeight = _elementHeight;
                }
            }
        }
        stickedOffset += maxStickyUnstackedHeight;
        if (positionBottom) {
            stickedOffset += container.offsetBottom || 0;
        }
        else {
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
    snapIntersection(container, stickies, intersection, viewportHeight) {
        const disabled = intersection.disabled;
        // enter sticky is sticked on bottom
        const enterSticky = {
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
        const exitSticky = {
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
                thresholds: intersection.thresholds ? [...intersection.thresholds] : [0, 1],
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
    snapSticky(container, stickies, sticky, viewportHeight) {
        const boundariesMap = {};
        const directionDown = Object(_sticky_helpers__WEBPACK_IMPORTED_MODULE_2__["isStickyDirectionDown"])(sticky.direction);
        const positionBottom = Object(_sticky_helpers__WEBPACK_IMPORTED_MODULE_2__["isStickyPositionBottom"])(sticky.position);
        const stickyComputed = {
            boundary: this.computeStickyBoundary(container, sticky.boundary, sticky, directionDown, sticky.spot, viewportHeight),
            directionDown,
            disabled: false,
            height: sticky.height,
            positionBottom,
            sortPoint: this.computeStickySortPoint(sticky, positionBottom, directionDown, viewportHeight),
            sticked: null,
            top: sticky.top,
        };
        if (container.disabled
            || sticky.disabled
            || !sticky.height
            || sticky.top < stickyComputed.boundary.top
            || sticky.top > stickyComputed.boundary.top + stickyComputed.boundary.height) {
            stickyComputed.disabled = true;
            stickyComputed.sticked = { height: 0, top: 0 };
        }
        else {
            stickyComputed.sticked = this.computeStickyStickedLine(stickyComputed.boundary, sticky, positionBottom, directionDown, viewportHeight);
        }
        const stickiesComputed = [];
        let offsetSpacer;
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
            stickies = [offsetSpacer, ...stickies];
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
            stickies = [offsetSpacer, ...stickies];
        }
        // remove 1px to fix round sizes (offsetLeft and offsetWidth)
        const stickyComputedBoundaryRight = stickyComputed.boundary.left + stickyComputed.boundary.width - 1;
        // tslint:disable-next-line: prefer-for-of
        for (let _stickyIndex = 0; _stickyIndex < stickies.length; ++_stickyIndex) {
            const _sticky = stickies[_stickyIndex];
            let _directionDown;
            let _positionBottom;
            let _stickyComputed;
            let _stickyComputedBoundaryRight;
            if (_sticky === sticky) {
                _directionDown = stickyComputed.directionDown;
                _positionBottom = stickyComputed.positionBottom;
                _stickyComputed = stickyComputed;
                _stickyComputedBoundaryRight = stickyComputedBoundaryRight;
            }
            else {
                _directionDown = Object(_sticky_helpers__WEBPACK_IMPORTED_MODULE_2__["isStickyDirectionDown"])(_sticky.direction);
                _positionBottom = Object(_sticky_helpers__WEBPACK_IMPORTED_MODULE_2__["isStickyPositionBottom"])(_sticky.position);
                _stickyComputed = {
                    boundary: this.computeStickyBoundary(container, _sticky.boundary, _sticky, _directionDown, _sticky.spot, viewportHeight),
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
                if (_sticky.disabled
                    || !_sticky.height
                    // skip sticky which isn't in its boundary
                    || _sticky.top < _stickyComputed.boundary.top
                    || _sticky.top > _stickyComputed.boundary.top + _stickyComputed.boundary.height
                    // skip sticky sibling when its boundary isn't align horizontaly
                    || stickyComputedBoundaryRight <= _stickyComputed.boundary.left
                    || stickyComputed.boundary.left >= _stickyComputedBoundaryRight) {
                    _stickyComputed.disabled = true;
                    _stickyComputed.sticked = { height: 0, top: 0 };
                }
                else {
                    _stickyComputed.sticked = this.computeStickyStickedLine(_stickyComputed.boundary, _sticky, _positionBottom, _directionDown, viewportHeight);
                }
            }
            // compute boundary unique key
            const boundaryKey = [_stickyComputed.boundary.top, _stickyComputed.boundary.height].join(',');
            // ensure stickies computed to use same boundary instance
            if (boundariesMap[boundaryKey]) {
                _stickyComputed.boundary = boundariesMap[boundaryKey];
            }
            else {
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
                }
                else {
                    if (_sticky.height > _stickyComputed.boundary.offsetTop) {
                        _stickyComputed.boundary.offsetTop = _sticky.height;
                    }
                }
                // add sticky sibling height to right boundary offset when it stacked
            }
            else {
                if (_directionDown) {
                    _stickyComputed.boundary.offsetBottom += _sticky.height;
                }
                else {
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
                && (_stickyComputed.directionDown
                    ? _stickyComputed.top < stickyComputed.top
                    : _stickyComputed.top > stickyComputed.top)) {
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
};
NgxStickyEngine = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], NgxStickyEngine);



/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky-root-container.controller.ts":
/*!*************************************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky-root-container.controller.ts ***!
  \*************************************************************************/
/*! exports provided: NgxStickyRootContainerController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStickyRootContainerController", function() { return NgxStickyRootContainerController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sticky_base_container_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sticky-base-container.directive */ "./projects/ngx-sticky/src/lib/sticky-base-container.directive.ts");
/* harmony import */ var _sticky_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sticky-engine */ "./projects/ngx-sticky/src/lib/sticky-engine.ts");
/* harmony import */ var _sticky_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sticky.tokens */ "./projects/ngx-sticky/src/lib/sticky.tokens.ts");





/**
 * Defines the sticky root container which is used to manage sticky without container.
 */
let NgxStickyRootContainerController = class NgxStickyRootContainerController extends _sticky_base_container_directive__WEBPACK_IMPORTED_MODULE_2__["NgxStickyBaseContainerDirective"] {
    constructor(stickyEngine, ngZone, _win) {
        super(null, stickyEngine, ngZone, _win);
        this.stickyEngine = stickyEngine;
        this.ngZone = ngZone;
        this._win = _win;
        // root container never has parent container
        this.containerParent = null;
        // root container never has element
        this.element = null;
    }
};
NgxStickyRootContainerController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sticky_tokens__WEBPACK_IMPORTED_MODULE_4__["NGX_STICKY_WINDOW"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sticky_engine__WEBPACK_IMPORTED_MODULE_3__["NgxStickyEngine"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        Window])
], NgxStickyRootContainerController);



/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky.directive.ts":
/*!*********************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky.directive.ts ***!
  \*********************************************************/
/*! exports provided: NGX_STICKY_BASE_CONFIG_SCHEMA, NgxStickyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_BASE_CONFIG_SCHEMA", function() { return NGX_STICKY_BASE_CONFIG_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStickyDirective", function() { return NgxStickyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _sticky_base_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sticky-base.controller */ "./projects/ngx-sticky/src/lib/sticky-base.controller.ts");
/* harmony import */ var _sticky_boundary_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sticky-boundary.directive */ "./projects/ngx-sticky/src/lib/sticky-boundary.directive.ts");
/* harmony import */ var _sticky_container_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sticky-container.directive */ "./projects/ngx-sticky/src/lib/sticky-container.directive.ts");
/* harmony import */ var _sticky_root_container_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sticky-root-container.controller */ "./projects/ngx-sticky/src/lib/sticky-root-container.controller.ts");
/* harmony import */ var _sticky_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sticky.helpers */ "./projects/ngx-sticky/src/lib/sticky.helpers.ts");
/* harmony import */ var _sticky_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sticky.tokens */ "./projects/ngx-sticky/src/lib/sticky.tokens.ts");
/* harmony import */ var _utils_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/coercion */ "./projects/ngx-sticky/src/lib/utils/coercion.ts");
/* harmony import */ var _utils_config_subject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/config-subject */ "./projects/ngx-sticky/src/lib/utils/config-subject.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/dom */ "./projects/ngx-sticky/src/lib/utils/dom.ts");
/* harmony import */ var _utils_from_image_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/from-image-events */ "./projects/ngx-sticky/src/lib/utils/from-image-events.ts");

var NgxStickyDirective_1;













const NGX_STICKY_BASE_CONFIG_SCHEMA = {
    classes: {
        aliasKey: 'stickyClasses',
        defaultValue: false,
        coercion: _utils_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"],
    },
    disabled: {
        aliasKey: 'stickyDisabled',
        defaultValue: false,
        coercion: _utils_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"],
    },
    direction: {
        aliasKey: 'stickyDirection',
        defaultValue: 'down',
        coercion: _sticky_helpers__WEBPACK_IMPORTED_MODULE_8__["coerceStickyDirection"],
    },
    height: {
        aliasKey: 'stickyHeight',
        defaultValue: 0,
        coercion: _utils_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceNumberProperty"],
    },
    // orbit: {
    //   aliasKey: 'stickyOrbit',
    //   defaultValue: false,
    //   coercion: coerceBooleanProperty,
    // },
    position: {
        aliasKey: 'stickyPosition',
        defaultValue: 'top',
        coercion: _sticky_helpers__WEBPACK_IMPORTED_MODULE_8__["coerceStickyPosition"],
    },
    spacer: {
        aliasKey: 'stickySpacer',
        defaultValue: null,
    },
    spot: {
        aliasKey: 'stickySpot',
        defaultValue: null,
    },
    spotHeight: {
        aliasKey: 'stickySpotHeight',
        defaultValue: 0,
        coercion: _utils_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceNumberProperty"],
    },
};
/**
 * Defines a sticky.
 */
let NgxStickyDirective = NgxStickyDirective_1 = class NgxStickyDirective extends _sticky_base_controller__WEBPACK_IMPORTED_MODULE_4__["NgxStickyBaseController"] {
    constructor(rootContainer, stickyContainer, stickyBoundary, stickyParent, elementRef, renderer, 
    // readonly changeDetectorRef: ChangeDetectorRef,
    ngZone, _win) {
        super();
        this.rootContainer = rootContainer;
        this.stickyContainer = stickyContainer;
        this.stickyBoundary = stickyBoundary;
        this.stickyParent = stickyParent;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this._win = _win;
        /**
         * Emit sticky computation.
         */
        this.stickyComputation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emit sticky state.
         */
        this.stickyState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Inputs config */
        this.config$ = new _utils_config_subject__WEBPACK_IMPORTED_MODULE_11__["ConfigSubject"](NGX_STICKY_BASE_CONFIG_SCHEMA);
        /** Emits when the component is destroyed. */
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Emits when refresh() is called */
        this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Sticky element state which reflect last call of _refreshStickyElement() */
        this._stickyElementState = null;
        /** Sticky element state which reflect last sticky state output */
        this._stickyState = null;
        // use root container when sticky isn't in container
        this._container = stickyContainer || rootContainer;
        // ensure sticky boundary is in same container
        this._boundary = stickyBoundary && stickyBoundary.container === this._container ? stickyBoundary : null;
        // register sticky in container only if isn't in another sticky
        if (!this.stickyParent) {
            // register in parent container for first update calls
            this.container.registerSticky(this);
        }
    }
    get attrDataStickyState() { return !this.stickyParent ? this.state : null; }
    get cssClassSticky() { return !this.stickyParent && this.config.classes; }
    get cssClassStickyNormal() { return this.cssClassSticky && this.state === 'normal'; }
    get cssClassStickySticked() { return this.cssClassSticky && this.state === 'sticked'; }
    get cssClassStickyStucked() { return this.cssClassSticky && this.state === 'stucked'; }
    get cssClassStickyDisabled() { return this.cssClassSticky && this.disabled; }
    // @HostBinding('class.ngx-sticky--spot')
    // get cssClassStickySpot() { return this.cssClassSticky && !!this.config.spot; }
    // @HostBinding('class.ngx-sticky--position-top')
    // get cssClassStickyPositionTop() { return this.cssClassSticky && !isStickyPositionBottom(this.config.position); }
    // @HostBinding('class.ngx-sticky--position-bottom')
    // get cssClassStickyPositionBottom() { return this.cssClassSticky && isStickyPositionBottom(this.config.position); }
    // @HostBinding('class.ngx-sticky--direction-up')
    // get cssClassStickyDirectionUp() { return this.cssClassSticky && !isStickyDirectionDown(this.config.direction); }
    // @HostBinding('class.ngx-sticky--direction-down')
    // get cssClassStickydirectionDown() { return this.cssClassSticky && isStickyDirectionDown(this.config.direction); }
    get boundary() {
        return this._boundary;
    }
    get container() {
        return this._container;
    }
    get config() {
        return this.config$.getValue();
    }
    get disabled() {
        return this.config.disabled;
    }
    /**
     * State of the sticky.
     */
    get state() {
        return this._stickyState;
    }
    ngOnChanges(changes) {
        this.config$.nextChanges(changes);
    }
    ngAfterViewInit() {
        // avoid sticky initialization when sticky has a parent
        if (this._preventNestedStickyError()) {
            return;
        }
        this._initMonitoring();
    }
    ngOnDestroy() {
        this.container.unregisterSticky(this);
        if (!this._destroyed$.isStopped) {
            this._destroyed$.next();
            this._destroyed$.complete();
        }
        this._destroyMonitoring();
    }
    beforeRefresh(fastUpdate) {
        if (!fastUpdate) {
            this._sticky = null;
        }
    }
    disableSticky() {
        this.config$.nextKeyValue('disabled', true, { skipCoercion: true });
    }
    enableSticky() {
        this.config$.nextKeyValue('disabled', false, { skipCoercion: true });
    }
    getSticky() {
        if (!this._sticky) {
            this._sticky = this._computeSticky();
        }
        return this._sticky;
    }
    refresh(computation) {
        this._refresh$.next(computation);
    }
    _computeSticky() {
        // IMPORTANT: refresh sticky element to its normal state is required to compute repainted element height.
        this._refreshStickyElement(null);
        this._refreshStickyElement('normal');
        const config = this.config$.getValue();
        // element and spot rects which reflects last screen repaint
        const elementRect = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_12__["getElementAbsoluteRect"])(this.elementRef.nativeElement);
        const spotRect = config.spot ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_12__["getElementAbsoluteRect"])(config.spot) : null;
        if (config.height) {
            elementRect.height = config.height;
        }
        if (spotRect && config.spotHeight) {
            spotRect.height = config.spotHeight;
        }
        return {
            disabled: config.disabled,
            boundary: this.boundary ? this.boundary.getBoundary() : null,
            direction: config.direction,
            height: elementRect.height,
            position: config.position,
            top: elementRect.top,
            spot: spotRect,
        };
    }
    /**
     * Create sticky monitoring observable.
     */
    _createMonitoringObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.config$, Object(_utils_from_image_events__WEBPACK_IMPORTED_MODULE_13__["fromImageEvents"])(this.elementRef.nativeElement), Object(_utils_from_image_events__WEBPACK_IMPORTED_MODULE_13__["fromImageEvents"])(this.config.spot), rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]).pipe(
        // throttleTime(0, animationFrameScheduler),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false));
    }
    /**
     * Destroy sticky monitoring subscription.
     */
    _destroyMonitoring() {
        if (this._monitoring) {
            this._monitoring.unsubscribe();
            this._monitoring = null;
        }
    }
    /**
     * Returns styles of the given state.
     *
     * `computation` is required when `state` is `"sticked"` or `"stucked"`.
     *
     * @param state Sticky state
     * @param computation Sticky state computation
     * @returns Styles of the sticky state
     */
    _getStickyElementStyle(state, computation) {
        const win = this._win;
        if (!win || !state) {
            return null;
        }
        const ghost = this.config.spacer || this._spacerGenerated;
        const ghostParent = ghost.offsetParent;
        const ghostParentIsRootElement = ghostParent === win.document.body || ghostParent === win.document.documentElement;
        // when state is normal (computation isn't needed)
        if (state === 'normal') {
            const ghostRelativeRect = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_12__["getElementRelativeRect"])(win, ghost);
            const ghostStyle = win.getComputedStyle(ghost);
            const ghostBorderBox = ghostStyle.boxSizing === 'border-box';
            let elementWidth = ghostRelativeRect.width;
            if (!ghostBorderBox) {
                elementWidth +=
                    -((parseFloat(ghostStyle.borderLeft) || 0) + (parseFloat(ghostStyle.borderRight) || 0))
                        - ((parseFloat(ghostStyle.paddingLeft) || 0) + (parseFloat(ghostStyle.paddingRight) || 0));
            }
            let elementTop = ghostRelativeRect.top;
            let elementLeft = ghostRelativeRect.left;
            if (ghostParentIsRootElement) {
                if (this.container !== this.rootContainer) {
                    const ghostRect = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_12__["getElementAbsoluteRect"])(ghost);
                    const viewportTop = this.container.getViewportTop();
                    elementTop = ghostRect.top - viewportTop;
                }
                elementTop += win.document.documentElement.offsetTop;
                elementLeft += win.document.documentElement.offsetLeft;
            }
            const styles = {
                position: 'absolute',
                width: `${elementWidth}px`,
                top: `${elementTop}px`,
                right: '',
                bottom: '',
                left: `${elementLeft}px`,
                float: '',
                margin: '0px',
            };
            return styles;
        }
        const { container, stickyComputed, viewportHeight } = computation.snap;
        // when state is sticked
        if (state === 'sticked') {
            const positionBottom = stickyComputed.positionBottom;
            let elementTop;
            let elementLeft;
            if (this.container !== this.rootContainer) {
                const ghostRelativeRect = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_12__["getElementRelativeRect"])(win, ghost);
                elementLeft = ghostRelativeRect.left;
                if (ghostParentIsRootElement) {
                    elementTop = container.top;
                    elementTop += win.document.documentElement.offsetTop;
                    elementLeft += win.document.documentElement.offsetLeft;
                }
                else {
                    const ghostParentRect = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_12__["getElementAbsoluteRect"])(ghostParent);
                    elementTop = computation.viewportTop - ghostParentRect.top;
                }
                if (positionBottom) {
                    elementTop += viewportHeight - stickyComputed.height - computation.offsetSticked - computation.offsetStucked;
                }
                else {
                    elementTop += computation.offsetSticked + computation.offsetStucked;
                }
                return {
                    position: 'absolute',
                    top: `${elementTop}px`,
                    bottom: '',
                    left: `${elementLeft}px`,
                };
            }
            else {
                const ghostRect = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_12__["getElementAbsoluteRect"])(ghost);
                elementTop = computation.offsetSticked + computation.offsetStucked;
                elementLeft = ghostRect.left + win.document.documentElement.offsetLeft;
                return {
                    position: 'fixed',
                    top: !positionBottom ? `${elementTop}px` : '',
                    bottom: positionBottom ? `${elementTop}px` : '',
                    left: `${elementLeft}px`,
                };
            }
        }
        // when state is stucked
        if (state === 'stucked') {
            const ghostRect = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_12__["getElementAbsoluteRect"])(ghost);
            let elementTop;
            let elementLeft;
            elementTop = Object(_sticky_helpers__WEBPACK_IMPORTED_MODULE_8__["getStuckedPositionTop"])(computation);
            elementLeft = ghostRect.left;
            if (ghostParentIsRootElement) {
                if (this.container !== this.rootContainer) {
                    // we can't use computation.viewportTop because it's absolute viewport top
                    const relativeViewportTop = this.container.getViewportTop();
                    elementTop -= relativeViewportTop;
                }
                elementTop += win.document.documentElement.offsetTop;
                elementLeft += win.document.documentElement.offsetLeft;
            }
            else {
                const ghostParentRect = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_12__["getElementAbsoluteRect"])(ghostParent);
                elementTop -= ghostParentRect.top;
                elementLeft -= ghostParentRect.left;
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
     * Returns sticky ghost style.
     *
     * @returns Styles of the sticky ghost
     */
    _getStickyGhostStyle() {
        const stickySpacer = this.config.spacer || this._spacerGenerated;
        if (!this._win || !stickySpacer) {
            return null;
        }
        const element = this.elementRef.nativeElement;
        const elementStyle = this._win.getComputedStyle(element);
        const elementnBorderBox = elementStyle.boxSizing === 'border-box';
        let ghostHeight = element.offsetHeight;
        // const ghostWidth = elementStyle.width;
        // substract borders and paddings when element isn't border-boxed
        if (!elementnBorderBox) {
            ghostHeight +=
                // substract vertical borders
                -(parseFloat(elementStyle.borderTopWidth) || 0)
                    - (parseFloat(elementStyle.borderBottomWidth) || 0)
                    // substract vertical paddings
                    - (parseFloat(elementStyle.paddingTop) || 0)
                    - (parseFloat(elementStyle.paddingBottom) || 0);
        }
        const styles = {
            boxSizing: elementStyle.boxSizing,
            position: elementStyle.position,
            top: elementStyle.top,
            right: elementStyle.right,
            bottom: elementStyle.bottom,
            left: elementStyle.left,
            width: element.style.width,
            // width: element.style.width || elementStyle.width,
            // width: `${ghostWidth}px`,
            height: `${ghostHeight}px`,
            borderTop: elementStyle.borderTop,
            borderBottom: elementStyle.borderBottom,
            borderLeft: elementStyle.borderLeft,
            borderRight: elementStyle.borderRight,
            // borderColor: 'transparent',
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
        // if (this.config.orbit) {
        //   styles.position = 'absolute';
        //   styles.width = element.style.width || elementStyle.width;
        // }
        return styles;
    }
    /**
     * Hides sticky ghost.
     */
    _hideStickyGhost() {
        const ghost = this.config.spacer || this._spacerGenerated;
        if (!ghost) {
            return;
        }
        this.renderer.setStyle(ghost, 'display', 'none');
    }
    /**
     * Init sticky monitoring.
     */
    _initMonitoring() {
        if (!this._win || this._monitoring) {
            return;
        }
        this.ngZone.runOutsideAngular(() => {
            const handleRefreshSubscription = this._refresh$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"], { leading: true, trailing: true }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])())
                .subscribe(computation => {
                this._refreshSticky(computation);
            });
            const triggerUpdateSubscription = this._createMonitoringObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])())
                .subscribe(fastUpdate => {
                this.update(fastUpdate);
            });
            this._monitoring = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
            this._monitoring.add(handleRefreshSubscription);
            this._monitoring.add(triggerUpdateSubscription);
        });
    }
    /**
     * Inserts sticky ghost generated.
     */
    _insertStickyGhostGenerated() {
        if (this._spacerGenerated) {
            return;
        }
        const element = this.elementRef.nativeElement;
        const ghost = this.renderer.createElement(element.tagName);
        this.renderer.addClass(ghost, 'ngx-sticky-spacer');
        // this.renderer.setStyle(ghost, 'borderStyle', 'solid');
        // this.renderer.setStyle(ghost, 'borderColor', 'transparent');
        this.renderer.insertBefore(element.parentElement, ghost, element);
        this._spacerGenerated = ghost;
    }
    /**
     * Log nested sticky error and returns `true` when sticky is in another sticky.
     *
     * @returns `true` when sticky is in another sticky
     */
    _preventNestedStickyError() {
        if (!this.stickyParent) {
            return false;
        }
        const nestedStickyError = new Error('Nested sticky is not support. Sticky will not work.');
        const logLevel = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() ? 'error' : 'warn';
        const logLevelLogger = console[logLevel];
        logLevelLogger(nestedStickyError);
        return true;
    }
    /**
     * Refresh sticky with given computation.
     *
     * @param computation Sticky state computation
     */
    _refreshSticky(computation) {
        if (
        // refresh sticky when state has changed
        computation.state !== this._stickyElementState
            // or when sticky is in container (other than window)
            || this.container !== this.rootContainer) {
            this._refreshStickyElement(computation.state, computation);
        }
        this._stickyComputation = computation;
        this.stickyComputation.next(computation);
        if (computation.state === this._stickyState) {
            return;
        }
        this.ngZone.run(() => {
            this._stickyState = computation.state;
            this.stickyState.next(computation.state);
            // this.changeDetectorRef.detectChanges();
        });
    }
    /**
     * Refreshs sticky element style.
     *
     * @param state Sticky state
     * @param computation Sticky state computation when state is sticked or stucked
     */
    _refreshStickyElement(state, computation) {
        if (!this._win) {
            return;
        }
        // hide ghost and refresh original style when state is null
        if (!state) {
            this._stickyElementState = null;
            this._hideStickyGhost();
            this._restoreStickyElementStyle();
            return;
        }
        this._stickyElementState = state;
        this._saveStickyElementStyle();
        this._showStickyGhost();
        const elementStyle = this._getStickyElementStyle(state, computation);
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_12__["setElementStyles"])(this.renderer, this.elementRef.nativeElement, elementStyle);
    }
    /**
     * Refreshs sticky ghost.
     */
    _refreshStickyGhost() {
        const ghost = this.config.spacer || this._spacerGenerated;
        const ghostStyle = this._getStickyGhostStyle();
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_12__["setElementStyles"])(this.renderer, ghost, ghostStyle);
    }
    /**
     * Restore original styles of the sticky.
     */
    _restoreStickyElementStyle() {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_12__["setElementStyles"])(this.renderer, this.elementRef.nativeElement, this._elementOriginStyle);
        this._elementOriginStyle = null;
    }
    /**
     * Saves origin styles of the sticky.
     */
    _saveStickyElementStyle() {
        if (!this._elementOriginStyle) {
            this._elementOriginStyle = {
                position: this.elementRef.nativeElement.style.position,
                width: this.elementRef.nativeElement.style.width,
                top: this.elementRef.nativeElement.style.top,
                right: this.elementRef.nativeElement.style.right,
                bottom: this.elementRef.nativeElement.style.bottom,
                left: this.elementRef.nativeElement.style.left,
                cssFloat: this.elementRef.nativeElement.style.cssFloat,
                margin: this.elementRef.nativeElement.style.margin,
                marginTop: this.elementRef.nativeElement.style.marginTop,
                marginRight: this.elementRef.nativeElement.style.marginRight,
                marginBottom: this.elementRef.nativeElement.style.marginBottom,
                marginLeft: this.elementRef.nativeElement.style.marginLeft,
            };
        }
    }
    /**
     * Shows sticky ghost.
     */
    _showStickyGhost() {
        if (!this.config.spacer && !this._spacerGenerated) {
            this._insertStickyGhostGenerated();
            this._refreshStickyGhost();
            return;
        }
        else if (this.config.spacer && this._spacerGenerated) {
            this._spacerGenerated.remove();
            this._spacerGenerated = null;
        }
        const ghost = this.config.spacer || this._spacerGenerated;
        if (ghost.style.display === 'none') {
            this.renderer.setStyle(ghost, 'display', 'block');
            this._refreshStickyGhost();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], NgxStickyDirective.prototype, "stickyClasses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], NgxStickyDirective.prototype, "stickyDirection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], NgxStickyDirective.prototype, "stickyDisabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], NgxStickyDirective.prototype, "stickyHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], NgxStickyDirective.prototype, "stickyPosition", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", HTMLElement)
], NgxStickyDirective.prototype, "stickySpacer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", HTMLElement)
], NgxStickyDirective.prototype, "stickySpot", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], NgxStickyDirective.prototype, "stickySpotHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NgxStickyDirective.prototype, "stickyComputation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NgxStickyDirective.prototype, "stickyState", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.data-sticky-state'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NgxStickyDirective.prototype, "attrDataStickyState", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ngx-sticky'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NgxStickyDirective.prototype, "cssClassSticky", null);
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ngx-sticky--disabled'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NgxStickyDirective.prototype, "cssClassStickyDisabled", null);
NgxStickyDirective = NgxStickyDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ngxSticky], [ngx-sticky], ngx-sticky',
        exportAs: 'ngxSticky',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _sticky_container_directive__WEBPACK_IMPORTED_MODULE_6__["NgxStickyContainerDirective"]))),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _sticky_boundary_directive__WEBPACK_IMPORTED_MODULE_5__["NgxStickyBoundaryDirective"]))),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => NgxStickyDirective_1))),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_sticky_tokens__WEBPACK_IMPORTED_MODULE_9__["NGX_STICKY_WINDOW"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sticky_root_container_controller__WEBPACK_IMPORTED_MODULE_7__["NgxStickyRootContainerController"], Object, Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        Window])
], NgxStickyDirective);



/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky.helpers.ts":
/*!*******************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky.helpers.ts ***!
  \*******************************************************/
/*! exports provided: coerceStickyPosition, coerceStickyDirection, getStuckedPositionTop, isStickyPositionBottom, isStickyDirectionDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceStickyPosition", function() { return coerceStickyPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceStickyDirection", function() { return coerceStickyDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStuckedPositionTop", function() { return getStuckedPositionTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStickyPositionBottom", function() { return isStickyPositionBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStickyDirectionDown", function() { return isStickyDirectionDown; });
function coerceStickyPosition(value) {
    return isStickyPositionBottom(value) ? 'bottom' : 'top';
}
function coerceStickyDirection(value) {
    return isStickyDirectionDown(value) ? 'down' : 'up';
}
function getStuckedPositionTop(computation) {
    const { boundary, directionDown, height: elementHeight, positionBottom, } = computation.snap.stickyComputed;
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
function isStickyPositionBottom(position) {
    return position === 'bottom';
}
function isStickyDirectionDown(direction) {
    return direction !== 'up';
}


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _in_viewport_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./in-viewport.directive */ "./projects/ngx-sticky/src/lib/in-viewport.directive.ts");
/* harmony import */ var _sticky_boundary_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sticky-boundary.directive */ "./projects/ngx-sticky/src/lib/sticky-boundary.directive.ts");
/* harmony import */ var _sticky_container_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sticky-container.directive */ "./projects/ngx-sticky/src/lib/sticky-container.directive.ts");
/* harmony import */ var _sticky_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sticky.directive */ "./projects/ngx-sticky/src/lib/sticky.directive.ts");







/**
 * Adds sticky directives and providers.
 *
 * Managing sticky elements is one of the hardest parts of building web applications.
 *
 * The NgxStickyModule allows to manage sticky elements in the best way.
 *
 * @example
 * NgxStickyModule can be imported multiple times: once per lazily-loaded bundle.
 *
 * ```
 * @NgModule({
 *   imports: [ NgxStickyModule ]
 * })
 * class MyNgModule {}
 * ```
 */
let NgxStickyModule = class NgxStickyModule {
};
NgxStickyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _in_viewport_directive__WEBPACK_IMPORTED_MODULE_3__["NgxInViewportDirective"],
            _sticky_boundary_directive__WEBPACK_IMPORTED_MODULE_4__["NgxStickyBoundaryDirective"],
            _sticky_container_directive__WEBPACK_IMPORTED_MODULE_5__["NgxStickyContainerDirective"],
            _sticky_directive__WEBPACK_IMPORTED_MODULE_6__["NgxStickyDirective"],
        ],
        exports: [
            _in_viewport_directive__WEBPACK_IMPORTED_MODULE_3__["NgxInViewportDirective"],
            _sticky_boundary_directive__WEBPACK_IMPORTED_MODULE_4__["NgxStickyBoundaryDirective"],
            _sticky_container_directive__WEBPACK_IMPORTED_MODULE_5__["NgxStickyContainerDirective"],
            _sticky_directive__WEBPACK_IMPORTED_MODULE_6__["NgxStickyDirective"],
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
    })
], NgxStickyModule);



/***/ }),

/***/ "./projects/ngx-sticky/src/lib/sticky.tokens.ts":
/*!******************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/sticky.tokens.ts ***!
  \******************************************************/
/*! exports provided: NGX_STICKY_WINDOW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_WINDOW", function() { return NGX_STICKY_WINDOW; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const NGX_STICKY_WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NGX_STICKY_WINDOW', {
    providedIn: 'root',
    factory: () => typeof window !== 'undefined' ? window : null,
});


/***/ }),

/***/ "./projects/ngx-sticky/src/lib/utils/coercion.ts":
/*!*******************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/utils/coercion.ts ***!
  \*******************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
function coerceNumberProperty(value, fallbackValue = 0) {
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


/***/ }),

/***/ "./projects/ngx-sticky/src/lib/utils/collections.ts":
/*!**********************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/utils/collections.ts ***!
  \**********************************************************/
/*! exports provided: addEntry, deleteEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEntry", function() { return addEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEntry", function() { return deleteEntry; });
/**
 * Add entry into set.
 *
 * @param set Array list
 * @param entry Entry to add
 * @returns Entry index added
 */
function addEntry(set, entry) {
    let entryIndex = set.indexOf(entry);
    if (entryIndex === -1) {
        entryIndex = set.length;
        set[entryIndex] = entry;
    }
    return entryIndex;
}
/**
 * Delete entry from set.
 *
 * @param set Array list
 * @param entry Entry to delete
 * @returns Entry index deleted
 */
function deleteEntry(set, entry) {
    const entryIndex = set.indexOf(entry);
    if (entryIndex !== -1) {
        set.splice(entryIndex, 1);
    }
    return entryIndex;
}


/***/ }),

/***/ "./projects/ngx-sticky/src/lib/utils/config-subject.ts":
/*!*************************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/utils/config-subject.ts ***!
  \*************************************************************/
/*! exports provided: ConfigSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigSubject", function() { return ConfigSubject; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _input_subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-subject */ "./projects/ngx-sticky/src/lib/utils/input-subject.ts");


/**
 * A ConfigSubject is an Observable that coerces key-values and emit when change is detected
 */
class ConfigSubject extends rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor(schema) {
        super();
        /** Emit key-values changes */
        this.changes$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._pushChangesSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.inputs = {};
        this._config = {};
        this._configChanges = {};
        this._aliases = {};
        const inputKeys = Object.keys(schema);
        for (const inputKey of inputKeys) {
            const inputOptions = schema[inputKey];
            if (inputOptions.aliasKey) {
                this._aliases[inputOptions.aliasKey] = inputKey;
            }
            const input = new _input_subject__WEBPACK_IMPORTED_MODULE_1__["InputSubject"](inputOptions.defaultValue, inputOptions.coercion);
            this._config[inputKey] = inputOptions.defaultValue;
            this.inputs[inputKey] = input;
            const pushChangeSubscription = input.change$.subscribe(inputChange => {
                this._configChanged = true;
                this._configChanges[inputKey] = inputChange;
                this._config = Object.assign({}, this._config);
                this._config[inputKey] = inputChange.currentValue;
            });
            this._pushChangesSubscription.add(pushChangeSubscription);
        }
    }
    /**
     * Returns current config.
     */
    getValue() {
        return this._config;
    }
    /**
     * Returns key-value.
     *
     * @param inputKey Input key
     * @returns key-value
     */
    getKeyValue(inputKey) {
        return this._config[inputKey];
    }
    /**
     * Emit next config.
     *
     * @param partialConfig Partial next config
     * @param options Options to skip coercion
     */
    next(partialConfig, options) {
        const inputKeys = Object.keys(partialConfig);
        for (const key of inputKeys) {
            const inputKey = (this._aliases[key] || key);
            if (inputKey in this.inputs) {
                const inputValue = partialConfig[key];
                const inputSubject = this.inputs[inputKey];
                inputSubject.next(inputValue, options);
            }
        }
        if (this._configChanged) {
            const changes = Object.assign({}, this._configChanges);
            this._configChanged = false;
            this._configChanges = {};
            this.changes$.next(changes);
            super.next(this._config);
        }
    }
    /**
     * Emit next key-value.
     *
     * @param inputKey Input key
     * @param value key-value
     * @param options Options to skip coercion
     */
    nextKeyValue(inputKey, value, options) {
        this.next({ [inputKey]: value }, options);
    }
    /**
     * Apply simple changes as like ngOnChange(changes: SimpleChanges) input.
     *
     * @param changes Simple changes
     */
    nextChanges(changes) {
        const changeKeys = Object.keys(changes);
        const config = {};
        for (const inputKey of changeKeys) {
            config[inputKey] = changes[inputKey].currentValue;
        }
        this.next(config);
    }
}


/***/ }),

/***/ "./projects/ngx-sticky/src/lib/utils/dom.ts":
/*!**************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/utils/dom.ts ***!
  \**************************************************/
/*! exports provided: getDocumentHeightFactory, getDocumentWidthFactory, getElementAbsoluteRect, getElementRelativeRect, getWindowViewportHeight, getWindowViewportLeft, getWindowViewportTop, isElementScrollableY, setElementStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentHeightFactory", function() { return getDocumentHeightFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentWidthFactory", function() { return getDocumentWidthFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementAbsoluteRect", function() { return getElementAbsoluteRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementRelativeRect", function() { return getElementRelativeRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowViewportHeight", function() { return getWindowViewportHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowViewportLeft", function() { return getWindowViewportLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowViewportTop", function() { return getWindowViewportTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementScrollableY", function() { return isElementScrollableY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setElementStyles", function() { return setElementStyles; });
/**
 * Returns getter for document height.
 *
 * @param win Window reference
 * @returns Getter for document height.
 */
function getDocumentHeightFactory(win) {
    if (!win) {
        return () => 0;
    }
    const documentHeightGetters = [
        () => win.document.body.scrollHeight,
        () => win.document.documentElement.scrollHeight,
        () => win.document.body.offsetHeight,
        () => win.document.documentElement.offsetHeight,
        () => win.document.body.clientHeight,
        () => win.document.documentElement.clientHeight,
    ];
    let documentHeightGetter;
    let documentHeight = 0;
    for (const _documentHeightGetter of documentHeightGetters) {
        const _documentHeight = _documentHeightGetter();
        if (_documentHeight > documentHeight) {
            documentHeightGetter = _documentHeightGetter;
            documentHeight = _documentHeight;
        }
    }
    return documentHeightGetter;
}
/**
 * Returns getter for document width.
 *
 * @param win Window reference
 * @returns Getter for document width.
 */
function getDocumentWidthFactory(win) {
    if (!win) {
        return () => 0;
    }
    const documentWidthGetters = [
        () => win.document.body.scrollWidth,
        () => win.document.documentElement.scrollWidth,
        () => win.document.body.offsetWidth,
        () => win.document.documentElement.offsetWidth,
        () => win.document.body.clientWidth,
        () => win.document.documentElement.clientWidth,
    ];
    let documentWidthGetter = documentWidthGetters[0];
    let documentWidth = 0;
    for (const _documentWidthGetter of documentWidthGetters) {
        const _documentWidth = _documentWidthGetter();
        if (_documentWidth > documentWidth) {
            documentWidthGetter = _documentWidthGetter;
            documentWidth = _documentWidth;
        }
    }
    return documentWidthGetter;
}
/**
 * Returns element absolute rect.
 *
 * @param element Element
 * @returns Element absolute rect
 */
function getElementAbsoluteRect(element) {
    const rect = {
        height: element.offsetHeight,
        width: element.offsetWidth,
        left: 0,
        top: 0,
    };
    let currentElement = element;
    do {
        rect.top += currentElement.offsetTop || 0;
        rect.left += currentElement.offsetLeft || 0;
        currentElement = currentElement.offsetParent;
    } while (currentElement);
    return rect;
}
/**
 * Returns element relative rect.
 *
 * @param win Window reference
 * @param element Element
 * @returns Element relative rect.
 */
function getElementRelativeRect(win, element) {
    const rect = {
        height: element.offsetHeight,
        width: element.offsetWidth,
        left: 0,
        top: 0,
    };
    let currentElement = element;
    let currentElementStyle;
    do {
        currentElementStyle = currentElement !== element ? win.getComputedStyle(currentElement) : {};
        if (currentElementStyle.position === 'relative') {
            break;
        }
        if (currentElementStyle.position !== 'absolute') {
            rect.top += currentElement.offsetTop || 0;
            rect.left += currentElement.offsetLeft || 0;
        }
        currentElement = currentElement.offsetParent;
    } while (currentElement);
    return rect;
}
/**
 * Get window viewport height.
 *
 * @param win Window reference
 * @returns Window viewport height
 */
function getWindowViewportHeight(win) {
    return win && win.innerHeight || 0;
}
/**
 * Get window scroll left position.
 *
 * @param win Window reference
 * @returns Window scroll left position
 */
function getWindowViewportLeft(win) {
    if (!win) {
        return 0;
    }
    // The top-left-corner of the viewport is determined by the scroll position of the document
    // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
    // whether `document.body` or `document.documentElement` is the scrolled element, so reading
    // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
    // `document.documentElement` works consistently, where the `top` and `left` values will
    // equal negative the scroll position.
    const documentRect = win.document.documentElement.getBoundingClientRect();
    return -documentRect.left
        || win.document.body.scrollLeft
        || win.scrollX
        || win.document.documentElement.scrollLeft
        || 0;
}
/**
 * Get window scroll top position.
 *
 * @param win Window reference
 * @returns Window scroll top position
 */
function getWindowViewportTop(win) {
    if (!win) {
        return 0;
    }
    // The top-left-corner of the viewport is determined by the scroll position of the document
    // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
    // whether `document.body` or `document.documentElement` is the scrolled element, so reading
    // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
    // `document.documentElement` works consistently, where the `top` and `left` values will
    // equal negative the scroll position.
    const documentRect = win.document.documentElement.getBoundingClientRect();
    return -documentRect.top
        || win.document.body.scrollTop
        || win.scrollY
        || win.document.documentElement.scrollTop
        || 0;
}
/**
 * Returns `true` when element is scrollable.
 *
 * @param win Window reference
 * @param element Element
 * @returns `true` when element is scrollable
 */
function isElementScrollableY(win, element) {
    return element.offsetHeight < element.scrollHeight && win.getComputedStyle(element).overflowY === 'auto';
}
/**
 * Set styles on a given element.
 *
 * @param renderer Renderer2 instance
 * @param element Element
 * @param styles Styles
 */
function setElementStyles(renderer, element, styles) {
    if (!element || !styles) {
        return;
    }
    const propKeys = Object.keys(styles);
    for (const prop of propKeys) {
        const value = styles[prop];
        if (value) {
            renderer.setStyle(element, prop, value);
        }
        else {
            renderer.removeStyle(element, prop);
        }
    }
}


/***/ }),

/***/ "./projects/ngx-sticky/src/lib/utils/from-image-events.ts":
/*!****************************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/utils/from-image-events.ts ***!
  \****************************************************************/
/*! exports provided: fromImageEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromImageEvents", function() { return fromImageEvents; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


/**
 * Create observable which emit image events.
 *
 * @param element Element
 * @returns Observable on image events
 */
function fromImageEvents(element) {
    if (!element) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])();
    }
    const images$ = [];
    const addImage = (target) => images$.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'load').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(event => ({ event, target }))), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(target, 'error').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(event => ({ event, target }))));
    // if (element instanceof HTMLImageElement) {
    if (element.tagName === 'IMG' || element.tagName === 'img') {
        addImage(element);
    }
    else {
        element.querySelectorAll('img').forEach(addImage);
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(...images$);
}


/***/ }),

/***/ "./projects/ngx-sticky/src/lib/utils/from-media-query.ts":
/*!***************************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/utils/from-media-query.ts ***!
  \***************************************************************/
/*! exports provided: fromMediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMediaQuery", function() { return fromMediaQuery; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

/**
 * Create observable which emit media query events.
 *
 * @param win Window reference
 * @param query Media query
 * @returns Observable on media query events
 */
function fromMediaQuery(win, query) {
    if (!win || !win.matchMedia) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])();
    }
    const mql = win.matchMedia(query);
    const initEvent = {
        matches: mql.matches,
        media: query,
    };
    const initMqlEvent = typeof MediaQueryListEvent !== 'undefined'
        ? new MediaQueryListEvent('change', initEvent)
        : Object.assign({ type: 'change' }, initEvent);
    const mql$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](initMqlEvent);
    const onQueryChange = (mqlEvent) => mql$.next(mqlEvent);
    const complete = mql$.complete;
    mql$.complete = function () {
        complete.call(mql$);
        mql.removeListener(onQueryChange); // tslint:disable-line: deprecation
    };
    mql.addListener(onQueryChange); // tslint:disable-line: deprecation
    return mql$;
}


/***/ }),

/***/ "./projects/ngx-sticky/src/lib/utils/index.ts":
/*!****************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/utils/index.ts ***!
  \****************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, addEntry, deleteEntry, ConfigSubject, getDocumentHeightFactory, getDocumentWidthFactory, getElementAbsoluteRect, getElementRelativeRect, getWindowViewportHeight, getWindowViewportLeft, getWindowViewportTop, isElementScrollableY, setElementStyles, fromImageEvents, InputSubject, coerceIntersectionThresholds, getCrossedThreshold, fromMediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coercion */ "./projects/ngx-sticky/src/lib/utils/coercion.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return _coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return _coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _coercion__WEBPACK_IMPORTED_MODULE_0__["_isNumberValue"]; });

/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collections */ "./projects/ngx-sticky/src/lib/utils/collections.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEntry", function() { return _collections__WEBPACK_IMPORTED_MODULE_1__["addEntry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteEntry", function() { return _collections__WEBPACK_IMPORTED_MODULE_1__["deleteEntry"]; });

/* harmony import */ var _config_subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-subject */ "./projects/ngx-sticky/src/lib/utils/config-subject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigSubject", function() { return _config_subject__WEBPACK_IMPORTED_MODULE_2__["ConfigSubject"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./projects/ngx-sticky/src/lib/utils/dom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocumentHeightFactory", function() { return _dom__WEBPACK_IMPORTED_MODULE_3__["getDocumentHeightFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocumentWidthFactory", function() { return _dom__WEBPACK_IMPORTED_MODULE_3__["getDocumentWidthFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementAbsoluteRect", function() { return _dom__WEBPACK_IMPORTED_MODULE_3__["getElementAbsoluteRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementRelativeRect", function() { return _dom__WEBPACK_IMPORTED_MODULE_3__["getElementRelativeRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindowViewportHeight", function() { return _dom__WEBPACK_IMPORTED_MODULE_3__["getWindowViewportHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindowViewportLeft", function() { return _dom__WEBPACK_IMPORTED_MODULE_3__["getWindowViewportLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindowViewportTop", function() { return _dom__WEBPACK_IMPORTED_MODULE_3__["getWindowViewportTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementScrollableY", function() { return _dom__WEBPACK_IMPORTED_MODULE_3__["isElementScrollableY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setElementStyles", function() { return _dom__WEBPACK_IMPORTED_MODULE_3__["setElementStyles"]; });

/* harmony import */ var _from_image_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from-image-events */ "./projects/ngx-sticky/src/lib/utils/from-image-events.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromImageEvents", function() { return _from_image_events__WEBPACK_IMPORTED_MODULE_4__["fromImageEvents"]; });

/* harmony import */ var _from_media_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./from-media-query */ "./projects/ngx-sticky/src/lib/utils/from-media-query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromMediaQuery", function() { return _from_media_query__WEBPACK_IMPORTED_MODULE_5__["fromMediaQuery"]; });

/* harmony import */ var _input_subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-subject */ "./projects/ngx-sticky/src/lib/utils/input-subject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputSubject", function() { return _input_subject__WEBPACK_IMPORTED_MODULE_6__["InputSubject"]; });

/* harmony import */ var _intersection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intersection */ "./projects/ngx-sticky/src/lib/utils/intersection.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceIntersectionThresholds", function() { return _intersection__WEBPACK_IMPORTED_MODULE_7__["coerceIntersectionThresholds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCrossedThreshold", function() { return _intersection__WEBPACK_IMPORTED_MODULE_7__["getCrossedThreshold"]; });











/***/ }),

/***/ "./projects/ngx-sticky/src/lib/utils/input-subject.ts":
/*!************************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/utils/input-subject.ts ***!
  \************************************************************/
/*! exports provided: InputSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSubject", function() { return InputSubject; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

/**
 * An InputSubject is an Observable that coerces values and emit when change is detected.
 */
class InputSubject extends rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor(defaultValue, coercion) {
        super();
        this.defaultValue = defaultValue;
        this.coercion = coercion;
        /** Emit value changes */
        this.change$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._firstChange = true;
        this._value = defaultValue;
    }
    /**
     * Returns current value.
     */
    getValue() {
        return this._value;
    }
    /**
     * Emit next value.
     *
     * @param value Next value
     * @param options Options to skip coercion
     */
    next(value, options) {
        if (!options || !options.skipCoercion) {
            if (value === this._valueSetted) {
                return;
            }
            this._valueSetted = value;
            if (this.coercion) {
                value = this.coercion(value);
            }
        }
        if (value !== this._value) {
            const firstChange = this._firstChange;
            const previousValue = this._value;
            this._firstChange = false;
            this._value = value;
            this.change$.next({
                previousValue,
                currentValue: value,
                firstChange,
            });
            super.next(value);
        }
    }
}


/***/ }),

/***/ "./projects/ngx-sticky/src/lib/utils/intersection.ts":
/*!***********************************************************!*\
  !*** ./projects/ngx-sticky/src/lib/utils/intersection.ts ***!
  \***********************************************************/
/*! exports provided: coerceIntersectionThresholds, getCrossedThreshold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceIntersectionThresholds", function() { return coerceIntersectionThresholds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCrossedThreshold", function() { return getCrossedThreshold; });
/** Coerces a data-bound value (typically a string) to intersection thresholds. */
function coerceIntersectionThresholds(thresholds) {
    if (typeof thresholds === 'number') {
        return [thresholds];
    }
    if (typeof thresholds === 'string') {
        return thresholds
            .split(',')
            .map(x => (parseFloat(x) || 0))
            .sort();
    }
    if (!thresholds) {
        return [0, 1];
    }
    if (!Array.isArray(thresholds)) {
        thresholds = [thresholds];
    }
    return [...thresholds].sort();
}
/**
 * Returns threshold crossed for a given ratio change.
 *
 * @param thresholds Thresholds
 * @param oldRatio Old ratio
 * @param newRatio New ratio
 * @returns Threshold crossed or `undefined`
 */
function getCrossedThreshold(thresholds, oldRatio, newRatio) {
    let crossedThreshold;
    for (const threshold of thresholds) {
        if (
        // threshold is perfect-crossed by old ratio
        threshold === oldRatio
            // or threshold is perfect-crossed by new ratio
            || threshold === newRatio
            // or threshold is crossed by new ratio and old ratio (there are on the opposite sides)
            || threshold < oldRatio !== threshold < newRatio) {
            crossedThreshold = threshold;
            break;
        }
    }
    return crossedThreshold;
}


/***/ }),

/***/ "./projects/ngx-sticky/src/public-api.ts":
/*!***********************************************!*\
  !*** ./projects/ngx-sticky/src/public-api.ts ***!
  \***********************************************/
/*! exports provided: NGX_BASE_INTERSECTION_CONFIG_SCHEMA, NgxInViewportDirective, NgxStickyBaseBoundaryController, NgxStickyBaseContainerController, NGX_STICKY_BASE_CONTAINER_CONFIG_SCHEMA, NgxStickyBaseContainerDirective, NgxStickyBaseController, NGX_STICKY_BASE_BOUNDARY_CONFIG_SCHEMA, NgxStickyBoundaryDirective, NgxStickyContainerDirective, NGX_STICKY_ENGINE_INTERCEPTION_STATE_MAP, NgxStickyEngine, NgxStickyRootContainerController, NGX_STICKY_BASE_CONFIG_SCHEMA, NgxStickyDirective, coerceStickyPosition, coerceStickyDirection, getStuckedPositionTop, isStickyPositionBottom, isStickyDirectionDown, NgxStickyModule, NGX_STICKY_WINDOW, coerceBooleanProperty, coerceNumberProperty, _isNumberValue, addEntry, deleteEntry, ConfigSubject, getDocumentHeightFactory, getDocumentWidthFactory, getElementAbsoluteRect, getElementRelativeRect, getWindowViewportHeight, getWindowViewportLeft, getWindowViewportTop, isElementScrollableY, setElementStyles, fromImageEvents, InputSubject, coerceIntersectionThresholds, getCrossedThreshold, fromMediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_in_viewport_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/in-viewport.directive */ "./projects/ngx-sticky/src/lib/in-viewport.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NGX_BASE_INTERSECTION_CONFIG_SCHEMA", function() { return _lib_in_viewport_directive__WEBPACK_IMPORTED_MODULE_0__["NGX_BASE_INTERSECTION_CONFIG_SCHEMA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxInViewportDirective", function() { return _lib_in_viewport_directive__WEBPACK_IMPORTED_MODULE_0__["NgxInViewportDirective"]; });

/* harmony import */ var _lib_sticky_base_boundary_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/sticky-base-boundary.controller */ "./projects/ngx-sticky/src/lib/sticky-base-boundary.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyBaseBoundaryController", function() { return _lib_sticky_base_boundary_controller__WEBPACK_IMPORTED_MODULE_1__["NgxStickyBaseBoundaryController"]; });

/* harmony import */ var _lib_sticky_base_container_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/sticky-base-container.controller */ "./projects/ngx-sticky/src/lib/sticky-base-container.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyBaseContainerController", function() { return _lib_sticky_base_container_controller__WEBPACK_IMPORTED_MODULE_2__["NgxStickyBaseContainerController"]; });

/* harmony import */ var _lib_sticky_base_container_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/sticky-base-container.directive */ "./projects/ngx-sticky/src/lib/sticky-base-container.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_BASE_CONTAINER_CONFIG_SCHEMA", function() { return _lib_sticky_base_container_directive__WEBPACK_IMPORTED_MODULE_3__["NGX_STICKY_BASE_CONTAINER_CONFIG_SCHEMA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyBaseContainerDirective", function() { return _lib_sticky_base_container_directive__WEBPACK_IMPORTED_MODULE_3__["NgxStickyBaseContainerDirective"]; });

/* harmony import */ var _lib_sticky_base_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/sticky-base.controller */ "./projects/ngx-sticky/src/lib/sticky-base.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyBaseController", function() { return _lib_sticky_base_controller__WEBPACK_IMPORTED_MODULE_4__["NgxStickyBaseController"]; });

/* harmony import */ var _lib_sticky_boundary_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/sticky-boundary.directive */ "./projects/ngx-sticky/src/lib/sticky-boundary.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_BASE_BOUNDARY_CONFIG_SCHEMA", function() { return _lib_sticky_boundary_directive__WEBPACK_IMPORTED_MODULE_5__["NGX_STICKY_BASE_BOUNDARY_CONFIG_SCHEMA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyBoundaryDirective", function() { return _lib_sticky_boundary_directive__WEBPACK_IMPORTED_MODULE_5__["NgxStickyBoundaryDirective"]; });

/* harmony import */ var _lib_sticky_container_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/sticky-container.directive */ "./projects/ngx-sticky/src/lib/sticky-container.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyContainerDirective", function() { return _lib_sticky_container_directive__WEBPACK_IMPORTED_MODULE_6__["NgxStickyContainerDirective"]; });

/* harmony import */ var _lib_sticky_engine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/sticky-engine */ "./projects/ngx-sticky/src/lib/sticky-engine.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_ENGINE_INTERCEPTION_STATE_MAP", function() { return _lib_sticky_engine__WEBPACK_IMPORTED_MODULE_7__["NGX_STICKY_ENGINE_INTERCEPTION_STATE_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyEngine", function() { return _lib_sticky_engine__WEBPACK_IMPORTED_MODULE_7__["NgxStickyEngine"]; });

/* harmony import */ var _lib_sticky_root_container_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/sticky-root-container.controller */ "./projects/ngx-sticky/src/lib/sticky-root-container.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyRootContainerController", function() { return _lib_sticky_root_container_controller__WEBPACK_IMPORTED_MODULE_8__["NgxStickyRootContainerController"]; });

/* harmony import */ var _lib_sticky_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/sticky.directive */ "./projects/ngx-sticky/src/lib/sticky.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_BASE_CONFIG_SCHEMA", function() { return _lib_sticky_directive__WEBPACK_IMPORTED_MODULE_9__["NGX_STICKY_BASE_CONFIG_SCHEMA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyDirective", function() { return _lib_sticky_directive__WEBPACK_IMPORTED_MODULE_9__["NgxStickyDirective"]; });

/* harmony import */ var _lib_sticky_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/sticky.helpers */ "./projects/ngx-sticky/src/lib/sticky.helpers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceStickyPosition", function() { return _lib_sticky_helpers__WEBPACK_IMPORTED_MODULE_10__["coerceStickyPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceStickyDirection", function() { return _lib_sticky_helpers__WEBPACK_IMPORTED_MODULE_10__["coerceStickyDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStuckedPositionTop", function() { return _lib_sticky_helpers__WEBPACK_IMPORTED_MODULE_10__["getStuckedPositionTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStickyPositionBottom", function() { return _lib_sticky_helpers__WEBPACK_IMPORTED_MODULE_10__["isStickyPositionBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStickyDirectionDown", function() { return _lib_sticky_helpers__WEBPACK_IMPORTED_MODULE_10__["isStickyDirectionDown"]; });

/* harmony import */ var _lib_sticky_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/sticky.module */ "./projects/ngx-sticky/src/lib/sticky.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxStickyModule", function() { return _lib_sticky_module__WEBPACK_IMPORTED_MODULE_11__["NgxStickyModule"]; });

/* harmony import */ var _lib_sticky_tokens__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/sticky.tokens */ "./projects/ngx-sticky/src/lib/sticky.tokens.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NGX_STICKY_WINDOW", function() { return _lib_sticky_tokens__WEBPACK_IMPORTED_MODULE_12__["NGX_STICKY_WINDOW"]; });

/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/utils */ "./projects/ngx-sticky/src/lib/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["coerceNumberProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["_isNumberValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEntry", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["addEntry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteEntry", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["deleteEntry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigSubject", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["ConfigSubject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocumentHeightFactory", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["getDocumentHeightFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocumentWidthFactory", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["getDocumentWidthFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementAbsoluteRect", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["getElementAbsoluteRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementRelativeRect", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["getElementRelativeRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindowViewportHeight", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["getWindowViewportHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindowViewportLeft", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["getWindowViewportLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindowViewportTop", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["getWindowViewportTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementScrollableY", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["isElementScrollableY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setElementStyles", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["setElementStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromImageEvents", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["fromImageEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputSubject", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["InputSubject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceIntersectionThresholds", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["coerceIntersectionThresholds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCrossedThreshold", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["getCrossedThreshold"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromMediaQuery", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_13__["fromMediaQuery"]; });

/*
 * Public API Surface of @enten/ngx-sticky
 */
















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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n.container {\n  padding: 2rem;\n}\n\n.navigation {\n  background: #cfd8dc;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);\n  font-size: 2.4rem;\n  z-index: 5;\n}\n\n.navigation h1 {\n  display: inline;\n  font-size: inherit;\n  margin: 0;\n}\n\n.header,\n.api,\n.footer {\n  background: #eceff1;\n}\n\n.header {\n  z-index: 3;\n}\n\n.footer {\n  background: #9da6a9;\n  color: #eceff1;\n}\n\n.examples .container > div,\n.api .container > div {\n  margin-bottom: 12rem;\n}\n\n.sidepanes .controls-header {\n  font-weight: bold;\n  margin: 1rem 0;\n}\n\n.sidepanes .controls-group {\n  padding: 0;\n  line-height: 1.6em;\n  margin-bottom: 1.6rem;\n}\n\n.sidepanes .controls-group-header {\n  font-style: italic;\n}\n\n.sidepanes .controls-group div > label {\n  display: inline-block;\n  margin-right: 2rem;\n  min-width: 18rem;\n}\n\n.sidepanes .controls-group div > input[type=number],\n.sidepanes .controls-group div > input[type=text] {\n  width: 5rem;\n}\n\n.sidepanes .controls .code {\n  margin-top: 0;\n}\n\n.sidepanes .preview {\n  margin: 0;\n  min-height: 40rem;\n  padding: 1rem;\n  background: #fff;\n}\n\n.sidepanes .preview header,\n.sidepanes .preview footer,\n.sidepanes .preview p {\n  min-height: 1rem;\n  padding: 0.5rem 1rem;\n}\n\n.sidepanes .preview header,\n.sidepanes .preview footer {\n  background: #cfd8dc;\n  z-index: 2;\n}\n\n.sidepanes .preview [ngx-sticky-boundary] {\n  background: #eceff1;\n  padding: 1rem;\n}\n\n.sidepanes .preview p {\n  min-height: 1rem;\n  padding: 0.5rem 1rem;\n  background: #cfd8dc;\n  opacity: 0.5;\n}\n\n.sidepanes .preview p[ngx-sticky] {\n  opacity: 1;\n}\n\n.example.sticky-classes .preview {\n  position: relative;\n}\n\n.example.sticky-classes header {\n  position: relative;\n  z-index: 2;\n}\n\n.example.sticky-classes .header-sticky {\n  display: none;\n  position: absolute;\n  background: lightblue;\n  padding: 1rem;\n  left: 1rem;\n  right: 1rem;\n  z-index: 1;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n\n.example.sticky-classes .header-sticky:not(.ngx-sticky--disabled) {\n  display: block;\n}\n\n.example.sticky-classes .header-sticky:not(.ngx-sticky--normal) {\n  -webkit-transform: translateY(0%);\n          transform: translateY(0%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0ZXZlbi9jb2RlL25neC1zdGlja3kvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURDRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURJQTs7O0VBR0UsbUJBQUE7QUNERjs7QURJQTtFQUNFLFVBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRE9FOztFQUNFLG9CQUFBO0FDSEo7O0FEVUk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNQTjs7QURVSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDUk47O0FEVU07RUFDRSxrQkFBQTtBQ1JSOztBRFdNO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDVFI7O0FEWU07O0VBRUUsV0FBQTtBQ1ZSOztBRGNJO0VBQ0UsYUFBQTtBQ1pOOztBRGdCRTtFQUVFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ2ZKOztBRGlCSTs7O0VBR0UsZ0JBQUE7RUFDQSxvQkFBQTtBQ2ZOOztBRGtCSTs7RUFFRSxtQkFBQTtFQUNBLFVBQUE7QUNoQk47O0FEbUJJO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDakJOOztBRG9CSTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNsQk47O0FEb0JNO0VBQ0UsVUFBQTtBQ2xCUjs7QUQwQkU7RUFDRSxrQkFBQTtBQ3ZCSjs7QUQwQkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUN4Qko7O0FEMEJFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7RUFBQSwwQkFBQTtFQUFBLGtEQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQ3hCSjs7QUQwQkk7RUFDRSxjQUFBO0FDeEJOOztBRDJCSTtFQUNFLGlDQUFBO1VBQUEseUJBQUE7QUN6Qk4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBiYWNrZ3JvdW5kOiAjY2ZkOGRjO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIHotaW5kZXg6IDU7XG5cbiAgaDEge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cblxuLmhlYWRlcixcbi5hcGksXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI2VjZWZmMTtcbn1cblxuLmhlYWRlciB7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjOWRhNmE5O1xuICBjb2xvcjogI2VjZWZmMTtcbn1cblxuXG4uZXhhbXBsZXMsXG4uYXBpIHtcbiAgLmNvbnRhaW5lciA+IGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJyZW07XG4gIH1cbn1cblxuXG4uc2lkZXBhbmVzIHtcbiAgLmNvbnRyb2xzIHtcbiAgICAmLWhlYWRlciB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIH1cblxuICAgICYtZ3JvdXAge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcblxuICAgICAgJi1oZWFkZXIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICB9XG5cbiAgICAgIGRpdiA+IGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICAgIG1pbi13aWR0aDogMThyZW07XG4gICAgICB9XG5cbiAgICAgIGRpdiA+IGlucHV0W3R5cGU9bnVtYmVyXSxcbiAgICAgIGRpdiA+IGlucHV0W3R5cGU9dGV4dF0ge1xuICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29kZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5wcmV2aWV3IHtcbiAgICAvLyB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4taGVpZ2h0OiA0MHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICBoZWFkZXIsXG4gICAgZm9vdGVyLFxuICAgIHAge1xuICAgICAgbWluLWhlaWdodDogMXJlbTtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIH1cblxuICAgIGhlYWRlcixcbiAgICBmb290ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2NmZDhkYztcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgW25neC1zdGlja3ktYm91bmRhcnldIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlY2VmZjE7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgbWluLWhlaWdodDogMXJlbTtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogI2NmZDhkYztcbiAgICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICAgJltuZ3gtc3RpY2t5XSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLmV4YW1wbGUuc3RpY2t5LWNsYXNzZXMge1xuICAucHJldmlldyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIHBhZGRpbmctdG9wOiA2cmVtO1xuICB9XG4gIGhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgLmhlYWRlci1zdGlja3kge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGxlZnQ6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuXG4gICAgJjpub3QoLm5neC1zdGlja3ktLWRpc2FibGVkKSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmOm5vdCgubmd4LXN0aWNreS0tbm9ybWFsKSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgYmFja2dyb3VuZDogI2NmZDhkYztcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgei1pbmRleDogNTtcbn1cbi5uYXZpZ2F0aW9uIGgxIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhlYWRlcixcbi5hcGksXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI2VjZWZmMTtcbn1cblxuLmhlYWRlciB7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjOWRhNmE5O1xuICBjb2xvcjogI2VjZWZmMTtcbn1cblxuLmV4YW1wbGVzIC5jb250YWluZXIgPiBkaXYsXG4uYXBpIC5jb250YWluZXIgPiBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAxMnJlbTtcbn1cblxuLnNpZGVwYW5lcyAuY29udHJvbHMtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuLnNpZGVwYW5lcyAuY29udHJvbHMtZ3JvdXAge1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcbn1cbi5zaWRlcGFuZXMgLmNvbnRyb2xzLWdyb3VwLWhlYWRlciB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5zaWRlcGFuZXMgLmNvbnRyb2xzLWdyb3VwIGRpdiA+IGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIG1pbi13aWR0aDogMThyZW07XG59XG4uc2lkZXBhbmVzIC5jb250cm9scy1ncm91cCBkaXYgPiBpbnB1dFt0eXBlPW51bWJlcl0sXG4uc2lkZXBhbmVzIC5jb250cm9scy1ncm91cCBkaXYgPiBpbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDVyZW07XG59XG4uc2lkZXBhbmVzIC5jb250cm9scyAuY29kZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uc2lkZXBhbmVzIC5wcmV2aWV3IHtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiA0MHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zaWRlcGFuZXMgLnByZXZpZXcgaGVhZGVyLFxuLnNpZGVwYW5lcyAucHJldmlldyBmb290ZXIsXG4uc2lkZXBhbmVzIC5wcmV2aWV3IHAge1xuICBtaW4taGVpZ2h0OiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbn1cbi5zaWRlcGFuZXMgLnByZXZpZXcgaGVhZGVyLFxuLnNpZGVwYW5lcyAucHJldmlldyBmb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2ZkOGRjO1xuICB6LWluZGV4OiAyO1xufVxuLnNpZGVwYW5lcyAucHJldmlldyBbbmd4LXN0aWNreS1ib3VuZGFyeV0ge1xuICBiYWNrZ3JvdW5kOiAjZWNlZmYxO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnNpZGVwYW5lcyAucHJldmlldyBwIHtcbiAgbWluLWhlaWdodDogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJhY2tncm91bmQ6ICNjZmQ4ZGM7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5zaWRlcGFuZXMgLnByZXZpZXcgcFtuZ3gtc3RpY2t5XSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5leGFtcGxlLnN0aWNreS1jbGFzc2VzIC5wcmV2aWV3IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmV4YW1wbGUuc3RpY2t5LWNsYXNzZXMgaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuLmV4YW1wbGUuc3RpY2t5LWNsYXNzZXMgLmhlYWRlci1zdGlja3kge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbGVmdDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xufVxuLmV4YW1wbGUuc3RpY2t5LWNsYXNzZXMgLmhlYWRlci1zdGlja3k6bm90KC5uZ3gtc3RpY2t5LS1kaXNhYmxlZCkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5leGFtcGxlLnN0aWNreS1jbGFzc2VzIC5oZWFkZXItc3RpY2t5Om5vdCgubmd4LXN0aWNreS0tbm9ybWFsKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _projects_ngx_sticky_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/ngx-sticky/src/public-api */ "./projects/ngx-sticky/src/public-api.ts");



let AppComponent = class AppComponent {
    constructor(changeDetectorRef, win) {
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
    ngOnInit() {
        const smallBreakpoint$ = Object(_projects_ngx_sticky_src_public_api__WEBPACK_IMPORTED_MODULE_2__["fromMediaQuery"])(this.win, '(min-width: 640px)');
        this._smallBreakpointSubscription = smallBreakpoint$.subscribe(mqlEvent => {
            this._isSmallScreen = !mqlEvent.matches;
        });
    }
    ngOnDestroy() {
        if (this._smallBreakpointSubscription) {
            this._smallBreakpointSubscription.unsubscribe();
            this._smallBreakpointSubscription = null;
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_projects_ngx_sticky_src_public_api__WEBPACK_IMPORTED_MODULE_2__["NGX_STICKY_WINDOW"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        Window])
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _projects_ngx_sticky_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/ngx-sticky/src/public-api */ "./projects/ngx-sticky/src/public-api.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






let AppModule = class AppModule {
};
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
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



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
const environment = {
    production: false,
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map