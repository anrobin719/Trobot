import { put } from 'redux-saga/effects';

import axios from '../../axios-post';
import * as actions from '../actions/index';

// eslint-disable-next-line import/prefer-default-export
export function* getUserInfoSaga({ payload: userId }) {
  yield put(actions.getUserInfoStart());

  try {
    const res = yield axios.get(`/user/${userId}.json`);
    console.log('GET_USER_INFO_SUCCESS', res.data);
    yield put(actions.getUserInfoSuccess(res.data));
  } catch (err) {
    console.log('GET_USER_INFO_FAIL', err);
    yield put(actions.getUserInfoFail());
  }
}
