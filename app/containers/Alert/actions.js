import * as c from './constants';

export const show = () => ({
  type: c.SHOW_ALERT,
});

export const reset = () => ({
  type: c.RESET_ALERT,
});
