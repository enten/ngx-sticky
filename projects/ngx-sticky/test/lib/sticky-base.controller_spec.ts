import { NgxStickyBaseController } from '../../src/lib/sticky-base.controller';
import { NgxStickyContainerController } from '../../src/lib/sticky.types';


class NgxStickyTestController extends NgxStickyBaseController {
  container = { updateStickies: jest.fn() } as {} as NgxStickyContainerController;
  boundary = null;
  disabled = false;
  state = null;
  beforeRefresh = jest.fn();
  disableSticky = jest.fn();
  enableSticky = jest.fn();
  getSticky = jest.fn();
  refresh = jest.fn();
}


describe('update', () => {
  it('should update stickies in container', () => {
    const sticky = new NgxStickyTestController();

    sticky.update(true);

    expect(sticky.container.updateStickies).toBeCalledWith(true);
  });
});
