// External
import { takeLatest, all } from 'redux-saga/effects';
// Types
import {
  SIGN_IN_START,
  SignInStartAction,
} from './auth.types';
// Api
// Actions

export function* signIn({ payload }: SignInStartAction) {

}

export function* onSignInStart() {
  yield takeLatest<SignInStartAction>(SIGN_IN_START, signIn);
}

export function* authSagas() {
  yield all([]);
}

export default authSagas;
