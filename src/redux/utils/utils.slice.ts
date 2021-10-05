import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UtilsState {
  loading: boolean;
}

const initialState: UtilsState = {
  loading: false,
};

export const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { updateLoading } = utilsSlice.actions;

export const selectLoading = (state: RootState) => state.utils.loading;

export default utilsSlice.reducer;
