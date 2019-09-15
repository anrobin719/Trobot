import * as actionTypes from './actionTypes';
import axios from '../../axios-post';

export const writePostStart = () => {
  return {
    type: actionTypes.WRITE_POST_START,
  };
};

export const writePostSuccess = postId => {
  return {
    type: actionTypes.WRITE_POST_SUCCESS,
    postId,
  };
};

export const writePostFail = err => {
  return {
    type: actionTypes.WRITE_POST_FAIL,
    error: err,
  };
};

export const writePost = newPostData => {
  return dispatch => {
    dispatch(writePostStart());
    axios
      .post('/list.json', newPostData)
      .then(res => {
        console.log('WRITE_POST_SUCCESS');
        dispatch(writePostSuccess(res.data.name));
      })
      .catch(err => {
        console.log('WRITE_POST_FAIL');
        dispatch(writePostFail(err));
      });
  };
};
