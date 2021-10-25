import { fromEvent, merge, of } from 'rxjs';

import { fromImageEvents } from '../../../src/lib/utils/from-image-events';


jest.mock('rxjs', () => ({
  fromEvent: jest.fn(() => ({ pipe: jest.fn() })),
  merge: jest.fn(() => ({ subscribe: jest.fn() })),
  of: jest.fn(() => ({ subscribe: jest.fn() })),
}));


const fromEventSpy = fromEvent as {} as jest.SpyInstance;
const mergeSpy = merge as {} as jest.SpyInstance;


describe('fromImageEvents', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should emit nothing when element is falsy', () => {
    fromImageEvents(undefined);

    expect(of).toBeCalledTimes(1);
    expect(of).toBeCalledWith();
  });

  it('should add event listener for "load" and "error" events on given image', () => {
    const element = { tagName: 'IMG' };

    fromImageEvents(element as {} as HTMLImageElement);

    expect(fromEventSpy).toBeCalledTimes(2);
    expect(fromEventSpy).toHaveBeenNthCalledWith(1, element, 'load');
    expect(fromEventSpy).toHaveBeenNthCalledWith(2, element, 'error');
    expect(mergeSpy).toBeCalledTimes(1);
    expect(mergeSpy.mock.calls[0].length).toBe(2);
  });

  it('should add event listener for "load" and "error" events on all images under given element', () => {
    const images = [ { tagName: 'IMG' }, { tagName: 'IMG' } ];
    const element = { tagName: 'P', querySelectorAll: jest.fn(() => images) };

    fromImageEvents(element as {} as HTMLParagraphElement);

    expect(element.querySelectorAll).toBeCalledWith('img');
    expect(fromEventSpy).toBeCalledTimes(4);
    expect(fromEventSpy).toHaveBeenNthCalledWith(1, images[0], 'load');
    expect(fromEventSpy).toHaveBeenNthCalledWith(2, images[0], 'error');
    expect(fromEventSpy).toHaveBeenNthCalledWith(3, images[1], 'load');
    expect(fromEventSpy).toHaveBeenNthCalledWith(4, images[1], 'error');
    expect(mergeSpy).toBeCalledTimes(1);
    expect(mergeSpy.mock.calls[0].length).toBe(4);
  });
});
