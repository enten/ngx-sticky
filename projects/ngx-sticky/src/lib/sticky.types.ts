

export type NgxScrollPlan = NgxScrollPlanStep[];

export interface NgxScrollPlanStep {
  scrollToOptions: ScrollToOptions;
  scrollToFn: (scrollOptions: ScrollToOptions) => void;
}


/**
 * Sticky direction.
 */
export type NgxStickyDirection = 'up' | 'down';

/**
 * Sticky position.
 */
export type NgxStickyPosition = 'top' | 'bottom';

/**
 * Sticky state.
 */
export type NgxStickyState = 'normal' | 'sticked' | 'stucked';


/**
 * Interface for a line.
 */
export interface NgxStickyLine {
  height: number;
  top: number;
}

/**
 * Interface for a rect.
 */
export interface NgxStickyRect extends NgxStickyLine {
  width: number;
  left: number;
}

/**
 * Interface for a sticky.
 */
export interface NgxSticky extends NgxStickyLine {
  boundary?: NgxStickyBoundary;
  direction?: NgxStickyDirection;
  disabled?: boolean;
  position?: NgxStickyPosition;
  spot?: NgxStickyLine;
}

/**
 * Interface for a sticky boundary.
 */
export interface NgxStickyBoundary extends NgxStickyRect {
  unstacked?: boolean;
}

/**
 * Interface for a sticky container.
 */
export interface NgxStickyContainer extends NgxStickyRect {
  disabled?: boolean;
  offsetTop?: number;
  offsetBottom?: number;
  unstacked?: boolean;
}


/**
 * Interface for a sticky boundary computed.
 */
export interface NgxStickyBoundaryComputed extends NgxStickyBoundary {
  offsetTop: number;
  offsetBottom: number;
}


/**
 * Interface for a sticky computation (created during state determination).
 */
export interface NgxStickyComputation {
  offsetSticked: number;
  offsetStucked: number;
  state: NgxStickyState;
  snap: NgxStickySnap;
  /** Absolute viewport */
  viewportTop: number;
}

/**
 * Interface for a sticky computed.
 */
export interface NgxStickyComputed extends NgxStickyLine {
  boundary: NgxStickyBoundaryComputed;
  // TODO remove direction?
  directionDown: boolean;
  disabled: boolean;
  // TODO remove position?
  positionBottom: boolean;
  sortPoint: number;
  sticked: NgxStickyLine;
}

/**
 * Interface for a sticky snap (used to determine sticky state).
 */
export interface NgxStickySnap {
  boundaries: Record<number, NgxStickyBoundaryComputed>;
  container: NgxStickyContainer;
  stickies: NgxStickyComputed[];
  sticky: NgxSticky;
  stickyComputed: NgxStickyComputed;
  viewportHeight: number;
}


/**
 * Interface for a sticky bundary controller.
 */
export interface NgxStickyBoundaryController {
  container: NgxStickyContainerController;

  /**
   * Compute and cache a fresh NgxStickyBoundary instance.
   */
  beforeRefresh(fastUpdate?: boolean): void;
  // cacheBoundary(): void;

  /**
   * Returns sticky boundary instance.
   *
   * @returns Sticky boundary instance.
   */
  getBoundary(): NgxStickyBoundary;

  /**
   * Update each sticky in boundary's container.
   *
   * @param fastUpdate `true` to allow computed values
   */
  updateStickies(fastUpdate?: boolean): void;
}


/**
 * Interface for a sticky container controller.
 */
export interface NgxStickyContainerController {
  containers: NgxStickyContainerController[];
  boundaries: NgxStickyBoundaryController[];
  intersections: NgxIntersectionController[];
  stickies: NgxStickyController[];
  containerParent?: NgxStickyContainerController;
  disabled: boolean;

  /**
   * Compute and cache a fresh NgxStickyContainer instance.
   */
  beforeRefresh(fastUpdate?: boolean): void;
  // cacheContainer(): void;

  /**
   * Create scroll plan to a given element.
   *
   * @param target Target which can be number, selector or HTMLElement
   * @param extraOffsetTop Additional offset top
   * @returns Scroll plan
   * @deprecated
   */
  createScrollPlan(element: number | string | HTMLElement, extraOffsetTop: number): NgxScrollPlan;
  /**
   * Create scroll plan to a given element.
   *
   * @param target Target which can be number, selector or HTMLElement
   * @param options
   * @returns Scroll plan
   */
  createScrollPlan(
    element: number | string | HTMLElement,
    options?: { excludeStickies?: boolean; extraOffsetTop?: number; },
  ): NgxScrollPlan;

  /**
   * Fix given viewport top by substract sticked offset top.
   *
   * @param viewportTop Viewport top value to fix
   * @param extraOffsetTop Additional offset top
   * @deprecated
   */
  fixViewportTop(viewportTop: number, extraOffsetTop: number): number;
  /**
   * Fix given viewport top by substract sticked offset top.
   *
   * @param viewportTop Viewport top value to fix
   * @param options
   */
  fixViewportTop(
    viewportTop: number,
    options?: { excludeStickies?: boolean; extraOffsetTop?: number; },
  ): number;

  /**
   * Returns offset top reserved for stickies sticked at given viewport top position.
   *
   * @param viewportTop Viewport top position
   */
  getStickedOffset(position: NgxStickyPosition, viewportTop: number): number;

  /**
   * Disable all stickies in each container.
   */
  disableAllStickies(): void;

  /**
   * Disable each sticky in the container.
   */
  disableStickies(): void;

  /**
   * Disable all stickies in each container.
   */
  enableAllStickies(): void;

  /**
   * Enable each sticky in the container.
   */
  enableStickies(): void;

  /**
   * Returns sticky container instance.
   *
   * @returns Sticky container line.
   */
  getContainer(): NgxStickyContainer;

  /**
   * Returns container viewport height.
   *
   * @returns Sticky container viewport height.
   */
  getViewportHeight(): number;

  /**
   * Returns container viewport left position.
   *
   * @returns Sticky container viewport left position.
   */
  getViewportLeft(): number;

  /**
   * Returns container viewport top position.
   *
   * @returns Sticky container viewport top position.
   */
  getViewportTop(): number;

  /**
   * Register boundary controller.
   *
   * @param boundary Boundary controller
   */
  registerBoundary(boundary: NgxStickyBoundaryController): void;

  /**
   * Register container controller.
   *
   * @param container Container controller
   */
  registerContainer(container: NgxStickyContainerController): void;

  /**
   * Register intersection controller.
   *
   * @param intersection Intersection controller
   */
  registerIntersection(intersection: NgxIntersectionController): void;

  /**
   * Register sticky controller.
   *
   * @param sticky Sticky controller
   */
  registerSticky(sticky: NgxStickyController): void;

  /**
   * Scroll to top of target and considering sticked offset.
   *
   * @param target Element
   * @param extraOffsetTop Additional offset top
   * @deprecated
   */
  scrollToTop(target: number | string | HTMLElement, extraOffsetTop: number): void;
  /**
   * Scroll to top of target and considering sticked offset.
   *
   * @param target Element
   * @param options
   */
  scrollToTop(
    target: number | string | HTMLElement,
    options?: { excludeStickies?: boolean; extraOffsetTop?: number; },
  ): void;

  /**
   * Update all stickies in each container.
   *
   * @param fastUpdate `true` to allow computed values
   */
  updateAllStickies(fastUpdate?: boolean): void;

  /**
   * Update each sticky in the container.
   *
   * @param fastUpdate `true` to allow computed values
   */
  updateStickies(fastUpdate?: boolean): void;

  /**
   * Unregister boundary controller.
   *
   * @param boundary Boundary controller
   */
  unregisterBoundary(boundary: NgxStickyBoundaryController): void;

  /**
   * Unegister container controller.
   *
   * @param container Container controller
   */
  unregisterContainer(container: NgxStickyContainerController): void;

  /**
   * Unregister intersection controller.
   *
   * @param intersection Intersection controller
   */
  unregisterIntersection(intersection: NgxIntersectionController): void;

  /**
   * Unregister sticky controller.
   *
   * @param sticky Sticky controller
   */
  unregisterSticky(sticky: NgxStickyController): void;
}


/**
 * Interface for a sticky controller.
 */
export interface NgxStickyController {
  boundary?: NgxStickyBoundaryController;
  container: NgxStickyContainerController;
  disabled: boolean;
  state: NgxStickyState;

  /**
   * Compute and cache a fresh NgxSticky instance.
   */
  beforeRefresh(fastUpdate?: boolean): void;
  // cacheSticky(): void;

  /**
   * Disable sticky.
   */
  disableSticky(): void;

  /**
   * Enable sticky.
   */
  enableSticky(): void;

  /**
   * Returns sticky.
   *
   * @returns Sticky instance.
   */
  getSticky(): NgxSticky;

  /**
   * Trigger sticky refresh with given computation.
   *
   * @param stickycomputation Sticky state computation
   */
  refresh(computation: NgxStickyComputation): void;
  // refreshSticky(stickyComputation: NgxStickyComputation): void;

  /**
   * Trigger sticky update.
   *
   * @param fastUpdate `true` to allow computed values
   */
  update(fastUpdate?: boolean): void;
  // updateSticky(fastUpdate?: boolean): void;
}


export type NgxIntersectionComputed = Required<NgxIntersection>;

export type NgxIntersectionState = 'enter' | 'entered' | 'exit' | 'exited' | null;


export interface NgxIntersection extends NgxStickyLine {
  disabled?: boolean;
  thresholds?: number[];
}


export interface NgxIntersectionComputation {
  enter: NgxStickyComputation;
  exit: NgxStickyComputation;
  state: NgxIntersectionState;
  snap: NgxIntersectionSnap;
  height: number;
  intersecting: boolean;
  ratio: number;
  /** Absolute viewport */
  viewportTop: number;
}

export interface NgxIntersectionSnap {
  container: NgxStickyContainer;
  intersection: NgxIntersectionComputed;
  enter: NgxStickySnap;
  exit: NgxStickySnap;
  viewportHeight: number;
}


export interface NgxIntersectionController {
  container: NgxStickyContainerController;
  disabled: boolean;
  state: NgxIntersectionState;
  beforeRefresh(fastUpdate?: boolean): void;
  disableIntersection(): void;
  enableIntersection(): void;
  getIntersection(): NgxIntersection;
  refresh(computation: NgxIntersectionComputation): void;
  update(fastUpdate?: boolean): void;
}
