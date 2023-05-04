import { TFunction } from 'i18next';

export type LanguageChangeType = Promise<
  TFunction<'translation', undefined, 'translation'>
>;

export interface ITranslateHook {
  translate: (key: string) => string;
  translateWithOptions: (key: string, options: object) => string;
  changeAppLanguage: (language: string) => LanguageChangeType;
  toggleAppLanguage: () => LanguageChangeType;
}
