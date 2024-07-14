// screens/WallpaperScreen.js
import React from 'react';
import {View, Text, Button} from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export default function WallpaperScreen() {
	const setWallpaper = async () => {
		try {
			const {granted} = await MediaLibrary.requestPermissionsAsync();
			if (granted) {
				// Code to set wallpaper goes here
				alert('Wallpaper set successfully');
			} else {
				alert('Permission denied');
			}
		} catch (error) {
			if (error instanceof Error) {
				console.error('Error while setting wallpaper:', error.message);
			} else {
				console.error('Unknown error while setting wallpaper');
			}
		}
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Text>Select your favorite Wallpaper</Text>
			<Button title="Set as Wallpaper" onPress={setWallpaper} />
		</View>
	);
}

