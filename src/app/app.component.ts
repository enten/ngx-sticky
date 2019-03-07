import { Component } from '@angular/core';

import { NgxStickyService } from '../../projects/ngx-sticky/src/public_api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  constructor(
    readonly stickyService: NgxStickyService,
  ) { }

  scrollToAnchor(anchorId: string, natively?: boolean) {
    if (natively) {
      document.getElementById(anchorId).scrollIntoView(true);

      return;
    }

    this.stickyService.scrollToElement('#' + anchorId, 0);
  }
}
