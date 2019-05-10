import { InjectionToken } from '@angular/core';


export const NGX_STICKY_WINDOW = new InjectionToken<Window>('NGX_STICKY_WINDOW', {
  providedIn: 'root',
  factory: () => typeof window !== 'undefined' ? window : null,
});
