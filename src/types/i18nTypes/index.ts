import { TFunction } from 'i18next';

import { Languages } from 'types/configTypes/index';

export type LanguageChangeType = Promise<
  TFunction<'translation', undefined, 'translation'>
>;

export interface ITranslateHook {
  translate: (key: string) => string;
  translateWithOptions: (key: string, options: object) => string;
  changeAppLanguage: (language: Languages) => LanguageChangeType;
  toggleAppLanguage: () => LanguageChangeType;
}
