import { Languages } from 'config/types';
import { LanguageChangeType } from 'i18n/types';

export interface ITranslateHook {
  translate: (key: string) => string;
  translateWithOptions: (key: string, options: object) => string;
  changeAppLanguage: (language: Languages) => LanguageChangeType;
  toggleAppLanguage: () => LanguageChangeType;
}
