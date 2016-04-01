'use strict';

import * as types from '../action_types.js';

export const resetModal = () => ({type:types.RESET_MODAL});
export const show = config => ({type:types.SHOW_MODAL,config});
export const reset = () => ({type:types.RESET_MODAL});

/**
 * Modal router
 * @param {Object} config which describes the modal object
 */
export const showModal = config => (dispatch,getState) => {

  const isModalAlreadyOpen = getState().modal.isVisible;

  if (isModalAlreadyOpen) {
    dispatch(reset());
  }

  setTimeout(() => dispatch(show({...config})),300);
};
