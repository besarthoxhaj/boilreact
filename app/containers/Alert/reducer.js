/* @flow */

import * as c from './constants';

export const initialState = {
  isVisible: false,
  title: undefined,
  message: undefined,
  buttons: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case c.SHOW_ALERT:
      return {
        isVisible: true,
      };
    case c.RESET_ALERT:
      return {
        ...initialState
      };
    default:
      return {
        ...state
      };
  }
}
