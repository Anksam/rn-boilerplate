import React, {Component} from 'react';
import {Platform, Text, View, TouchableOpacity} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

class SplashScreen extends Component {

  async componentDidMount() {
    // For debugging purpose
    console.log("Component Mounted -> 'SplashScreen'");
    console.log(this.props.navigation.state);
  }

  _navigateTo = (routeName: string) => {
    const actionToDispatch = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    //const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.textStyles}>Welcome Splash</Text>
          <TouchableOpacity onPress={()=>this._navigateTo('HomeScreen')}>
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
