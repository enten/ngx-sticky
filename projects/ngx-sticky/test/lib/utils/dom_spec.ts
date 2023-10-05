import { Renderer2 } from '@angular/core';

import {
  getDocumentHeightFactory,
  getDocumentWidthFactory,
  getElementAbsoluteRect,
  getElementRelativeRect,
  getWindowViewportHeight,
  getWindowViewportLeft,
  getWindowViewportTop,
  isElementScrollableY,
  scrollToFactory,
  setElementStyles,
} from '../../../src/lib/utils/dom';


describe('getDocumentHeightFactory', () => {
  it('should returns getter of 0 when window is falsy', () => {
    expect(getDocumentHeightFactory(null!)()).toBe(0);
  });

  it('should returns getter of maximum window height property', () => {
    expect(getDocumentHeightFactory({
      document: {
        body: { scrollHeight: 1, offsetHeight: 3, clientHeight: 5 } as HTMLBodyElement,
        documentElement: { scrollHeight: 2, offsetHeight: 4, clientHeight: 6 } as HTMLElement,
      } as Partial<Document> as Document,
    } as Window)()).toBe(6);
  });

  it('should returns getter first getter when all height getters computes 0', () => {
    expect(getDocumentHeightFactory({
      document: {
        body: { scrollHeight: 0, offsetHeight: 0, clientHeight: 0 } as HTMLBodyElement,
        documentElement: { scrollHeight: 0, offsetHeight: 0, clientHeight: 0 } as HTMLElement,
      } as Partial<Document> as Document,
    } as Window)()).toBe(0);
  });
});


describe('getDocumentWidthFactory', () => {
  it('should returns getter of 0 when window is falsy', () => {
    expect(getDocumentWidthFactory(null!)()).toBe(0);
  });

  it('should returns getter of maximum window width property', () => {
    expect(getDocumentWidthFactory({
      document: {
        body: { scrollWidth: 1, offsetWidth: 3, clientWidth: 5 },
        documentElement: { scrollWidth: 2, offsetWidth: 4, clientWidth: 6 },
      },
    } as Window)()).toBe(6);
  });

  it('should returns getter first getter when all width getters computes 0', () => {
    expect(getDocumentWidthFactory({
      document: {
        body: { scrollWidth: 0, offsetWidth: 0, clientWidth: 0 } as HTMLBodyElement,
        documentElement: { scrollWidth: 0, offsetWidth: 0, clientWidth: 0 } as HTMLElement,
      } as Partial<Document> as Document,
    } as Window)()).toBe(0);
  });
});


describe('getElementAbsoluteRect', () => {
  it('should returns rect which includes offset parents', () => {
    expect(getElementAbsoluteRect({
      offsetHeight: 5,
      offsetWidth: 10,
      offsetTop: 20,
      offsetLeft: 10,
      offsetParent: {
        offsetTop: 20,
        offsetLeft: 10,
        offsetParent: {
          offsetTop: 20,
          offsetLeft: 10,
        } as HTMLElement as Element,
      } as HTMLElement as Element,
    } as HTMLElement)).toEqual({
      width: 10,
      height: 5,
      top: 60,
      left: 30,
    });
  });
});


describe('getElementRelativeRect', () => {
  it('should returns rect which includes offset parents until position "relative"', () => {
    const win = {
      getComputedStyle: element => ((element as HTMLElement).style || {}) as CSSStyleDeclaration,
    } as Window;

    expect(getElementRelativeRect(win, {
      offsetHeight: 5,
      offsetWidth: 10,
      offsetTop: 20,
      offsetLeft: 10,
      offsetParent: {
        offsetTop: 20,
        offsetLeft: 10,
        style: { position: 'absolute' },
        offsetParent: {
          offsetTop: 20,
          offsetLeft: 10,
          offsetParent: {
            offsetTop: 20,
            offsetLeft: 10,
            style: { position: 'relative'},
          } as HTMLElement as Element,
        } as HTMLElement as Element,
      } as HTMLElement as Element,
    } as HTMLElement)).toEqual({
      width: 10,
      height: 5,
      top: 40,
      left: 20,
    });
  });
});


describe('getWindowViewportHeight', () => {
  it('should returns 0 when window is falsy', () => {
    expect(getWindowViewportHeight(undefined!)).toBe(0);
  });

  it('should returns window innerHeight', () => {
    expect(getWindowViewportHeight({ innerHeight: 42 } as Window)).toBe(42);
  });
});


describe('getWindowViewportLeft', () => {
  it('should returns 0 when window is falsy', () => {
    expect(getWindowViewportLeft(undefined!)).toBe(0);
  });

  it('should returns scroll top value', () => {
    const winRect = { left: 0 };
    const win = {
      document: {
        body: {
          scrollLeft: 0,
        } as HTMLBodyElement,
        documentElement: {
          getBoundingClientRect: () => winRect,
          scrollLeft: 0,
        } as HTMLElement,
      } as Partial<Document> as Document,
      scrollX: 0,
    };

    expect(getWindowViewportLeft(win as Window)).toBe(0);

    win.document.documentElement.scrollLeft = 1;

    expect(getWindowViewportLeft(win as Window)).toBe(1);

    win.scrollX = 2;

    expect(getWindowViewportLeft(win as Window)).toBe(2);

    win.document.body.scrollLeft = 3;

    expect(getWindowViewportLeft(win as Window)).toBe(3);

    winRect.left = -4;

    expect(getWindowViewportLeft(win as Window)).toBe(4);
  });
});


describe('getWindowViewportTop', () => {
  it('should returns 0 when window is falsy', () => {
    expect(getWindowViewportTop(undefined!)).toBe(0);
  });

  it('should returns scroll top value', () => {
    const winRect = { top: 0 };
    const win = {
      document: {
        body: {
          scrollTop: 0,
        } as HTMLBodyElement,
        documentElement: {
          getBoundingClientRect: () => winRect,
          scrollTop: 0,
        } as HTMLElement,
      } as Partial<Document> as Document,
      scrollY: 0,
    };

    expect(getWindowViewportTop(win as Window)).toBe(0);

    win.document.documentElement.scrollTop = 1;

    expect(getWindowViewportTop(win as Window)).toBe(1);

    win.scrollY = 2;

    expect(getWindowViewportTop(win as Window)).toBe(2);

    win.document.body.scrollTop = 3;

    expect(getWindowViewportTop(win as Window)).toBe(3);

    winRect.top = -4;

    expect(getWindowViewportTop(win as Window)).toBe(4);
  });
});


describe('isElementScrollableY', () => {
  it('should returns true when element is scrollable vertically', () => {
    const element = { offsetHeight: 0, scrollHeight: 0 };
    const elementStyles = { overflowY: '' } as CSSStyleDeclaration;
    const win = {
      getComputedStyle: (() => elementStyles) as Window['getComputedStyle'],
    } as Window;

    expect(isElementScrollableY(win, element as HTMLElement)).toBe(false);

    element.offsetHeight = 20;
    element.scrollHeight = 100;

    expect(isElementScrollableY(win, element as HTMLElement)).toBe(false);

    elementStyles.overflowY = 'auto';

    expect(isElementScrollableY(win, element as HTMLElement)).toBe(true);
  });
});


describe('setElementStyles', () => {
  it('should set styles on element with renderer', () => {
    const renderer = { setStyle: jest.fn() as Renderer2['setStyle'] } as Renderer2;
    const styles = { foo: 'FOO', bar: 'BAR' };
    const element = {} as HTMLElement;

    setElementStyles(renderer, element, styles);

    expect(renderer.setStyle).toBeCalledTimes(2);
    expect(renderer.setStyle).toHaveBeenNthCalledWith(1, element, 'foo', 'FOO');
    expect(renderer.setStyle).toHaveBeenNthCalledWith(2, element, 'bar', 'BAR');
  });

  it('should remove empty styles on element with renderer', () => {
    const renderer = { removeStyle: jest.fn() as Renderer2['removeStyle'] } as Renderer2;
    const styles = { foo: '', bar: '' };
    const element = {} as HTMLElement;

    setElementStyles(renderer, element, styles);

    expect(renderer.removeStyle).toBeCalledTimes(2);
    expect(renderer.removeStyle).toHaveBeenNthCalledWith(1, element, 'foo');
    expect(renderer.removeStyle).toHaveBeenNthCalledWith(2, element, 'bar');
  });
});


describe('scrollToFactory', () => {
  it('should return function which calls native scrollTo with options as object', () => {
    const win: Window = {
      document: {
        body: {},
        documentElement: {
          style: { scrollBehavior: '' },
          scrollLeft: 0,
          scrollTop: 0,
          getBoundingClientRect: jest.fn(() => ({} as DOMRect)) as Element['getBoundingClientRect'],
        },
      },
      scrollTo: jest.fn() as Window['scrollTo'],
    } as Window;

    const scrollToFn = scrollToFactory(win, null);

    scrollToFn();
    expect(win.scrollTo).not.toBeCalled();

    scrollToFn({});
    expect(win.scrollTo).not.toBeCalled();

    scrollToFn({ behavior: 'smooth' });
    expect(win.scrollTo).not.toBeCalled();

    scrollToFn({ behavior: 'smooth', left: 1 });
    expect(win.scrollTo).toBeCalledTimes(1);
    expect(win.scrollTo).toBeCalledWith({ behavior: 'smooth', left: 1, top: 0 });

    scrollToFn({ behavior: 'smooth', top: 101 });
    expect(win.scrollTo).toBeCalledTimes(2);
    expect(win.scrollTo).toBeCalledWith({ behavior: 'smooth', left: 0, top: 101 });

    scrollToFn({ behavior: 'smooth', left: 1, top: 101 });
    expect(win.scrollTo).toBeCalledTimes(3);
    expect(win.scrollTo).toBeCalledWith({ behavior: 'smooth', left: 1, top: 101 });

    scrollToFn(2, NaN);
    expect(win.scrollTo).toBeCalledTimes(4);
    expect(win.scrollTo).toBeCalledWith({ left: 2, top: 0 });

    scrollToFn(NaN, 102);
    expect(win.scrollTo).toBeCalledTimes(5);
    expect(win.scrollTo).toBeCalledWith({ left: 0, top: 102 });

    scrollToFn(3, 103);
    expect(win.scrollTo).toBeCalledTimes(6);
    expect(win.scrollTo).toBeCalledWith({ left: 3, top: 103 });
  });

  it('should return function which calls native scrollTo with flatten options', () => {
    const win: Window = {
      document: {
        body: {},
        documentElement: {
          scrollLeft: 0,
          scrollTop: 0,
          getBoundingClientRect: jest.fn(() => ({} as DOMRect)) as Element['getBoundingClientRect'],
        },
      },
      scrollTo: jest.fn() as Window['scrollTo'],
    } as Window;

    const scrollToFn = scrollToFactory(win, null);

    scrollToFn();
    expect(win.scrollTo).not.toBeCalled();

    scrollToFn({});
    expect(win.scrollTo).not.toBeCalled();

    scrollToFn({ behavior: 'smooth' });
    expect(win.scrollTo).not.toBeCalled();

    scrollToFn({ behavior: 'smooth', left: 1 });
    expect(win.scrollTo).toBeCalledTimes(1);
    expect(win.scrollTo).toBeCalledWith(1, 0);

    scrollToFn({ behavior: 'smooth', top: 101 });
    expect(win.scrollTo).toBeCalledTimes(2);
    expect(win.scrollTo).toBeCalledWith(0, 101);

    scrollToFn({ behavior: 'smooth', left: 1, top: 101 });
    expect(win.scrollTo).toBeCalledTimes(3);
    expect(win.scrollTo).toBeCalledWith(1, 101);

    scrollToFn(2, NaN);
    expect(win.scrollTo).toBeCalledTimes(4);
    expect(win.scrollTo).toBeCalledWith(2, 0);

    scrollToFn(NaN, 102);
    expect(win.scrollTo).toBeCalledTimes(5);
    expect(win.scrollTo).toBeCalledWith(0, 102);

    scrollToFn(3, 103);
    expect(win.scrollTo).toBeCalledTimes(6);
    expect(win.scrollTo).toBeCalledWith(3, 103);
  });

  it('should return function which polyfills native scrollTo', () => {
    const win: Window = {
      document: { body: {} },
      scrollTo: jest.fn() as Window['scrollTo'],
    } as Window;
    const container: Element = {
      scrollLeft: 0,
      scrollTop: 0,
    } as Element;

    const scrollToFn = scrollToFactory(win, container);

    scrollToFn();
    expect(win.scrollTo).not.toBeCalled();

    scrollToFn({});
    expect(win.scrollTo).not.toBeCalled();

    scrollToFn({ behavior: 'smooth' });
    expect(win.scrollTo).not.toBeCalled();

    scrollToFn({ behavior: 'smooth', left: 1 });
    expect(win.scrollTo).not.toBeCalled();
    expect(container.scrollLeft).toBe(1);
    expect(container.scrollTop).toBe(0);

    scrollToFn({ behavior: 'smooth', top: 101 });
    expect(win.scrollTo).not.toBeCalled();
    expect(container.scrollLeft).toBe(1);
    expect(container.scrollTop).toBe(101);

    scrollToFn({ behavior: 'smooth', left: 2, top: 102 });
    expect(win.scrollTo).not.toBeCalled();
    expect(container.scrollLeft).toBe(2);
    expect(container.scrollTop).toBe(102);

    scrollToFn(3, NaN);
    expect(win.scrollTo).not.toBeCalled();
    expect(container.scrollLeft).toBe(3);
    expect(container.scrollTop).toBe(102);

    scrollToFn(NaN, 103);
    expect(win.scrollTo).not.toBeCalled();
    expect(container.scrollLeft).toBe(3);
    expect(container.scrollTop).toBe(103);

    scrollToFn(4, 104);
    expect(win.scrollTo).not.toBeCalled();
    expect(container.scrollLeft).toBe(4);
    expect(container.scrollTop).toBe(104);
  });
});

