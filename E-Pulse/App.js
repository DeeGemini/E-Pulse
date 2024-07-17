import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './navigation/MainNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700', // Sunny Yellow
    alignItems: 'center',
    justifyContent: 'center',
  },
});
