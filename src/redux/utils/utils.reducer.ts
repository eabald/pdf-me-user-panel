// External
import { Reducer } from 'redux';
// Types
import {
  UtilsAction,
  UtilsState,
  UPDATE_LOADING,
} from './utils.types';

const INITIAL_STATE: UtilsState = {
  loading: false,
};

const utilsReducer: Reducer<UtilsState, UtilsAction> = (
  state = INITIAL_STATE,
  action: UtilsAction
): UtilsState => {
  switch (action.type) {
    case UPDATE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default utilsReducer;
