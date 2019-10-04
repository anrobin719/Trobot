import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../lib/shared/utility';

const initialState = {
  token: null,
  userId: null,
  email: null,
  following: null,
  follower: null,
  likePost: null,
  loading: false,
  error: false,
};

const authFail = (state, { payload: errorMessage }) => {
  switch (errorMessage) {
    case 'EMAIL_EXISTS':
      return updateObject(state, {
        loading: false,
        error: '이미 등록된 이메일입니다. 다른 이메일을 등록해주세요.',
      });
    case 'INVALID_EMAIL':
      return updateObject(state, {
        loading: false,
        error: '유효하지 않은 이메일입니다. 이메일을 확인해주세요.',
      });
    case 'INVALID_PASSWORD':
      return updateObject(state, {
        loading: false,
        error: '유효하지 않은 비밀번호입니다. 비밀번호를 확인해주세요.',
      });
    case 'WEAK_PASSWORD : Password should be at least 6 characters':
      return updateObject(state, {
        loading: false,
        error: '비밀번호를 6자 이상 입력해주세요.',
      });
    case 'EMAIL_NOT_FOUND':
      return updateObject(state, {
        loading: false,
        error: '등록되지 않은 이메일입니다. 회원가입 후에 로그인해주세요.',
      });
    case 'MISSING_PASSWORD':
      return updateObject(state, {
        loading: false,
        error: '비밀번호가 입력되지 않았습니다.',
      });
    default:
      return updateObject(state, {
        loading: false,
        error: errorMessage,
      });
  }
};

const reducer = handleActions(
  {
    [actionTypes.AUTH_START]: (state, action) => {
      return updateObject(state, {
        loading: true,
      });
    },
    [actionTypes.AUTH_SUCCESS]: (
      state,
      { payload: { token, userId, email } },
    ) => {
      return updateObject(state, {
        token,
        userId,
        email,
        loading: false,
      });
    },
    [actionTypes.AUTH_SAVE_FOLLOW]: (
      state,
      { payload: { following, follower } },
    ) => {
      return updateObject(state, {
        following,
        follower,
      });
    },
    [actionTypes.SAVE_LIKE]: (state, { payload: likePostArray }) => {
      return updateObject(state, {
        likePost: likePostArray,
      });
    },
    [actionTypes.AUTH_FAIL]: (state, action) => {
      return authFail(state, action);
    },
    [actionTypes.AUTH_LOGOUT]: (state, action) => {
      return updateObject(state, initialState);
    },
  },
  initialState,
);

export default reducer;
