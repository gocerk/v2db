import fs from 'fs';
import functions from '../functions';

export interface IFuntions { set: (key: string, value: unknown) => any; get: (key: string) => any; del: (key: string) => boolean; update: (key: string, func: (x: unknown) => void) => any; add: (key: string, value: number) => any; delAll: () => boolean; all: () => any; }

export default (options: { seperator?: string, name?: string; }) => {
  const defaultOpts = { seperator: '.', name: 'db' };
  options = Object.assign(defaultOpts, options);

  const opts = { name: options.name, seperator: options.seperator };
  const utils = functions(opts);

  if (
    !fs.existsSync(`./${opts.name}.json`) ||
    fs.readFileSync(`./${opts.name}.json`, 'utf-8') === ''
  )
    fs.writeFileSync(`./${opts.name}.json`, '{}');

  const fn = {
    set: (key: string, value: unknown) => {
      let data = fn.all();

      data = utils._set(data, key, value);
      fs.writeFileSync(`./${opts.name}.json`, JSON.stringify(data, null, 2));

      return data[key.split(opts.seperator).pop()];
    },

    get: (key: string) => {
      return utils._get(fn.all(), key);
    },

    del: (key: string) => {
      let data = fn.all();
      data = utils._del(data, key);
      fs.writeFileSync(`./${opts.name}.json`, JSON.stringify(data, null, 2));

      return true;
    },

    update: (key: string, func: (x: any) => void) => {
      let data = fn.get(key);
      data = fn.set(key, func(data));

      return data;
    },

    add: (key: string, value: number) => {
      let data = fn.get(key);
      data = fn.set(key, data + value);

      return data;
    },

    delAll: () => {
      fs.writeFileSync(`./${opts.name}.json`, '{}');
      return true;
    },

    all: () => {
      return JSON.parse(fs.readFileSync(`./${opts.name}.json`, 'utf-8'));
    },
  };

  return fn;
};
