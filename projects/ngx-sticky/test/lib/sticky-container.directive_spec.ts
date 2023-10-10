import { ElementRef, NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { NgxStickyContainerDirective } from '../../src/lib/sticky-container.directive';
import { NgxStickyEngine } from '../../src/lib/sticky-engine';
import { NgxStickyRootContainerController } from '../../src/lib/sticky-root-container.controller';
import { NgxStickyContainerController } from '../../src/lib/sticky.types';


let container: NgxStickyContainerDirective;
let rootContainer: NgxStickyRootContainerController;
let stickyContainerParent: NgxStickyContainerController;
let stickyEngine: NgxStickyEngine;
let elementRef: ElementRef;
let ngZone: NgZone;
let win: Window;

const setup = (overrides: Record<string, any> = {}) => {
  stickyContainerParent = 'stickyContainerParent' in overrides
    ? overrides['stickyContainerParent']
    : null;
  stickyEngine = 'stickyEngine' in overrides
    ? overrides['stickyEngine']
    : TestBed.get(NgxStickyEngine);
  elementRef = 'elementRef' in overrides
    ? overrides['elementRef']
    : { nativeElement: {} };
  ngZone = 'ngZone' in overrides
    ? overrides['ngZone']
    : {
      run: jest.fn() as NgZone['run'],
      runOutsideAngular: jest.fn() as NgZone['runOutsideAngular'],
    } as NgZone;
  win = 'win' in overrides
    ? overrides['win']
    : null;
  rootContainer = 'rootContainer' in overrides
    ? overrides['rootContainer']
    : new NgxStickyRootContainerController(stickyEngine, ngZone, win);

  container = new NgxStickyContainerDirective(
    rootContainer,
    stickyContainerParent,
    stickyEngine,
    ngZone,
    elementRef,
    win,
  );
};


beforeEach(() => {
  rootContainer = null!;
  stickyContainerParent = null!;
  stickyEngine = null!;
  ngZone = null!;
  elementRef = null!;
  win = null!;
});


describe('constructor', () => {
  it('should use root container as default container', () => {
    const registerContainer = jest.fn();

    setup({ rootContainer: { registerContainer } });

    expect(container.containerParent).toBe(rootContainer);
    expect(registerContainer).toBeCalledWith(container);
  });

  it('should use sticky container parent when is given', () => {
    const registerContainer = jest.fn();

    setup({ stickyContainerParent: { registerContainer } });

    expect(container.containerParent).toBe(stickyContainerParent);
    expect(registerContainer).toBeCalledWith(container);
  });
});


describe('element', () => {
  it('should returns native element', () => {
    setup();

    expect(container.element).toBe(elementRef.nativeElement);
  });
});


describe('getViewportHeight', () => {
  it('should returns element viewport height', () => {
    setup();

    elementRef.nativeElement.offsetHeight = 20;

    expect(container.getViewportHeight()).toBe(20);
  });
});


describe('getViewportLeft', () => {
  it('should returns element scroll left', () => {
    setup();

    elementRef.nativeElement.scrollLeft = 5;

    expect(container.getViewportLeft()).toBe(5);
  });
});


describe('getViewportTop', () => {
  it('should returns element scroll top', () => {
    setup();

    elementRef.nativeElement.scrollTop = 50;

    expect(container.getViewportTop()).toBe(50);
  });
});
