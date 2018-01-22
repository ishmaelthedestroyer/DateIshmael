import { AUTH_LOAD } from '../actions/types';

const INITIAL_STATE = {
  user: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOAD:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
