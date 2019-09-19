import { put } from 'redux-saga/effects';

import axios from '../../axios-post';
import * as actions from '../actions/index';

// eslint-disable-next-line import/prefer-default-export
export function* getPostSaga(action) {
  const { pnum } = action;
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

export function* updatePostSaga(action) {
  const { pnum, updatedPost } = action;
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

export function* deletePostSaga(action) {
  const { postId } = action;
  yield put(actions.deletePostStart());

  try {
    const res = yield axios.delete(`/list/${postId}.json`);
    yield put(actions.deletePostSuccess());
    // 경로이동으로 남겨둔 tag 삭제, deleted 기본 값으로
    yield put(actions.initDelete());
    console.log('DELETE_POST_SUCCESS', res);
  } catch (err) {
    yield put(actions.deletePostFail());
    console.log('DELETE_POST_FAIL', err);
  }
}

export function* deleteCommentSaga(action) {
  const { postId, commentId } = action;
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

// 좋아요 저장
export function* likePostSaga(action) {
  const { postId } = action;
  const userId = localStorage.getItem('userId');
  const likeData = { name: userId };

  try {
    // 포스트에 좋아요 저장 - 유저 아이디를 key 값으로
    const res = yield axios.put(
      `/list/${postId}/like/${userId}.json`,
      likeData,
    );
    // 내 데이터에 좋아요 정보 저장 - 포스트 아이디를 key 값으로
    try {
      const saveMySideRes = yield axios.put(
        `/user/${userId}/likePost/${postId}.json`,
        likeData,
      );
      console.log(`SAVE_LIKE_TO_MY_DATA`, saveMySideRes.data);
    } catch (e) {
      console.log(`SAVE_LIKE_TO_MY_DATA_ERROR`, e);
    }
    console.log('LIKE_POST_SUCCESS', res);
    // 성공시 리로드
    yield put(actions.reloadLike(userId));
  } catch (err) {
    console.log('LIKE_POST_FAIL', err);
  }
}

// 좋아요 데이터 리로드
export function* reloadLikeSaga(action) {
  const { userId } = action;
  try {
    // 유저의 좋아요 포스트 정보 가져오기
    const getlikePostRes = yield axios.get(`/user/${userId}/likePost.json`);
    // array 목록을 만들어 저장
    const likePostArray = [];
    for (const likePostId in getlikePostRes.data) {
      likePostArray.push({
        // ...getlikePostRes.data[likePostId],
        likePostId,
      });
    }
    // 가져온 데이터 스토어에 저장
    yield put(actions.saveLike(likePostArray));
  } catch (err) {
    console.log(err);
  }
}
