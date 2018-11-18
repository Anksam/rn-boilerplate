import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

export default class SplashScreen extends Component {

  async componentDidMount() {
    // For debugging purpose
    console.log("Component Mounted -> 'SplashScreen'");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyles}>Welcome Splash</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  }
};
