import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './configureStore';
import Router from './Router';
import FIREBASE_CONFIG from '../firebase.json';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
