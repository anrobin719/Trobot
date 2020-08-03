import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const writePostStart = createAction(actionTypes.WRITE_POST_START);
export const writePostSuccess = createAction(
  actionTypes.WRITE_POST_SUCCESS,
  postId => postId,
);
export const writePostFail = createAction(actionTypes.WRITE_POST_FAIL);
export const writePost = createAction(
  actionTypes.WRITE_POST,
  newPostData => newPostData,
);

export const editPostStart = createAction(actionTypes.EDIT_POST_START);
export const editPostSuccess = createAction(
  actionTypes.EDIT_POST_SUCCESS,
  postId => postId,
);
export const editPostFail = createAction(actionTypes.EDIT_POST_FAIL);
export const editPost = createAction(
  actionTypes.EDIT_POST,
  (pnum, postData) => ({ pnum, postData }),
);

export const initEdit = createAction(actionTypes.INIT_EDIT);
