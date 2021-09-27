import {
  UtilsAction,
  UPDATE_LOADING,
} from './utils.types';

export const updateLoading = (isLoading: boolean): UtilsAction => ({
  type: UPDATE_LOADING,
  payload: isLoading,
});
