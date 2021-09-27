// External
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth.reducer';
import utilsReducer from './utils/utils.reducer'
import { RootAction } from './root-types';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  utils: utilsReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer<RootState, RootAction>(
  persistConfig,
  rootReducer
);
