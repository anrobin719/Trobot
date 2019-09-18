import { Map } from 'immutable';
import * as actionTypes from '../actions/actionTypes';

const initialState = Map({
  user: Map({}),
  likePost: null,
  loading: false,
  error: false,
});

// 포스트 출력
const getUserInfoStart = state => {
  const newState = state.set('loading', true);
  return newState;
};

const getUserInfoSuccess = (state, action) => {
  const newState = state
    .set('loading', false)
    .set('user', Map(action.userData));
  return newState;
};

const getUserInfoFail = state => {
  const newState = state.set('loading', false).set('error', true);
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_INFO_START:
      return getUserInfoStart(state);
    case actionTypes.GET_USER_INFO_SUCCESS:
      return getUserInfoSuccess(state, action);
    case actionTypes.GET_USER_INFO_FAIL:
      return getUserInfoFail(state);
    default:
      return state;
  }
};

export default reducer;
