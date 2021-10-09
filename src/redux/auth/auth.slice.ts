import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import type { RootState } from '../store';

export interface AuthState {
  loggedIn: boolean;
  error: AuthError | null;
}

export interface AuthError {
  status: number;
  message: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface SignUpCredentials extends Credentials {
  name: string;
}

const initialState: AuthState = {
  loggedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUpSuccess: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
      state.error = null;
    },
    signUpError: (state, action: PayloadAction<AuthError>) => {
      state.loggedIn = false;
      state.error = action.payload;
    },
    signInSuccess: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
      state.error = null;
    },
    signInError: (state, action: PayloadAction<AuthError>) => {
      state.loggedIn = false;
      state.error = action.payload;
    },
    signOutSuccess: (state) => {
      state.loggedIn = false;
      state.error = null;
    },
    signOutError: (state, action: PayloadAction<AuthError>) => {
      state.error = action.payload;
    },
  },
});

export const SIGN_IN_START = 'SIGN_IN_START';
export interface SignInStartAction extends Action {
  type: typeof SIGN_IN_START;
  payload: Credentials;
}
export const signInStart = createAction<Credentials>(SIGN_IN_START);

export const SIGN_UP_START = 'SIGN_UP_START';
export interface SignUpStartAction extends Action {
  type: typeof SIGN_UP_START;
  payload: SignUpCredentials;
}
export const signUpStart = createAction<SignUpCredentials>(SIGN_UP_START);

export const SIGN_OUT_START = 'SIGN_OUT_START';
export const signOutStart = createAction(SIGN_OUT_START);

export const { signInSuccess, signInError, signOutSuccess, signOutError } =
  authSlice.actions;

export const selectLoggedIn = (state: RootState) => state.auth.loggedIn;

export default authSlice.reducer;
