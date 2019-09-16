import * as actionTypes from './actionTypes';

export const showModal = modalName => {
  return {
    type: actionTypes.SHOW_MODAL,
    modalName,
  };
};

export const hideModal = modalName => {
  return {
    type: actionTypes.HIDE_MODAL,
    modalName,
  };
};
