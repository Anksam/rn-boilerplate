import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

export default class HomeScreen extends Component {

  async componentDidMount() {
    // For debugging purpose
    console.log("Component Mounted -> 'HomeScreen'");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyles}>Welcome Home</Text>
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
