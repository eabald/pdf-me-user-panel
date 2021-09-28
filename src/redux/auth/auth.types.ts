import { Action } from 'redux';

export const SIGN_IN_START = 'SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';


export type AuthAction =
  | SignInStartAction
  | SignInSuccessAction
  | SignInErrorAction

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
