import { StyleSheet, Text, View } from 'react-native';
import React, { ReactElement } from 'react';
import RNBootSplash from 'react-native-bootsplash';

RNBootSplash.hide({ fade: true });

const whiteColor = '#fff';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    backgroundColor: whiteColor,
    flex: 1,
    justifyContent: 'center',
  },
});

function App(): ReactElement {
  return (
    <View style={styles.screen}>
      <Text>Welcome to react native !</Text>
    </View>
  );
}

export default App;
