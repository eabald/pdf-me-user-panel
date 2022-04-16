// External
import { all, call } from 'redux-saga/effects';
// Sagas
import authSagas from './auth/auth.sagas';
import templatesSagas from './templates/templates.saga';

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(templatesSagas),
  ]);
}
