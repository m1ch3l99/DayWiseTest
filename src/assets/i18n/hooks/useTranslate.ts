import { useTranslation } from 'react-i18next';

import { APP_LANGUAGES } from 'config/config';
import { ITranslateHook, LanguageChangeType } from '../types';
import defaultI18n from '../i18n';

const { EN, AR } = APP_LANGUAGES;

const useTranslate = (): ITranslateHook => {
  const { t, i18n } = useTranslation('translation', {
    i18n: defaultI18n,
  });

  const activeLanguage = i18n.language;

  const translate = (key: string): string => t(key);
  const translateWithOptions = (key: string, options: object): string =>
    t(key, options);

  const changeAppLanguage = (language: string): LanguageChangeType =>
    i18n.changeLanguage(language);

  const toggleAppLanguage = (): LanguageChangeType => {
    if (activeLanguage === EN) return changeAppLanguage(AR);
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
