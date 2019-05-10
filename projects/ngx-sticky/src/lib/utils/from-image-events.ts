import { Observable, fromEvent, merge, of } from 'rxjs';
import { map } from 'rxjs/operators';


/**
 * Create observable which emit image events.
 *
 * @param element Element
 * @returns Observable on image events
 */
export function fromImageEvents(element: HTMLElement): Observable<{ event: Event; target: HTMLImageElement }> {
  if (!element) {
    return of();
  }

  const images$: Observable<{ event: Event; target: HTMLImageElement }>[] = [];

  const addImage = (target: HTMLImageElement) => images$.push(
    fromEvent(target, 'load').pipe(map(event => ({ event, target }))),
    fromEvent(target, 'error').pipe(map(event => ({ event, target }))),
  );

  // if (element instanceof HTMLImageElement) {
  if (element.tagName === 'IMG' || element.tagName === 'img') {
    addImage(element as HTMLImageElement);
  } else {
    element.querySelectorAll('img').forEach(addImage);
  }

  return merge(...images$);
}
