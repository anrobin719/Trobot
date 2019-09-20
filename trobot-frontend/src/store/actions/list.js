import * as actionTypes from './actionTypes';

// 글로벌 목록 관련
export const getListStart = () => {
  return {
    type: actionTypes.GET_LIST_START,
  };
};

export const getListSuccess = tagListData => {
  return {
    type: actionTypes.GET_LIST_SUCCESS,
    listData: tagListData,
  };
};

export const getListFail = () => {
  return {
    type: actionTypes.GET_LIST_FAIL,
  };
};

export const getList = tag => {
  return {
    type: actionTypes.GET_LIST,
    tag,
  };
};

// 작성 목록 관련
export const getMyListStart = () => {
  return {
    type: actionTypes.GET_MY_LIST_START,
  };
};

export const getMyListSuccess = myList => {
  return {
    type: actionTypes.GET_MY_LIST_SUCCESS,
    myList,
  };
};

export const getMyListFail = () => {
  return {
    type: actionTypes.GET_MY_LIST_FAIL,
  };
};

export const getMyList = userId => {
  return {
    type: actionTypes.GET_MY_LIST,
    userId,
  };
};

// 본인 페이지가 아닐 경우, 유저 좋아요 목록 가져오기
export const getLikeListStart = () => {
  return {
    type: actionTypes.GET_LIKE_LIST_START,
  };
};

export const getLikeListSuccess = likeList => {
  return {
    type: actionTypes.GET_LIKE_LIST_SUCCESS,
    likeList,
  };
};

export const getLikeListFail = () => {
  return {
    type: actionTypes.GET_LIKE_LIST_FAIL,
  };
};

export const getLikeList = userId => {
  return {
    type: actionTypes.GET_LIKE_LIST,
    userId,
  };
};

// 팔로우 리스트 가져오기
export const getFollowListStart = () => {
  return {
    type: actionTypes.GET_FOLLOW_LIST_START,
  };
};

export const getFollowListSuccess = (followingList, followerList) => {
  return {
    type: actionTypes.GET_FOLLOW_LIST_SUCCESS,
    followingList,
    followerList,
  };
};

export const getFollowListFail = () => {
  return {
    type: actionTypes.GET_FOLLOW_LIST_FAIL,
  };
};

export const getFollowList = userId => {
  return {
    type: actionTypes.GET_FOLLOW_LIST,
    userId,
  };
};
