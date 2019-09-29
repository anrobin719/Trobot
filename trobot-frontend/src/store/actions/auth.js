import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId, email) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId,
    email,
  };
};

export const authFail = errorMessage => {
  return {
    type: actionTypes.AUTH_FAIL,
    errorMessage,
  };
};

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT,
  };
};

export const logoutSucceed = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeOut = expirationTime => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime,
  };
};

export const auth = authForm => {
  return {
    type: actionTypes.AUTH_USER,
    authForm,
  };
};

// 로그인 상태를 확인합니다. 로그인 되어 있을 때, 팔로우 정보, 좋아요 정보 저장합니다.
export const checkAuth = () => {
  return {
    type: actionTypes.AUTH_CHECK,
  };
};

// 팔로우 관련 액션
export const authSaveFollow = (following, follower) => {
  return {
    type: actionTypes.AUTH_SAVE_FOLLOW,
    following,
    follower,
  };
};

export const follow = (authorId, followingData) => {
  return {
    type: actionTypes.FOLLOW,
    authorId,
    followingData,
  };
};

export const reloadFollow = userId => {
  return {
    type: actionTypes.RELOAD_FOLLOW,
    userId,
  };
};
