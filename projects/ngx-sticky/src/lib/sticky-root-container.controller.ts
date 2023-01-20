import { Inject, Injectable, NgZone } from '@angular/core';

import { NgxStickyBaseContainerDirective } from './sticky-base-container.directive';
import { NgxStickyEngine } from './sticky-engine';
import { NGX_STICKY_WINDOW } from './sticky.tokens';
import { NgxStickyContainerController } from './sticky.types';


/**
 * Defines the sticky root container which is used to manage sticky without container.
 */
@Injectable({
  providedIn: 'root',
})
export class NgxStickyRootContainerController extends NgxStickyBaseContainerDirective {
  // root container never has parent container
  override readonly containerParent: NgxStickyContainerController = null!;
  // root container never has element
  readonly element: HTMLElement = null!;

  constructor(
    stickyEngine: NgxStickyEngine,
    ngZone: NgZone,
    @Inject(NGX_STICKY_WINDOW)
    _win: Window,
  ) {
    super(null!, stickyEngine, ngZone, _win);
  }
}
