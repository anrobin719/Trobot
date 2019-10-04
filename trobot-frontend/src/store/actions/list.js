import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

// 글로벌 목록 관련
export const getListStart = createAction(actionTypes.GET_LIST_START);
export const getListSuccess = createAction(
  actionTypes.GET_LIST_SUCCESS,
  listData => listData,
);
export const getListFail = createAction(actionTypes.GET_LIST_FAIL);
export const getList = createAction(actionTypes.GET_LIST, tag => tag);

// 작성 목록 관련
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

// 본인 페이지가 아닐 경우, 유저 좋아요 목록 가져오기
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

// 팔로우 리스트 가져오기
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
