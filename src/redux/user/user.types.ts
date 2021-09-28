import { Action } from 'redux';

export const SET_USER_DATA = 'SET_USER_DATA';

export interface SetUserDataAction extends Action {
  type: typeof SET_USER_DATA;
  payload: UserData;
}

export type UserAction = SetUserDataAction;

export interface UserData {
  email: string;
  id: number;
  isEmailConfirmed: boolean;
  isResettingPassword: boolean;
  name: string;
}

export interface UserState {
  userData: UserData | null;
}
