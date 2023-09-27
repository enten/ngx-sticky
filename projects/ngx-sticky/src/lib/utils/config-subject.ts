import { Subject, Subscription } from 'rxjs';

import { InputCoercionFn, InputSubject, InputSubjectChange, InputSubjectNextOptions } from './input-subject';


export type ConfigInputSubjects<T> = { [K in keyof T]: InputSubject<T[K]> };
export type ConfigSubjectChanges<T> = { [K in keyof T]: InputSubjectChange<T[K]> };
export type ConfigSubjectSchema<T> = { [K in keyof T]: ConfigSubjectInputOptions<T, K> };

export interface ConfigSubjectInputOptions<T, K extends keyof T> {
  defaultValue: T[K];
  aliasKey?: string;
  coercion?: InputCoercionFn<T[K]>;
}


/**
 * A ConfigSubject is an Observable that coerces key-values and emit when change is detected
 */
export class ConfigSubject<T> extends Subject<T> {
  /** Emit key-values changes */
  readonly changes$ = new Subject<ConfigSubjectChanges<T>>();
  /** Input subjects for each config key-value */
  readonly inputs: ConfigInputSubjects<T>;

  _config: T;
  _configChanged!: boolean;
  _configChanges!: ConfigSubjectChanges<T>;

  readonly _aliases: { [key: string]: keyof T };

  readonly _pushChangesSubscription = new Subscription();

  constructor(schema: ConfigSubjectSchema<T>) {
    super();

    this.inputs = {} as ConfigInputSubjects<T>;
    this._config = {} as T;
    this._configChanges = {} as ConfigSubjectChanges<T>;
    this._aliases = {};

    const inputKeys = Object.keys(schema) as (keyof T)[];

    for (const inputKey of inputKeys) {
      const inputOptions = schema[inputKey];

      if (inputOptions.aliasKey) {
        this._aliases[inputOptions.aliasKey] = inputKey;
      }

      const input = new InputSubject<T[keyof T]>(inputOptions.defaultValue, inputOptions.coercion);

      this._config[inputKey] = inputOptions.defaultValue;
      this.inputs[inputKey] = input;

      const pushChangeSubscription = input.change$.subscribe(inputChange => {
        this._configChanged = true;
        this._configChanges[inputKey] = inputChange;

        this._config = { ...this._config };
        this._config[inputKey] = inputChange.currentValue;
      });

      this._pushChangesSubscription.add(pushChangeSubscription);
    }
  }

  /**
   * Returns current config.
   */
  getValue(): T {
    return this._config;
  }

  /**
   * Returns key-value.
   *
   * @param inputKey Input key
   * @returns key-value
   */
  getKeyValue<K extends keyof T>(inputKey: K): T[K] {
    return this._config[inputKey];
  }

  /**
   * Emit next config.
   *
   * @param partialConfig Partial next config
   * @param options Options to skip coercion
   */
  override next(partialConfig: T, options?: InputSubjectNextOptions): void {
    const inputKeys = Object.keys(partialConfig as Partial<T>) as (keyof T)[];

    for (const key of inputKeys) {
      const inputKey = (this._aliases[key as string] || key) as keyof T;

      if (inputKey in this.inputs) {
        const inputValue = (partialConfig)[key] as T[keyof T];
        const inputSubject = this.inputs[inputKey];

        inputSubject.next(inputValue, options);
      }
    }

    if (this._configChanged) {
      const changes = { ...this._configChanges };

      this._configChanged = false;
      this._configChanges = {} as ConfigSubjectChanges<T>;

      this.changes$.next(changes);

      super.next(this._config);
    }
  }

  /**
   * Emit next key-value.
   *
   * @param inputKey Input key
   * @param value key-value
   * @param options Options to skip coercion
   */
  nextKeyValue<K extends keyof T>(inputKey: K, value: T[K], options?: InputSubjectNextOptions): void {
    this.next({ [inputKey]: value } as Record<keyof K, any> as T, options);
  }

  /**
   * Apply simple changes as like ngOnChange(changes: SimpleChanges) input.
   *
   * @param changes Simple changes
   */
  nextChanges<K extends keyof T>(changes: Record<K, { currentValue: T[K] }> | Record<string, { currentValue: any }>): void {
    const changeKeys = Object.keys(changes) as (keyof T)[];
    const config: Partial<T> = {};

    for (const inputKey of changeKeys) {
      config[inputKey] = changes[inputKey as K].currentValue;
    }

    this.next(config as T);
  }
}
