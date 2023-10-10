import { TestBed } from '@angular/core/testing';

import { NgxStickyEngine } from '../../src/lib/sticky-engine';
import { NgxStickyRootContainerController } from '../../src/lib/sticky-root-container.controller';
import { NgZone } from '@angular/core';


let rootContainer: NgxStickyRootContainerController;
let stickyEngine: NgxStickyEngine;
let ngZone: NgZone;
let win: Window;

beforeEach(() => {
  stickyEngine = TestBed.get(NgxStickyEngine);
  ngZone = new NgZone({});
  win = {
    document: {
      documentElement: {},
      body: {},
    },
  } as Window;
  rootContainer = new NgxStickyRootContainerController(stickyEngine, ngZone, win);
});


describe('containerParent', () => {
  it('should not have container parent', () => {
    expect(rootContainer.containerParent).toBe(null);
  });
});


describe('element', () => {
  it('should not have element', () => {
    expect(rootContainer.element).toBe(null);
  });
});


describe('inputs', () => {
  it.each([
    ['stickyDisabled', 'disabled', false, true],
    ['stickyUnstacked', 'unstacked', false, true],
    ['stickyOffsetBottom', 'offsetBottom', 0, 10],
    ['stickyOffsetTop', 'offsetTop', 0, 10],
  ])(
    'should have alias %s to input %s',
    <K extends 'stickyDisabled' | 'stickyUnstacked' | 'stickyOffsetBottom' | 'stickyOffsetTop'>(
      alias: string,
      configKey: string,
      previousValue: NgxStickyRootContainerController[K],
      currentValue: NgxStickyRootContainerController[K],
    ) => {
      const observer = jest.fn();

      rootContainer.config$.changes$.subscribe(observer);
      expect(observer).not.toBeCalled();

      rootContainer[alias as K] = currentValue;
      expect(rootContainer[alias as K]).toBe(currentValue);
      expect(observer).toBeCalledWith({
        [configKey]: {
          firstChange: true,
          currentValue,
          previousValue,
        },
      });
    },
  );
});
