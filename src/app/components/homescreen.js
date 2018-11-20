import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import { robotoWeights, webWeights } from 'react-native-typography';
import Icon from './Icon';

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
        <Icon
          name="add"
          color="#ccc"
          size={25}
        />
        <Text style={webWeights.regular}>Welcome home</Text>
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
};
