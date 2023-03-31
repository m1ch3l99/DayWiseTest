import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieSplashScreen from 'react-native-lottie-splash-screen';

LottieSplashScreen.hide();

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
