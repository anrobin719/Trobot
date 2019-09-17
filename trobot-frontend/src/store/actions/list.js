import * as actionTypes from './actionTypes';
import axios from '../../axios-post';

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
  return dispatch => {
    dispatch(getListStart());

    let url;
    if (tag) {
      url = `/list.json?orderBy="tag"&equalTo="${tag}"`;
    } else {
      url = `/list.json`;
    }
    axios
      .get(url)
      .then(res => {
        const receivedData = [];
        for (const postId in res.data) {
          receivedData.push({
            ...res.data[postId],
            postId,
          });
        }
        dispatch(getListSuccess(receivedData));
        console.log('GET_LIST_SUCCESS', receivedData);
      })
      .catch(err => {
        console.log(err);
        dispatch(getListFail('GET_LIST_FAIL'));
      });
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
  return dispatch => {
    dispatch(getMyListStart());
    axios
      .get(`/list.json?orderBy="authorId"&equalTo="${userId}"`)
      .then(res => {
        const receivedData = [];
        for (const postId in res.data) {
          receivedData.push({
            ...res.data[postId],
            postId,
          });
        }
        dispatch(getMyListSuccess(receivedData));
        console.log('GET_MY_LIST_SUCCESS', receivedData);
      })
      .catch(err => {
        console.log('GET_MY_LIST_FAIL', err);
        dispatch(getMyListFail());
      });
  };
};
