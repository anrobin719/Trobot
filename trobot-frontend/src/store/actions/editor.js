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
  return {
    type: actionTypes.WRITE_POST,
    newPostData,
  };
};
