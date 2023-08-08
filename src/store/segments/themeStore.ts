import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import zustandMMKVStorage from '../appStorage';
import { IThemeStore } from './types';

const useThemeStore = create<IThemeStore>()(
  persist(
    set => ({
      isDarkMode: false,
      toggleTheme: (): void =>
        set(state => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'theme',
      storage: createJSONStorage(() => zustandMMKVStorage),
    },
  ),
);

export default useThemeStore;
