import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  pathLoc: ""
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case UserActionTypes.SET_CURRENT_PATH:
      return {
        ...state,
        pathLoc: action.payload
      };
    default:
      return state;
  }
};
