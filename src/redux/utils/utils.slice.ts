import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UtilsState {
  loading: boolean;
  showMenu: boolean;
}

const initialState: UtilsState = {
  loading: false,
  showMenu: false,
};

export const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    toggleShowMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const { updateLoading, toggleShowMenu } = utilsSlice.actions;

export const selectLoading = (state: RootState) => state.utils.loading;
export const selectShowMenu = (state: RootState) => state.utils.showMenu;

export default utilsSlice.reducer;
