import * as actionTypes from './actionTypes';

export const getPeopleStart = () => {
  return {
    type: actionTypes.GET_PEOPLE_START,
  };
};

export const getPeopleSuccess = peopleList => {
  return {
    type: actionTypes.GET_PEOPLE_SUCCESS,
    peopleList,
  };
};

export const getPeopleFail = () => {
  return {
    type: actionTypes.GET_PEOPLE_FAIL,
  };
};

export const getPeople = () => {
  return {
    type: actionTypes.GET_PEOPLE,
  };
};
