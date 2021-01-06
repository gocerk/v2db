const Functions = (options = {}) => {
  const fn = {};
  const opts = {};

  opts.seperator = options.seperator;

  fn._set = (data, path, value) => {
    if (path.includes(opts.seperator)) {
      const elems = path.split(opts.seperator);
      const key = elems.pop();
      const obj = elems.reduce((x, y) => {
        if (typeof x[y] !== 'object') x[y] = {};
        return x[y];
      }, data);

      obj[key] = value;
      return data;
    } else {
      data[path] = value;
      return data;
    }
  };

  fn._get = (data, path) => {
    if (path.includes(opts.seperator)) {
      const elems = path.split(opts.seperator);
      const key = elems.pop();
      const obj = elems.reduce((x, y) => {
        if (typeof x[y] !== 'object') x[y] = {};
        return x[y];
      }, data);
      return obj[key];
    } else return data[path];
  };

  fn._del = (data, path) => {
    if (path.includes(opts.seperator)) {
      const elems = path.split(opts.seperator);
      const key = elems.pop();
      const obj = elems.reduce((x, y) => {
        if (typeof x[y] !== 'object') x[y] = {};
        return x[y];
      }, data);
      delete obj[key];
      return data;
    } else {
      delete data[path];
      return data;
    }
  };

  fn.isValid = (input) => {
    return ['string', 'number', 'boolean', 'object'].includes(typeof input);
  };

  return fn;
};

module.exports = Functions;
