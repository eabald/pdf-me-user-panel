// External
import { all, call } from 'redux-saga/effects';
// Sagas
import authSagas from './auth/auth.sagas';

export default function* rootSaga() {
  yield all([
    call(authSagas)
  ]);
}
