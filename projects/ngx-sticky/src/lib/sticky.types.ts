
/**
 * Sticky position.
 *
 * @publicApi
 */
export type NgxStickyPosition = 'top' | 'bottom';

/**
 * Sticky state.
 *
 * @publicApi
 */
export type NgxStickyState = 'normal' | 'sticked' | 'stucked';


/**
 * Interface for a sticky.
 *
 * @publicApi
 */
export interface NgxSticky {
  container: NgxStickyContainer | null;
  element: HTMLElement;
  forceElementHeight?: number;
  ghost?: HTMLElement;
  enable: boolean;
  hidden: boolean;
  orbit: boolean;
  position: NgxStickyPosition;
  spot: HTMLElement | null;
  stack: boolean;
  state: NgxStickyState;
  styleOriginal?: NgxStickyStyle;
}


/**
 * Interface for a sticky container.
 *
 * @publicApi
 */
export interface NgxStickyContainer {
  element: HTMLElement;
  offsetTop: number;
  offsetBottom: number;
}


/**
 * Interface for a sticky ghost styles.
 *
 * @publicApi
 */
export interface NgxStickyGhostStyle {
  [prop: string]: string;
  position?: string;
  width: string;
  height: string;
  borderTopWidth: string;
  borderBottomWidth: string;
  borderLeftWidth: string;
  borderRightWidth: string;
  marginTop: string;
  marginBottom: string;
  marginLeft: string;
  marginRight: string;
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
}


/**
 * Sticky offsets.
 *
 * @publicApi
 */
export interface NgxStickyOffsets {
  top: number;
  bottom: number;
}


/**
 * Interface for a sticky styles.
 *
 * @publicApi
 */
export interface NgxStickyStyle {
  [prop: string]: string;
  position: string;
  width: string;
  top: string;
  bottom: string;
  left: string;
  margin: string;
  marginTop: string;
  marginRight: string;
  marginBottom: string;
  marginLeft: string;
}
