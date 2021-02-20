export default (options: {seperator: string}) => {
  const opts = {seperator: options.seperator};

  const fn = {
    _set: (data: any, path: string, value: unknown) => {
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
    },

    _get: (data: any, path: string) => {
      if (path.includes(opts.seperator)) {
        const elems = path.split(opts.seperator);
        const key = elems.pop();

        const obj = elems.reduce((x, y) => {
          if (typeof x[y] !== 'object') x[y] = {};
          return x[y];
        }, data);
        return obj[key];
      } else return data[path];
    },

    _del: (data: any, path: string) => {
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
    }
  };

  return fn;
};
