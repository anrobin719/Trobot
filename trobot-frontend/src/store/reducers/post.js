import { Map } from 'immutable';
import * as actionTypes from '../actions/actionTypes';

const initialState = Map({
  post: Map({}),
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
    default:
      return state;
  }
};

export default reducer;
