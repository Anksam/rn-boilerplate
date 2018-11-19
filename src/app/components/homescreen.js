import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

class HomeScreen extends Component {

  async componentWillMount() {
    // debug
    console.log("Changed InitialRoute to HomeScreen");
  }

  async componentDidMount() {
    // debug
    console.log("Component Mounted -> 'HomeScreen'");
    console.log(this.props.navigation.state);
  }

  async componentWillUnmount() {
    // debug
    console.log("Exiting Application");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyles}>Welcome Home</Text>
      </View>
    );
  }
}


export default HomeScreen;

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
