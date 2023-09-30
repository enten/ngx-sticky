import { fromMediaQuery } from '../../../src/lib/utils/from-media-query';


describe('fromMediaQuery', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create observable with media query list', () => {
    const addListener = jest.fn() as MediaQueryList['addListener'];
    const removeListener = jest.fn() as MediaQueryList['removeListener'];
    const matchMedia = jest.fn(() => ({ matches: true, addListener, removeListener } as MediaQueryList)) as Window['matchMedia'];
    const win = { matchMedia } as Window;
    const observer = jest.fn();

    const mql$ = fromMediaQuery(win, 'screen');

    expect(matchMedia).not.toBeCalled();
    expect(observer).not.toBeCalled();

    const subscription = mql$.subscribe(observer);

    expect(matchMedia).toBeCalledWith('screen');
    expect(addListener).toBeCalled();
    expect(removeListener).not.toBeCalled();
    expect(observer).toBeCalledTimes(1);
    expect(observer).toBeCalledWith({
      type: 'change',
      matches: true,
      media: 'screen',
    });

    const mqlHandler: (mqlEvent: MediaQueryListEvent) => void = (addListener as jest.Mock).mock.calls[0][0];
    const changeExpected = {
      type: 'change',
      matches: false,
      media: 'screen',
    } as MediaQueryListEvent;
    mqlHandler(changeExpected);

    expect(removeListener).not.toBeCalled();
    expect(observer).toBeCalledTimes(2);
    expect(observer).toBeCalledWith({
      type: 'change',
      matches: false,
      media: 'screen',
    });

    subscription.unsubscribe();

    expect(removeListener).toBeCalled();
  });
});
