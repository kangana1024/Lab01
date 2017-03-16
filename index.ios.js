import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import AppLayout from './components/AppLayout'

export default class Lab01 extends Component {
  render() {
    return (
      <AppLayout />
    );
  }
}

AppRegistry.registerComponent('Lab01', () => Lab01);
