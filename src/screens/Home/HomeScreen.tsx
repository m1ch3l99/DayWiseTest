import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const HomeScreen = (): JSX.Element => (
  <View style={styles.screen}>
    <Text>Welcome to App</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
