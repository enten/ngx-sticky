import {
  coerceIntersectionThresholds,
  getCrossedThreshold,
} from '../../../src/lib/utils/intersection';


describe('coerceIntersectionThresholds', () => {
  it('should returns `[0,1]` as default thresholds when value is falsy', () => {
    expect(coerceIntersectionThresholds(undefined)).toEqual([ 0, 1 ]);
  });

  it('should returns number as threshold when value is a number', () => {
    expect(coerceIntersectionThresholds(1)).toEqual([ 1 ]);
  });

  it('should parse string to array of numbers', () => {
    expect(coerceIntersectionThresholds('0.5, 1, 0')).toEqual([ 0, 0.5, 1 ]);
  });

  it('should sort thresholds when value is an array of numbers', () => {
    expect(coerceIntersectionThresholds([ 0.5, 1, 0 ])).toEqual([ 0, 0.5, 1 ]);
  });
});


describe('getCrossedThreshold', () => {
  it('should returns old ratio when is perfect-crossed a threshold', () => {
    expect(getCrossedThreshold([ 0, 1 ], 0, 1)).toBe(0);
  });

  it('should returns new ratio when is perfect-crossed a threshold', () => {
    expect(getCrossedThreshold([ 0, 1 ], 0.5, 1)).toBe(1);
  });

  it('should returns threshold which is crossed by old and new ratios side by side', () => {
    expect(getCrossedThreshold([ 0, 0.25, 0.5, 0.75, 1 ], 0.3, 1)).toBe(0.5);
    expect(getCrossedThreshold([ 0, 0.25, 0.5, 0.75, 1 ], 0.6, 1)).toBe(0.75);
    expect(getCrossedThreshold([ 0, 0.25, 0.5, 0.75, 1 ], 0.6, 0.7)).toBe(undefined);
  });

  it('should returns `undefined` when no threhold is crossed', () => {
    expect(getCrossedThreshold([ 0, 0.25, 0.5, 0.75, 1 ], 0.6, 0.7)).toBe(undefined);
  });
});
