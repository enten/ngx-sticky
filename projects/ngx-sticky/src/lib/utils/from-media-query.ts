import { BehaviorSubject, Observable, of } from 'rxjs';

/**
 * Create observable which emit media query events.
 *
 * @param win Window reference
 * @param query Media query
 * @returns Observable on media query events
 */
export function fromMediaQuery(win: Window, query: string): Observable<MediaQueryListEvent> {
  if (!win || !win.matchMedia) {
    return of();
  }

  const mql = win.matchMedia(query);

  const initEvent = {
    matches: mql.matches,
    media: query,
  };

  const initMqlEvent = typeof MediaQueryListEvent !== 'undefined'
    ? new MediaQueryListEvent('change', initEvent)
    : { type: 'change', ...initEvent} as MediaQueryListEvent;

  const mql$ = new BehaviorSubject<MediaQueryListEvent>(initMqlEvent);

  const onQueryChange = (mqlEvent: MediaQueryListEvent) => mql$.next(mqlEvent);
  const complete = mql$.complete;

  mql$.complete = function() { // tslint:disable-line: only-arrow-functions
    complete.call(mql$);
    mql.removeListener(onQueryChange); // tslint:disable-line: deprecation
  };

  mql.addListener(onQueryChange); // tslint:disable-line: deprecation

  return mql$;
}
