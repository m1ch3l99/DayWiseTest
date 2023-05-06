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

const setStoreKey = (key: string, value: string): void =>
  appStorage.set(key, value);

const deleteStoreKey = (key: string): void => appStorage.delete(key);

const clearStore = (): void => appStorage.clearAll();

const getStoreKeyValue = (storeKey: string, valueKey: string): string => {
  const storeValue = appStorage.getString(storeKey);
  const value = JSON.parse(storeValue!).state[valueKey];
  return value;
};

export default zustandMMKVStorage;
export {
  getAllStoreKeys,
  setStoreKey,
  deleteStoreKey,
  clearStore,
  getStoreKeyValue,
};
