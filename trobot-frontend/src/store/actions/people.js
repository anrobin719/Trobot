import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const getPeopleStart = createAction(actionTypes.GET_PEOPLE_START);
export const getPeopleSuccess = createAction(
  actionTypes.GET_PEOPLE_SUCCESS,
  peopleList => peopleList,
);
export const getPeopleFail = createAction(actionTypes.GET_PEOPLE_FAIL);
export const getPeople = createAction(actionTypes.GET_PEOPLE);
