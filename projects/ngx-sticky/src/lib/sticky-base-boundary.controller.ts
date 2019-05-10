import {
  NgxStickyBoundary,
  NgxStickyBoundaryController,
  NgxStickyContainerController,
} from './sticky.types';


/**
 * Abstract sticky boundary controller.
 */
export abstract class NgxStickyBaseBoundaryController implements NgxStickyBoundaryController {
  abstract readonly container: NgxStickyContainerController;

  abstract beforeRefresh(fastUpdate?: boolean): void;
  abstract getBoundary(): NgxStickyBoundary;

  updateStickies(fastUpdate?: boolean) {
    this.container.updateStickies(fastUpdate);
  }
}
