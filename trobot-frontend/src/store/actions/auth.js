import axios from 'axios';
import * as actionTypes from './actionTypes';
import axiosBase from '../../axios-post';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId, email) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId,
    email,
  };
};

export const authFail = errorMessage => {
  return {
    type: actionTypes.AUTH_FAIL,
    errorMessage,
  };
};

export const authLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('email');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeOut = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationTime * 1000);
  };
};

export const auth = authForm => {
  return dispatch => {
    dispatch(authStart());

    let url;
    if (authForm.signup) {
      // 회원가입 url
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD06IewZiniZT4xSs4lT0dcfCv7gBXPIZ0';
    } else {
      // 로그인 url
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD06IewZiniZT4xSs4lT0dcfCv7gBXPIZ0';
    }
    const authData = {
      email: authForm.email,
      password: authForm.password,
      returnSecureToken: true,
    };

    // 회원가입
    axios
      .post(url, authData)
      .then(res => {
        console.log(res);
        dispatch(
          authSuccess(res.data.idToken, res.data.localId, res.data.email),
        );

        // 회원가입시 user컬렉션에 userId를 key값으로 유저정보 저장
        if (authForm.signup) {
          const userId = res.data.localId;
          axiosBase
            .put(`/user/${userId}.json`, authForm)
            .then(() => console.log('Data is saved to user collection'))
            .catch(err => console.log(err));
        }

        localStorage.setItem('token', res.data.idToken);
        localStorage.setItem('userId', res.data.localId);
        localStorage.setItem('email', res.data.email);
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000,
        );
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(checkAuthTimeOut(res.data.expiresIn));
      })
      .catch(err => {
        console.log(err.response);
        dispatch(authFail(err.response.data.error.message));
      });
  };
};

export const checkAuth = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(authLogout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(authLogout());
      } else {
        const userId = localStorage.getItem('userId');
        const email = localStorage.getItem('email');
        dispatch(authSuccess(token, userId, email));
        dispatch(
          checkAuthTimeOut(
            (expirationDate.getTime() - new Date().getTime()) / 1000,
          ),
        );
      }
    }
  };
};
