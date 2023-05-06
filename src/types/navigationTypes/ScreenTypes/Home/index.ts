import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import MainNavigatorParamList from 'types/navigationTypes/MainNavigationTypes';

// useNavigation and component
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainNavigatorParamList,
  'Home'
>;

// useRoute
export type HomeScreenRouteProp = RouteProp<MainNavigatorParamList, 'Home'>;
