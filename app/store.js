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

import rootReducer from './reducers';

export default function configureStore(initialState = {}) {

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
