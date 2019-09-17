import { put } from 'redux-saga/effects';

import axios from '../../axios-post';
import * as actions from '../actions/index';

// eslint-disable-next-line import/prefer-default-export
export function* getPostSaga(action) {
  const { pnum } = action;
  yield put(actions.getPostStart());

  try {
    const res = yield axios.get(`/list/${pnum}.json`);
    console.log('GET_POST_SUCCESS', res);
    yield put(actions.getPostSuccess(res.data));
  } catch (err) {
    console.log('GET_POST_FAIL', err);
    yield put(actions.getPostFail());
  }
}

export function* updatePostSaga(action) {
  const { pnum, updatedPost } = action;
  yield put(actions.updatePostStart());

  try {
    const res = yield axios.put(`/list/${pnum}.json`, updatedPost);
    console.log('UPDATE_POST_SUCCESS', res);
    yield put(actions.updatePostSuccess(res.data));
  } catch (err) {
    console.log('UPDATE_POST_FAIL', err);
    yield put(actions.updatePostFail());
  }
}
