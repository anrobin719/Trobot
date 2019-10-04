import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

// export const showModal = modalName => {
//   return {
//     type: actionTypes.SHOW_MODAL,
//     modalName,
//   };
// };

// export const hideModal = modalName => {
//   return {
//     type: actionTypes.HIDE_MODAL,
//     modalName,
//   };
// };
export const showModal = createAction(
  actionTypes.SHOW_MODAL,
  modalName => modalName,
);
export const hideModal = createAction(
  actionTypes.HIDE_MODAL,
  modalName => modalName,
);
