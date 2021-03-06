// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
