import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  it('should return the inital state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      email: null,
      following: null,
      follower: null,
      likePost: null,
      loading: false,
      error: false,
    });
  });
});
