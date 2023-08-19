import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from 'screens/Home/HomeScreen';

import setupDevConfigurations from 'config/devConfig';

import queryClient from 'http/queryClient';

import MainNavigatorParamList from './types';

const MainStackNavigator = createNativeStackNavigator<MainNavigatorParamList>();

setupDevConfigurations({ queryClient });

const MainNavigator = (): JSX.Element => (
  <NavigationContainer>
    <MainStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStackNavigator.Screen name="Home" component={HomeScreen} />
    </MainStackNavigator.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
