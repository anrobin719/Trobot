import * as actionTypes from './actionTypes';

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
