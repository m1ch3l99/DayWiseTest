import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { Languages } from 'config/types';
import { ILanguageStore } from './types';

import zustandMMKVStorage from '../appStorage';

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
