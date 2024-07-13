// screens/WallpaperScreen.js
import React from 'react';
import {View, Text, Button} from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export default function WallpaperScreen() {
	const setWallpaper = async () => {
		const {status} = await MediaLibrary.requestPermissionsAsync();
		if (status === 'granted') {
			// Code to set wallpaper goes here
			alert('Wallpaper set successfully');
		}else {
			alert('Permission denied');
		}
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		 <Text>Select your fav Wallpaper</Text>
		 <Button title="Set as Wallpaper" onPress={setWallpaper} />
		</View>
	);
}

