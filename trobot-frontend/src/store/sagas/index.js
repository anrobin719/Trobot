import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  authUserSaga,
  logoutSaga,
  checkAuthTimeOutSaga,
  checkAuthSaga,
} from './auth';
import { getPostSaga, updatePostSaga, deletePostSaga } from './post';
import { writePostSaga } from './editor';
import { getListSaga, getMyListSaga } from './list';
import { getPeopleSaga } from './people';
import { getUserInfoSaga } from './user';

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
  yield all([
    takeEvery(actionTypes.GET_POST, getPostSaga),
    takeEvery(actionTypes.UPDATE_POST, updatePostSaga),
    takeEvery(actionTypes.DELETE_POST, deletePostSaga),
  ]);
}

export function* watchEditor() {
  yield takeEvery(actionTypes.WRITE_POST, writePostSaga);
}

export function* watchList() {
  yield all([
    takeEvery(actionTypes.GET_LIST, getListSaga),
    takeEvery(actionTypes.GET_MY_LIST, getMyListSaga),
  ]);
}

export function* watchPeople() {
  yield takeEvery(actionTypes.GET_PEOPLE, getPeopleSaga);
}

export function* watchUser() {
  yield takeEvery(actionTypes.GET_USER_INFO, getUserInfoSaga);
}
