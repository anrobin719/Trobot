import * as actionTypes from './actionTypes';
import axios from '../../axios-post';

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
  return dispatch => {
    dispatch(getUserInfoStart());
    axios
      .get(`/user/${userId}.json`)
      .then(res => {
        console.log('GET_USER_INFO_SUCCESS', res.data);
        dispatch(getUserInfoSuccess(res.data));
      })
      .catch(err => {
        console.log('GET_USER_INFO_FAIL', err);
        dispatch(getUserInfoFail());
      });
  };
};
