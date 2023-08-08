import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';
import { IStoreMethods } from './types';

const appStorage = new MMKV({ id: 'app-storage' });

const zustandMMKVStorage: StateStorage & IStoreMethods = {
  setItem: (key, value) => appStorage.set(key, value),
  getItem: key => {
    const retrievedValue = appStorage.getString(key);
    return retrievedValue ?? null;
  },
  removeItem: key => appStorage.delete(key),
  clearStore: () => appStorage.clearAll(),
  getAllStoreKeys: () => appStorage.getAllKeys(),
};

export default zustandMMKVStorage;
