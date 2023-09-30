import { Observable } from 'rxjs';

/** Global registry for all dynamically-created, injected media queries. */
const mediaQueriesForWebkitCompatibility: Set<string> = new Set<string>();

/** Style tag that holds all of the dynamically-created media queries. */
let mediaQueryStyleNode: HTMLStyleElement | undefined;

/**
 * Create observable which emit media query events.
 *
 * @param win Window reference
 * @param query Media query
 * @returns Observable on media query events
 */
export function fromMediaQuery(win: Window, query: string, nonce?: string): Observable<MediaQueryListEvent> {
  return new Observable(subscriber => {
    if (!win?.matchMedia) {
      return;
    }

    if (!hasEmptyStyleRule(query) && isEmptyStyleRuleNeeded(win)) {
      createEmptyStyleRule(win, query, nonce);
    }

    const mql = win.matchMedia(query);

    const initEvent: MediaQueryListEventInit = {
      matches: mql.matches,
      media: query,
    };

    const initMqlEvent: MediaQueryListEvent = typeof MediaQueryListEvent !== 'undefined'
      ? new MediaQueryListEvent('change', initEvent)
      : { type: 'change', ...initEvent} as MediaQueryListEvent;

    subscriber.next(initMqlEvent);

    const onQueryChange = (mqlEvent: MediaQueryListEvent) => subscriber.next(mqlEvent);
    mql.addListener(onQueryChange);
    return () => mql.removeListener(onQueryChange);
  });
}

function hasEmptyStyleRule(query: string): boolean {
  return mediaQueriesForWebkitCompatibility.has(query);
}

/**
 * Creates an empty stylesheet that is used to work around browser inconsistencies related to
 * `matchMedia`. At the time of writing, it handles the following cases:
 * 1. On WebKit browsers, a media query has to have at least one rule in order for `matchMedia`
 * to fire. We work around it by declaring a dummy stylesheet with a `@media` declaration.
 * 2. In some cases Blink browsers will stop firing the `matchMedia` listener if none of the rules
 * inside the `@media` match existing elements on the page. We work around it by having one rule
 * targeting the `body`. See https://github.com/angular/components/issues/23546.
 * @see https://github.com/angular/components/blob/16.2.6/src/cdk/layout/media-matcher.ts#L49-L82
 */
function createEmptyStyleRule(win: Window, query: string, nonce: string | undefined | null) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }

  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = win.document.createElement('style');

      if (nonce) {
        mediaQueryStyleNode.nonce = nonce;
      }

      mediaQueryStyleNode.setAttribute('type', 'text/css');
      win.document.head!.appendChild(mediaQueryStyleNode);
    }

    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}

// @see https://github.com/angular/components/blob/16.2.6/src/cdk/platform/platform.ts#L33-L64
export function isEmptyStyleRuleNeeded(win: Window): boolean {
  if (!win?.navigator?.userAgent) {
    return false;
  }

  // Whether the current platform supports the V8 Break Iterator. The V8 check
  // is necessary to detect all Blink based browsers.
  let hasV8BreakIterator: boolean;

  // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
  // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
  // the consumer is providing a polyfilled `Map`. See:
  // https://github.com/Microsoft/ChakraCore/issues/3189
  // https://github.com/angular/components/issues/15687
  try {
    hasV8BreakIterator = !!((win as any).Intl?.v8BreakIterator);
  } catch {
    hasV8BreakIterator = false;
  }

  /** Whether the current browser is Microsoft Edge. */
  const EDGE: boolean = /(edge)/i.test(win.navigator.userAgent);

  /** Whether the current rendering engine is Microsoft Trident. */
  const TRIDENT: boolean = /(msie|trident)/i.test(win.navigator.userAgent);

  // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
  /** Whether the current rendering engine is Blink. */
  const BLINK: boolean =
    !!((win as any).chrome || hasV8BreakIterator) && !!(win as any).CSS && EDGE && TRIDENT;

  // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
  // ensure that Webkit runs standalone and is not used as another engine's base.
  /** Whether the current rendering engine is WebKit. */
  const WEBKIT: boolean =
    /AppleWebKit/i.test(win.navigator.userAgent) && !BLINK && !EDGE && !TRIDENT;

  return WEBKIT || BLINK;
}
