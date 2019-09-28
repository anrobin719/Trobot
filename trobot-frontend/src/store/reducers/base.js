import { Map } from 'immutable';
import * as actionTypes from '../actions/actionTypes';

const initialState = Map({
  modal: Map({
    askSignIn: false,
    askDelete: false,
    post: false,
    editProfile: false,
  }),
});

const showModal = (state, action) => {
  const newState = state.setIn(['modal', action.modalName], true);
  return newState;
};

const hideModal = (state, action) => {
  const newState = state.setIn(['modal', action.modalName], false);
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return showModal(state, action);
    case actionTypes.HIDE_MODAL:
      return hideModal(state, action);
    default:
      return state;
  }
};

export default reducer;
