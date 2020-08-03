import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const getListStart = createAction(actionTypes.GET_LIST_START);
export const getListSuccess = createAction(
  actionTypes.GET_LIST_SUCCESS,
  listData => listData,
);
export const getListFail = createAction(actionTypes.GET_LIST_FAIL);
export const getList = createAction(actionTypes.GET_LIST, tag => tag);

export const getMyListStart = createAction(actionTypes.GET_MY_LIST_START);
export const getMyListSuccess = createAction(
  actionTypes.GET_MY_LIST_SUCCESS,
  myList => myList,
);
export const getMyListFail = createAction(actionTypes.GET_MY_LIST_FAIL);
export const getMyList = createAction(
  actionTypes.GET_MY_LIST,
  userId => userId,
);

export const getLikeListStart = createAction(actionTypes.GET_LIKE_LIST_START);
export const getLikeListSuccess = createAction(
  actionTypes.GET_LIKE_LIST_SUCCESS,
  likeList => likeList,
);
export const getLikeListFail = createAction(actionTypes.GET_LIKE_LIST_FAIL);
export const getLikeList = createAction(
  actionTypes.GET_LIKE_LIST,
  userId => userId,
);

export const getFollowListStart = createAction(
  actionTypes.GET_FOLLOW_LIST_START,
);
export const getFollowListSuccess = createAction(
  actionTypes.GET_FOLLOW_LIST_SUCCESS,
  ({ followingList, followerList }) => ({
    followingList,
    followerList,
  }),
);
export const getFollowListFail = createAction(actionTypes.GET_FOLLOW_LIST_FAIL);
export const getFollowList = createAction(
  actionTypes.GET_FOLLOW_LIST,
  userId => userId,
);
