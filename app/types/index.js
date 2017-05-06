/* @flow */

import type { GlobalState } from '../containers/App/types';
import type { HeaderState } from '../containers/Header/types';
import type { RouterState } from '../containers/Router/types';
import type { AlertState } from '../containers/Alert/types';
import type { ModalState } from '../containers/Modal/types';
import type { HomeState } from '../containers/Home/types';

export type AppState = {
  global: GlobalState,
  header: HeaderState,
  router: RouterState,
  alert: AlertState,
  modal: ModalState,
  home: HomeState,
};
