import { TestBed } from '@angular/core/testing';

import { NgxStickyRootContainerController } from '../../src/lib/sticky-root-container.controller';


let rootContainer: NgxStickyRootContainerController;


beforeEach(() => {
  rootContainer = TestBed.get(NgxStickyRootContainerController);
});


describe('containerParent', () => {
  it('should not container parent', () => {
    expect(rootContainer.containerParent).toBe(null);
  });
});


describe('element', () => {
  it('should not have element', () => {
    expect(rootContainer.element).toBe(null);
  });
});
