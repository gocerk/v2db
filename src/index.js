const { isValid, colorize } = require('./Utils/functions')();
const i18n = require('./Utils/i18n');

const Index = (options = {}) => {
  const fn = {};
  const opts = {};

  const defaultOptions = {
    name: 'db',
    seperator: '.',
    language: 'en',
    yaml: false,
  };
  options = Object.assign(defaultOptions, options);

  opts.adapter = options.yaml
    ? require('./Adapters/YamlDB')(options)
    : require('./Adapters/JsonDB')(options);

  fn.set = (key, value) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    if (!value) throw new TypeError(i18n('valueBlank', options.language));

    return opts.adapter.set(key, value);
  };

  fn.get = (key) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));

    return opts.adapter.get(key);
  };

  fn.fetch = (key) => {
    console.log(
      colorize('orange', i18n('useGetInsteadFetch', options.language))
    );
    return fn.get(key);
  };

  fn.delete = (key) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    return opts.adapter.del(key);
  };

  fn.has = (key) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));

    !!fn.get(key);
  };

  fn.update = (key, func) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    if (!fn) throw new TypeError(i18n('value', options.language));
    if (typeof fn !== 'function')
      throw new TypeError(i18n('valueMustBe', options.language, 'Function'));

    return opts.adapter.update(key, func);
  };

  fn.add = (key, value) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    if (!value) throw new TypeError(i18n('valueBlank', options.language));
    if (typeof value !== 'number')
      throw new TypeError(i18n('valueMustBe', options.language, 'Number'));

    return opts.adapter.add(key, value);
  };

  fn.substract = (key, value) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    if (!value) throw new TypeError(i18n('valueBlank', options.language));
    if (typeof value !== 'number')
      throw new TypeError(i18n('valueMustBe', options.language, 'Number'));

    return opts.adapter.add(key, -value);
  };

  fn.push = (key, ...value) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    if (!value) throw new TypeError(i18n('valueBlank', options.language));
    if (!fn.has(key)) fn.set(key, []);

    let data = fn.get(key);

    for (const val of value) {
      data.push(val);
    }
    fn.set(key, data);

    return data;
  };

  fn.unpush = (key, ...value) => {
    if (!key) throw new TypeError(i18n('keyBlank', options.language));
    if (!value) throw new TypeError(i18n('valueBlank', options.language));
    if (!fn.has(key)) fn.set(key, []);

    let data = fn.get(key);

    for (const val of value) {
      if (typeof val === 'object')
        data = val.filter((el) => JSON.stringify(el) !== val);
      data = val.filter((el) => el !== val);
    }
    fn.set(key, data);

    return data;
  };

  fn.all = () => {
    return opts.adapter.all();
  };

  fn.deleteAll = () => {
    return opts.adapter.delAll();
  };

  return fn;
};

module.exports = Index;
