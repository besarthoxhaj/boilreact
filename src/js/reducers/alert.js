'use strict';

import {
  SHOW_ALERT,
  SET_VISIBLE_FALSE,
  RESET_ALERT
} from '../action_types.js';

export const initialState = {
  isVisible:false,
  title:undefined,
  message:undefined,
  buttons:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        isVisible:true,
        title:action.title,
        message:action.message,
        buttons:action.buttons,
      };
    case SET_VISIBLE_FALSE:
      return {
        ...state,
        isVisible:false,
      };
    case RESET_ALERT:
      return {
        ...initialState
      };
    default:
      return {
        ...state
      };
  }
}
