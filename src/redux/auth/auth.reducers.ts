// External
import { Reducer } from 'redux';
// Types
import { AuthState, AuthAction, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from './auth.types';

const INITIAL_STATE: AuthState = {
  loggedIn: false,
  error: null,
};

const authReducer: Reducer<AuthState, AuthAction> = (
  state = INITIAL_STATE,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        error: null,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        loggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
