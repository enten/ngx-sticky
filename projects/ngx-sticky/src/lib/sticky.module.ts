import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxStickyContainerDirective } from './sticky-container.directive';
import { NgxStickyDirective } from './sticky.directive';

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
@NgModule({
  declarations: [
    NgxStickyDirective,
    NgxStickyContainerDirective,
  ],
  exports: [
    NgxStickyDirective,
    NgxStickyContainerDirective,
  ],
  imports: [ CommonModule ],
})
export class NgxStickyModule { }
