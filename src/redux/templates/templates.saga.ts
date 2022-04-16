import { takeLatest, all, put, call } from 'redux-saga/effects';
import { updateLoading } from '../utils/utils.slice';
import { getTemplatesRequest } from './templates.api';
import { getTemplatesError, GetTemplatesStartAction, getTemplatesSuccess, GET_TEMPLATES_START, TemplatesError } from './templates.slice';

function* getTemplates(): any {
  try {
    yield put(updateLoading(true));
    const templates = yield getTemplatesRequest();
    yield put(getTemplatesSuccess(templates));
    yield put(updateLoading(false));
  } catch (error) {
    yield put(updateLoading(false));
    yield put(getTemplatesError(error.response.data as TemplatesError));
  }
}

function* onGetTemplatesStart() {
  yield takeLatest<GetTemplatesStartAction>(GET_TEMPLATES_START, getTemplates);
}

function* templatesSagas() {
  yield all([call(onGetTemplatesStart)]);
}

export default templatesSagas;
