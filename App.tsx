import { StyleSheet, Text, View } from 'react-native';
import React, { ReactElement } from 'react';
import RNBootSplash from 'react-native-bootsplash';

RNBootSplash.hide({ fade: true });

function App(): ReactElement {
  return (
    <View style={styles.screen}>
      <Text>Welcome to react native</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
