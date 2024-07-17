// navigation/MainNavigator.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screen/CalendarScreen';
import WallpaperScreen from '../screen/WallpaperScreen';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Calendar: CalendarScreen,
    Wallpaper: WallpaperScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default function MainNavigator() {
  if (!NavigationContainer) {
    throw new Error('NavigationContainer component not found');
  }

  if (!Stack.Navigator) {
    throw new Error('Stack.Navigator component not found');
  }

  if (!screenNames) {
    throw new Error('screenNames variable not found');
  }

  if (!screenComponents) {
    throw new Error('screenComponents variable not found');
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {Object.keys(screenNames).map((name) => {
          const screenName = screenNames[name];
          const screenComponent = screenComponents[name];

          if (!screenName || !screenComponent) {
            throw new Error(`Invalid screen name or component: ${name}`);
          }

          return (
            <Stack.Screen
              key={name}
              name={screenName}
              component={screenComponent}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenNames = {
  Home: 'Home',
  Calendar: 'Calendar',
  Wallpaper: 'Wallpaper',
};

const screenComponents = {
  Home: HomeScreen,
  Calendar: CalendarScreen,
  Wallpaper: WallpaperScreen,
};

