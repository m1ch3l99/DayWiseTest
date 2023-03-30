import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RNBootSplash from 'react-native-bootsplash';

RNBootSplash.hide({fade: true});

const App = () => {
  return (
    <View style={styles.screen}>
      <Text>Welcome to react native</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
