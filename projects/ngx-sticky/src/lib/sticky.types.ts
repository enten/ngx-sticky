

export type NgxStickyPosition = 'top' | 'bottom';

export type NgxStickyState = 'normal' | 'sticked' | 'stucked';


export interface NgxSticky {
  container: NgxStickyContainer | null;
  element: HTMLElement;
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


export interface NgxStickyContainer {
  element: HTMLElement;
  offsetTop: number;
  offsetBottom: number;
}


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


export interface NgxStickyOffsets {
  top: number;
  bottom: number;
}


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
