import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../lib/shared/utility';

const initialState = {
  token: null,
  userId: null,
  email: null,
  following: null,
  follower: null,
  loading: false,
  error: false,
};

const authStart = state => {
  return updateObject(state, {
    loading: true,
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    userId: action.userId,
    email: action.email,
    loading: false,
  });
};

const authSaveFollow = (state, action) => {
  return updateObject(state, {
    following: action.following,
    follower: action.follower,
  });
};

const authFail = (state, action) => {
  switch (action.errorMessage) {
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
        error: action.errorMessage,
      });
  }
};

const authLogout = state => {
  return updateObject(state, initialState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_SAVE_FOLLOW:
      return authSaveFollow(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state);
    default:
      return state;
  }
};

export default reducer;
