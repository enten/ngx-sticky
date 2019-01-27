// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'ngk-sticky';
// }
import { Component, Inject, ViewChild } from '@angular/core';

import { NgxStickyDirective, NgxStickyService, NgxStickyState } from '../../projects/ngx-sticky/src/public_api';


const LOREM_IPSUMS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  title = 'Angular';

  @ViewChild('sticky1', { read: NgxStickyDirective }) sticky1: NgxStickyDirective;
  @ViewChild('stickyYellow', { read: NgxStickyDirective }) stickyYellow: NgxStickyDirective;
  @ViewChild('orbit1') orbit1: HTMLElement;

  constructor(
    readonly stickyService: NgxStickyService,
  ) { }

  loremIpsum(weight = 0, repeat = 1) {
    return LOREM_IPSUMS[weight > 2 ? 2 : weight].repeat(repeat);
  }

  disableStickyWithSpot() {
    this.sticky1.enable = !this.sticky1.enable;
  }

  scrollToAnchor(natively?: boolean) {
    if (natively) {
      document.getElementById('scroll-target').scrollIntoView(true);

      return;
    }

    this.stickyService.scrollToElement('#scroll-target', 0);
  }
}

@Component({
  selector: 'app-hello',
  template: '<p>HELLLLLLO</p><p ngx-sticky (sitkcyState)="stickyStateChange($event)" position="bottom">world!<br>!!!!!</p>',
})
export class HelloComponent {
  stickyStateChange(state: NgxStickyState) {
    console.log('STATE CHANGED!', state);
  }
}
