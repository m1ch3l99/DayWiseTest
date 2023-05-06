import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { Languages } from 'types/configTypes/index';

import zustandMMKVStorage from './appStorage';

interface ILanguageState {
  appLanguage: Languages;
}

interface ILanguageStateAction {
  setLanguage: (language: Languages) => void;
}

type ILanguageStore = ILanguageState & ILanguageStateAction;

const useLanguageStore = create<ILanguageStore>()(
  persist(
    set => ({
      appLanguage: 'en',
      setLanguage: (language: Languages): void =>
        set(() => ({ appLanguage: language })),
    }),
    {
      name: 'language',
      storage: createJSONStorage(() => zustandMMKVStorage),
    },
  ),
);

export default useLanguageStore;
