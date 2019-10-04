import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../lib/shared/utility';

const initialState = {
  people: null,
  loading: false,
  error: false,
};

const reducer = handleActions(
  {
    [actionTypes.GET_PEOPLE_START]: (state, action) => {
      return updateObject(state, {
        loading: true,
      });
    },
    [actionTypes.GET_PEOPLE_SUCCESS]: (state, { payload: peopleList }) => {
      return updateObject(state, {
        people: peopleList,
        loading: false,
      });
    },
    [actionTypes.GET_PEOPLE_FAIL]: (state, action) => {
      return updateObject(state, {
        loading: false,
        error: true,
      });
    },
  },
  initialState,
);

export default reducer;
