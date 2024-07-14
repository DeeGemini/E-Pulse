// navigation/MainNavigator.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screen/CalendarScreen';
import WallpaperScreen from '../screen/WallpaperScreen';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {Object.keys(screenNames).map((name) => (
          <Stack.Screen
            key={name}
            name={screenNames[name]}
            component={screenComponents[name]}
          />
        ))}
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

