/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/** Coerces a data-bound value (typically a string) to a boolean. */
export function coerceBooleanProperty(value: any): boolean { // tslint:disable-line: no-any
  return value != null && `${value}` !== 'false';
}


/** Coerces a data-bound value (typically a string) to a number. */
export function coerceNumberProperty(value: any): number; // tslint:disable-line: no-any
export function coerceNumberProperty<D>(value: any, fallback: D): number | D; // tslint:disable-line: no-any
export function coerceNumberProperty(value: any, fallbackValue = 0) { // tslint:disable-line: no-any
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}

/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
export function _isNumberValue(value: any): boolean { // tslint:disable-line: no-any
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value)); // tslint:disable-line: no-any
}
