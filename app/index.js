import 'whatwg-fetch';

import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';

import App from './main';
import createStore from './store';

/**
 * IMPORTANT: History object
 * Needed in the Router container and passed through
 * Main and App. It is injected in order to be mocked
 * by the tests with `createMemoryHistory`. For more
 * info check the docs:
 * - https://git.io/v9CCL
 */
const history = createHashHistory();
const store = createStore({ history });

const appHtmlAppend = document.getElementById('root');

const render = Component => {
  return ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    appHtmlAppend
  );
};

if(appHtmlAppend === null) {
  // do nothing
} else {
  require('babel-polyfill');
  const appSagas = require('./containers/App/sagas').default;
  appSagas({history}).map(store.runSaga);
  render(App);
}

if (module.hot) module.hot.accept('./main', () => render(App));
