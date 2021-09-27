// External
import { Action } from 'redux';

export const UPDATE_LOADING = 'UPDATE_LOADING';

export interface UpdateLoadingAction extends Action {
  type: typeof UPDATE_LOADING;
  payload: boolean;
}

export type UtilsAction = UpdateLoadingAction;

export interface UtilsState {
  loading: boolean;
}
