import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Home, Web, Native, Button, ListView } from './pages';

const Navigator = StackNavigator({
  Home: {
    screen: Home,
  },
  Web: {
    screen: Web,
  },
  Native: {
    screen: Native,
  },
  Button: {
    screen: Button,
  },
  ListView: {
    screen: ListView,
  },
}, {
  navigationOptions: {
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#ff4e4e',
    },
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Navigator />
    );
  }
}
