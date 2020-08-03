import { put, call, delay } from 'redux-saga/effects';

import dotenv from 'dotenv';
import axios from 'axios';
import axiosBase from '../../axios-post';
import * as actions from '../actions/index';

dotenv.config();
const { REACT_APP_FIREBASE_API_KEY } = process.env;

export function* logoutSaga() {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'userId');
  yield call([localStorage, 'removeItem'], 'email');
  yield call([localStorage, 'removeItem'], 'expirationDate');
  yield call([localStorage, 'removeItem'], 'nickname');
  yield call([localStorage, 'removeItem'], 'img');
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeOutSaga({ payload: expirationTime }) {
  yield delay(expirationTime * 1000);
  yield put(actions.authLogout());
}

export function* authUserSaga({ payload: authForm }) {
  yield put(actions.authStart());
  let url;
  if (authForm.signup) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${REACT_APP_FIREBASE_API_KEY}`;
  } else {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${REACT_APP_FIREBASE_API_KEY}`;
  }
  const authData = {
    email: authForm.email,
    password: authForm.password,
    returnSecureToken: true,
  };

  try {
    const response = yield axios.post(url, authData);

    if (authForm.signup) {
      const userId = response.data.localId;
      try {
        const saveUserInfoRes = yield axiosBase.put(
          `/user/${userId}.json`,
          authForm,
        );
        yield localStorage.setItem('nickname', saveUserInfoRes.data.nickname);
        yield localStorage.setItem('img', saveUserInfoRes.data.img);
        console.log(`[SUCCESS] SIGN_UP USER INFO SET`);
      } catch (error) {
        console.log(`[FAIL] SIGN_UP USER INFO SET`, error);
      }
    } else {
      const userId = response.data.localId;
      try {
        const getUserInfoRes = yield axiosBase.get(`/user/${userId}.json`);
        yield localStorage.setItem('nickname', getUserInfoRes.data.nickname);
        yield localStorage.setItem('img', getUserInfoRes.data.img);

        const followingArray = [];
        for (const followingId in getUserInfoRes.data.following) {
          followingArray.push({
            ...getUserInfoRes.data.following[followingId],
          });
        }
        
        const followerArray = [];
        for (const followerId in getUserInfoRes.data.follower) {
          followerArray.push({
            ...getUserInfoRes.data.follower[followerId],
          });
        }

        const likePostArray = [];
        for (const postId in getUserInfoRes.data.likePost) {
          likePostArray.push({
            ...getUserInfoRes.data.likePost[postId],
            postId,
          });
        }
        
        yield put(
          actions.authSaveFollow({
            following: followingArray,
            follower: followerArray,
          }),
        );
        
        yield put(actions.saveLike(likePostArray));
        console.log(`[SUCCESS] SIGN_IN USER INFO SET`);
      } catch (error) {
        console.log(`[FAIL] SIGN_IN USER INFO SET`, error);
      }
    }
    
    const { idToken, localId, email, expiresIn } = response.data;
    yield localStorage.setItem('token', idToken);
    yield localStorage.setItem('userId', localId);
    yield localStorage.setItem('email', email);
    const expirationDate = yield new Date(
      new Date().getTime() + expiresIn * 1000,
    );
    yield localStorage.setItem('expirationDate', expirationDate);
    yield put(actions.checkAuthTimeOut(expiresIn));
    yield put(actions.authSuccess({ token: idToken, userId: localId, email }));
    console.log(`[SUCCESS] AUTH`);
  } catch (error) {
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
      yield put(actions.authSuccess({ token, userId, email }));
      yield put(
        actions.checkAuthTimeOut(
          (expirationDate.getTime() - new Date().getTime()) / 1000,
        ),
      );
    }
    yield put(actions.reloadFollow(userId));
    yield put(actions.reloadLike(userId));
  }
}

export function* followSaga({
  payload: { authorId, followingData, followBtn },
}) {
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

  if (!followBtn) {
    try {
      const res = yield axiosBase.put(
        `/user/${userId}/following/${authorId}.json`,
        followingData,
      );
      console.log(`FOLLOWING  - MY SIDE`, res.data);
      try {
        const saveOtherSideRes = yield axiosBase.put(
          `/user/${authorId}/follower/${userId}.json`,
          followerData,
        );
        console.log(`FOLLOWER - OTHER SIDE`, saveOtherSideRes.data);
      } catch (e) {
        console.log('FOLLOWER ERROR - OTHER SIDE', e);
      }

      yield put(actions.reloadFollow(userId));
    } catch (err) {
      console.log('FOLLOWING ERROR', err);
    }
  } else {
    try {
      const res = yield axiosBase.delete(
        `/user/${userId}/following/${authorId}.json`,
      );
      console.log(`DELETE FOLLOWING - MY SIDE`, res.data);
      try {
        const deleteOtherSideRes = yield axiosBase.delete(
          `/user/${authorId}/follower/${userId}.json`,
        );
        console.log(`DELETE FOLLOWER - OTHER SIDE`, deleteOtherSideRes.data);
      } catch (e) {
        console.log('DELETE FOLLOWER ERROR - OTHER SIDE', e);
      }
      yield put(actions.reloadFollow(userId));
    } catch (err) {
      console.log('DELETE FOLLOWING ERROR', err);
    }
  }
}

export function* reloadFollowSaga({ payload: userId }) {
  try {
    const getUserInfoRes = yield axiosBase.get(`/user/${userId}.json`);
    const followingArray = [];
    for (const followingId in getUserInfoRes.data.following) {
      followingArray.push({
        ...getUserInfoRes.data.following[followingId],
      });
    }
    
    const followerArray = [];
    for (const followerId in getUserInfoRes.data.follower) {
      followerArray.push({
        ...getUserInfoRes.data.follower[followerId],
      });
    }
    yield put(
      actions.authSaveFollow({
        following: followingArray,
        follower: followerArray,
      }),
    );
  } catch (err) {
    console.log(err);
  }
}
