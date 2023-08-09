import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import { useEffect, useState } from 'react';

interface IConnectionStatus {
  isConnected: boolean | null;
}

const useInternetConnection = (): IConnectionStatus => {
  const [appConnectionStatus, setAppConnectionStatus] =
    useState<IConnectionStatus>({ isConnected: false });

  const handleNetworkConnection = (state: NetInfoState): void => {
    setAppConnectionStatus({
      isConnected: state.isConnected,
    });
  };

  // initial network fetch
  useEffect(() => {
    NetInfo.fetch().then(handleNetworkConnection);
  }, []);

  // listen to network change
  useEffect(() => {
    const unsubscribeToNetwork = NetInfo.addEventListener(
      handleNetworkConnection,
    );

    return () => {
      unsubscribeToNetwork();
    };
  }, []);

  return appConnectionStatus;
};

export default useInternetConnection;
