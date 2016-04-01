'use strict';

import {
  SHOW_MODAL,
  RESET_MODAL,
} from '../action_types.js';

export const intitialState = {
  transparent: true,
  isVisible: false,
  animated: false,
  route: undefined,
  text: undefined,
};

export default function (state = intitialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        isVisible: true,
        ...action.config,
      };
    case RESET_MODAL:
      return {
        ...intitialState,
      };
    default:
      return {
        ...state,
      };
  }
}
