import 'babel-polyfill';
import 'whatwg-fetch';

import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';

import App from './main';
import createStore from './store';
import analyticsSagas from './containers/Analytics/sagas';

/**
 * IMPORTANT: History object
 * Needed in the Router container and passed through
 * Main and App. It is injected in order to be mocked
 * by the tests with `createMemoryHistory`. For more
 * info check the docs:
 * - https://git.io/v9CCL
 *
 */
const history = createHashHistory();


/**
 * IMPORTANT
 * Init Store and Sagas
 */
const store = createStore({ history });

analyticsSagas.map(store.runSaga);

const appHtmlAppend = document.getElementById('root');

const render = Component => {
  return ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    appHtmlAppend
  );
};

// kill js execution if `appHtmlAppend` is
// not found...
// added an `else` to make sure is not executed
if(appHtmlAppend === null) {
  // do nothing
} else {
  render(App);
}

if (module.hot) module.hot.accept('./main', () => render(App));
