import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

// 로그인 또는 회원가입 시 auth가 트리거 되면, authStart부터 시작합니다.
export const authStart = createAction(actionTypes.AUTH_START);
export const authSuccess = createAction(
  actionTypes.AUTH_SUCCESS,
  ({ token, userId, email }) => ({ token, userId, email }),
);
export const authFail = createAction(
  actionTypes.AUTH_FAIL,
  errorMessage => errorMessage,
);

// 로그아웃시 실행됩니다.
export const authLogout = createAction(actionTypes.AUTH_INITIATE_LOGOUT);
export const logoutSucceed = createAction(actionTypes.AUTH_LOGOUT);

export const checkAuthTimeOut = createAction(
  actionTypes.AUTH_CHECK_TIMEOUT,
  expirationTime => expirationTime,
);

// 로그인 또는 회원가입 시에 실행됩니다.
export const auth = createAction(actionTypes.AUTH_USER, authForm => authForm);

// 로그인 상태를 확인합니다. 로그인 되어 있을 때, 팔로우 정보, 좋아요 정보 저장합니다.
export const checkAuth = createAction(actionTypes.AUTH_CHECK);

// 팔로우 관련 액션입니다.
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
