import {
  AUTH_LOAD,
  AUTH_SIGNUP,
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
    case AUTH_SIGNUP:
      return {
        ...state,
        error: undefined,
        loading: true,
      };
    case AUTH_LOGIN:
      return {
        user: null,
        error: undefined,
        loading: true,
      };
    case AUTH_LOGIN_FAIL:
      return {
        ...INITIAL_STATE,
        user: null,
        error: action.payload,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...INITIAL_STATE,
        user: action.payload,
      };
    case AUTH_LOAD:
      return {
        ...INITIAL_STATE,
        user: action.payload,
      };
    default:
      return state;
  }
};
