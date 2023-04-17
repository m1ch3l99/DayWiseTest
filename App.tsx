import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const App = (): JSX.Element => (
  <View style={styles.screen}>
    <Text>Welcome to react native</Text>
  </View>
);

export default App;
