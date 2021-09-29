import {
  AuthError,
  Credentials,
  SIGN_IN_ERROR,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_ERROR,
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

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutError = (error: AuthError) => ({
  type: SIGN_OUT_ERROR,
  payload: error,
});
