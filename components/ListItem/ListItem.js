import React, { useState } from 'react';
import {
	Button,
	TextInput,
	IconButton,
	DialogActions,
	DialogContent,
} from '@react-native-material/core';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Modal } from '../Modal/Modal';
import SelectDropdown from 'react-native-select-dropdown';
import { kods } from '../Kods/Kods';

export const ListItem = ({
	navigation,
	item,
	stansiya,
	setStansiya,
	editToast,
	delToast,
}) => {
	const [visible, setVisible] = useState(false);
	const [inpVal, setInpVal] = useState('');
	const [gmvVal, setGmvVal] = useState({});
	const [mvVal, setMvVal] = useState({});

	const handleInputVal = (text) => {
		setInpVal(text);
	};

	const handleEditItem = (id) => {
		let newStansiya = [...stansiya].map((item) => {
			if (item.id == id) {
				(item.name = inpVal || item.name),
					(item.gmv = gmvVal || item.gmv),
					(item.mv = mvVal || item.mv);
			}
			return item;
		});
		setStansiya(newStansiya);
		setVisible(false);
		editToast();
	};

	const handleDeleteItem = (id) => {
		newData = [...stansiya].filter((item) => item.id !== id);
		setStansiya(newData);
		delToast();
	};

	return (
		<>
			<TouchableOpacity
				onPress={() => navigation.navigate('Single', { item })}
				style={styled.itemWrapper}
				key={item.id}>
				<Text style={styled.itemTitle}>{item?.name}</Text>
				<View style={styled.iconButtonsWrapper}>
					<IconButton
						onPress={() => setVisible(true)}
						icon={(props) => (
							<Icon name='file-edit' {...props} style={{ color: '#EBB02D' }} />
						)}
					/>
					<IconButton
						onPress={() => handleDeleteItem(item.id)}
						icon={(props) => (
							<Icon name='delete' {...props} style={{ color: '#ED2B2A' }} />
						)}
					/>
				</View>
			</TouchableOpacity>
			<Modal
				visible={visible}
				setVisible={setVisible}
				title='Stansiyani tahrirlash'>
				<DialogContent>
					<TextInput
						defaultValue={item?.name}
						onChangeText={handleInputVal}
						type='text'
						label='Stansiya nomini kirirting'
						variant='outlined'
					/>
					<SelectDropdown
						defaultValue={item?.gmv}
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
						defaultValue={item?.mv}
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
						onPress={() => handleEditItem(item.id)}
					/>
				</DialogActions>
			</Modal>
		</>
	);
};

const styled = StyleSheet.create({
	itemWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 20,
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderWidth: 2,
		borderColor: '#333',
		borderRadius: 10,
		elevation: 4,
	},

	itemTitle: {
		fontWeight: 700,
		fontSize: 20,
	},

	iconButtonsWrapper: {
		flexDirection: 'row',
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
});
