import { UserData, SET_USER_DATA } from './user.types';

export const setUserData = (userData: UserData) => ({
  type: SET_USER_DATA,
  payload: userData,
})
