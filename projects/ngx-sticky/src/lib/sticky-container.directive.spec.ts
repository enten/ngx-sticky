import { ElementRef } from '@angular/core';

import { NgxStickyContainerDirective } from './sticky-container.directive';
import { NgxStickyService } from './sticky.service';


describe('NgxStickyContainerDirective', () => {
  let stickyService: NgxStickyService;
  let elementRef: ElementRef<HTMLElement>;

  beforeEach(() => {
    stickyService = {} as NgxStickyService;
    elementRef = { nativeElement: {} } as ElementRef;
  });

  it('should create an instance', () => {
    const directive = new NgxStickyContainerDirective(stickyService, elementRef);

    expect(directive).toBeTruthy();
  });
});
