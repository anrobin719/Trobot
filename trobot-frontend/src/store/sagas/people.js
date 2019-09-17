import { put } from 'redux-saga/effects';

import axios from '../../axios-post';
import * as actions from '../actions/index';

// eslint-disable-next-line import/prefer-default-export
export function* getPeopleSaga() {
  yield put(actions.getPeopleStart());

  try {
    const res = yield axios.get(`/user.json`);
    const receivedData = [];
    for (const userId in res.data) {
      receivedData.push({
        ...res.data[userId],
        userId,
      });
    }
    yield put(actions.getPeopleSuccess(receivedData));
    console.log('GET_PEOPLE_SUCCESS', res);
  } catch (err) {
    console.log(err);
    yield put(actions.getPeopleFail('GET_PEOPLE_FAIL'));
  }
}
