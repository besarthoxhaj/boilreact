'use strict';

import React, { Component } from 'react';
import ReactDOM, { render as Render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configure_store.js';
import App from './containers/app.js';

const store = configureStore();

class Bookee extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

Render(<Bookee/>,document.getElementById('app'));
