import { put } from 'redux-saga/effects';

import axios from '../../axios-post';
import * as actions from '../actions/index';

// eslint-disable-next-line import/prefer-default-export
export function* getPostSaga({ payload: pnum }) {
  yield put(actions.getPostStart());

  try {
    const res = yield axios.get(`/list/${pnum}.json`);
    yield put(actions.getPostSuccess(res.data));
    console.log('GET_POST_SUCCESS', res);
  } catch (err) {
    yield put(actions.getPostFail());
    console.log('GET_POST_FAIL', err);
  }
}

export function* updatePostSaga({ payload: { pnum, updatedPost } }) {
  yield put(actions.updatePostStart());

  try {
    const res = yield axios.put(`/list/${pnum}.json`, updatedPost);
    yield put(actions.updatePostSuccess(res.data));
    console.log('UPDATE_POST_SUCCESS', res);
  } catch (err) {
    yield put(actions.updatePostFail());
    console.log('UPDATE_POST_FAIL', err);
  }
}

export function* deletePostSaga({ payload: postId }) {
  yield put(actions.deletePostStart());

  try {
    const res = yield axios.delete(`/list/${postId}.json`);
    yield put(actions.deletePostSuccess());
    yield put(actions.initDelete());
    console.log('DELETE_POST_SUCCESS', res);
  } catch (err) {
    yield put(actions.deletePostFail());
    console.log('DELETE_POST_FAIL', err);
  }
}

export function* deleteCommentSaga({ payload: { postId, commentId } }) {
  yield put(actions.deleteCommentStart());

  try {
    const res = yield axios.delete(
      `/list/${postId}/comments/${commentId}.json`,
    );
    yield put(actions.deleteCommentSuccess());
    console.log('DELETE_COMMENT_SUCCESS', res);
  } catch (err) {
    yield put(actions.deleteCommentFail());
    console.log('DELETE_COMMENT_FAIL', err);
  }
}

export function* likePostSaga({ payload: { postId, post, likeBtn } }) {
  const userId = localStorage.getItem('userId');
  const likeData = { userId };

  if (!likeBtn) {
    try {
      const res = yield axios.put(
        `/list/${postId}/like/${userId}.json`,
        likeData,
      );

      try {
        const saveMySideRes = yield axios.put(
          `/user/${userId}/likePost/${postId}.json`,
          post,
        );
        console.log(`SAVE_LIKE_TO_MY_DATA`, saveMySideRes.data);
      } catch (e) {
        console.log(`SAVE_LIKE_TO_MY_DATA_ERROR`, e);
      }
      console.log('LIKE_POST_SUCCESS', res);
      
      yield put(actions.reloadLike(userId));
    } catch (err) {
      console.log('LIKE_POST_FAIL', err);
    }
  } else {
    try {
      const res = yield axios.delete(`/list/${postId}/like/${userId}.json`);

      try {
        const deleteMySideRes = yield axios.delete(
          `/user/${userId}/likePost/${postId}.json`,
        );
        console.log(`DELETE_LIKE_TO_MY_DATA`, deleteMySideRes.data);
      } catch (e) {
        console.log(`DELETE_LIKE_TO_MY_DATA_ERROR`, e);
      }
      console.log('DELETE_LIKE_POST_SUCCESS', res);
    
      yield put(actions.reloadLike(userId));
    } catch (err) {
      console.log('DELETE_LIKE_POST_FAIL', err);
    }
  }
}

export function* reloadLikeSaga({ payload: userId }) {
  try {
    const getlikePostRes = yield axios.get(`/user/${userId}/likePost.json`);
    const likePostArray = [];
    for (const postId in getlikePostRes.data) {
      likePostArray.push({
        ...getlikePostRes.data[postId],
        postId,
      });
    }
    
    yield put(actions.saveLike(likePostArray));
  } catch (err) {
    console.log(err);
  }
}
