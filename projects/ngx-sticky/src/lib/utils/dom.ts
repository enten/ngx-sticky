import { Renderer2 } from '@angular/core';


/**
 * Returns getter for document height.
 *
 * @param win Window reference
 * @returns Getter for document height.
 */
export function getDocumentHeightFactory(win: Window): () => number {
  if (!win) {
    return () => 0;
  }

  const documentHeightGetters = [
    () => win.document.body.scrollHeight,
    () => win.document.documentElement.scrollHeight,
    () => win.document.body.offsetHeight,
    () => win.document.documentElement.offsetHeight,
    () => win.document.body.clientHeight,
    () => win.document.documentElement.clientHeight,
  ];

  let documentHeightGetter = documentHeightGetters[0];
  let documentHeight = 0;

  for (const _documentHeightGetter of documentHeightGetters) {
    const _documentHeight = _documentHeightGetter();

    if (_documentHeight > documentHeight) {
      documentHeightGetter = _documentHeightGetter;
      documentHeight = _documentHeight;
    }
  }

  return documentHeightGetter;
}


/**
 * Returns getter for document width.
 *
 * @param win Window reference
 * @returns Getter for document width.
 */
export function getDocumentWidthFactory(win: Window): () => number {
  if (!win) {
    return () => 0;
  }

  const documentWidthGetters = [
    () => win.document.body.scrollWidth,
    () => win.document.documentElement.scrollWidth,
    () => win.document.body.offsetWidth,
    () => win.document.documentElement.offsetWidth,
    () => win.document.body.clientWidth,
    () => win.document.documentElement.clientWidth,
  ];

  let documentWidthGetter = documentWidthGetters[0];
  let documentWidth = 0;

  for (const _documentWidthGetter of documentWidthGetters) {
    const _documentWidth = _documentWidthGetter();

    if (_documentWidth > documentWidth) {
      documentWidthGetter = _documentWidthGetter;
      documentWidth = _documentWidth;
    }
  }

  return documentWidthGetter;
}


/**
 * Returns element absolute rect.
 *
 * @param element Element
 * @returns Element absolute rect
 */
export function getElementAbsoluteRect(element: HTMLElement) {
  const rect = {
    height: element.offsetHeight,
    width: element.offsetWidth,
    left: 0,
    top: 0,
  };

  let currentElement = element;

  do {
    rect.top += currentElement.offsetTop || 0;
    rect.left += currentElement.offsetLeft || 0;

    currentElement = currentElement.offsetParent as HTMLElement;
  } while (currentElement);

  return rect;
}


/**
 * Returns element relative rect.
 *
 * @param win Window reference
 * @param element Element
 * @returns Element relative rect.
 */
export function getElementRelativeRect(win: Window, element: HTMLElement) {
  const rect = {
    height: element.offsetHeight,
    width: element.offsetWidth,
    left: 0,
    top: 0,
  };

  let currentElement = element;
  let currentElementStyle: CSSStyleDeclaration;

  do {
    currentElementStyle = currentElement !== element ? win.getComputedStyle(currentElement) : {} as CSSStyleDeclaration;

    if (currentElementStyle.position === 'relative') {
      break;
    }

    if (currentElementStyle.position !== 'absolute') {
      rect.top += currentElement.offsetTop || 0;
      rect.left += currentElement.offsetLeft || 0;
    }

    currentElement = currentElement.offsetParent as HTMLElement;
  } while (currentElement);

  return rect;
}


/**
 * Get window viewport height.
 *
 * @param win Window reference
 * @returns Window viewport height
 */
export function getWindowViewportHeight(win: Window): number {
  return win && win.innerHeight || 0;
}


/**
 * Get window scroll left position.
 *
 * @param win Window reference
 * @returns Window scroll left position
 */
export function getWindowViewportLeft(win: Window): number {
  if (!win) {
    return 0;
  }

  // The top-left-corner of the viewport is determined by the scroll position of the document
  // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
  // whether `document.body` or `document.documentElement` is the scrolled element, so reading
  // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
  // `document.documentElement` works consistently, where the `top` and `left` values will
  // equal negative the scroll position.
  const documentRect = win.document.documentElement.getBoundingClientRect();

  return -documentRect.left
    || win.document.body.scrollLeft
    || win.scrollX
    || win.document.documentElement.scrollLeft
    || 0;
}


/**
 * Get window scroll top position.
 *
 * @param win Window reference
 * @returns Window scroll top position
 */
export function getWindowViewportTop(win: Window): number {
  if (!win) {
    return 0;
  }

  // The top-left-corner of the viewport is determined by the scroll position of the document
  // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
  // whether `document.body` or `document.documentElement` is the scrolled element, so reading
  // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
  // `document.documentElement` works consistently, where the `top` and `left` values will
  // equal negative the scroll position.
  const documentRect = win.document.documentElement.getBoundingClientRect();

  return -documentRect.top
    || win.document.body.scrollTop
    || win.scrollY
    || win.document.documentElement.scrollTop
    || 0;
}


/**
 * Returns `true` when element is scrollable.
 *
 * @param win Window reference
 * @param element Element
 * @returns `true` when element is scrollable
 */
export function isElementScrollableY(win: Window, element: HTMLElement): boolean {
  return element.offsetHeight < element.scrollHeight && win.getComputedStyle(element).overflowY === 'auto';
}


/**
 * Set styles on a given element.
 *
 * @param renderer Renderer2 instance
 * @param element Element
 * @param styles Styles
 */
export function setElementStyles(
  renderer: Renderer2,
  element: HTMLElement,
  styles: any, // tslint:disable-line:no-any
): void {
  if (!element || !styles) {
    return;
  }

  const propKeys = Object.keys(styles);

  for (const prop of propKeys) {
    const value = styles[prop];

    if (value) {
      renderer.setStyle(element, prop, value);
    } else {
      renderer.removeStyle(element, prop);
    }
  }
}

