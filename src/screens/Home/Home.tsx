import { Button, StyleSheet, Switch, Text, View } from 'react-native';
import React, { ReactElement } from 'react';
import useThemeStore from 'store/themeStore';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from 'navigation/types';

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

const Home = (): ReactElement => {
  const { isDarkMode, toggleTheme } = useThemeStore(state => ({
    isDarkMode: state.isDarkMode,
    toggleTheme: state.toggleTheme,
  }));

  const commonStyle = {
    color: isDarkMode ? whiteColor : darkModeBg,
  };

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const goToProfile = (): void =>
    navigation.navigate('Profile', {
      username: 'Michel Gerges',
    });

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
      <Button title="Go to profile" onPress={goToProfile} />
    </View>
  );
};

export default Home;
