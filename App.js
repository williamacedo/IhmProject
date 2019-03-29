import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Connect from './src/Connect';
import Home from './src/Home';
import Pagamento from './src/Pagamento';

const Navegador = createStackNavigator({
    Connect:{
      screen: Connect,
      navigationOptions:{
        header: null
      }
    },
    Home:{
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Pagamento:{
      screen: Pagamento,
      navigationOptions:{
        header: null        
      }
    }
});

class App extends Component {
    render() {
      return <Navegador/>;
    }
}

export default App;