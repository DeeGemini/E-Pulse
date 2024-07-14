// screens/CalendarScreen.js
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarPicker from 'react-native-calendar-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

export default function CalendarScreen() {
	const [date, setDate] = useState(new Date());

	const scheduleNotification = async (date) => {
		if (!date) {
			console.warn('Invalid date provided');
			return;
		}

		try {
			await Notifications.scheduleNotificationAsync({
				content: {
					title: "Reminder!",
					body: "Your event is starting in a few minutes!",
				},
				trigger: {date},
			});
		} catch (error) {
			if (error instanceof Error) {
				console.error('Error scheduling notification:', error.message);
			} else {
				console.error('Unknown error scheduling notification');
			}
		}
	};

	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		 <Text>Schedule Your Event</Text>
		 <CalendarPicker onDateChange={(date) => setDate(date)} />
		 <Button title="Set Reminder" onPress={() => scheduleNotification(date)} />
		</View>
	);
}

