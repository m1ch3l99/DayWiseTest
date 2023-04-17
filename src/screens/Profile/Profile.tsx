import { View, Text, Button, StyleSheet } from 'react-native';
import React, { ReactElement, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ProfileScreenNavigationProp,
  ProfileScreenRouteProp,
} from 'navigation/types';

const redCrimson = 'crimson';

const styles = StyleSheet.create({
  message: {
    color: redCrimson,
    fontSize: 17,
    padding: 20,
    textAlign: 'center',
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    rowGap: 20,
  },
  title: {
    fontSize: 50,
  },
});

const Profile = (): ReactElement => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { params } = useRoute<ProfileScreenRouteProp>();
  const { username } = params ?? {};

  const [message, setMessage] = useState<string | null>(null);

  const cleanUpMessage = (): void => setMessage(null);

  const navigateToProfile = (): void => {
    const navigationMessage =
      'When we press on navigate in the same screen nothing will happen bcz navigation.navigate will check if the screen is already in the  navigator and if so it wont navigate us to a new screen, while push will push a new screen to the stack';

    setMessage(navigationMessage);
    navigation.navigate('Profile', { username: 'Michel Gerges' });
  };
  const pushProfileToStack = (): void => {
    cleanUpMessage();
    navigation.push('Profile', { username: 'Michel Gerges' });
  };

  const goBack = (): void => {
    cleanUpMessage();
    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      {message && <Text style={styles.message}>{message}</Text>}
      <Text style={styles.title}>Profile</Text>
      <Text>Username: {username}</Text>
      <Button title="Navigate To profile" onPress={navigateToProfile} />
      <Button title="Push Profile to stack" onPress={pushProfileToStack} />
      <Button title="Go back" onPress={goBack} />
    </View>
  );
};

export default Profile;
