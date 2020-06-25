import { Directive, HostBinding, Input } from '@angular/core';

import { coerceNumberProperty } from './utils';

@Directive({
  selector: '[ngxStickySpot], [ngx-sticky-spot], ngx-sticky-spot',
  exportAs: 'ngxStickySpot',
})
export class NgxStickySpotDirective {
  @HostBinding('class.ngx-sticky-spot')
  readonly cssClassStickySpot = true;

  @HostBinding('style.position')
  readonly cssStylePosition = 'absolute';

  @HostBinding('style.height.px')
  @Input()
  get stickySpotHeight(): number { return this._stickySpotHeight; }
  set stickySpotHeight(value: number) { this._stickySpotHeight = coerceNumberProperty(value); }

  private _stickySpotHeight = 1;
}
