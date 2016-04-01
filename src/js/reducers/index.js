'use strict';

import { combineReducers } from 'redux';
import login from './login.js';
import router from './router.js';
import modal from './modal.js';
import alert from './alert.js';

const rootReducer = combineReducers({
  login,
  router,
  modal,
  alert
});

export default rootReducer;
