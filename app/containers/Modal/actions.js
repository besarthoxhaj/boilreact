import * as c from './constants';

export const show = config => ({
  type: c.SHOW_MODAL,
  config,
});

export const reset = () => ({
  type: c.RESET_MODAL,
});
