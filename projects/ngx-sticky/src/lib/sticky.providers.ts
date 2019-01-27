import { InjectionToken } from '@angular/core';
import { NgxSticky } from './sticky.types';


export const NGX_STICKY_REGISTRY = new InjectionToken<NgxSticky[]>('NGX_STICKY_REGISTRY', {
  providedIn: 'root',
  factory: NGX_STICKY_REGISTRY_FACTORY,
});


export function NGX_STICKY_REGISTRY_FACTORY(): NgxSticky[] {
  return [];
}
