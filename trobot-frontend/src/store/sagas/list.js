import { put } from 'redux-saga/effects';

import axios from '../../axios-post';
import * as actions from '../actions/index';

// eslint-disable-next-line import/prefer-default-export
export function* getListSaga(action) {
  const { tag } = action;
  yield put(actions.getListStart());

  let url;
  if (tag) {
    url = `/list.json?orderBy="tag"&equalTo="${tag}"`;
  } else {
    url = `/list.json`;
  }

  try {
    const res = yield axios.get(url);
    const receivedData = [];
    for (const postId in res.data) {
      receivedData.push({
        ...res.data[postId],
        postId,
      });
    }
    yield put(actions.getListSuccess(receivedData));
    console.log('GET_LIST_SUCCESS', receivedData);
  } catch (err) {
    console.log(err);
    yield put(actions.getListFail('GET_LIST_FAIL'));
  }
}
