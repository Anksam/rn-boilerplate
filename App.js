/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

export default class App extends Component {

  async componentDidMount() {
    console.log("launched");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyles}>Welcome</Text>
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
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
  }
};
