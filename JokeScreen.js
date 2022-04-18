import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class JokeScreen extends React.Component {
  HomeScreen = (buzzerColor) => {
    this.props.navigation.navigate('HomeScreen', { color: buzzerColor });
  };
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}></TouchableOpacity>
        <Image style={styles.img} source={require('../assests/apple.jpg')} />
             
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'magenta' }]}
          onPress={() => {
            this.HomeScreen('teal');
          }}>
          <Text style={styles.buttonText}>Back </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    marginLeft: 10,
    width: 290,
    height: 150,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
    marginLeft: 20,
  },
  buttonText: { textAlign: 'center', color: 'black' },
});
