import { put } from 'redux-saga/effects';

import axios from '../../axios-post';
import * as actions from '../actions/index';

// eslint-disable-next-line import/prefer-default-export
export function* writePostSaga(action) {
  const { newPostData } = action;
  yield put(actions.writePostStart());

  try {
    const res = yield axios.post('/list.json', newPostData);
    console.log('WRITE_POST_SUCCESS');
    yield put(actions.writePostSuccess(res.data.name));
  } catch (err) {
    console.log('WRITE_POST_FAIL');
    yield put(actions.writePostFail(err));
  }
}
