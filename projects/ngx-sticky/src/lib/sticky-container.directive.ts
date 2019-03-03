import { Directive, ElementRef, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { NgxStickyService } from './sticky.service';
import { NgxStickyContainer } from './sticky.types';
import { coerceNumberProperty } from './sticky.utils';


/**
 * @description
 * Defines a sticky container.
 *
 * @ngModule NgxStickyModule
 * @publicApi
 */
@Directive({
  selector: '[ngxStickyContainer], [ngx-sticky-container], ngx-sticky-container',
})
export class NgxStickyContainerDirective implements NgxStickyContainer {

  /**
   * Defines offset top inside the sticky container.
   */
  @Input()
  get offsetTop() {
    return this.offsetTop$.getValue();
  }
  set offsetTop(value: number) {
    value = coerceNumberProperty(value);

    if (value !== this.offsetTop) {
      this.offsetTop$.next(value);
      this.update(true);
    }
  }
  offsetTop$ = new BehaviorSubject<number>(0);

  /**
   * Defines offset bottom inside the sticky container.
   */
  @Input()
  get offsetBottom() {
    return this.offsetBottom$.getValue();
  }
  set offsetBottom(value: number) {
    value = coerceNumberProperty(value);

    if (value !== this.offsetBottom) {
      this.offsetBottom$.next(value);
      this.update(true);
    }
  }
  offsetBottom$ = new BehaviorSubject<number>(0);

  /**
   * Returns HTMLElement of the sticky container.
   */
  get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  constructor(
    readonly stickyService: NgxStickyService,
    readonly elementRef: ElementRef<HTMLElement>,
  ) { }

  /**
   * Updates stickies of the sticky container.
   *
   * @param fastCheck Fast update.
   */
  update(fastCheck?: boolean) {
    this.stickyService.updateContainer(this, fastCheck);
  }
}
