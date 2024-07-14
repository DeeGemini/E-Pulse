import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import WallpaperScreen from './screens/WallpaperScreen';

export default function App() {
  // This is the main component of our app. It renders a View component
  // which is a container for other components.
  // The View component is styled with a flexbox layout, where the
  // content is centered both horizontally and vertically.
  return (
    <View style={styles.container}>
      {/* The NavigationContainer component is the root of our navigation
          stack. It is the container for all of our screens. */}
      <NavigationContainer>
        {/* The StatusBar component displays the status bar at the top of
            the screen. The style="auto" prop makes sure that the status
            bar is styled correctly on both iOS and Android. */}
        <StatusBar style="auto" />
        {/* The Stack.Navigator component is the navigator for our app. It
            renders a stack of screens, where the user can navigate
            between them. */}
        <Stack.Navigator initialRouteName="Home">
          {/* This is the first screen in our stack. It is the HomeScreen
              component, and it is displayed when the user first opens
              the app. */}
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* This is the second screen in our stack. It is the
              CalendarScreen component, and it is displayed when the user
              navigates to it from the HomeScreen. */}
          <Stack.Screen name="Calendar" component={CalendarScreen} />
          {/* This is the third screen in our stack. It is the
              WallpaperScreen component, and it is displayed when the user
              navigates to it from the HomeScreen. */}
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
