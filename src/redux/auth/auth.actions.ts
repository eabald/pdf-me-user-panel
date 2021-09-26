import {
  AuthError,
  Credentials,
  SIGN_IN_ERROR,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
} from './auth.types';

export const signInStart = (credentials: Credentials) => ({
  type: SIGN_IN_START,
  payload: credentials,
});

export const signInSuccess = () => ({
  type: SIGN_IN_SUCCESS,
});

export const signInError = (error: AuthError) => ({
  type: SIGN_IN_ERROR,
  payload: error,
});
