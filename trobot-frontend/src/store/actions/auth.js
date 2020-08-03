import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const authStart = createAction(actionTypes.AUTH_START);
export const authSuccess = createAction(
  actionTypes.AUTH_SUCCESS,
  ({ token, userId, email }) => ({ token, userId, email }),
);
export const authFail = createAction(
  actionTypes.AUTH_FAIL,
  errorMessage => errorMessage,
);

export const authLogout = createAction(actionTypes.AUTH_INITIATE_LOGOUT);
export const logoutSucceed = createAction(actionTypes.AUTH_LOGOUT);

export const checkAuthTimeOut = createAction(
  actionTypes.AUTH_CHECK_TIMEOUT,
  expirationTime => expirationTime,
);

export const auth = createAction(actionTypes.AUTH_USER, authForm => authForm);

export const checkAuth = createAction(actionTypes.AUTH_CHECK);

export const authSaveFollow = createAction(
  actionTypes.AUTH_SAVE_FOLLOW,
  ({ following, follower }) => ({ following, follower }),
);
export const follow = createAction(
  actionTypes.FOLLOW,
  (authorId, followingData, followBtn) => ({
    authorId,
    followingData,
    followBtn,
  }),
);
export const reloadFollow = createAction(
  actionTypes.RELOAD_FOLLOW,
  userId => userId,
);
