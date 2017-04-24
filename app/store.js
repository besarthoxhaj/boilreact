/**
 * Create Redux store with HMR.
 *
 * For more info check:
 * - https://github.com/reactjs/react-redux/releases/tag/v2.0.0
 */

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import { createHashHistory } from 'history';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import rootReducer from './reducers';

export default function configureStore(initialState = {}) {

  const middlewares = [
    routerMiddleware(createHashHistory())
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middlewares),
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
