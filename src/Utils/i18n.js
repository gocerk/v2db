const strings = {
  installYAML: {
    tr: "YamlDB kullanmak için 'yaml' modülünü kurmalısınız.",
    en: "To use YamlDB, you must install the 'yaml' module.",
  },
};

module.exports = (text, language, ...args) => {
  let string = strings[text][language];
  if (!string) string = strings[text].english;
  if (typeof string === 'function') return string(...args);
  else return string;
};

module.exports.strings = strings;
