// import { fromEventPattern, of } from 'rxjs';

import { Subject } from 'rxjs';

import { fromMediaQuery } from '../../../src/lib/utils/from-media-query';


describe('fromMediaQuery', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should emit nothing when win is falsy', () => {
    const matchMediaListener = jest.fn();

    fromMediaQuery(undefined!, 'screen').subscribe(matchMediaListener);

    expect(matchMediaListener).not.toBeCalled();
  });

  it('should create observable with media query list', () => {
    const addListener = jest.fn() as MediaQueryList['addListener'];
    const removeListener = jest.fn() as MediaQueryList['removeListener'];
    const matchMedia = jest.fn(() => ({ matches: true, addListener, removeListener } as MediaQueryList)) as Window['matchMedia'];
    const win = { matchMedia } as Window;
    const matchMediaListener = jest.fn();

    const mql$ = fromMediaQuery(win, 'screen');
    const mqlAsSubject = mql$ as Subject<MediaQueryListEvent>;

    mql$.subscribe(matchMediaListener);

    expect(matchMedia).toBeCalledWith('screen');
    expect(addListener).toBeCalled();
    expect(removeListener).not.toBeCalled();
    expect(mqlAsSubject.isStopped).toBeFalsy();
    expect(matchMediaListener).toBeCalledWith(expect.objectContaining({ matches: true }));

    mqlAsSubject.complete();

    expect(removeListener).toBeCalled();
    expect(mqlAsSubject.isStopped).toBeTruthy();
  });
});
