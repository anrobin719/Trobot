import * as actionTypes from './actionTypes';

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

export const editPostStart = () => {
  return {
    type: actionTypes.EDIT_POST_START,
  };
};
export const editPostSuccess = postId => {
  return {
    type: actionTypes.EDIT_POST_SUCCESS,
    postId,
  };
};
export const editPostFail = () => {
  return {
    type: actionTypes.EDIT_POST_FAIL,
  };
};
export const editPost = (pnum, postData) => {
  return {
    type: actionTypes.EDIT_POST,
    pnum,
    postData,
  };
};

export const initEdit = () => {
  return {
    type: actionTypes.INIT_EDIT,
  };
};
