import * as actionTypes from './actionTypes';

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
  return {
    type: actionTypes.GET_POST,
    pnum,
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
  return {
    type: actionTypes.UPDATE_POST,
    pnum,
    updatedPost,
  };
};

export const storePostId = (postId, postTag) => {
  return {
    type: actionTypes.STORE_POST_ID,
    postId,
    postTag,
  };
};

export const initDelete = () => {
  console.log(`INIT DELETE RUN`);
  return {
    type: actionTypes.INIT_DELETE,
  };
};

export const deletePostStart = () => {
  return {
    type: actionTypes.DELETE_POST_START,
  };
};
export const deletePostSuccess = () => {
  return {
    type: actionTypes.DELETE_POST_SUCCESS,
  };
};
export const deletePostFail = () => {
  return {
    type: actionTypes.DELETE_POST_FAIL,
  };
};
export const deletePost = postId => {
  return {
    type: actionTypes.DELETE_POST,
    postId,
  };
};
