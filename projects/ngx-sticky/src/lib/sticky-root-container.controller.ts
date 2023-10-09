import { Inject, Injectable, NgZone } from '@angular/core';

import { NgxStickyBaseContainerDirective, NgxStickyContainerConfig } from './sticky-base-container.directive';
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
  readonly containerParent: NgxStickyContainerController = null!;
  // root container never has element
  readonly element: HTMLElement = null!;

  constructor(
    stickyEngine: NgxStickyEngine,
    ngZone: NgZone,
    @Inject(NGX_STICKY_WINDOW)
    _win: any/*Window*/,
  ) {
    super(null!, stickyEngine, ngZone, _win);

    // define aliases to input handly because the root container isn't an angular directive
    Object.keys(this.config$._aliases).forEach(<K extends keyof NgxStickyContainerConfig>(alias: string) => {
      const configKey = this.config$._aliases[alias] as K;
      Object.defineProperty(this, alias, {
        get: (): NgxStickyContainerConfig[K] => this.config$.getKeyValue(configKey),
        set: (value: NgxStickyContainerConfig[K]) => this.config$.nextKeyValue(configKey, value),
      });
    });
  }
}
