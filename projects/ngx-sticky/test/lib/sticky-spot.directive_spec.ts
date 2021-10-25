import { NgxStickySpotDirective } from '../../src/lib/sticky-spot.directive';


let stickySpot: NgxStickySpotDirective;

const setup = () => {
  stickySpot = new NgxStickySpotDirective();
};


beforeEach(() => {
  setup();
});


describe('stickySpotHeight', () => {
  it('should returns spot height', () => {
    stickySpot.stickySpotHeight = '10' as any;

    expect(stickySpot.stickySpotHeight).toBe(10);
  });
});
