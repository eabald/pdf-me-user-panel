// External
import { takeLatest, all, put, call } from 'redux-saga/effects';
// Api
import { signInRequest, signOutRequest, SignUpRequest } from './auth.api';
// Actions
import {
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutError,
  SIGN_IN_START,
  SIGN_OUT_START,
  AuthError,
  SignInStartAction,
  SignUpStartAction,
  SIGN_UP_START,
} from './auth.slice';
import { updateLoading } from '../utils/utils.slice';
import { setUserData } from '../user/user.slice';

function* signIn({ payload }: SignInStartAction): any {
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

function* signOut(): any {
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

function* signUp({ payload }: SignUpStartAction): any {
  try {
    yield put(updateLoading(true));
    const user = yield SignUpRequest(payload);
    yield put(setUserData(user));
    yield put(signInSuccess(true));
    yield put(updateLoading(false));
  } catch (error) {
    yield put(signInError(error as AuthError));
    yield put(updateLoading(false));
  }
}

function* onSignInStart() {
  yield takeLatest<SignInStartAction>(SIGN_IN_START, signIn);
}

function* onSignUpStart() {
  yield takeLatest<SignUpStartAction>(SIGN_UP_START, signUp);
}

function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

function* authSagas() {
  yield all([call(onSignInStart), call(onSignOutStart), call(onSignUpStart)]);
}

export default authSagas;
