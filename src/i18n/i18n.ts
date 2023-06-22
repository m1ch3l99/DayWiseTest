import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from 'assets/lang/en.json';
import ar from 'assets/lang/ar.json';
import zustandMMKVStorage from 'store/appStorage';
import APP_LANGUAGES_CONFIG from 'config/config';

const { EN } = APP_LANGUAGES_CONFIG;

const currentAppLanguage = `${zustandMMKVStorage.getItem('language')}`;

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
  lng: currentAppLanguage ?? EN,
  fallbackLng: EN,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
