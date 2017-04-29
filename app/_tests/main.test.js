import test from 'tape';
import syncFlow from 'sync-flow';

import utils from '../_utils';
import Main from '../main';

test('APP', t => {

  const { store, history, dom, rootElm } = utils.start();

  global.window = dom.window;
  global.document = window.document;
  global.navigator = window.navigator
  global.React = require('react');
  global.ReactDOM = require('react-dom');

  const exec = [
    () => {
      ReactDOM.render(<Main store={store} history={history} />, rootElm);
    },
    () => {
      const state = store.getState();
      t.equal(state.alert.isVisible,false,'alert is initially false');
      const btn = document.querySelector('[data-click="openModal"]');
      btn.click();
    },
    () => {
      const state = store.getState();
      t.equal(state.alert.isVisible,false,'alert is true');
      const btn = document.querySelector('[data-click="goToCounter"]');
      btn.click();
    },
    () => {
      const state = store.getState();
      utils.log(dom.serialize());
      ReactDOM.unmountComponentAtNode(rootElm);
      t.end();
    }
  ];

  syncFlow(exec, t.end, 100);
});
