/* @flow */

import * as c from './constants';

const initialState = {
  transparent: true,
  isVisible: false,
  animated: false,
  route: undefined,
  text: undefined
};

export default function (state = initialState, action) {
  switch (action.type) {
    case c.SHOW_MODAL:
      return {
        isVisible: true,
      };
    case c.RESET_MODAL:
      return {
        ...initialState,
      };
    default:
      return {
        ...state
      };
  }
}
