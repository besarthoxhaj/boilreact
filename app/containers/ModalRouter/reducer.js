/* @flow */

import type { ModalState, ModalActions } from './types';
import * as c from './constants';

const initialState:ModalState = {
  transparent: true,
  isVisible: false,
  animated: false,
  route: undefined,
  text: undefined
};

export default function (
  state:ModalState = initialState,
  action:ModalActions
):ModalState {
  switch (action.type) {
    case c.SHOW_MODAL:
      return {
        ...state,
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
