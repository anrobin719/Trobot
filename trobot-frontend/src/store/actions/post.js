import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const getPostStart = createAction(actionTypes.GET_POST_START);
export const getPostSuccess = createAction(
  actionTypes.GET_POST_SUCCESS,
  postData => postData,
);
export const getPostFail = createAction(actionTypes.GET_POST_FAIL);
export const getPost = createAction(actionTypes.GET_POST, pnum => pnum);

export const updatePostStart = createAction(actionTypes.UPDATE_POST_START);
export const updatePostSuccess = createAction(
  actionTypes.UPDATE_POST_SUCCESS,
  postData => postData,
);
export const updatePostFail = createAction(actionTypes.UPDATE_POST_FAIL);
export const updatePost = createAction(
  actionTypes.UPDATE_POST,
  (pnum, updatedPost) => ({ pnum, updatedPost }),
);

export const storePostId = createAction(
  actionTypes.STORE_POST_ID,
  (postId, postTag) => ({ postId, postTag }),
);

export const initDelete = createAction(actionTypes.INIT_DELETE);
export const deletePostStart = createAction(actionTypes.DELETE_POST_START);
export const deletePostSuccess = createAction(actionTypes.DELETE_POST_SUCCESS);
export const deletePostFail = createAction(actionTypes.DELETE_POST_FAIL);
export const deletePost = createAction(
  actionTypes.DELETE_POST,
  postId => postId,
);

export const deleteCommentStart = createAction(
  actionTypes.DELETE_COMMENT_START,
);
export const deleteCommentSuccess = createAction(
  actionTypes.DELETE_COMMENT_SUCCESS,
);
export const deleteCommentFail = createAction(actionTypes.DELETE_COMMENT_FAIL);
export const deleteComment = createAction(
  actionTypes.DELETE_COMMENT,
  (postId, commentId) => ({ postId, commentId }),
);

// 포스트의 좋아요 클릭 시 실행
export const likePost = createAction(
  actionTypes.LIKE_POST,
  (postId, post, likeBtn) => ({ postId, post, likeBtn }),
);
// 좋아요 클릭 시, 로그인 시 실행
export const reloadLike = createAction(
  actionTypes.RELOAD_LIKE,
  userId => userId,
);
// 좋아요 목록 스토어에 저장
export const saveLike = createAction(
  actionTypes.SAVE_LIKE,
  likePostArray => likePostArray,
);
