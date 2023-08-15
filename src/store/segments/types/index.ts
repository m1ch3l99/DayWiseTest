import { Languages } from 'config/types';

interface ILanguageState {
  appLanguage: Languages;
}

interface ILanguageStateAction {
  setLanguage: (language: Languages) => void;
}

export type ILanguageStore = ILanguageState & ILanguageStateAction;
