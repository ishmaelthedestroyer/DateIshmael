import { AUTH_LOAD } from './types';

export const loadUser = (user) => {
  return {
    type: AUTH_LOAD,
    payload: user,
  };
};
