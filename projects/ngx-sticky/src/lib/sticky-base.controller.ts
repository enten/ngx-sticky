import {
  NgxSticky,
  NgxStickyBoundaryController,
  NgxStickyComputation,
  NgxStickyContainerController,
  NgxStickyController,
  NgxStickyState,
} from './sticky.types';


/**
 * Abstract sticky controller.
 */
export abstract class NgxStickyBaseController implements NgxStickyController {
  abstract readonly boundary?: NgxStickyBoundaryController;
  abstract readonly container: NgxStickyContainerController;
  abstract readonly disabled: boolean;
  abstract readonly state: NgxStickyState;

  abstract beforeRefresh(fastUpdate?: boolean): void;
  abstract disableSticky(): void;
  abstract enableSticky(): void;
  abstract getSticky(): NgxSticky;
  abstract refresh(computation: NgxStickyComputation): void;

  update(fastUpdate?: boolean): void {
    // all stickies need to be updated when one of them changed
    this.container.updateStickies(fastUpdate);
  }
}
