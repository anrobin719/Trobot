import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  authUserSaga,
  logoutSaga,
  checkAuthTimeOutSaga,
  checkAuthSaga,
  followSaga,
  reloadFollowSaga,
} from './auth';
import {
  getPostSaga,
  updatePostSaga,
  deletePostSaga,
  deleteCommentSaga,
  likePostSaga,
  reloadLikeSaga,
} from './post';
import { writePostSaga, editPostSaga } from './editor';
import {
  getListSaga,
  getMyListSaga,
  getLikeListSaga,
  getFollowListSaga,
} from './list';
import { getPeopleSaga } from './people';
import { getUserInfoSaga } from './user';

// eslint-disable-next-line import/prefer-default-export
export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeOutSaga),
    takeEvery(actionTypes.AUTH_CHECK, checkAuthSaga),
    takeEvery(actionTypes.FOLLOW, followSaga),
    takeEvery(actionTypes.RELOAD_FOLLOW, reloadFollowSaga),
  ]);
}

export function* watchPost() {
  yield all([
    takeEvery(actionTypes.GET_POST, getPostSaga),
    takeEvery(actionTypes.UPDATE_POST, updatePostSaga),
    takeEvery(actionTypes.DELETE_POST, deletePostSaga),
    takeEvery(actionTypes.DELETE_COMMENT, deleteCommentSaga),
    takeEvery(actionTypes.LIKE_POST, likePostSaga),
    takeEvery(actionTypes.RELOAD_LIKE, reloadLikeSaga),
  ]);
}

export function* watchEditor() {
  yield all([
    takeEvery(actionTypes.WRITE_POST, writePostSaga),
    takeEvery(actionTypes.EDIT_POST, editPostSaga),
  ]);
}

export function* watchList() {
  yield all([
    takeEvery(actionTypes.GET_LIST, getListSaga),
    takeEvery(actionTypes.GET_MY_LIST, getMyListSaga),
    takeEvery(actionTypes.GET_LIKE_LIST, getLikeListSaga),
    takeEvery(actionTypes.GET_FOLLOW_LIST, getFollowListSaga),
  ]);
}

export function* watchPeople() {
  yield takeEvery(actionTypes.GET_PEOPLE, getPeopleSaga);
}

export function* watchUser() {
  yield takeEvery(actionTypes.GET_USER_INFO, getUserInfoSaga);
}
