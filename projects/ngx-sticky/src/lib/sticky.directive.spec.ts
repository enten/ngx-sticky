import {
  ChangeDetectorRef,
  ElementRef,
  NgZone,
  Renderer2,
} from '@angular/core';

import { NgxStickyContainerDirective } from './sticky-container.directive';
import { NgxStickyDirective } from './sticky.directive';
import { NgxStickyService } from './sticky.service';


describe('NgxStickyDirective', () => {
  let container: NgxStickyContainerDirective;
  let stickyService: NgxStickyService;
  let elementRef: ElementRef<HTMLElement>;
  let renderer: Renderer2;
  let changeDetectorRef: ChangeDetectorRef;
  let ngZone: NgZone;

  beforeEach(() => {
    stickyService = {} as NgxStickyService;
    elementRef = { nativeElement: {} } as ElementRef<HTMLElement>;
    renderer = {} as Renderer2;
    changeDetectorRef = {} as ChangeDetectorRef;
    ngZone = {} as NgZone;
    container = null;
  });

  it('should create an instance', () => {
    const directive = new NgxStickyDirective(
      container,
      stickyService,
      elementRef,
      renderer,
      changeDetectorRef,
      ngZone,
    );

    expect(directive).toBeTruthy();
  });
});
