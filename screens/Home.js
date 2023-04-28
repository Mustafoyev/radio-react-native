import React, { useEffect, useState } from 'react';
import {
	Provider,
	Button,
	TextInput,
	DialogActions,
	DialogContent,
} from '@react-native-material/core';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal } from '../components/Modal/Modal';
import SelectDropdown from 'react-native-select-dropdown';
import { kods } from '../components/Kods/Kods';
import { ListItem } from '../components/ListItem/ListItem';
import Container, { Toast } from 'toastify-react-native';

export const Home = ({ navigation }) => {
	const [inpVal, setInpVal] = useState('');
	const [gmvVal, setGmvVal] = useState({});
	const [mvVal, setMvVal] = useState({});
	const [stansiya, setStansiya] = useState([]);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		localData();
	}, []);

	const localData = async () => {
		try {
			const storedData = await AsyncStorage.getItem('data');
			if (storedData !== null) {
				setStansiya(JSON.parse(storedData));
			}
		} catch (error) {
			console.error('Error data from local storage: ', error);
		}
	};

	const showToasts = async () => {
		Toast.success("Stansiya qo'shildi!!!");
	};

	const editToast = async () => {
		Toast.info("Stansiya o'zgartirildi!!!");
	};

	const delToast = async () => {
		Toast.error("Stansiya o'chirildi!!!");
	};

	const handleInpVal = (text) => {
		setInpVal(text);
	};

	const handleSaveStansiya = () => {
		setStansiya((prev) => [
			...prev,
			{
				id: stansiya.length ? stansiya[stansiya.length - 1].id + 1 : 1,
				name: inpVal,
				gmv: gmvVal,
				mv: mvVal,
			},
		]);

		setVisible(false);
		showToasts();
	};

	useEffect(() => {
		saveData(stansiya);
	}, [stansiya]);

	const saveData = async (data) => {
		try {
			await AsyncStorage.setItem('data', JSON.stringify(data));
		} catch (error) {
			console.error('Error saving data to local storage: ', error);
		}
	};

	return (
		<Provider>
			<View style={styled.homeConteiner}>
				<Container position='top' />
				<Text style={styled.title}>Stansiyani qo'shing!!!</Text>
				<Button
					style={styled.stansiyaAddBtn}
					onPress={() => setVisible(true)}
					title="Stansiyani qo'shish"
					uppercase={false}
					leading={(props) => <Icon name='plus' {...props} />}
				/>
				<Modal
					visible={visible}
					setVisible={setVisible}
					title="Yangi stansiya qo'shish">
					<DialogContent>
						<TextInput
							onChangeText={handleInpVal}
							type='text'
							label='Stansiya nomini kirirting'
							variant='outlined'
						/>
						<SelectDropdown
							defaultButtonText={'GMV diapazon'}
							dropdownStyle={styled.dropdown2DropdownStyle}
							data={kods}
							onSelect={(selectedItem) => {
								setGmvVal(selectedItem);
							}}
							buttonTextAfterSelection={(selectedItem) => {
								return selectedItem.name;
							}}
							rowTextForSelection={(item) => {
								return item.name;
							}}
							buttonStyle={styled.dropdown2BtnStyle}
							buttonTextStyle={styled.dropdown2BtnTxtStyle}
							rowStyle={styled.dropdown2RowStyle}
							rowTextStyle={styled.dropdown2RowTxtStyle}
						/>
						<SelectDropdown
							defaultButtonText={'MV diapazon'}
							dropdownStyle={styled.dropdown2DropdownStyle}
							data={kods}
							onSelect={(selectedItem) => {
								setMvVal(selectedItem);
							}}
							buttonTextAfterSelection={(selectedItem) => {
								return selectedItem.name;
							}}
							rowTextForSelection={(item) => {
								return item.name;
							}}
							buttonStyle={styled.dropdown2BtnStyle}
							buttonTextStyle={styled.dropdown2BtnTxtStyle}
							rowStyle={styled.dropdown2RowStyle}
							rowTextStyle={styled.dropdown2RowTxtStyle}
						/>
					</DialogContent>
					<DialogActions>
						<Button
							title='Cancel'
							compact
							variant='text'
							onPress={() => setVisible(false)}
						/>
						<Button
							title='Ok'
							compact
							variant='text'
							onPress={handleSaveStansiya}
						/>
					</DialogActions>
				</Modal>
				<View style={styled.content}>
					<FlatList
						data={stansiya}
						renderItem={({ item }) => (
							<ScrollView>
								<ListItem
									item={item}
									navigation={navigation}
									stansiya={stansiya}
									setStansiya={setStansiya}
									editToast={editToast}
									delToast={delToast}
								/>
							</ScrollView>
						)}
					/>
				</View>
			</View>
		</Provider>
	);
};

const styled = StyleSheet.create({
	homeConteiner: {
		padding: 15,
		flexGrow: 1,
	},

	title: {
		marginBottom: 20,
		textAlign: 'center',
		fontWeight: 800,
		fontSize: 22,
	},

	stansiyaAddBtn: {
		padding: 6,
	},

	content: {
		flex: 1,
	},

	dropdown2BtnStyle: {
		width: '100%',
		height: 50,
		marginTop: 10,
		backgroundColor: '#444',
		borderRadius: 8,
	},

	dropdown2BtnTxtStyle: {
		color: '#FFF',
		textAlign: 'center',
		fontWeight: 'bold',
	},

	dropdown2DropdownStyle: {
		backgroundColor: '#444',
		borderBottomLeftRadius: 12,
		borderBottomRightRadius: 12,
	},

	dropdown2RowStyle: {
		backgroundColor: '#444',
		borderBottomColor: '#C5C5C5',
	},
	dropdown2RowTxtStyle: {
		color: '#FFF',
		textAlign: 'center',
		fontWeight: 'bold',
	},

	itemWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 20,
		padding: 6,
		borderWidth: 1,
		borderColor: '#333',
		borderRadius: 10,
	},

	itemTitle: {
		fontWeight: 700,
		fontSize: 20,
	},

	iconButtonsWrapper: {
		flexDirection: 'row',
	},
});
