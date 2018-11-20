import React, {Component} from 'react';
import {Platform, Text, View, TouchableOpacity, AsyncStorage} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { robotoWeights, webWeights, iOSColors } from 'react-native-typography'

class SplashScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
      header:null,
   });

  async componentWillMount() {
    await AsyncStorage.getItem('first_time_launch').then((value)=> this.setState({'first_time_launch': value}));
    if (this.state.first_time_launch == null) {
      this.setState({'first_time_launch': 'yes'})
      await AsyncStorage.setItem('first_time_launch', 'yes');
    }
    // debug
    console.log("first_time_launch" + " -> " + this.state.first_time_launch);
  }

  async componentDidMount() {
    // Debug
    console.log("Component Mounted -> 'SplashScreen'");
    console.log(this.props.navigation.state);
  }

  _navigateTo = (routeName: string) => {
    const actionToDispatch = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(actionToDispatch)
    // Debug
    console.log("Removing SplashScreen from Navigation stack");
    console.log("Navigating to HomeScreen & changing InitialRoute to HomeScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[robotoWeights.thin, styles.txtTitle]}>Your App</Text>
          <TouchableOpacity onPress={()=>this._navigateTo('HomeScreen')}>
            <Text style={webWeights.regular}>Go to home</Text>
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
    txtTitle: {
    color: iOSColors.pink,
    fontSize: 30,
  },
};
