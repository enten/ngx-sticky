import { ConfigSubject } from '../../../src/lib/utils/config-subject';


describe('ConfigSubject', () => {
  let config: ConfigSubject<{ foo: number; bar: string }>;

  beforeEach(() => {
    config = new ConfigSubject({
      foo: { defaultValue: 0, coercion: Number, aliasKey: '_foo' },
      bar: { defaultValue: '', coercion: String , aliasKey: '_bar' },
    });
  });

  describe('changes$', () => {
    it('should emit changes', () => {
      const onChange = jest.fn();

      config.changes$.subscribe(onChange);

      config.next({ foo: 0 });
      config.next({ foo: 1 });
      config.next({ foo: 1, bar: 'BAR' });
      config.next({ foo: 1, bar: 'BAR' });
      config.next({ foo: 42, bar: 'bax' });

      expect(onChange).toBeCalledTimes(3);
      expect(onChange).toHaveBeenNthCalledWith(1, {
        foo: { previousValue: 0, currentValue: 1, firstChange: true },
      });
      expect(onChange).toHaveBeenNthCalledWith(2, {
        bar: { previousValue: '', currentValue: 'BAR', firstChange: true },
      });
      expect(onChange).toHaveBeenNthCalledWith(3, {
        foo: { previousValue: 1, currentValue: 42, firstChange: false },
        bar: { previousValue: 'BAR', currentValue: 'bax', firstChange: false },
      });
    });
  });

  describe('inputs', () => {
    it('should has an input subject for each config property', () => {
      expect('foo' in config.inputs).toBe(true);
      expect(config.inputs.foo.getValue()).toBe(0);
      expect('bar' in config.inputs).toBe(true);
      expect(config.inputs.bar.getValue()).toBe('');
    });
  });

  describe('getValue', () => {
    it('should returns config value', () => {
      expect(config.getValue()).toEqual({ foo: 0, bar: '' });
    });
  });

  describe('getKeyValue', () => {
    it('should returns config key value', () => {
      expect(config.getKeyValue('foo')).toBe(0);
      expect(config.getKeyValue('bar')).toBe('');
    });
  });

  describe('next', () => {
    it('shoud emit when config value changes', () => {
      const onConfigChange = jest.fn();

      config.subscribe(onConfigChange);

      config.next({ });
      config.next({ foo: '0' } as any); // tslint:disable-line: no-any
      config.next({ bar: '' });
      config.next({ foo: 1, bar: 'BAR' });

      expect(onConfigChange).toBeCalledTimes(1);
      expect(onConfigChange).toBeCalledWith({ foo: 1, bar: 'BAR' });
    });

    it('shoud allow to skip input coercion', () => {
      const onConfigChange = jest.fn();

      config.subscribe(onConfigChange);

      config.next({ foo: '42' } as any); // tslint:disable-line: no-any
      config.next({ foo: 1 }, { skipCoercion: true });

      expect(onConfigChange).toBeCalledTimes(2);
      expect(onConfigChange).toHaveBeenNthCalledWith(1, { foo: 42, bar: '' });
      expect(onConfigChange).toHaveBeenNthCalledWith(2, { foo: 1, bar: '' });
      expect(config.inputs.foo._valueSetted).toBe('42');
    });
  });

  describe('nextKeyValue', () => {
    it('should emit config with given key value', () => {
      const onConfigChange = jest.fn();

      config.subscribe(onConfigChange);

      config.nextKeyValue('foo', '42' as any); // tslint:disable-line: no-any

      expect(onConfigChange).toBeCalledTimes(1);
      expect(onConfigChange).toBeCalledWith({ foo: 42, bar: '' });
    });
  });

  describe('nextChanges', () => {
    it('should emit config with given changes', () => {
      const onConfigChange = jest.fn();

      config.subscribe(onConfigChange);

      config.nextChanges({
        foo: { currentValue: '42' },
        bar: { currentValue: 'BAR' },
      });

      expect(onConfigChange).toBeCalledTimes(1);
      expect(onConfigChange).toBeCalledWith({ foo: 42, bar: 'BAR' });
    });
  });

  describe('aliases', () => {
    it('should support alias keys', () => {
      const onConfigChange = jest.fn();

      config.subscribe(onConfigChange);

      config.nextKeyValue('_foo' as any, '42' as any); // tslint:disable-line: no-any
      config.nextChanges({ _bar: { currentValue: 'BAR' } });

      expect(onConfigChange).toBeCalledTimes(2);
      expect(onConfigChange).toHaveBeenNthCalledWith(1, { foo: 42, bar: '' });
      expect(onConfigChange).toHaveBeenNthCalledWith(2, { foo: 42, bar: 'BAR' });
    });
  });
});
