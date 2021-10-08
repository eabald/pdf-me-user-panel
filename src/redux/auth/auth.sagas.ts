// External
import { takeLatest, all, put, call } from 'redux-saga/effects';
// Api
import { signInRequest, signOutRequest } from './auth.api';
// Actions
import {
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutError,
  SIGN_IN_START,
  SIGN_OUT_START,
  AuthError,
  Credentials,
  SignInStartAction,
} from './auth.slice';
import { updateLoading } from '../utils/utils.actions';
import { setUserData } from '../user/user.slice';

export function* signIn({ payload }: { payload: Credentials }): any {
  try {
    yield put(updateLoading(true));
    const user = yield signInRequest(payload);
    yield put(setUserData(user));
    yield put(signInSuccess(true));
    yield put(updateLoading(false));
  } catch (error) {
    yield put(signInError(error as AuthError));
    yield put(updateLoading(false));
  }
}

export function* signOut(): any {
  try {
    yield put(updateLoading(true));
    yield signOutRequest();
    yield put(setUserData(null));
    yield put(signOutSuccess());
    yield put(updateLoading(false));
  } catch (error) {
    yield put(signOutError(error as AuthError));
    yield put(updateLoading(false));
  }
}

export function* onSignInStart() {
  yield takeLatest<SignInStartAction>(SIGN_IN_START, signIn);
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

export function* authSagas() {
  yield all([call(onSignInStart), call(onSignOutStart)]);
}

export default authSagas;
