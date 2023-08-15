import { TFunction } from 'i18next';

export type LanguageChangeType = Promise<
  TFunction<'translation', undefined, 'translation'>
>;
