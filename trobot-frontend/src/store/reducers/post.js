import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as actionTypes from '../actions/actionTypes';

const initialState = Map({
  post: Map({}),
  postId: null,
  postTag: null,
  deleted: false,
  reload: false,
  loading: false,
  error: false,
});

const reducer = handleActions(
  {
    // 포스트 출력
    [actionTypes.GET_POST_START]: (state, action) => {
      return state.set('loading', true);
    },
    [actionTypes.GET_POST_SUCCESS]: (state, { payload: postData }) => {
      return state
        .set('loading', false)
        .set('reload', false)
        .set('post', Map(postData));
    },
    [actionTypes.GET_POST_FAIL]: (state, action) => {
      return state.set('loading', false).set('error', true);
    },

    // 포스트 수정
    [actionTypes.UPDATE_POST_START]: (state, action) => {
      return state.set('loading', true);
    },
    [actionTypes.UPDATE_POST_SUCCESS]: (state, { payload: postData }) => {
      return state.set('loading', false).set('post', Map(postData));
    },
    [actionTypes.UPDATE_POST_FAIL]: (state, action) => {
      return state.set('loading', false).set('error', true);
    },

    // 수정, 삭제 관련 상태 설정
    [actionTypes.STORE_POST_ID]: (state, { payload: { postId, postTag } }) => {
      return state.set('postId', postId).set('postTag', postTag);
    },
    [actionTypes.INIT_DELETE]: (state, action) => {
      return state.set('postTag', null).set('deleted', false);
    },

    // 포스트 삭제
    [actionTypes.DELETE_POST_START]: (state, action) => {
      return state.set('loading', true);
    },
    [actionTypes.DELETE_POST_SUCCESS]: (state, action) => {
      return state
        .set('loading', false)
        .set('post', Map({}))
        .set('postId', null)
        .set('deleted', true);
    },
    [actionTypes.DELETE_POST_FAIL]: (state, action) => {
      return state.set('loading', false).set('error', true);
    },

    // 코멘트 삭제
    [actionTypes.DELETE_COMMENT_START]: (state, action) => {
      return state.set('loading', true);
    },
    [actionTypes.DELETE_COMMENT_SUCCESS]: (state, action) => {
      // 댓글 삭제 후, 즉시 포스트 로드하기 때문에 로딩 유지
      return state.set('reload', true);
    },
    [actionTypes.DELETE_COMMENT_FAIL]: (state, action) => {
      return state.set('loading', false).set('error', true);
    },
  },
  initialState,
);

export default reducer;
