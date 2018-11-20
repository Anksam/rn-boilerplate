/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppContainer from './src/navigation/routes';

//console.disableYellowBox = true;

export default class App extends Component {

  async componentWillMount() {
    // Debug
    console.log("Launching App");
  }

  async componentDidMount() {
    // Debug
    console.log("App launched");
  }

  render() {
    return (
      <AppContainer />
    );
  }
}
