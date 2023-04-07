import { StyleSheet, Text, View } from 'react-native';
import React, { ReactElement } from 'react';
import LottieSplashScreen from 'react-native-lottie-splash-screen';

LottieSplashScreen.hide();

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
