import React from 'react';
import SplashScreen from 'react-native-lottie-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from 'screens/Home/Home';
import Profile from 'screens/Profile/Profile';

import { MainNavigatorParamList } from './types';

const hideSplashScreen = (): void => SplashScreen.hide();

const MainStackNavigator = createNativeStackNavigator<MainNavigatorParamList>();

const MainNavigator = (): JSX.Element => (
  <NavigationContainer onReady={hideSplashScreen}>
    <MainStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStackNavigator.Screen name="Home" component={Home} />
      <MainStackNavigator.Screen name="Profile" component={Profile} />
    </MainStackNavigator.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
