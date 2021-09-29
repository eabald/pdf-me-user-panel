import { Action } from 'redux';

export const SIGN_IN_START = 'SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_ERROR = 'SIGN_OUT_ERROR';


export type AuthAction =
  | SignInStartAction
  | SignInSuccessAction
  | SignInErrorAction
  | SignOutStartAction
  | SignOutSuccessAction
  | SignOutErrorAction

export interface SignInStartAction extends Action {
  type: typeof SIGN_IN_START;
  payload: Credentials;
}

export interface SignInSuccessAction extends Action {
  type: typeof SIGN_IN_SUCCESS;
}

export interface SignInErrorAction extends Action {
  type: typeof SIGN_IN_ERROR;
  payload: AuthError;
}

export interface SignOutStartAction extends Action {
  type: typeof SIGN_OUT_START;
}

export interface SignOutSuccessAction extends Action {
  type: typeof SIGN_OUT_SUCCESS;
}

export interface SignOutErrorAction extends Action {
  type: typeof SIGN_OUT_ERROR;
  payload: AuthError;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthState {
  loggedIn: boolean;
  error: AuthError | null;
}

export interface AuthError {
  status: number;
  message: string;
}
