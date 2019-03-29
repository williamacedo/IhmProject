import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Header, Body, Right, Title } from 'native-base';
import HomeItem from './HomeItem';
import BluetoothSerial from 'react-native-bluetooth-serial';

class Home extends Component {

	state = {
		list: [
			{key: '1', letra: "A", price: '1.00', name: 'Água', img: 'https://firebasestorage.googleapis.com/v0/b/projeto-teste-4354f.appspot.com/o/produtos.png?alt=media&token=3320a0d1-ad50-4e47-976d-99127fb2d01e'},
			{key: '2', letra: "B", price: '2.50', name: 'Chocolate', img: 'https://firebasestorage.googleapis.com/v0/b/projeto-teste-4354f.appspot.com/o/chocolate.png?alt=media&token=18206155-ab1e-41c5-822d-4150810184b1'},
			{key: '3', letra: "C", price: '2.00', name: 'Água de Coco', img: 'https://firebasestorage.googleapis.com/v0/b/projeto-teste-4354f.appspot.com/o/%C3%A1gua%20de%20Coco.png?alt=media&token=8ca0115e-499a-420b-a37a-945a88038bf7'},
			{key: '4', letra: "H", price: '1.75', name: 'Halls', img: 'https://firebasestorage.googleapis.com/v0/b/projeto-teste-4354f.appspot.com/o/halls.png?alt=media&token=f8f3339b-fb35-4531-a173-58f782726907'},
			{key: '5', letra: "N", price: '1.80', name: 'Nescau', img: 'https://firebasestorage.googleapis.com/v0/b/projeto-teste-4354f.appspot.com/o/nescau.png?alt=media&token=881b7525-50fb-44bf-a03f-4f2dfcce6193'},
			{key: '6', letra: "P", price: '1.50', name: 'PitStop', img: 'https://firebasestorage.googleapis.com/v0/b/projeto-teste-4354f.appspot.com/o/pitstop.png?alt=media&token=56334da6-af7b-4682-b8e9-a7424bc59222'},
			{key: '7', letra: "R", price: '2.00', name: 'Coca-Cola', img: 'https://firebasestorage.googleapis.com/v0/b/projeto-teste-4354f.appspot.com/o/coca.png?alt=media&token=40db7f14-65b7-419c-b343-7fdd75d75c49'},
			{key: '8', letra: "S", price: '2.00', name: 'Salgadinho', img: 'https://www.deliveryextra.com.br/img/uploads/1/90/566090.png?type=product'}
		],
		obj: []
	};

	  toggleSelect = (letra, obj) => {
	    BluetoothSerial.write(letra)
	    .then((res) => {
	      console.log(res);
	      console.log('Successfuly wrote to device')
	    })
	    .catch((err) => console.log(err.message))  
	    //this.setState({item: obj})
	    this.props.navigation.navigate('Pagamento', {item: obj});
	  }	

	render() {
		return (
			<View style={styles.container}>
				<Header style={{backgroundColor: '#FF0000'}}>
					<Body>
						<Title>Produtos</Title>
					</Body>
					<Right />
				</Header>
				<View style={{alignSelf: 'center', marginTop: 10, marginBottom: 50}}>
					<FlatList numColumns={2} horizontal={false} data={this.state.list} renderItem={({item}) => <HomeItem data={item} select={this.toggleSelect} />} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#fff'
	}
});

export default Home;