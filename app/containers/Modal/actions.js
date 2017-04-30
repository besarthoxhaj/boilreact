/* @flow */
import type { ModalActions } from './types';
import * as c from './constants';

export const show = ():ModalActions => ({
  type: c.SHOW_MODAL,
});

export const reset = ():ModalActions => ({
  type: c.RESET_MODAL,
});
