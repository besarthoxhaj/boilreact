/* @flow */

import type { AlertState, AlertActions } from './types';
import * as c from './constants';

export const initialState:AlertState = {
  isVisible: false,
  title: undefined,
  message: undefined,
  buttons: []
};

export default function (
  state:AlertState = initialState,
  action:AlertActions
):AlertState {
  switch (action.type) {
    case c.SHOW_ALERT:
      return {
        ...state,
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
