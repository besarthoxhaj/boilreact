/* @flow */

export type AlertState = {
  isVisible: boolean,
  title: string | void,
  message: string | void,
  buttons: Array<any>,
};

export type AlertActions =
    { type: 'alert/SHOW_ALERT' }
  | { type: 'alert/RESET_ALERT' }
  ;
