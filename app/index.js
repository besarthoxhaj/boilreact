import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './main';

import styles from '../sass/entry.scss';

const rootEl = document.getElementById('root');

const render = Component => {
  return ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );
};

render(App);

if (module.hot) module.hot.accept('./main', () => render(App));
