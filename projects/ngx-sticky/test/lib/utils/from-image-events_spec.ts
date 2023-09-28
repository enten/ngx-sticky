import { Observer } from 'rxjs';

import { fromImageEvents } from '../../../src/lib/utils/from-image-events';

const mockImage = () => {
  const listeners: {
    type: string;
    listener: EventListener;
    options?: boolean | AddEventListenerOptions;
  }[] = [];

  return {
    listeners,
    image: {
      tagName: 'IMG',
      addEventListener: jest.fn((type, listener, options) => {
        listeners.push({ type, listener: listener as EventListener, options });
      }) as HTMLImageElement['addEventListener'],
      removeEventListener: jest.fn((type, listener) => {
        const listenerFound = listeners.find(candidate => candidate.type === type && candidate.listener === listener);
        const listenerIndex = listenerFound ? listeners.indexOf(listenerFound) : -1;
        if (listenerIndex !== -1) {
          listeners.splice(listenerIndex, 1);
        }
      }) as HTMLImageElement['removeEventListener'],
      querySelectorAll: jest.fn() as HTMLImageElement['querySelectorAll'],
    } as HTMLImageElement,
  };
};

describe('fromImageEvents', () => {
  let observer: Observer<{ event: Event; target: HTMLImageElement }>;

  beforeEach(() => {
    observer = {
      next: jest.fn() as Observer<{ event: Event; target: HTMLImageElement }>['next'],
      error: jest.fn() as Observer<{ event: Event; target: HTMLImageElement }>['error'],
      complete: jest.fn() as Observer<{ event: Event; target: HTMLImageElement }>['complete'],
    } as Observer<{ event: Event; target: HTMLImageElement }>;
  });

  it('should emit nothing when element is falsy', () => {
    const { image, listeners } = mockImage();

    fromImageEvents(undefined!).subscribe(observer);

    expect(observer.next).not.toBeCalled();
    expect(observer.error).not.toBeCalled();
    expect(observer.complete).toBeCalled();
    expect(image.addEventListener).not.toBeCalled();
    expect(image.removeEventListener).not.toBeCalled();
    expect(listeners).toHaveLength(0);
  });

  it('should add event listener for "load" and "error" events on given image', () => {
    const { image, listeners } = mockImage();

    const imageEvents$ = fromImageEvents(image);

    expect(image.addEventListener).not.toBeCalled();
    expect(image.removeEventListener).not.toBeCalled();

    imageEvents$.subscribe(observer);

    expect(observer.next).not.toBeCalled();
    expect(observer.error).not.toBeCalled();
    expect(observer.complete).not.toBeCalled();
    expect(image.addEventListener).toBeCalledTimes(2);
    expect(image.addEventListener as jest.Mock).toHaveProperty(['mock', 'calls', 0, 0], 'load');
    expect(listeners[0]).toHaveProperty('type', 'load');
    expect(image.addEventListener as jest.Mock).toHaveProperty(['mock', 'calls', 1, 0], 'error');
    expect(listeners[1]).toHaveProperty('type', 'error');
    expect(listeners).toHaveLength(2);
    expect(image.removeEventListener).not.toBeCalled();

    const fakeEventA = { target: image as EventTarget } as Event;
    listeners[0].listener(fakeEventA);

    expect(observer.next).toBeCalledWith({ event: fakeEventA, target: image });
    expect(observer.error).not.toBeCalled();
    expect(observer.complete).not.toBeCalled();
    expect(image.removeEventListener).toBeCalled();
  });

  it('should add event listener for "load" and "error" events on all images under given element', () => {
    const imageMockA = mockImage();
    const imageMockB = mockImage();
    const images = [imageMockA.image, imageMockB.image];
    const element = {
      tagName: 'P',
      querySelectorAll: jest.fn(() => (images as unknown as NodeListOf<HTMLImageElement>)) as HTMLParagraphElement['querySelectorAll'],
    } as HTMLParagraphElement;

    fromImageEvents(element).subscribe(observer);

    expect(element.querySelectorAll).toBeCalledWith('img');
    expect(imageMockA.image.addEventListener).toBeCalledTimes(2);
    expect(imageMockA.image.removeEventListener).toBeCalledTimes(0);
    expect(imageMockB.image.addEventListener).toBeCalledTimes(2);
    expect(imageMockB.image.removeEventListener).toBeCalledTimes(0);

    const fakeEventA = { target: imageMockA.image as EventTarget } as Event;
    imageMockA.listeners[0].listener(fakeEventA);

    expect(observer.next).toBeCalledWith({ event: fakeEventA, target: imageMockA.image });
    expect(observer.error).not.toBeCalled();
    expect(observer.complete).not.toBeCalled();
    expect(imageMockA.image.removeEventListener).toBeCalled();

    const fakeEventB = { target: imageMockB.image as EventTarget } as ErrorEvent;
    imageMockB.listeners[1].listener(fakeEventB);

    expect(observer.next).toBeCalledWith({ event: fakeEventB, target: imageMockB.image });
    expect(observer.error).not.toBeCalled();
    expect(observer.complete).not.toBeCalled();
    expect(imageMockB.image.removeEventListener).toBeCalled();
  });
});
