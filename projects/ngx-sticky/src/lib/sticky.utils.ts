import { Renderer2 } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';


export let WINDOW_REF = typeof window !== 'undefined' ? window : null;
export const getWindowRef = () => WINDOW_REF;
export const setWindowRef = (win: Window) => WINDOW_REF = win;


/** Coerces a data-bound value (typically a string) to a boolean. */
export function coerceBooleanProperty(value: any): boolean { // tslint:disable-line: no-any
  return value != null && `${value}` !== 'false';
}

/** Coerces a data-bound value (typically a string) to a number. */
export function coerceNumberProperty(value: any): number; // tslint:disable-line: no-any
export function coerceNumberProperty<D>(value: any, fallback: D): number | D; // tslint:disable-line: no-any
export function coerceNumberProperty(value: any, fallbackValue = 0) { // tslint:disable-line: no-any
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}

/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
export function _isNumberValue(value: any): boolean { // tslint:disable-line: no-any
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value)); // tslint:disable-line: no-any
}


export function fromImageLoadEvents(element: HTMLElement): Observable<HTMLImageElement> {
  if (!element) {
    return observableOf();
  }

  return new Observable<HTMLImageElement>(observable => {
    const images: HTMLImageElement[] = [];
    let loadListener: (event: ProgressEvent) => void;
    let addLoadListener: (image: HTMLImageElement) => void;
    let removeLoadListener: (image: HTMLImageElement) => void;

    loadListener = (event: ProgressEvent) => {
      const image = event.target as HTMLImageElement;
      removeLoadListener(image);
      observable.next(image);
    };

    addLoadListener = (image: HTMLImageElement) => {
      images.push(image);
      image.addEventListener('load', loadListener);
    };

    removeLoadListener = (image: HTMLImageElement) => {
      images.splice(images.indexOf(image), 1);
      image.removeEventListener('load', loadListener);
    };

    if (element instanceof HTMLImageElement) {
      addLoadListener(element);
    } else {
      element.querySelectorAll('img').forEach(addLoadListener);
    }

    return () => images.forEach(removeLoadListener);
  });
}


export function getElementAbsoluteRect(element: HTMLElement) {
  if (!element) {
    return null;
  }

  const width = Math.max(element.offsetWidth, element.clientWidth, element.scrollWidth);
  const height = Math.max(element.offsetHeight, element.clientHeight, element.scrollHeight);

  let top = 0;
  let left = 0;

  let currentElement = element;

  do {
    top += currentElement.offsetTop || 0;
    left += currentElement.offsetLeft || 0;

    currentElement = currentElement.offsetParent as HTMLElement;
  } while (currentElement);

  return {
    top,
    left,
    width,
    height,
  };
}

export function getElementRelativeRect(win: Window, element: HTMLElement) {
  if (!element) {
    return null;
  }

  const width = Math.max(element.offsetWidth, element.clientWidth, element.scrollWidth);
  const height = Math.max(element.offsetHeight, element.clientHeight, element.scrollHeight);

  let top = 0;
  let left = 0;

  let currentElement = element;
  let currentElementStyle: CSSStyleDeclaration;

  do {
    currentElementStyle = currentElement !== element ? win.getComputedStyle(currentElement) : {} as CSSStyleDeclaration;

    if (currentElementStyle.position === 'relative') {
      break;
    }

    if (currentElementStyle.position !== 'absolute') {
      top += currentElement.offsetTop || 0;
      left += currentElement.offsetLeft || 0;
    }

    currentElement = currentElement.offsetParent as HTMLElement;
  } while (currentElement);

  return {
    top,
    left,
    width,
    height,
  };
}


export function getViewportScrollPosition(win: Window): { top: number; left: number } {
  // While we can get a reference to the fake document
  // during SSR, it doesn't have getBoundingClientRect.
  if (!win) {
    return { top: 0, left: 0 };
  }

  // The top-left-corner of the viewport is determined by the scroll position of the document
  // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
  // whether `document.body` or `document.documentElement` is the scrolled element, so reading
  // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
  // `document.documentElement` works consistently, where the `top` and `left` values will
  // equal negative the scroll position.
  const documentElement = win.document.documentElement;
  const documentRect = documentElement.getBoundingClientRect();

  const top = -documentRect.top
    || win.document.body.scrollTop
    || win.scrollY
    || documentElement.scrollTop
    || 0;

  const left = -documentRect.left
    || win.document.body.scrollLeft
    || win.scrollX
    || documentElement.scrollLeft
    || 0;

  return { top, left };
}

export function getViewportSize(win: Window): { width: number; height: number } {
  if (!win) {
    return { width: 0, height: 0 };
  }

  return {
    width: win.innerWidth,
    height: win.innerHeight,
  };
}


export function queryElementSelector<E extends Element = Element>(doc: Document, selector: string) {
  const nodeList = doc.querySelectorAll<E>(selector);

  if (!nodeList.length) {
    return null;
  }

  return nodeList.item(0);
}


// export function setElementClasses(
//   renderer: Renderer2,
//   element: HTMLElement,
//   classes: { [prop: string]: boolean },
// ): void {
//   if (!element || !classes) {
//     return;
//   }

//   const classNames = Object.keys(classes);

//   for (const className of classNames) {
//     const value = classes[className];

//     if (value) {
//       renderer.addClass(element, className);
//     } else {
//       renderer.removeClass(element, className);
//     }
//   }
// }


export function setElementStyles(
  renderer: Renderer2,
  element: HTMLElement,
  styles: { [prop: string]: string },
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
