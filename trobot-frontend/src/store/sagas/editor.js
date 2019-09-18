import { put } from 'redux-saga/effects';

import axios from '../../axios-post';
import * as actions from '../actions/index';

// eslint-disable-next-line import/prefer-default-export
export function* writePostSaga(action) {
  const { newPostData } = action;
  yield put(actions.writePostStart());

  try {
    const res = yield axios.post('/list.json', newPostData);
    yield put(actions.writePostSuccess(res.data.name));
    console.log('[SAGA] WRITE_POST_SUCCESS', res.data.name);
  } catch (err) {
    yield put(actions.writePostFail(err));
    console.log('[SAGA] WRITE_POST_FAIL');
  }
}

export function* editPostSaga(action) {
  const { pnum, postData } = action;
  yield put(actions.editPostStart());

  try {
    const res = yield axios.put(`/list/${pnum}.json`, postData);
    yield put(actions.editPostSuccess(pnum));
    // 에디트 state에 저장되어있는 postId 삭제
    yield put(actions.initEdit());
    console.log('[SAGA] EDIT_POST_SUCCESS', res);
  } catch (err) {
    yield put(actions.editPostFail(err));
    console.log('[SAGA] EDIT_POST_FAIL');
  }
}
