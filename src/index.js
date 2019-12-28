import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';

import App from './App';

/**
 * IMPORTANT: History object.
 * Needed in the Router container and passed through
 * Main and App. It is injected in order to be mocked
 * by the tests with `createMemoryHistory`. For more
 * info check the docs: https://git.io/v9CCL
 */
const history = createHashHistory();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
