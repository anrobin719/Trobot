import { put } from 'redux-saga/effects';

import axios from '../../axios-post';
import * as actions from '../actions/index';

// eslint-disable-next-line import/prefer-default-export
export function* getPostSaga(action) {
  const { pnum } = action;
  yield put(actions.getPostStart());

  try {
    const res = yield axios.get(`/list/${pnum}.json`);
    yield put(actions.getPostSuccess(res.data));
    console.log('GET_POST_SUCCESS', res);
  } catch (err) {
    yield put(actions.getPostFail());
    console.log('GET_POST_FAIL', err);
  }
}

export function* updatePostSaga(action) {
  const { pnum, updatedPost } = action;
  yield put(actions.updatePostStart());

  try {
    const res = yield axios.put(`/list/${pnum}.json`, updatedPost);
    yield put(actions.updatePostSuccess(res.data));
    console.log('UPDATE_POST_SUCCESS', res);
  } catch (err) {
    yield put(actions.updatePostFail());
    console.log('UPDATE_POST_FAIL', err);
  }
}

export function* deletePostSaga(action) {
  const { postId } = action;
  yield put(actions.deletePostStart());

  try {
    const res = yield axios.delete(`/list/${postId}.json`);
    yield put(actions.deletePostSuccess());
    // 경로이동으로 남겨둔 tag 삭제, deleted 기본 값으로
    yield put(actions.initDelete());
    console.log('DELETE_POST_SUCCESS', res);
  } catch (err) {
    yield put(actions.deletePostFail());
    console.log('DELETE_POST_FAIL', err);
  }
}
