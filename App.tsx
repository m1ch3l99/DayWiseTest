/* eslint-disable no-use-before-define */
import 'i18n/i18n';
import MainNavigator from 'navigation/MainNavigator';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

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
