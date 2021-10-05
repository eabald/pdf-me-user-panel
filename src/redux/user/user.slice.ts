import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

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

const initialState: UserState = {
  userData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData | null>) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user.userData;

export default userSlice.reducer;
