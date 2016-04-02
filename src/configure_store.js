'use strict';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index.js';
// actions
import * as routerActions from './actions/router.js';

module.exports = function (apis = require('./apis/index.js')) {

  const store = applyMiddleware(
    thunk
    ,createLogger()
  )(createStore)(reducer);

  store._database = () => apis.localStorage;

  setTimeout(() => {
    const sessionToken = apis.localStorage.getItem('SESSION_TOKEN');
    if (sessionToken) {
      store.dispatch(routerActions.navigateTo({name:'overview'}));
    } else {
      store.dispatch(routerActions.navigateTo({name:'login'}));
    }
  },1000);

  return store;
};
