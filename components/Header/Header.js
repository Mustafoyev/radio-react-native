import React from 'react';
import { AppBar, IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/Entypo';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export const Header = ({ navigation }) => {
	return (
		<SafeAreaView>
			<View style={styled.header}>
				<AppBar
					style={styled.appBar}
					title='Kod kombinatsiyalar'
					trailing={(props) => (
						<IconButton
							onPress={() => navigation.navigate('Info')}
							icon={(props) => <Icon name='info-with-circle' {...props} />}
							{...props}
						/>
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

const styled = StyleSheet.create({
	header: {},
	appBar: {
		paddingTop: 30,
	},
});
