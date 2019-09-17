import * as actionTypes from './actionTypes';

export const getUserInfoStart = () => {
  return {
    type: actionTypes.GET_USER_INFO_START,
  };
};

export const getUserInfoSuccess = userData => {
  return {
    type: actionTypes.GET_USER_INFO_SUCCESS,
    userData,
  };
};

export const getUserInfoFail = () => {
  return {
    type: actionTypes.GET_USER_INFO_FAIL,
  };
};

export const getUserInfo = userId => {
  return {
    type: actionTypes.GET_USER_INFO,
    userId,
  };
};
