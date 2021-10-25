import { InputSubject } from '../../../src/lib/utils/input-subject';


describe('InputSubject', () => {
  let input: InputSubject<number>;

  beforeEach(() => {
    input = new InputSubject(0, Number);
  });

  describe('change$', () => {
    it('should emit changes', () => {
      const onChange = jest.fn();

      input.change$.subscribe(onChange);

      input.next(0);
      input.next(1);
      input.next(1);
      input.next(42);
      input.next(42);

      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toHaveBeenNthCalledWith(1, { previousValue: 0, currentValue: 1, firstChange: true });
      expect(onChange).toHaveBeenNthCalledWith(2, { previousValue: 1, currentValue: 42, firstChange: false });
    });
  });

  describe('getValue', () => {
    it('should returns input value', () => {
      expect(input.getValue()).toBe(0);
    });
  });

  describe('next', () => {
    it('shoud emit when value changes', () => {
      const onValueChange = jest.fn();

      input.subscribe(onValueChange);

      input.next(0);
      input.next('42' as any);
      input.next(42);

      expect(onValueChange).toBeCalledTimes(1);
      expect(onValueChange).toBeCalledWith(42);
    });

    it('shoud allow to skip input coercion', () => {
      const onValueChange = jest.fn();

      input.subscribe(onValueChange);

      input.next(0);
      input.next('42' as any);
      input.next(1, { skipCoercion: true });

      expect(onValueChange).toBeCalledTimes(2);
      expect(onValueChange).toHaveBeenNthCalledWith(1, 42);
      expect(onValueChange).toHaveBeenNthCalledWith(2, 1);
      expect(input._valueSetted).toBe('42');
    });
  });
});
