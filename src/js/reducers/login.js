'use strict';

import {
  LOGIN_UPDATE_INPUT,
  RESET_LOGIN,
} from '../action_types.js';

export const intitialState = {
  email: undefined,
  password: undefined,
};

export default function (state = intitialState, action) {

  switch (action.type) {
    case LOGIN_UPDATE_INPUT:
      return {
        ...state,
        [action.field]:action.value
      };
    case RESET_LOGIN:
      return {
        ...intitialState
      };
    default:
      return {
        ...state
      };
  }
}
