import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxStickyContainerDirective } from './sticky-container.directive';
import { NgxStickyDirective } from './sticky.directive';


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
