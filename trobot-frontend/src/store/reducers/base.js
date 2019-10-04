import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/actionTypes';

const initialState = Map({
  modal: Map({
    askSignIn: false,
    askDelete: false,
    post: false,
    editProfile: false,
  }),
});

const reducer = handleActions(
  {
    [actionTypes.SHOW_MODAL]: (state, { payload: modalName }) => {
      return state.setIn(['modal', modalName], true);
    },
    [actionTypes.HIDE_MODAL]: (state, { payload: modalName }) => {
      return state.setIn(['modal', modalName], false);
    },
  },
  initialState,
);

export default reducer;
