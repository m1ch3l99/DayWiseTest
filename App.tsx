/* eslint-disable no-use-before-define */
import 'i18n/i18n';
import MainNavigator from 'navigation/MainNavigator';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = (): JSX.Element => (
  <GestureHandlerRootView style={styles.rootViewStyle}>
    <MainNavigator />
  </GestureHandlerRootView>
);

export default App;

const styles = StyleSheet.create({
  rootViewStyle: {
    flex: 1,
  },
});
