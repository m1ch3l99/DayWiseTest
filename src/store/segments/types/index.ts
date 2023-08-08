import { Languages } from 'config/types';

interface ILanguageState {
  appLanguage: Languages;
}

interface ILanguageStateAction {
  setLanguage: (language: Languages) => void;
}

interface IThemeState {
  isDarkMode: boolean;
}

interface IThemeStateAction {
  toggleTheme: () => void;
}

export type IThemeStore = IThemeState & IThemeStateAction;
export type ILanguageStore = ILanguageState & ILanguageStateAction;
