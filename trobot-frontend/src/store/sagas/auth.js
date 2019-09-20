import { put, call, delay } from 'redux-saga/effects';

import axios from 'axios';
import axiosBase from '../../axios-post';
import * as actions from '../actions/index';

export function* logoutSaga() {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'userId');
  yield call([localStorage, 'removeItem'], 'email');
  yield call([localStorage, 'removeItem'], 'expirationDate');
  yield call([localStorage, 'removeItem'], 'nickname');
  yield call([localStorage, 'removeItem'], 'img');
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeOutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.authLogout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  let url;
  if (action.authForm.signup) {
    // 회원가입 url
    url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD06IewZiniZT4xSs4lT0dcfCv7gBXPIZ0';
  } else {
    // 로그인 url
    url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD06IewZiniZT4xSs4lT0dcfCv7gBXPIZ0';
  }
  const authData = {
    email: action.authForm.email,
    password: action.authForm.password,
    returnSecureToken: true,
  };

  try {
    // 인증 요청
    const response = yield axios.post(url, authData);

    // 회원가입시 => user컬렉션에 userId를 key값으로 유저정보 저장 + 유저 정보 localStorage 저장
    if (action.authForm.signup) {
      const userId = response.data.localId;
      try {
        const saveUserInfoRes = yield axiosBase.put(
          `/user/${userId}.json`,
          action.authForm,
        );
        yield localStorage.setItem('nickname', saveUserInfoRes.data.nickname);
        yield localStorage.setItem('img', saveUserInfoRes.data.img);
        console.log(`[SUCCESS] SIGN_UP USER INFO SET`);
      } catch (error) {
        console.log(`[FAIL] SIGN_UP USER INFO SET`, error);
      }
    }
    // 로그인시 => user컬렉션에서 유저정보 가져오기 + 유저 정보 localStorage 저장
    else {
      const userId = response.data.localId;
      try {
        const getUserInfoRes = yield axiosBase.get(`/user/${userId}.json`);
        yield localStorage.setItem('nickname', getUserInfoRes.data.nickname);
        yield localStorage.setItem('img', getUserInfoRes.data.img);

        // 팔로잉 유저 목록
        const followingArray = [];
        for (const followingId in getUserInfoRes.data.following) {
          followingArray.push({
            ...getUserInfoRes.data.following[followingId],
          });
        }
        // 팔로워 유저 목록
        const followerArray = [];
        for (const followerId in getUserInfoRes.data.follower) {
          followerArray.push({
            ...getUserInfoRes.data.follower[followerId],
          });
        }

        // 좋아요 포스트 목록
        const likePostArray = [];
        for (const postId in getUserInfoRes.data.likePost) {
          likePostArray.push({
            ...getUserInfoRes.data.likePost[postId],
            postId,
          });
        }

        // 팔로우 목록 스토어에 저장
        yield put(actions.authSaveFollow(followingArray, followerArray));
        // 좋아요 목록 스토어에 저장
        yield put(actions.saveLike(likePostArray));
        console.log(`[SUCCESS] SIGN_IN USER INFO SET`);
      } catch (error) {
        console.log(`[FAIL] SIGN_IN USER INFO SET`, error);
      }
    }

    // 회원가입, 로그인 공통 : 유저 토큰, 아이디, 이메일, 만료일 localStorage 저장
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('userId', response.data.localId);
    yield localStorage.setItem('email', response.data.email);
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000,
    );
    yield localStorage.setItem('expirationDate', expirationDate);
    yield put(actions.checkAuthTimeOut(response.data.expiresIn));
    yield put(
      actions.authSuccess(
        response.data.idToken,
        response.data.localId,
        response.data.email,
      ),
    );
    console.log(`[SUCCESS] AUTH`);
  } catch (error) {
    // 인증 실패시 오류 메세지 반환
    yield put(actions.authFail(error.response.data.error.message));
    console.log(`[FAIL] AUTH`, error.response);
  }
}

export function* checkAuthSaga() {
  const token = yield localStorage.getItem('token');
  const userId = yield localStorage.getItem('userId');

  if (!token) {
    yield put(actions.authLogout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem('expirationDate'),
    );
    if (expirationDate <= new Date()) {
      yield put(actions.authLogout());
    } else {
      const userId = yield localStorage.getItem('userId');
      const email = yield localStorage.getItem('email');
      yield put(actions.authSuccess(token, userId, email));
      yield put(
        actions.checkAuthTimeOut(
          (expirationDate.getTime() - new Date().getTime()) / 1000,
        ),
      );
    }
    // 로그인 되어 있을 때, 팔로우 정보, 좋아요 정보 저장
    yield put(actions.reloadFollow(userId));
    yield put(actions.reloadLike(userId));
  }
}

export function* followSaga(action) {
  const { authorId, followingData } = action;
  const userId = yield localStorage.getItem('userId');
  const nickname = yield localStorage.getItem('nickname');
  const email = yield localStorage.getItem('email');
  const img = yield localStorage.getItem('img');
  const followerData = {
    userId,
    nickname,
    email,
    img,
  };
  // 내 팔로잉에 상대 정보 저장
  try {
    const res = yield axiosBase.put(
      `/user/${userId}/following/${authorId}.json`,
      followingData,
    );
    console.log(`FOLLOWING`, res.data);
    // 상대 유저 팔로워에 내정보 저장
    try {
      const saveOtherSideRes = yield axiosBase.put(
        `/user/${authorId}/follower/${userId}.json`,
        followerData,
      );
      console.log(`FOLLOWER`, saveOtherSideRes.data);
    } catch (e) {
      console.log('FOLLOWER_ERROR', e);
    }
    // 팔로잉, 팔로워 유저 저장 뒤, 리로드
    yield put(actions.reloadFollow(userId));
  } catch (err) {
    console.log('FOLLOWING_ERROR', err);
  }
}

// 팔로우 데이터 리로드
export function* reloadFollowSaga(action) {
  const { userId } = action;

  try {
    const getUserInfoRes = yield axiosBase.get(`/user/${userId}.json`);
    // 팔로잉 유저 목록
    const followingArray = [];
    for (const followingId in getUserInfoRes.data.following) {
      followingArray.push({
        ...getUserInfoRes.data.following[followingId],
      });
    }
    // 팔로워 유저 목록
    const followerArray = [];
    for (const followerId in getUserInfoRes.data.follower) {
      followerArray.push({
        ...getUserInfoRes.data.follower[followerId],
      });
    }
    yield put(actions.authSaveFollow(followingArray, followerArray));
  } catch (err) {
    console.log(err);
  }
}
