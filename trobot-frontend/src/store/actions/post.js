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

export const deleteCommentStart = () => {
  return {
    type: actionTypes.DELETE_COMMENT_START,
  };
};

export const deleteCommentSuccess = () => {
  return {
    type: actionTypes.DELETE_COMMENT_SUCCESS,
  };
};

export const deleteCommentFail = () => {
  return {
    type: actionTypes.DELETE_COMMENT_FAIL,
  };
};

export const deleteComment = (postId, commentId) => {
  return {
    type: actionTypes.DELETE_COMMENT,
    postId,
    commentId,
  };
};

export const likePost = postId => {
  return {
    type: actionTypes.LIKE_POST,
    postId,
  };
};

export const reloadLike = userId => {
  return {
    type: actionTypes.RELOAD_LIKE,
    userId,
  };
};

export const saveLike = likePostArray => {
  return {
    type: actionTypes.SAVE_LIKE,
    likePostArray,
  };
};
