/* @flow */
import type { AlertActions } from './types';
import * as c from './constants';

export const show = ():AlertActions => ({
  type: c.SHOW_ALERT,
});

export const reset = ():AlertActions => ({
  type: c.RESET_ALERT,
});
