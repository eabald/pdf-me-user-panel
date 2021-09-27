// External
import { takeLatest, all, put } from 'redux-saga/effects';
// Types
import {
  SIGN_IN_START,
  SignInStartAction,
  AuthError,
} from './auth.types';
// Api
import { signInRequest } from '../../api/auth.api';
// Actions
import { signInSuccess, signInError } from './auth.actions';
import { updateLoading } from '../utils/utils.actions';

export function* signIn({ payload }: SignInStartAction): any {
  try {
    yield put(updateLoading(true));
    const user = yield signInRequest(payload);
    console.log(user);
    yield put(signInSuccess());
    yield put(updateLoading(false));
  } catch (error) {
    yield put(signInError(error as AuthError));
    yield put(updateLoading(false));
  }
}

export function* onSignInStart() {
  yield takeLatest<SignInStartAction>(SIGN_IN_START, signIn);
}

export function* authSagas() {
  yield all([]);
}

export default authSagas;
