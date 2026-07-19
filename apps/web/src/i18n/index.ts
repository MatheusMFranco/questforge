import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import ar from './locales/ar.json';
import de from './locales/de.json';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import pt from './locales/pt.json';
import ru from './locales/ru.json';
import zh from './locales/zh.json';

import { isRtl } from './rtl';

function updateDocumentLanguage(language: string) {
  document.documentElement.lang = language;
  document.documentElement.dir = isRtl(language) ? 'rtl' : 'ltr';
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['pt', 'en', 'es', 'fr', 'de', 'it', 'ru', 'ar', 'zh', 'ko', 'ja'],
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    resources: {
      pt: {
        translation: pt,
      },
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
      fr: {
        translation: fr,
      },
      de: {
        translation: de,
      },
      it: {
        translation: it,
      },
      ru: {
        translation: ru,
      },
      ar: {
        translation: ar,
      },
      zh: {
        translation: zh,
      },
      ko: {
        translation: ko,
      },
      ja: {
        translation: ja,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', updateDocumentLanguage);

updateDocumentLanguage(i18n.resolvedLanguage ?? i18n.language);

export default i18n;
