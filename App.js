import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Header } from './components/Header/Header';
import { Home } from './screens/Home';
import { Single } from './screens/Single';
import { Info } from './screens/Info';

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Home'
						component={Home}
						options={{ header: Header }}
					/>
					<Stack.Screen
						name='Single'
						component={Single}
						options={{ header: Header }}
					/>
					<Stack.Screen
						name='Info'
						component={Info}
						options={{ header: Header }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</TouchableWithoutFeedback>
	);
}
