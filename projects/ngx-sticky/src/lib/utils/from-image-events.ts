import { Observable } from 'rxjs';


/**
 * Create observable which emit image events.
 *
 * @param element Element
 * @returns Observable on image events
 */
export function fromImageEvents(
  element: HTMLElement,
  options?: AddEventListenerOptions,
): Observable<Event & { type: 'load' | 'error'; target: HTMLImageElement; }> {
  return new Observable(subscriber => {
    const images: HTMLImageElement[] = [];

    const next = (errorOrLoadEvent: Event & { type: 'load' | 'error'; target: HTMLImageElement; }): void => {
      removeImage(errorOrLoadEvent.target as HTMLImageElement);
      subscriber.next(errorOrLoadEvent);
      if (!images.length && !subscriber.closed) {
        subscriber.complete();
      }
    };

    const onload = (loadEvent: Event): void => {
      next(loadEvent as Event & { type: 'load'; target: HTMLImageElement; });
    };
    const onerror = (errorEvent: Event): void => {
      next(errorEvent as Event & { type: 'error'; target: HTMLImageElement; });
    };

    const addImage = (image: HTMLImageElement): void => {
      if (image.complete || images.indexOf(image) !== -1) {
        return;
      }
      images.push(image);
      image.addEventListener('load', onload, options);
      image.addEventListener('error', onerror, options);
    };
    const removeImage = (image: HTMLImageElement): void => {
      const imageIndex = images.indexOf(image);
      if (imageIndex === -1) {
        return;
      }
      images.splice(imageIndex, 1);
      image.removeEventListener('load', onload, options);
      image.removeEventListener('error', onerror, options);
    };

    if (element.tagName === 'IMG' || element.tagName === 'img') {
      addImage(element as HTMLImageElement);
    } else {
      element.querySelectorAll<HTMLImageElement>('img').forEach(addImage);
    }

    if (!images.length) {
      subscriber.complete();
    }

    return () => [...images].forEach(removeImage);
  });
}
