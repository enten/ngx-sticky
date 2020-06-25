import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxInViewportDirective } from './in-viewport.directive';
import { NgxStickyBoundaryDirective } from './sticky-boundary.directive';
import { NgxStickyContainerDirective } from './sticky-container.directive';
import { NgxStickySpotDirective } from './sticky-spot.directive';
import { NgxStickyDirective } from './sticky.directive';

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
@NgModule({
  declarations: [
    NgxInViewportDirective,
    NgxStickyBoundaryDirective,
    NgxStickyContainerDirective,
    NgxStickyDirective,
    NgxStickySpotDirective,
  ],
  exports: [
    NgxInViewportDirective,
    NgxStickyBoundaryDirective,
    NgxStickyContainerDirective,
    NgxStickyDirective,
    NgxStickySpotDirective,
  ],
  imports: [ CommonModule ],
})
export class NgxStickyModule { }
