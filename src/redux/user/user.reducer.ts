// External
import { Reducer } from 'redux';
import { UserState, UserAction, SET_USER_DATA } from './user.types';

const INITIAL_STATE: UserState = {
  userData: null,
};

const userReducer: Reducer<UserState, UserAction> = (
  state = INITIAL_STATE,
  action: UserAction
): UserState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
