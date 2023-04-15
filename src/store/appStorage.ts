import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

const appStorage = new MMKV({ id: 'app-storage' });

const zustandMMKVStorage: StateStorage = {
  setItem: (key, value) => appStorage.set(key, value),
  getItem: key => {
    const retrievedValue = appStorage.getString(key);
    return retrievedValue ?? null;
  },
  removeItem: key => appStorage.delete(key),
};

const getAllStoreKeys = (): string[] => appStorage.getAllKeys();
const getStoreKey = (key: string): string | undefined =>
  appStorage.getString(key);
const setStoreKey = (key: string, value: string): void =>
  appStorage.set(key, value);
const deleteStoreKey = (key: string): void => appStorage.delete(key);
const clearStore = (): void => appStorage.clearAll();

export default zustandMMKVStorage;
export {
  getAllStoreKeys,
  getStoreKey,
  setStoreKey,
  deleteStoreKey,
  clearStore,
};
