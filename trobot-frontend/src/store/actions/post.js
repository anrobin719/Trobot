import * as actionTypes from './actionTypes';
import axios from '../../axios-post';

export const getPostStart = () => {
  return {
    type: actionTypes.GET_POST_START,
  };
};

export const getPostSuccess = data => {
  return {
    type: actionTypes.GET_POST_SUCCESS,
    postData: data,
  };
};

export const getPostFail = () => {
  return {
    type: actionTypes.GET_POST_FAIL,
  };
};

export const getPost = pnum => {
  return dispatch => {
    dispatch(getPostStart());
    axios
      .get(`/list/${pnum}.json`)
      .then(res => {
        console.log('GET_POST_SUCCESS', res);
        dispatch(getPostSuccess(res.data));
      })
      .catch(err => {
        console.log('GET_POST_FAIL', err);
        dispatch(getPostFail());
      });
  };
};

export const updatePostStart = () => {
  return {
    type: actionTypes.UPDATE_POST_START,
  };
};

export const updatePostSuccess = data => {
  return {
    type: actionTypes.UPDATE_POST_SUCCESS,
    postData: data,
  };
};

export const updatePostFail = () => {
  return {
    type: actionTypes.UPDATE_POST_FAIL,
  };
};

export const updatePost = (pnum, updatedPost) => {
  return dispatch => {
    dispatch(updatePostStart());
    axios
      .put(`/list/${pnum}.json`, updatedPost)
      .then(res => {
        console.log('UPDATE_POST_SUCCESS', res);
        dispatch(updatePostSuccess(res.data));
      })
      .catch(err => {
        console.log('UPDATE_POST_FAIL', err);
        dispatch(updatePostFail());
      });
  };
};

export const storePostId = postId => {
  return {
    type: actionTypes.STORE_POST_ID,
    postId,
  };
};
