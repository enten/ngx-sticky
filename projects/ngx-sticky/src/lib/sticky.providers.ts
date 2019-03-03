import { InjectionToken } from '@angular/core';
import { NgxSticky } from './sticky.types';


/**
 * A DI Token representing the list of stickies registered with NgxStickyService.

 * @publicApi
 */
export const NGX_STICKY_REGISTRY = new InjectionToken<NgxSticky[]>('NGX_STICKY_REGISTRY', {
  providedIn: 'root',
  factory: NGX_STICKY_REGISTRY_FACTORY,
});


/**
 * Factory used to create an empty sticky registy.
 */
export function NGX_STICKY_REGISTRY_FACTORY(): NgxSticky[] {
  return [];
}
