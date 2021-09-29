// External
import { Reducer } from 'redux';
// Types
import {
  AuthState,
  AuthAction,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_ERROR,
} from './auth.types';

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
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        error: null,
      };
    case SIGN_OUT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
