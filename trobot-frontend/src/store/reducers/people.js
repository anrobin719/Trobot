import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../lib/shared/utility';

const initialState = {
  people: null,
  loading: false,
  error: false,
};

const getPeopleStart = state => {
  return updateObject(state, {
    loading: true,
  });
};
const getPeopleSuccess = (state, action) => {
  return updateObject(state, {
    people: action.peopleList,
    loading: false,
  });
};
const getPeopleFail = state => {
  return updateObject(state, {
    loading: false,
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PEOPLE_START:
      return getPeopleStart(state);
    case actionTypes.GET_PEOPLE_SUCCESS:
      return getPeopleSuccess(state, action);
    case actionTypes.GET_PEOPLE_FAIL:
      return getPeopleFail(state);
    default:
      return state;
  }
};

export default reducer;
