import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex:1,
        marginTop:25,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start'
      }}>

        <View style={{
          backgroundColor:'blue',
          width:50,
          height:50
        }} />
        <View style={{
          backgroundColor:'red',
          width:50,
          height:50
        }} />
        <View style={{
          backgroundColor:'green',
          width:50,
          height:50
        }} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});