'use strict';

import { combineReducers } from 'redux';
import login from './login.js';
import router from './router.js';

const rootReducer = combineReducers({
  login,
  router
});

export default rootReducer;
