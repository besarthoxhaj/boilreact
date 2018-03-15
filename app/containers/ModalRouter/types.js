/* @flow */

export type ModalState = {
  transparent: boolean,
  isVisible: boolean,
  animated: boolean,
  route: string | void,
  text: string | void,
};

export type ModalActions =
    { type: 'MODAL_SHOW' }
  | { type: 'MODAL_DISMISS' }
;
