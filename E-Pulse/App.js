import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './navigation/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import WallpaperScreen from './screens/WallpaperScreen';

export default function App() {
  // Check if the MainNavigator component exists before rendering it
  if (!MainNavigator) {
    throw new Error('MainNavigator component not found');
  }

  // Check if the NavigationContainer component exists before rendering it
  if (!NavigationContainer) {
    throw new Error('NavigationContainer component not found');
  }

  // Check if the StatusBar component exists before rendering it
  if (!StatusBar) {
    throw new Error('StatusBar component not found');
  }

  // Check if the Stack.Navigator component exists before rendering it
  if (!Stack.Navigator) {
    throw new Error('Stack.Navigator component not found');
  }

  // Check if the HomeScreen component exists before rendering it
  if (!HomeScreen) {
    throw new Error('HomeScreen component not found');
  }

  // Check if the CalendarScreen component exists before rendering it
  if (!CalendarScreen) {
    throw new Error('CalendarScreen component not found');
  }

  // Check if the WallpaperScreen component exists before rendering it
  if (!WallpaperScreen) {
    throw new Error('WallpaperScreen component not found');
  }

  // This is the main component of our app. It renders a View component
  // which is a container for other components.
  // The View component is styled with a flexbox layout, where the
  // content is centered both horizontally and vertically.
  return (
    <View style={styles.container}>
      <MainNavigator />
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Calendar" component={CalendarScreen} />
          <Stack.Screen name="Wallpaper" component={WallpaperScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',// Sunny Yellow
    alignItems: 'center',
    justifyContent: 'center',
  },
});
