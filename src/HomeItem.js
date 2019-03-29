import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native';

const HomeItem = ({ data, select }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={() => select(data.letra, data)}>
			<View style={styles.content}>
				<Image source={{uri: data.img}} style={{width: 130, height: 130, alignSelf: 'center'}} />
				<View style={{width: 150}}>
					<Text style={{textAlign: 'center', fontWeight: '500'}}>{data.name} - R${data.price}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		marginRight: 10
	},
	content: {
		borderWidth: 1,
		borderColor: '#CCC',
		borderRadius: 10,
		elevation: 1.5
	}
});

export default HomeItem;