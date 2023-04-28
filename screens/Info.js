import { Text, Button } from '@react-native-material/core';
import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const Info = ({ navigation }) => {
	return (
		<ScrollView style={styled.container}>
			<Button
				style={styled.backBtn}
				onPress={() => navigation.goBack()}
				title='Orqaga'
				leading={(props) => <AntDesign name='back' size={24} color='white' />}
			/>
			<Text style={styled.infoTitle}>Dasturni ishlatish uchun yo'riqnoma.</Text>
			<Text style={styled.infoText}>
				Dasturni ishlatish uchun avval stansiya qo'shish tugmasi yordamida
				stansiya nomini kiritib va kerakli bo'lgan kod kombinatsiyalarni GMV va
				MV diapazonlar uchun tanlab olamiz, so'ng stansiyani saqlab qo'yamiz.
				Saqlab olingan stansiyalari bemalol tahrirlash yoki uni o'chirib
				tashlashingiz mumkin. {'\n'} Saqlangan stansiya ustiga bossangiz kerakli
				sahifa ochiladi, bu sahifadagi tugmachalar yordamida istalgan diapazon
				(GMV yoki MV) dispetcher aloqasini tekshirishingiz mumkin. Undan
				tashqari siz qo'shni stansiyalarga qo'ng'iroq uzatishingiz (1400Hz),
				dispetcher aloqasi bog'langan xolatda muloqotni tekshirishingiz va
				aloqani uzishni tekshirishingiz mumkin bo'ladi.
			</Text>
			<Text style={styled.infoTextTwo}>
				Bularni barchasini ishlatish uchun siz quyidagi rasmda ko'rsatilgan
				qurilmani yasab olishingiz kerak bo'ladi.
			</Text>
			<Image
				source={require('../assets/infoFoto1.jpg')}
				style={{ width: 360, height: 400 }}
				resizeMode='contain'
				accessible={true}
				accessibilityLabel='My Image'
			/>
			<Text style={styled.infoTextTwo}>
				Bu qurilma yordamida siz telefon va radiostansiyani bog'lay olasiz.
				Telefon quloqchini ulanadigan tomoni telefonga va undan chiqishi
				radiostansiyaga ulanadi.
			</Text>
			<Image
				source={require('../assets/infoFoto2.png')}
				style={{ width: 360, height: 400, marginBottom: 20 }}
				resizeMode='contain'
				accessible={true}
				accessibilityLabel='My Image'
			/>
			<Image
				source={require('../assets/infoFoto3.jpg')}
				style={{ width: 360, height: 280, marginBottom: 20 }}
				resizeMode='contain'
				accessible={true}
				accessibilityLabel='My Image'
			/>
			<Image
				source={require('../assets/infoFoto4.png')}
				style={{ width: 360, height: 280 }}
				resizeMode='contain'
				accessible={true}
				accessibilityLabel='My Image'
			/>
			<Text style={styled.infoTextThree}>
				Dasturni ishga tushirishdan oldin qurilma telefonga va radiostansiyaga
				to'g'ri va yaxshi ulanganligiga ishonch xosil qiling!!!
			</Text>
		</ScrollView>
	);
};

const styled = StyleSheet.create({
	container: {
		padding: 20,
	},
	backBtn: {
		marginTop: 20,
		paddingHorizontal: 10,
		width: '30%',
		backgroundColor: '#333',
	},

	infoTitle: {
		marginVertical: 20,
		fontWeight: 800,
		fontSize: 20,
		textAlign: 'center',
	},

	infoText: {
		fontWeight: 600,
		fontSize: 16,
	},

	infoTextTwo: {
		marginVertical: 20,
		fontWeight: 600,
		fontSize: 16,
	},

	infoTextThree: {
		marginVertical: 20,
		marginBottom: 30,
		fontWeight: 600,
		fontSize: 16,
		color: 'red',
	},
});
