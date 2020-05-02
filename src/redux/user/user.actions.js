import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const setCurrentPath = path => ({
  type: UserActionTypes.SET_CURRENT_PATH,
  payload: path
})
