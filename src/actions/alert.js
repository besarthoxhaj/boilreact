'use strict';

import * as types from '../action_types.js';

export const showAlert = (title,message,buttons=[]) => ({type:types.SHOW_ALERT,title,message,buttons});
export const setVisibleFalse = () => ({type: types.SET_VISIBLE_FALSE});
export const reset = () => ({type:types.RESET_ALERT,isVisible:false});

export const show = (title,message,buttons) => dispatch => {

  // to make sure the alert
  // has a redux button
  if (!buttons) {
    buttons = [{
      text: 'Ok',
      onPress: () => {
        dispatch(reset());
      }
    }];
  }

  setTimeout(() => {
    dispatch(showAlert(title,message,buttons));
    // dispatch(setVisibleFalse());
  },300);
};
