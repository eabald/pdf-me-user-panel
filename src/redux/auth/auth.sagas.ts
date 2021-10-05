// External
import { takeLatest, all, put, call } from 'redux-saga/effects';
// Types
import {
  SIGN_IN_START,
  SignInStartAction,
  AuthError,
  SignOutStartAction,
  SIGN_OUT_START,
} from './auth.types';
// Api
import { signInRequest, signOutRequest } from '../../api/auth.api';
// Actions
import { signInSuccess, signInError, signOutSuccess, signOutError } from './auth.actions';
import { updateLoading } from '../utils/utils.actions';
import { setUserData } from '../user/user.actions';

export function* signIn({ payload }: SignInStartAction): any {
  try {
    yield put(updateLoading(true));
    const user = yield signInRequest(payload);
    yield put(setUserData(user));
    yield put(signInSuccess());
    yield put(updateLoading(false));
  } catch (error) {
    yield put(signInError(error as AuthError));
    yield put(updateLoading(false));
  }
}

export function* signOut(): any {
  try {
    yield put(updateLoading(true));
    // const user = yield signInRequest(payload);
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
  yield takeLatest<SignOutStartAction>(SIGN_OUT_START, signOut);
}

export function* authSagas() {
  yield all([
    call(onSignInStart),
    call(onSignOutStart),
  ]);
}

export default authSagas;