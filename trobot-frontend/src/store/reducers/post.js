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

// 포스트 출력
const getPostStart = state => {
  const newState = state.set('loading', true);
  return newState;
};

const getPostSuccess = (state, action) => {
  const newState = state
    .set('loading', false)
    .set('reload', false)
    .set('post', Map(action.postData));
  return newState;
};

const getPostFail = state => {
  const newState = state.set('loading', false).set('error', true);
  return newState;
};

// 포스트 수정
const updatePostStart = state => {
  const newState = state.set('loading', true);
  return newState;
};

const updatePostSuccess = (state, action) => {
  const newState = state
    .set('loading', false)
    .set('post', Map(action.postData));
  return newState;
};

const updatePostFail = state => {
  const newState = state.set('loading', false).set('error', true);
  return newState;
};

// 수정, 삭제 관련 상태 설정
const storePostId = (state, action) => {
  const newState = state
    .set('postId', action.postId)
    .set('postTag', action.postTag);
  return newState;
};

const initDelete = state => {
  const newState = state.set('postTag', null).set('deleted', false);
  return newState;
};

// 포스트 삭제
const deletePostStart = state => {
  const newState = state.set('loading', true);
  return newState;
};

const deletePostSuccess = state => {
  const newState = state
    .set('loading', false)
    .set('post', Map({}))
    .set('postId', null)
    .set('deleted', true);
  return newState;
};

const deletePostFail = state => {
  const newState = state.set('loading', false).set('error', true);
  return newState;
};

// 코멘트 삭제
const deleteCommentStart = state => {
  const newState = state.set('loading', true);
  return newState;
};

const deleteCommentSuccess = state => {
  // 댓글 삭제 후, 즉시 포스트 로드하기 때문에 로딩 유지
  const newState = state.set('reload', true);
  return newState;
};

const deleteCommentFail = state => {
  const newState = state.set('loading', false).set('error', true);
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POST_START:
      return getPostStart(state);
    case actionTypes.GET_POST_SUCCESS:
      return getPostSuccess(state, action);
    case actionTypes.GET_POST_FAIL:
      return getPostFail(state);
    case actionTypes.UPDATE_POST_START:
      return updatePostStart(state);
    case actionTypes.UPDATE_POST_SUCCESS:
      return updatePostSuccess(state, action);
    case actionTypes.UPDATE_POST_FAIL:
      return updatePostFail(state);
    case actionTypes.STORE_POST_ID:
      return storePostId(state, action);
    case actionTypes.INIT_DELETE:
      return initDelete(state);
    case actionTypes.DELETE_POST_START:
      return deletePostStart(state);
    case actionTypes.DELETE_POST_SUCCESS:
      return deletePostSuccess(state);
    case actionTypes.DELETE_POST_FAIL:
      return deletePostFail(state);
    case actionTypes.DELETE_COMMENT_START:
      return deleteCommentStart(state);
    case actionTypes.DELETE_COMMENT_SUCCESS:
      return deleteCommentSuccess(state, action);
    case actionTypes.DELETE_COMMENT_FAIL:
      return deleteCommentFail(state);
    default:
      return state;
  }
};

export default reducer;
