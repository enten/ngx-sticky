import { Directive, ElementRef, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { NgxStickyService } from './sticky.service';
import { NgxStickyContainer } from './sticky.types';
import { coerceNumberProperty } from './sticky.utils';


@Directive({
  selector: '[ngxStickyContainer], [ngx-sticky-container], ngx-sticky-container',
})
export class NgxStickyContainerDirective implements NgxStickyContainer {

  offsetTop$ = new BehaviorSubject<number>(0);
  get offsetTop() {
    return this.offsetTop$.getValue();
  }
  @Input()
  set offsetTop(value: number) {
    value = coerceNumberProperty(value);

    if (value !== this.offsetTop) {
      this.offsetTop$.next(value);
      this.update(true);
    }
  }

  offsetBottom$ = new BehaviorSubject<number>(0);
  get offsetBottom() {
    return this.offsetBottom$.getValue();
  }
  @Input()
  set offsetBottom(value: number) {
    value = coerceNumberProperty(value);

    if (value !== this.offsetBottom) {
      this.offsetBottom$.next(value);
      this.update(true);
    }
  }

  get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  constructor(
    readonly stickyService: NgxStickyService,
    readonly elementRef: ElementRef<HTMLElement>,
  ) { }

  update(fastCheck?: boolean) {
    this.stickyService.updateContainer(this, fastCheck);
  }
}
