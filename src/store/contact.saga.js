import { put, takeEvery, call, fork } from 'redux-saga/effects';

import {
    LOAD_CONTACT,
    LOAD_CONTACT_SUCCESS,
    LOAD_CONTACT_ERROR
} from './contact.actions'

import { loadContactsApi } from './contact.api';

export function* loadingContactsAsync() {
    try {
      const data = yield call(loadContactsApi);
      const contacts = [...data];
  
      yield put({ type: LOAD_CONTACT_SUCCESS, payload: contacts });
    } catch (err) {
      yield put({ type: LOAD_CONTACT_ERROR, payload: err.message });
    }
  }

  export function* watchLoadingContactsAsync() {
    yield takeEvery(LOAD_CONTACT, loadingContactsAsync);
  }

  export function* contactSaga() {
    yield fork(watchLoadingContactsAsync);
  }