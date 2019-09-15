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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WRITE_POST_START:
      return writePostStart(state);
    case actionTypes.WRITE_POST_SUCCESS:
      return writePostSuccess(state, action);
    case actionTypes.WRITE_POST_FAIL:
      return writePostFail(state);
    default:
      return state;
  }
};

export default reducer;
