import React, {Component} from 'react';
import {Platform, Text, View, TouchableOpacity} from 'react-native';

class SplashScreen extends Component {

  async componentDidMount() {
    // For debugging purpose
    console.log("Component Mounted -> 'SplashScreen'");
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.textStyles}>Welcome Splash</Text>
          <TouchableOpacity onPress={()=>navigate("HomeScreen", {"title": "Home"})}>
            <Text>Go Home</Text>
          </TouchableOpacity>
      </View>
    );
  }
}


export default SplashScreen;

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
