import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from 'screens/Home/HomeScreen';

import MainNavigatorParamList from 'types/navigationTypes/MainNavigationTypes';

import { hideSplashScreen } from 'utils/index';

const MainStackNavigator = createNativeStackNavigator<MainNavigatorParamList>();

const MainNavigator = (): JSX.Element => (
  <NavigationContainer onReady={hideSplashScreen}>
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
