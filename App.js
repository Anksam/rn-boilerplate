/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppContainer from './src/navigation/routes';

export default class App extends Component {

  async componentDidMount() {
    console.log("App launched");
  }

  render() {
    return (
      <AppContainer />
    );
  }
}
