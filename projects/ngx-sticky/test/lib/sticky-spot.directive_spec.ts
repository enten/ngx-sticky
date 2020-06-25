import { NgxStickySpotDirective } from '../../src/lib/sticky-spot.directive';


let stickySpot: NgxStickySpotDirective;

// tslint:disable-next-line: no-any
const setup = () => {
  stickySpot = new NgxStickySpotDirective();
};


beforeEach(() => {
  setup();
});


describe('stickySpotHeight', () => {
  it('should returns spot height', () => {
    // tslint:disable-next-line: no-any
    stickySpot.stickySpotHeight = '10' as any;

    expect(stickySpot.stickySpotHeight).toBe(10);
  });
});
