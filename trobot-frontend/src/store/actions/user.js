import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const getUserInfoStart = createAction(actionTypes.GET_USER_INFO_START);
export const getUserInfoSuccess = createAction(
  actionTypes.GET_USER_INFO_SUCCESS,
  userData => userData,
);
export const getUserInfoFail = createAction(actionTypes.GET_USER_INFO_FAIL);
export const getUserInfo = createAction(
  actionTypes.GET_USER_INFO,
  userId => userId,
);
