import { Directive, ElementRef, Inject, NgZone, Optional, SkipSelf, forwardRef } from '@angular/core';

import { NgxStickyBaseContainerDirective } from './sticky-base-container.directive';
import { NgxStickyEngine } from './sticky-engine';
import { NgxStickyRootContainerController } from './sticky-root-container.controller';
import { NGX_STICKY_WINDOW } from './sticky.tokens';
import { NgxStickyContainerController } from './sticky.types';


/**
 * Defines a sticky container.
 */
@Directive({
  selector: '[ngxStickyContainer], [ngx-sticky-container], ngx-sticky-container',
  exportAs: 'ngxStickyContainer',
})
export class NgxStickyContainerDirective extends NgxStickyBaseContainerDirective {
  /**
   * Returns HTMLElement of the container.
   */
  get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  constructor(
    readonly rootContainer: NgxStickyRootContainerController,
    @SkipSelf() @Optional() @Inject(forwardRef(() => NgxStickyContainerDirective))
    readonly stickyContainerParent: NgxStickyContainerController,
    stickyEngine: NgxStickyEngine,
    ngZone: NgZone,
    readonly elementRef: ElementRef<HTMLElement>,
    @Inject(NGX_STICKY_WINDOW)
    _win: any/*Window*/,
  ) {
    // use root container when boundary isn't in container
    super(stickyContainerParent || rootContainer, stickyEngine, ngZone, _win);
  }

  getViewportHeight(): number {
    return this.element.offsetHeight;
  }

  getViewportLeft(): number {
    return this.element.scrollLeft;
  }

  getViewportTop(): number {
    return this.element.scrollTop;
  }
}
