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

export const checkAuth = () => {
  return {
    type: actionTypes.AUTH_CHECK,
  };
};
