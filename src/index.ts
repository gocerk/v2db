import JsonDB, { IFuntions } from './Adapters/JsonDB';
import i18n from './i18n';

export class v2db {
  options: { name?: string, seperator?: string, language?: 'en' | 'tr'; };
  private adapter: IFuntions;

  /**
   * @param options Database options
   */
  constructor(options?: { name?: string, seperator?: string, language?: 'en' | 'tr'; }) {
    const defaultOpts = { name: 'db', seperator: '.', language: 'en' };

    this.options = Object.assign(defaultOpts, options);
    this.adapter = JsonDB(this.options);
  }

  /**
   * Sets entered value to target.
   * @param key Target key
   * @param value Value
   */
  set(key: string, value: any) {
    if (!key) throw new TypeError(i18n('keyBlank', this.options.language));
    if (typeof value === 'undefined')
      throw new TypeError(i18n('valueBlank', this.options.language));

    return this.adapter.set(key, value);
  };

  /**
   * Gets current data from target.
   * @param key Target get
   */
  get(key: string) {
    if (!key) throw new TypeError(i18n('keyBlank', this.options.language));
    return this.adapter.get(key);
  };

  /**
   * Clone of {@link v2db.get}
   * @deprecated Use v2db#get instead.
   * @param key Target key
   */
  fetch(key: string) {
    console.log(i18n('useGetInsteadFetch', this.options.language));
    if (!key) throw new TypeError(i18n('keyBlank', this.options.language));
    return this.get(key);
  };

  /**
   * Deletes key from target.
   * @param key Target key
   */
  delete(key: string) {
    if (!key) throw new TypeError(i18n('keyBlank', this.options.language));
    return this.adapter.del(key);
  };

  /**
   * Checks key in target
   * @param key Target key
   */
  has(key: string) {
    if (!key) throw new TypeError(i18n('keyBlank', this.options.language));
    return !!this.get(key);
  };

  /**
   * Updates key with given function.
   * @param key Target key
   * @param func Function
   */
  update(key: string, func: (x: string) => void) {
    if (!key) throw new TypeError(i18n('keyBlank', this.options.language));
    if (!func) throw new TypeError(i18n('value', this.options.language));
    if (typeof func !== 'function')
      throw new TypeError(i18n('valueMustBe', this.options.language, 'Function'));

    return this.adapter.update(key, func);
  };

  /**
   * Adds given value to target.
   * @param key Target key
   * @param value Number to add
   */
  add(key: string, value: number) {
    if (!key) throw new TypeError(i18n('keyBlank', this.options.language));
    if (typeof value === 'undefined')
      throw new TypeError(i18n('valueBlank', this.options.language));
    if (typeof value !== 'number')
      throw new TypeError(i18n('valueMustBe', this.options.language, 'Number'));

    return this.adapter.add(key, value);
  };

  /**
   * Subtracts given value from target.
   * @param key Target key
   * @param value Number to substract
   */
  subtracts(key: string, value: number) {
    if (!key) throw new TypeError(i18n('keyBlank', this.options.language));
    if (typeof value === 'undefined')
      throw new TypeError(i18n('valueBlank', this.options.language));
    if (typeof value !== 'number')
      throw new TypeError(i18n('valueMustBe', this.options.language, 'Number'));

    return this.adapter.add(key, -value);
  };

  /**
   * Pushes value to target.
   * @param key Target key
   * @param value Value to push
   */
  push(key: string, ...value: any[]) {
    if (!key) throw new TypeError(i18n('keyBlank', this.options.language));
    if (!value) throw new TypeError(i18n('valueBlank', this.options.language));
    if (!Array.isArray(this.get(key))) this.set(key, []);

    let data = this.get(key);

    value.forEach((val) => {
      data.push(val);
    });
    this.set(key, data);

    return data;
  };

  /**
   * Unpushes value from target.
   * @param key Target key
   * @param value Value to unpush
   */
  unpush(key: string, ...value: any[]) {
    if (!key) throw new TypeError(i18n('keyBlank', this.options.language));
    if (!value) throw new TypeError(i18n('valueBlank', this.options.language));
    if (!Array.isArray(this.get(key))) this.set(key, []);

    let data = this.get(key);

    value.forEach((val) => {
      data = data.filter((x: string) =>
        typeof x === 'object'
          ? JSON.stringify(x) !== JSON.stringify(val)
          : x !== val
      );
    });
    this.set(key, data);

    return data;
  };

  /**
   * Returns file content.
   */
  all() {
    return this.adapter.all();
  };

  /**
   * Deletes file content.
   */
  delAll() {
    return this.adapter.delAll();
  }
}
