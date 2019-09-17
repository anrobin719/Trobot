import * as actionTypes from './actionTypes';
import axios from '../../axios-post';

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
  return dispatch => {
    dispatch(getPeopleStart());
    axios
      .get(`/user.json`)
      .then(res => {
        const receivedData = [];
        for (const userId in res.data) {
          receivedData.push({
            ...res.data[userId],
            userId,
          });
        }
        dispatch(getPeopleSuccess(receivedData));
        console.log('GET_PEOPLE_SUCCESS', res);
      })
      .catch(err => {
        console.log(err);
        dispatch(getPeopleFail('GET_PEOPLE_FAIL'));
      });
  };
};
