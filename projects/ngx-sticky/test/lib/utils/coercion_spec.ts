import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from '../../../src/lib/utils/coercion';


describe('coerceBooleanProperty', () => {
  it('should returns `false` when value equals "false"', () => {
    expect(coerceBooleanProperty('false')).toBe(false);
  });

  it('should returns `true` when value equals "" (empty string)', () => {
    expect(coerceBooleanProperty('')).toBe(true);
  });
});


describe('coerceNumberGetterProperty', () => {
  it('should convert string to number', () => {
    expect(coerceNumberProperty('42')).toBe(42);
  });

  it('should convert NaN to 0', () => {
    expect(coerceNumberProperty(undefined)).toBe(0);
  });
});
