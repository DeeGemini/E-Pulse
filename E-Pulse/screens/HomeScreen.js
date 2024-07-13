// screens/HomeScreen.js
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function
HomeScreen({navigation}) {
	return(
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		 <Text>Welcome to E-Pulse</Text>
		 <Button title="Open Calendar" onPress={() => navigation.navigate('Calendar')} />
		 <Button title="Set Wallpaper" onPress={() => navigation.navigate('Wallpaper')} />
		</view>
	);
}
