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
    const response = yield axios.post(url, authData);
    console.log(response);
    yield put(
      actions.authSuccess(
        response.data.idToken,
        response.data.localId,
        response.data.email,
      ),
    );
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
        console.log(
          `Sign Up user info(nickname, img) is saved! and setted in local storage!`,
        );
      } catch (error) {
        console.log(`Sign Up user info save fail :(`, error);
      }
    }
    // 로그인시 => user컬렉션에서 유저정보 가져오기 + 유저 정보 localStorage 저장
    else {
      const userId = response.data.localId;
      try {
        const getUserInfoRes = yield axiosBase.get(`/user/${userId}.json`);
        yield localStorage.setItem('nickname', getUserInfoRes.data.nickname);
        yield localStorage.setItem('img', getUserInfoRes.data.img);
        console.log(
          `Sign In user info(nickname, img) get! and setted in local storage!`,
        );
      } catch (error) {
        console.log(`Sign In user info save fail :(`, error);
      }
    }
    // 유저 토큰, 아이디, 이메일, 만료일 localStorage 저장
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('userId', response.data.localId);
    yield localStorage.setItem('email', response.data.email);
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000,
    );
    yield localStorage.setItem('expirationDate', expirationDate);
    yield put(actions.checkAuthTimeOut(response.data.expiresIn));
  } catch (error) {
    console.log(`Auth error response!`, error.response);
    yield put(actions.authFail(error.response.data.error.message));
  }
}

export function* checkAuthSaga() {
  const token = yield localStorage.getItem('token');

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
  }
}
