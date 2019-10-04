import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../lib/shared/utility';

const initialState = {
  list: null,
  myList: null,
  likeList: null,
  followingList: null,
  followerList: null,
  loading: true,
  error: false,
};

const reducer = handleActions(
  {
    // 아이디어 리스트 가져오기
    [actionTypes.GET_LIST_START]: (state, action) => {
      return updateObject(state, {
        loading: true,
      });
    },
    [actionTypes.GET_LIST_SUCCESS]: (state, { payload: listData }) => {
      return updateObject(state, {
        list: listData,
        loading: false,
      });
    },
    [actionTypes.GET_LIST_FAIL]: (state, action) => {
      return updateObject(state, {
        loading: false,
        error: true,
      });
    },

    // 작성한 아이디어 목록 저장
    [actionTypes.GET_MY_LIST_START]: (state, action) => {
      return updateObject(state, {
        loading: true,
      });
    },
    [actionTypes.GET_MY_LIST_SUCCESS]: (state, { payload: myList }) => {
      return updateObject(state, {
        myList,
        loading: false,
      });
    },
    [actionTypes.GET_MY_LIST_FAIL]: (state, action) => {
      return updateObject(state, {
        loading: false,
        error: true,
      });
    },

    // 좋아요한 아이디어 목록 저장
    [actionTypes.GET_LIKE_LIST_START]: (state, action) => {
      return updateObject(state, {
        loading: true,
      });
    },
    [actionTypes.GET_LIKE_LIST_SUCCESS]: (state, { payload: likeList }) => {
      return updateObject(state, {
        likeList,
        loading: false,
      });
    },
    [actionTypes.GET_LIKE_LIST_FAIL]: (state, action) => {
      return updateObject(state, {
        loading: false,
        error: true,
      });
    },

    // 팔로잉, 팔로워 목록 저장
    [actionTypes.GET_FOLLOW_LIST_START]: (state, action) => {
      return updateObject(state, {
        loading: true,
      });
    },
    [actionTypes.GET_FOLLOW_LIST_SUCCESS]: (
      state,
      { payload: { followingList, followerList } },
    ) => {
      return updateObject(state, {
        followingList,
        followerList,
        loading: false,
      });
    },
    [actionTypes.GET_FOLLOW_LIST_FAIL]: (state, action) => {
      return updateObject(state, {
        loading: false,
        error: true,
      });
    },
  },
  initialState,
);

export default reducer;
