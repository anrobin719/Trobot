import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../lib/shared/utility';

const initialState = {
  postId: null,
  loading: false,
  error: false,
};

const writePostStart = state => {
  return updateObject(state, {
    loading: true,
  });
};

const writePostSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    postId: action.postId,
  });
};

const writePostFail = state => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

const editPostStart = state => {
  return updateObject(state, {
    loading: true,
  });
};

const editPostSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    postId: action.postId,
  });
};

const editPostFail = state => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

const initEdit = () => {
  return initialState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WRITE_POST_START:
      return writePostStart(state);
    case actionTypes.WRITE_POST_SUCCESS:
      return writePostSuccess(state, action);
    case actionTypes.WRITE_POST_FAIL:
      return writePostFail(state);
    case actionTypes.EDIT_POST_START:
      return editPostStart(state);
    case actionTypes.EDIT_POST_SUCCESS:
      return editPostSuccess(state, action);
    case actionTypes.EDIT_POST_FAIL:
      return editPostFail(state);
    case actionTypes.INIT_EDIT:
      return initEdit(state);
    default:
      return state;
  }
};

export default reducer;
