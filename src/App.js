import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import FIREBASE_CONFIG from '../firebase.json';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(FIREBASE_CONFIG);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('logged in', user);
      } else {
        console.log('not logged in');
      }
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
