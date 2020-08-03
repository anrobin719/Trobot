import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../lib/shared/utility';

const initialState = {
  postId: null,
  loading: false,
  error: false,
};

const reducer = handleActions(
  {
    [actionTypes.WRITE_POST_START]: (state, action) => {
      return updateObject(state, {
        loading: true,
      });
    },
    [actionTypes.WRITE_POST_SUCCESS]: (state, { payload: postId }) => {
      return updateObject(state, {
        loading: false,
        postId,
      });
    },
    [actionTypes.WRITE_POST_FAIL]: (state, action) => {
      return updateObject(state, {
        loading: false,
        error: true,
      });
    },

    [actionTypes.EDIT_POST_START]: (state, action) => {
      return updateObject(state, {
        loading: true,
      });
    },
    [actionTypes.EDIT_POST_SUCCESS]: (state, { payload: postId }) => {
      return updateObject(state, {
        loading: false,
        postId,
      });
    },
    [actionTypes.EDIT_POST_FAIL]: (state, action) => {
      return updateObject(state, {
        loading: false,
        error: true,
      });
    },
    [actionTypes.INIT_EDIT]: (state, action) => {
      return initialState;
    },
  },
  initialState,
);
export default reducer;
