import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getStoreKeyValue } from 'store/appStorage';

import en from 'assets/lang/en.json';
import ar from 'assets/lang/ar.json';

const currentAppLanguage = getStoreKeyValue('language', 'appLanguage');

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: currentAppLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
