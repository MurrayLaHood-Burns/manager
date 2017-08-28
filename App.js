// @flow
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import { MyStatusBar } from './src/components/common';

export default class App extends Component {
 
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCF0KzOLlWnCxiCnyjJXgp9-FU9bjAqnRg",
      authDomain: "manager-c6a77.firebaseapp.com",
      databaseURL: "https://manager-c6a77.firebaseio.com",
      projectId: "manager-c6a77",
      storageBucket: "",
      messagingSenderId: "451799942755"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <MyStatusBar />
          <Text>Hello World</Text>
        </View>
      </Provider>
    );
  }
}
