import {
  AUTH_LOAD,
  AUTH_LOGIN,
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  user: undefined,
  error: undefined,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        error: undefined,
        loading: true,
      };
    case AUTH_LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: undefined,
        loading: false,
      };
    case AUTH_LOAD:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
