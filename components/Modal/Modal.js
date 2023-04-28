import React from 'react';
import { Dialog, DialogHeader } from '@react-native-material/core';
import { StyleSheet } from 'react-native';

export const Modal = ({ visible, setVisible, title, children }) => {
	return (
		<Dialog
			styled={styled.modal}
			visible={visible}
			onDismiss={() => setVisible(false)}>
			<DialogHeader title={title} />
			{children}
		</Dialog>
	);
};

const styled = StyleSheet.create({
	modal: {},
});
