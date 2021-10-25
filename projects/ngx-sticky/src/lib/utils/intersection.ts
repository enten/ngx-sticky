

/** Coerces a data-bound value (typically a string) to intersection thresholds. */
export function coerceIntersectionThresholds(thresholds: any) {
  if (typeof thresholds === 'number') {
    return [ thresholds ];
  }

  if (typeof thresholds === 'string') {
    return (thresholds as string)
      .split(',')
      .map(x => (parseFloat(x) || 0))
      .sort();
  }

  if (!thresholds) {
    return [ 0, 1 ];
  }

  if (!Array.isArray(thresholds)) {
    thresholds = [ thresholds ];
  }

  return [ ...thresholds ].sort();
}


/**
 * Returns threshold crossed for a given ratio change.
 *
 * @param thresholds Thresholds
 * @param oldRatio Old ratio
 * @param newRatio New ratio
 * @returns Threshold crossed or `undefined`
 */
export function getCrossedThreshold(thresholds: number[], oldRatio: number, newRatio: number): number {
  let crossedThreshold: number;

  for (const threshold of thresholds) {
    if (
      // threshold is perfect-crossed by old ratio
      threshold === oldRatio
      // or threshold is perfect-crossed by new ratio
      || threshold === newRatio
      // or threshold is crossed by new ratio and old ratio (there are on the opposite sides)
      || threshold < oldRatio !== threshold < newRatio
    ) {
      crossedThreshold = threshold;
      break;
    }
  }

  return crossedThreshold;
}
