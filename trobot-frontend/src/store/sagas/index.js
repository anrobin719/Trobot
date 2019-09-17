import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  authUserSaga,
  logoutSaga,
  checkAuthTimeOutSaga,
  checkAuthSaga,
} from './auth';

// eslint-disable-next-line import/prefer-default-export
export function* watchAuth() {
  yield all([
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga),
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeOutSaga),
    yield takeEvery(actionTypes.AUTH_CHECK, checkAuthSaga),
  ]);
}
