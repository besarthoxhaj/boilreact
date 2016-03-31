'use strict';

import Promise from 'bluebird';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index.js';

module.exports = function () {

  const store = applyMiddleware(
    thunk
    ,createLogger()
  )(createStore)(reducer);

  return store;
};
