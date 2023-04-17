import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type MainNavigatorParamList = {
  Home: undefined;
  Profile: {
    username: string | undefined;
  };
};

// useNavigation and component
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainNavigatorParamList,
  'Home'
>;

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  MainNavigatorParamList,
  'Profile'
>;

// useRoute
export type HomeScreenRouteProp = RouteProp<MainNavigatorParamList, 'Home'>;
export type ProfileScreenRouteProp = RouteProp<
  MainNavigatorParamList,
  'Profile'
>;

export default MainNavigatorParamList;
