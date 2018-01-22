import firebase from 'firebase';
import {
  AUTH_LOAD,
  AUTH_SIGNUP,
  AUTH_LOGIN,
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_SUCCESS
} from './types';

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: AUTH_LOGIN_SUCCESS,
    payload: user,
  });
};

const loginFail = (dispatch, error) => {
  dispatch({
    type: AUTH_LOGIN_FAIL,
    payload: error.toString().replace('Error:', '').trim(),
  });
};

export const loadUser = (user) => {
  return {
    type: AUTH_LOAD,
    payload: user,
  };
};

export const login = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: AUTH_LOGIN });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginSuccess(dispatch, user))
      .catch(error => loginFail(dispatch, error));
  };
};

export const signup = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: AUTH_SIGNUP });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginSuccess(dispatch, user))
      .catch(error => loginFail(dispatch, error));
  };
};
