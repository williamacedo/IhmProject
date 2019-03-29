import React, {Component} from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';
import BluetoothSerial from 'react-native-bluetooth-serial';
import { Header, Body, Right, Title } from 'native-base';

class Pagamento extends Component {

	state = {
		selected: "key0"
	};

	onValueChange = (value: string) => {
	    this.setState({
	      selected: value
	    });
	}	

	onSuccess(e) {
	    BluetoothSerial.write("D")
	    .then((res) => {
	      console.log(res);
	      console.log('Successfuly wrote to device')
	      this.props.navigation.goBack();
	    })
	    .catch((err) => console.log(err.message))		
	}

	render() {
		return (
			<View key={this.props.navigation.state.params.item.key} style={styles.container}>
				<Header style={{backgroundColor: '#FF0000'}}>
					<Body>
						<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
							<Title style={{marginLeft: 5}}>Voltar</Title>
						</TouchableOpacity>
					</Body>
					<Right/>
				</Header>
				<View style={{alignSelf: 'center', marginTop: 10}}>
					<Image source={{uri: this.props.navigation.state.params.item.img}} style={{width: 150, height: 150}} />
				</View>
				<View style={styles.itemArea}>
					<Text style={{fontWeight: '500', marginLeft: 10}}>Nome</Text>
					<Text style={{marginRight: 10}}>{this.props.navigation.state.params.item.name}</Text>
				</View>	
				<View style={styles.itemArea}>
					<Text style={{fontWeight: '500', marginLeft: 10}}>Valor</Text>
					<Text style={{marginRight: 10}}>R${this.props.navigation.state.params.item.price}</Text>
				</View>
				<View>
					<Text style={{fontWeight: '500', fontSize: 20, textAlign: 'center', marginTop: 10}}>Pagamento</Text>
					<View style={{height: 200}}>
		              <QRCodeScanner
		                cameraStyle={{width: 200, height: 200, alignSelf: 'center', marginTop: 10}}
		                showMarker={true}
		                onRead={this.onSuccess.bind(this)}
		                checkAndroid6Permissions={true}
		                customMarker={<CustomQrMarker />}
					  />
					</View>
				</View>
			</View>
		);		
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF'
	},
	itemArea: {
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#CCC',
		height: 40
	},
	  rectangleContainer: {
	    flex: 1,
	    alignItems: 'center',
	    justifyContent: 'center',
	    backgroundColor: 'transparent'
	  },
	  rectangle: {
	    height: 250,
	    width: 250,
	    borderWidth: 2,
	    borderColor: '#ff3c36',
	    backgroundColor: 'transparent'
	} 	
})

const CustomQrMarker = () => {
  return (
      <View style={styles.rectangleContainer}>
        <View style={styles.rectangle} />
      </View>    
  )
}

export default Pagamento;