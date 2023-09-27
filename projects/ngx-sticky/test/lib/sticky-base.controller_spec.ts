import { NgxStickyBaseController } from '../../src/lib/sticky-base.controller';
import { NgxStickyContainerController } from '../../src/lib/sticky.types';


class NgxStickyTestController extends NgxStickyBaseController {
  override container = {
    updateStickies: jest.fn() as NgxStickyContainerController['updateStickies'],
  } as NgxStickyContainerController;
  override boundary = null!;
  override disabled = false;
  override state = null!;
  override beforeRefresh = jest.fn();
  override disableSticky = jest.fn();
  override enableSticky = jest.fn();
  override getSticky = jest.fn();
  override refresh = jest.fn();
}


describe('update', () => {
  it('should update stickies in container', () => {
    const sticky = new NgxStickyTestController();

    sticky.update(true);

    expect(sticky.container.updateStickies).toBeCalledWith(true);
  });
});
