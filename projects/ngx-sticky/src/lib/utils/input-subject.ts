import { Subject } from 'rxjs';


export type InputCoercionFn<T> = (value: T) => T;

export interface InputSubjectNextOptions {
  skipCoercion?: boolean;
}

export interface InputSubjectChange<T> {
  previousValue: T;
  currentValue: T;
  firstChange: boolean;
}


/**
 * An InputSubject is an Observable that coerces values and emit when change is detected.
 */
export class InputSubject<T> extends Subject<T> {
  /** Emit value changes */
  readonly change$ = new Subject<InputSubjectChange<T>>();

  _firstChange = true;
  _value: T;
  _valueSetted!: T;

  constructor(
    readonly defaultValue: T,
    readonly coercion?: InputCoercionFn<T>,
  ) {
    super();

    this._value = defaultValue;
  }

  /**
   * Returns current value.
   */
  getValue(): T {
    return this._value;
  }

  /**
   * Emit next value.
   *
   * @param value Next value
   * @param options Options to skip coercion
   */
  next(value?: T, options?: InputSubjectNextOptions): void {
    if (!options || !options.skipCoercion) {
      if (value === this._valueSetted) {
        return;
      }

      this._valueSetted = value as T;

      if (this.coercion) {
        value = this.coercion(value as T);
      }
    }

    if (value !== this._value) {
      const firstChange = this._firstChange;
      const previousValue = this._value;

      this._firstChange = false;
      this._value = value as T;

      this.change$.next({
        previousValue,
        currentValue: value as T,
        firstChange,
      });

      super.next(value as T);
    }
  }
}
