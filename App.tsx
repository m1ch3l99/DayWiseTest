/* eslint-disable no-use-before-define */
import 'i18n/i18n';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { QueryClientProvider } from 'react-query';

import MainNavigator from 'navigation/MainNavigator';

import queryClient from 'http/queryClient';

const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <GestureHandlerRootView style={styles.rootViewStyle}>
      <MainNavigator />
    </GestureHandlerRootView>
  </QueryClientProvider>
);

export default App;

const styles = StyleSheet.create({
  rootViewStyle: {
    flex: 1,
  },
});
