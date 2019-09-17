import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  authUserSaga,
  logoutSaga,
  checkAuthTimeOutSaga,
  checkAuthSaga,
} from './auth';
import { getPostSaga, updatePostSaga } from './post';
import { writePostSaga } from './editor';
import { getListSaga } from './list';

// eslint-disable-next-line import/prefer-default-export
export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeOutSaga),
    takeEvery(actionTypes.AUTH_CHECK, checkAuthSaga),
  ]);
}

export function* watchPost() {
  yield all([takeEvery(actionTypes.GET_POST, getPostSaga)]);
  yield all([takeEvery(actionTypes.UPDATE_POST, updatePostSaga)]);
}

export function* watchEditor() {
  yield all([takeEvery(actionTypes.WRITE_POST, writePostSaga)]);
}

export function* watchList() {
  yield all([takeEvery(actionTypes.GET_LIST, getListSaga)]);
}
