const msg = {
  keyBlank: {
    tr: 'Bir anahtar girilmedi',
    en: 'No key entered.',
  },
  valueBlank: {
    tr: 'Bir değer girilmedi.',
    en: 'No value entered.',
  },
  useGetInsteadFetch: {
    tr: "'v2db#fetch' yerine 'v2db#get' kullan.",
    en: "Use 'v2db#get' instead of 'v2db#fetch'.",
  },
  valueMustBe: {
    tr: (x: string) => `Değer ${x} olmalı.`,
    en: (x: string) => `Value must be ${x}.`,
  },
};

export const strings = msg;

export default (text: string, language: 'tr' | 'en', ...args: string[]) => {
  let string = strings[text][language];
  if (!string) string = strings[text].en;
  if (typeof string === 'function') return string(...args);
  else return string;
};
