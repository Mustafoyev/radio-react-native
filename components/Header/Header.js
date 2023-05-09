import React from 'react';
import { IconButton, Text } from '@react-native-material/core';
import Icon from '@expo/vector-icons/Entypo';
import { StyleSheet, View } from 'react-native';

export const Header = ({ navigation }) => {
	return (
		<View style={styled.header}>
			<Text style={styled.headerTitle}>Kod kombinatsiyalar</Text>
			<IconButton
				onPress={() => navigation.navigate('Info')}
				icon={(props) => <Icon name='info-with-circle' {...props} />}
			/>
		</View>
	);
};

const styled = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingTop: 40,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		elevation: 8,
	},

	headerTitle: {
		fontFamily: 'sans-serif',
		fontWeight: 900,
		fontSize: 22,
	},
});
