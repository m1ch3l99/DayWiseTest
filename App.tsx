import { StyleSheet, Switch, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import LottieSplashScreen from 'react-native-lottie-splash-screen';
import useThemeStore from 'store/themeStore';

LottieSplashScreen.hide();

const whiteColor = '#fff';
const darkModeBg = '#121212';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    backgroundColor: whiteColor,
    flex: 1,
    justifyContent: 'center',
    rowGap: 20,
  },
});

const App = (): ReactNode => {
  const { isDarkMode, toggleTheme } = useThemeStore(state => ({
    isDarkMode: state.isDarkMode,
    toggleTheme: state.toggleTheme,
  }));

  const commonStyle = {
    color: isDarkMode ? whiteColor : darkModeBg,
  };

  return (
    <View
      style={[
        styles.screen,
        {
          backgroundColor: isDarkMode ? darkModeBg : whiteColor,
        },
      ]}>
      <Text style={commonStyle}>Welcome to react native !</Text>
      <Text style={commonStyle}>
        App is operating in {isDarkMode ? 'Dark' : 'Light'} mode
      </Text>
      <Switch value={isDarkMode} onChange={toggleTheme} />
    </View>
  );
};

export default App;
