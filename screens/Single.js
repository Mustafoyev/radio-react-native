import React from 'react';
import { Button } from '@react-native-material/core';
import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { PRD } from '../components/Kods/Kods';
import { Razgovor } from '../components/Kods/Kods';
import { Otboy } from '../components/Kods/Kods';

export const Single = ({ navigation, route }) => {
	const { item } = route.params;

	async function playMusic(sound) {
		try {
			// Create a new instance of AV playback object
			const soundObject = new Audio.Sound();

			// Load the music file from a local or remote source
			await soundObject.loadAsync(sound);

			// Play the music
			await soundObject.playAsync();
		} catch (error) {
			console.error('Failed to play music:', error);
		}
	}

	return (
		<View style={styled.content}>
			<Button
				style={styled.backBtn}
				onPress={() => navigation.goBack()}
				title='Orqaga'
				leading={(props) => <AntDesign name='back' size={24} color='white' />}
			/>
			<Text style={styled.title}>{item?.name} stansiyasi</Text>
			<View style={styled.twoBtnWrapper}>
				<Button
					onPress={() => playMusic(item?.gmv?.audio)}
					style={styled.gmvBtn}
					title={'GMV' + ' ' + item?.gmv?.name}
					leading={(props) => (
						<MaterialCommunityIcons
							name='radio-tower'
							size={24}
							color='white'
						/>
					)}
				/>
				<Button
					onPress={() => playMusic(item?.mv?.audio)}
					style={styled.mvBtn}
					title={'MV' + ' ' + item?.mv?.name}
					leading={(props) => (
						<MaterialCommunityIcons
							name='radio-tower'
							size={24}
							color='white'
						/>
					)}
				/>
			</View>
			<View style={styled.threeBtnWrapper}>
				<Button
					onPress={() => playMusic(PRD)}
					style={styled.prdBtn}
					title='ПРД'
					leading={(props) => (
						<MaterialCommunityIcons
							name='radio-tower'
							size={24}
							color='white'
						/>
					)}
				/>
				<Button
					onPress={() => playMusic(Razgovor)}
					style={styled.pozBtn}
					title='Розговор'
					leading={(props) => (
						<MaterialCommunityIcons
							name='speaker-wireless'
							size={24}
							color='white'
						/>
					)}
				/>
				<Button
					onPress={() => playMusic(Otboy)}
					style={styled.otbBtn}
					title='Отбой'
					leading={(props) => (
						<MaterialIcons name='call-end' size={24} color='white' />
					)}
				/>
			</View>
		</View>
	);
};

const styled = StyleSheet.create({
	content: {
		padding: 10,
	},

	title: {
		marginTop: 90,
		fontSize: 22,
		fontWeight: 700,
		textAlign: 'center',
	},

	backBtn: {
		marginTop: 20,
		paddingHorizontal: 10,
		width: '33%',
		backgroundColor: '#333',
	},

	twoBtnWrapper: {
		paddingVertical: 100,
		alignItems: 'center',
	},

	gmvBtn: {
		width: '80%',
		marginBottom: 20,
		padding: 8,
	},

	mvBtn: {
		width: '80%',
		padding: 8,
	},

	threeBtnWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	prdBtn: {
		backgroundColor: 'green',
	},

	pozBtn: {
		backgroundColor: 'blue',
	},

	otbBtn: {
		backgroundColor: 'red',
	},
});
