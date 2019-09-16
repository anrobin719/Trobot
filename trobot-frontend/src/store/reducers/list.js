import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../lib/shared/utility';

const initialState = {
  list: null,
  loading: true,
  error: false,
};

const getListStart = state => {
  return updateObject(state, {
    loading: true,
  });
};
const getListSuccess = (state, action) => {
  return updateObject(state, {
    list: action.listData,
    loading: false,
  });
};
const getListFail = state => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_START:
      return getListStart(state);
    case actionTypes.GET_LIST_SUCCESS:
      return getListSuccess(state, action);
    case actionTypes.GET_LIST_FAIL:
      return getListFail(state);
    default:
      return state;
  }
};

export default reducer;
