import { NgxStickyBaseBoundaryController } from '../../src/lib/sticky-base-boundary.controller';
import { NgxStickyContainerController } from '../../src/lib/sticky.types';


class NgxStickyTestBoundaryController extends NgxStickyBaseBoundaryController {
  container = { updateStickies: jest.fn() } as {} as NgxStickyContainerController;
  beforeRefresh = jest.fn();
  getBoundary = jest.fn();
}


describe('updateStickies', () => {
  it('should update stickies in container', () => {
    const boundary = new NgxStickyTestBoundaryController();

    boundary.updateStickies(true);

    expect(boundary.container.updateStickies).toBeCalledWith(true);
  });
});
