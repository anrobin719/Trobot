import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as actionTypes from '../actions/actionTypes';

const initialState = Map({
  user: Map({}),
  loading: false,
  error: false,
});

const reducer = handleActions(
  {
    // 포스트 출력
    [actionTypes.GET_USER_INFO_START]: (state, action) => {
      return state.set('loading', true);
    },
    [actionTypes.GET_USER_INFO_SUCCESS]: (state, { payload: userData }) => {
      return state.set('loading', false).set('user', Map(userData));
    },
    [actionTypes.GET_USER_INFO_FAIL]: (state, action) => {
      return state.set('loading', false).set('error', true);
    },
  },
  initialState,
);
export default reducer;
