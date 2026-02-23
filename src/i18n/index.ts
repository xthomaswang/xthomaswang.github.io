import { en } from './en';
import { zh } from './zh';

export type Lang = 'en' | 'zh';

const translations = { en, zh } as const;

export function t(lang: Lang) {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'zh') return 'zh';
  return 'en';
}
