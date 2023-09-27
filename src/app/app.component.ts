import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import {
  NGX_STICKY_WINDOW,
  NgxStickyDirection,
  NgxStickyPosition,
  fromMediaQuery,
} from '../../projects/ngx-sticky/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnDestroy, OnInit  {
  apiBoundaryStickyDisabled = false;
  apiBoundaryStickyOrbit = false;
  apiBoundaryStickyDirection: NgxStickyDirection = 'down';
  apiBoundaryStickyPosition: NgxStickyPosition = 'top';

  apiContainerStickyDisabled = false;
  apiContainerStickyOrbit = false;
  apiContainerStickyDirection: NgxStickyDirection = 'down';
  apiContainerStickyOffsetTop = 0;
  apiContainerStickyOffsetBottom = 0;
  apiContainerStickyPosition: NgxStickyPosition = 'top';

  apiInViewportStickyDisabled = false;
  apiInViewportStickyOrbit = false;
  apiInViewportStickyDirection: NgxStickyDirection = 'down';
  apiInViewportStickyPosition: NgxStickyPosition = 'top';

  _isSmallScreen: boolean;
  _smallBreakpointSubscription: Subscription;

  constructor(
    readonly changeDetectorRef: ChangeDetectorRef,
    @Inject(NGX_STICKY_WINDOW)
    readonly win: Window,
  ) { }

  ngOnInit(): void {
    const smallBreakpoint$ = fromMediaQuery(this.win, '(min-width: 640px)');

    this._smallBreakpointSubscription = smallBreakpoint$.subscribe(mqlEvent => {
      this._isSmallScreen = !mqlEvent.matches;
      this.changeDetectorRef.markForCheck();
    });

    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    if (this._smallBreakpointSubscription) {
      this._smallBreakpointSubscription.unsubscribe();
      this._smallBreakpointSubscription = null;
    }
  }
}
