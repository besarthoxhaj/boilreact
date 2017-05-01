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
      utils.snap({
        numId:'001',
        mess:'Inital rendering'
      },utils.log(dom.serialize()));
      t.equal(state.alert.isVisible,false,'alert is initially false');
      const btn = document.querySelector('[data-home-click="openModal"]');
      btn.click();
    },
    () => {
      const state = store.getState();
      t.equal(state.alert.isVisible,false,'alert is true');
      const btn = document.querySelector('[data-home-click="goToCounter"]');
      btn.click();
    },
    () => {
      t.comment('APP: open alert');
      utils.snap({
        numId:'002',
        mess:'Render after modal open'
      },utils.log(dom.serialize()));
      const btn = document.querySelector('[data-modal-click="openAlert"]');
      btn.click();
    },
    () => {
      t.comment('APP: save image');
      utils.snap({
        numId:'003',
        mess:'Open alert with animation'
      },utils.log(dom.serialize()));
    },
    () => {
      t.comment('APP: unmount Component');
      ReactDOM.unmountComponentAtNode(rootElm);
      t.end();
    }
  ];

  syncFlow(exec, t.end, 200);
});
