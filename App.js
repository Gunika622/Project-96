 import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import TransactionScreen from './screens/BookTransactionScreen';
import JokeScreen from './screens/JokeScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  changeScreen = (screen) => {
    this.props.navigation.navigate(screen);
  };
  render() {
    return <BookTransactionScreen />;
  }
}

const TabNavigator = createBottomTabNavigator({
  QrCodeScanner: { screen: TransactionScreen },
});
var navigator = createSwitchNavigator({
  JokeScreen: JokeScreen,
});

const Container = createAppContainer(navigator);

const BookTransactionScreen = createAppContainer(TabNavigator);

