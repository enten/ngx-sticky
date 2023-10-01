import { TestBed } from '@angular/core/testing';

import { NgxStickyRootContainerController } from '../../src/lib/sticky-root-container.controller';


let rootContainer: NgxStickyRootContainerController;


beforeEach(() => {
  rootContainer = TestBed.get(NgxStickyRootContainerController);
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
