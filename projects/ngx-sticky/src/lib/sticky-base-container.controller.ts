import { NgxStickyEngine } from './sticky-engine';
import {
  NgxIntersectionComputation,
  NgxIntersectionController,
  NgxIntersectionSnap,
  NgxScrollPlan,
  NgxSticky,
  NgxStickyBoundaryController,
  NgxStickyComputation,
  NgxStickyContainer,
  NgxStickyContainerController,
  NgxStickyController,
  NgxStickyPosition,
  NgxStickySnap,
} from './sticky.types';
import { addEntry, deleteEntry } from './utils/collections';


/**
 * Abstract sticky container controller.
 */
export abstract class NgxStickyBaseContainerController implements NgxStickyContainerController {
  abstract readonly containerParent?: NgxStickyContainerController;
  abstract readonly stickyEngine: NgxStickyEngine;

  abstract disabled: boolean;

  readonly boundaries: NgxStickyBoundaryController[] = [];
  readonly containers: NgxStickyContainerController[] = [];
  readonly intersections: NgxIntersectionController[] = [];
  readonly stickies: NgxStickyController[] = [];

  readonly _stickyComputations: Record<number, NgxStickyComputation> = {};
  readonly _stickySnaps: Record<number, NgxStickySnap> = {};
  _stickySnapContainerHeight!: number;

  readonly _intersectionComputations: Record<number, NgxIntersectionComputation> = {};
  readonly _intersectionSnaps: Record<number, NgxIntersectionSnap> = {};

  abstract beforeRefresh(fastUpdate?: boolean): void;
  /** @deprecated */
  abstract createScrollPlan(element: number | string | HTMLElement, extraOffsetTop: number): NgxScrollPlan;
  abstract createScrollPlan(
    element: number | string | HTMLElement,
    options?: { excludeStickies?: boolean; extraOffsetTop?: number; },
  ): NgxScrollPlan;
  abstract disableStickies(): void;
  abstract enableStickies(): void;
  abstract getContainer(): NgxStickyContainer;
  abstract getViewportHeight(): number;
  abstract getViewportLeft(): number;
  abstract getViewportTop(): number;
  /** @deprecated */
  abstract scrollToTop(target: number | string | HTMLElement, extraOffsetTop: number): void;
  abstract scrollToTop(
    target: number | string | HTMLElement,
    options?: { excludeStickies?: boolean; extraOffsetTop?: number; },
  ): void;

  abstract _computeContainer(): NgxStickyContainer;

  disableAllStickies(): void {
    this.disableStickies();

    for (const container of this.containers) {
      container.disableStickies();
    }
  }

  enableAllStickies(): void {
    this.enableStickies();

    for (const container of this.containers) {
      container.enableStickies();
    }
  }

  getStickedOffset(position: NgxStickyPosition, viewportTop: number): number {
    const container = this.getContainer();
    const viewportHeight = this.getViewportHeight();
    const stickies = this.stickies.map(stickyController => stickyController.getSticky());
    const stickySnaps = this.stickyEngine._collectStickySnaps(container, stickies, position, viewportHeight);
    return this.stickyEngine.determineStickedOffset(container, stickySnaps, position, viewportTop);
  }

  fixViewportTop(
    viewportTop: number,
    optionsOrExtraOffsetTop?: { excludeStickies?: boolean; extraOffsetTop?: number; } | number,
  ): number {
    const options = typeof optionsOrExtraOffsetTop === 'number' ? { extraOffsetTop: optionsOrExtraOffsetTop } : optionsOrExtraOffsetTop;
    const viewportHeight = this.getViewportHeight();
    const viewportTopOffsetless = viewportTop - (options?.extraOffsetTop || 0);
    let stickedOffsetTop = 0;

    if (!options?.excludeStickies) {
      const container = this.getContainer();
      const stickies = this.stickies.map(stickyController => stickyController.getSticky());
      const stickySnaps = this.stickyEngine._collectStickySnaps(container, stickies, 'top', viewportHeight);
      // determine offset top height for the given viewport top
      const initialViewportTop = viewportTopOffsetless;
      const initialStickedOffset = this.stickyEngine.determineStickedOffset(container, stickySnaps, 'top', initialViewportTop);
      // determine offset top height for the given viewport subtracted by the offset top height
      let lastViewportTop = initialViewportTop - initialStickedOffset;
      let lastStickedOffset = initialStickedOffset && this.stickyEngine.determineStickedOffset(container, stickySnaps, 'top', lastViewportTop);

      // if both calculated heights are equal means that subtracting offset top height from
      // the given viewport is enought
      if (lastStickedOffset === initialStickedOffset) {
        stickedOffsetTop = lastStickedOffset;
      } else {
        // else we have to scroll up pixel by pixel to compute the best viewport top position
        const initialStickedOffsetMinusViewportHeight = initialViewportTop - viewportHeight;
        for (
          lastViewportTop = initialViewportTop - 1;
          lastViewportTop >= initialStickedOffsetMinusViewportHeight;
          lastViewportTop--
        ) {
          lastStickedOffset = this.stickyEngine.determineStickedOffset(container, stickySnaps, 'top', lastViewportTop);
          if (initialViewportTop - lastViewportTop - lastStickedOffset >= 0) {
            stickedOffsetTop = initialViewportTop - lastViewportTop;
            break;
          }
        }
      }
    }

    let viewportTopFixed = viewportTopOffsetless - stickedOffsetTop;

    if (this.containerParent) {
      viewportTopFixed -= this.getContainer().top;
    }

    return viewportTopFixed;
  }

  registerContainer(containerController: NgxStickyContainerController): void {
    addEntry(this.containers, containerController);
  }

  registerBoundary(boundaryController: NgxStickyBoundaryController): void {
    addEntry(this.boundaries, boundaryController);
  }

  registerIntersection(intersectionController: NgxIntersectionController): void {
    const intersectionIndex = addEntry(this.intersections, intersectionController);

    if (intersectionIndex !== -1) {
      this._intersectionSnaps[intersectionIndex] = null!;
      this._intersectionComputations[intersectionIndex] = null!;
    }
  }

  registerSticky(stickyController: NgxStickyController): void {
    const stickyIndex = addEntry(this.stickies, stickyController);

    if (stickyIndex !== -1) {
      this._stickySnaps[stickyIndex] = null!;
      this._stickyComputations[stickyIndex] = null!;
    }
  }

  updateAllStickies(fastUpdate?: boolean): void {
    this.updateStickies(fastUpdate);

    for (const containerController of this.containers) {
      containerController.updateAllStickies(fastUpdate);
    }
  }

  updateStickies(fastUpdate?: boolean): void {
    // // avoid update when there is no stickies
    // if (!this.stickies.length) {
    //   return;
    // }

    // // force full update when container size change
    // if (this.getContainerHeight() !== this._stickySnapContainerHeight) {
    //   fastUpdate = false;
    // }

    // get container viewport top before any update
    const containerViewportTop = this.getViewportTop();

    if (!fastUpdate) {
      this.beforeRefresh(fastUpdate);

      for (const boundaryController of this.boundaries) {
        boundaryController.beforeRefresh(fastUpdate);
      }

      for (let stickyIndex = 0; stickyIndex < this.stickies.length; ++stickyIndex) {
        this._stickyComputations[stickyIndex] = null!;
        this._stickySnaps[stickyIndex] = null!;

        this.stickies[stickyIndex].beforeRefresh(fastUpdate);
      }

      for (let intersectionIndex = 0; intersectionIndex < this.intersections.length; ++intersectionIndex) {
        this._intersectionComputations[intersectionIndex] = null!;
        this._intersectionSnaps[intersectionIndex] = null!;

        this.intersections[intersectionIndex].beforeRefresh(fastUpdate);
      }
    }

    //   // legacy code
    //   const viewportHeight = this.getViewportHeight() - this.stickyOffsetTop - this.stickyOffsetBottom;
    //   const viewportTop = containerViewportTop + this.getContainer().top + this.stickyOffsetTop;

    const container = this.getContainer();
    const viewportHeight = this.getViewportHeight();
    // compute absolute viewport top
    const viewportTop = containerViewportTop + this.getContainer().top;
    let stickies!: NgxSticky[];

    // refresh stickies
    for (let stickyIndex = 0; stickyIndex < this.stickies.length; ++stickyIndex) {
      const stickyController = this.stickies[stickyIndex];
      let stickyComputation = this._stickyComputations[stickyIndex];

      if (!stickyComputation || stickyComputation.viewportTop !== viewportTop) {
        let stickySnap = this._stickySnaps[stickyIndex];

        if (!stickySnap) {
          if (!stickies) {
            stickies = [];
            for (const _stickyController of this.stickies) {
              stickies.push(_stickyController.getSticky());
            }
          }

          stickySnap = this.stickyEngine.snapSticky(container, stickies, stickies[stickyIndex], viewportHeight);

          this._stickySnaps[stickyIndex] = stickySnap;
        }

        stickyComputation = this.stickyEngine.determineStickyState(stickySnap, viewportTop);

        this._stickyComputations[stickyIndex] = stickyComputation;
      }

      stickyController.refresh(stickyComputation);
    }

    // refresh intersections
    for (let intersectionIndex = 0; intersectionIndex < this.intersections.length; ++intersectionIndex) {
      const intersectionController = this.intersections[intersectionIndex];
      let intersectionComputation = this._intersectionComputations[intersectionIndex];

      if (!intersectionComputation || intersectionComputation.viewportTop !== viewportTop) {
        let intersectionSnap = this._intersectionSnaps[intersectionIndex];

        if (!intersectionSnap) {
          if (!stickies) {
            stickies = [];
            for (const _stickyController of this.stickies) {
              stickies.push(_stickyController.getSticky());
            }
          }

          const intersection = intersectionController.getIntersection();

          intersectionSnap = this.stickyEngine.snapIntersection(container, stickies, intersection, viewportHeight);

          this._intersectionSnaps[intersectionIndex] = intersectionSnap;
        }

        intersectionComputation = this.stickyEngine.determineIntersectionState(intersectionSnap, viewportTop);

        this._intersectionComputations[intersectionIndex] = intersectionComputation;
      }

      intersectionController.refresh(intersectionComputation);
    }

    if (!fastUpdate) {
      // restore container viewport top after full update
      this.scrollToTop(containerViewportTop, { excludeStickies: true });
    }
  }

  unregisterContainer(container: NgxStickyContainerController): void {
    deleteEntry(this.containers, container);
  }

  unregisterBoundary(boundary: NgxStickyBoundaryController): void {
    deleteEntry(this.boundaries, boundary);
  }

  unregisterIntersection(intersectionController: NgxIntersectionController): void {
    const intersectionIndex = deleteEntry(this.intersections, intersectionController);

    if (intersectionIndex !== -1) {
      this._intersectionSnaps[intersectionIndex] = null!;
      this._intersectionComputations[intersectionIndex] = null!;
    }
  }

  unregisterSticky(sticky: NgxStickyController): void {
    const stickyIndex = deleteEntry(this.stickies, sticky);

    if (stickyIndex !== -1) {
      this._stickySnaps[stickyIndex] = null!;
      this._stickyComputations[stickyIndex] = null!;
    }
  }
}
