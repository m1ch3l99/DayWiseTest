import { useTranslation } from 'react-i18next';

import useLanguageStore from 'store/segments/languageStore';

import APP_LANGUAGES_CONFIG from 'config/config';

import { LanguageChangeType } from 'i18n/types';
import { Languages } from 'config/types';
import { ITranslateHook } from './types';

const { EN, AR } = APP_LANGUAGES_CONFIG;

const useTranslate = (): ITranslateHook => {
  const { t, i18n } = useTranslation();

  const { appLanguage, setLanguage } = useLanguageStore();

  const translate = (key: string): string => t(key);
  const translateWithOptions = (key: string, options: object): string =>
    t(key, options);

  const changeAppLanguage = (language: Languages): LanguageChangeType => {
    setLanguage(language);
    return i18n.changeLanguage(language);
  };

  const toggleAppLanguage = (): LanguageChangeType => {
    if (appLanguage === EN) {
      setLanguage('ar');
      return changeAppLanguage(AR);
    }
    setLanguage('en');
    return changeAppLanguage(EN);
  };

  return {
    translate,
    translateWithOptions,
    changeAppLanguage,
    toggleAppLanguage,
  };
};

export default useTranslate;
