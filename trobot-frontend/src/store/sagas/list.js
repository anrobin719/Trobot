import { put } from 'redux-saga/effects';

import axios from '../../axios-post';
import * as actions from '../actions/index';

// eslint-disable-next-line import/prefer-default-export
export function* getListSaga({ payload: tag }) {
  yield put(actions.getListStart());

  let url;
  if (tag) {
    url = `/list.json?orderBy="tag"&equalTo="${tag}"`;
  } else {
    url = `/list.json`;
  }

  try {
    const res = yield axios.get(url);
    const receivedData = [];
    for (const postId in res.data) {
      if (!res.data.hasOwnProperty(postId)) continue;
      receivedData.push({
        ...res.data[postId],
        postId,
      });
    }
    yield put(actions.getListSuccess(receivedData));
    console.log('GET_LIST_SUCCESS', receivedData);
  } catch (err) {
    console.log(err);
    yield put(actions.getListFail('GET_LIST_FAIL'));
  }
}

export function* getMyListSaga({ payload: userId }) {
  yield put(actions.getMyListStart());

  try {
    const res = yield axios.get(
      `/list.json?orderBy="authorId"&equalTo="${userId}"`,
    );
    const receivedData = [];
    for (const postId in res.data) {
      receivedData.push({
        ...res.data[postId],
        postId,
      });
    }
    yield put(actions.getMyListSuccess(receivedData));
    console.log('GET_MY_LIST_SUCCESS', receivedData);
  } catch (err) {
    console.log('GET_MY_LIST_FAIL', err);
    yield put(actions.getMyListFail());
  }
}

export function* getLikeListSaga({ payload: userId }) {
  yield put(actions.getLikeListStart());

  try {
    const res = yield axios.get(`/user/${userId}/likePost.json`);
    const receivedData = [];
    for (const postId in res.data) {
      receivedData.push({
        ...res.data[postId],
        postId,
      });
    }
    yield put(actions.getLikeListSuccess(receivedData));
    console.log('GET_LIKE_LIST_SUCCESS', receivedData);
  } catch (err) {
    console.log('GET_LIKE_LIST_FAIL', err);
    yield put(actions.getLikeListFail());
  }
}

export function* getFollowListSaga({ payload: userId }) {
  yield put(actions.getFollowListStart());

  try {
    const followingList = [];
    const followerList = [];
    
    const followingRes = yield axios.get(`/user/${userId}/following.json`);
    for (const userId in followingRes.data) {
      followingList.push({
        ...followingRes.data[userId],
      });
    }

    try {
      const followerRes = yield axios.get(`/user/${userId}/follower.json`);
      for (const userId in followerRes.data) {
        followerList.push({
          ...followerRes.data[userId],
        });
      }
    } catch (err) {
      console.log('GET_FOLLOWER_LIST_FAIL', err);
    }
    
    yield put(actions.getFollowListSuccess({ followingList, followerList }));
    console.log('GET_FOLLOW_LIST_SUCCESS', followingList, followerList);
  } catch (err) {
    yield put(actions.getFollowListFail());
    console.log('GET_FOLLOW_LIST_FAIL', err);
  }
}
