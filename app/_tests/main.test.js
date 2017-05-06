import test from 'tape';
import syncFlow from 'sync-flow';

import { btns } from './_helpers';
import utils from '../_utils';

test('APP', t => {

  const { store, history, dom, rootElm } = utils.start();

  global.window = dom.window;
  global.document = window.document;
  global.navigator = window.navigator
  global.React = require('react');
  global.ReactDOM = require('react-dom');
  const Main = require('../main').default;

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
      btns.openModal(document).click();
    },
    () => {
      const state = store.getState();
      t.equal(state.alert.isVisible,false,'alert is true');
      btns.goToCounter(document).click();
    },
    () => {
      t.comment('APP: open alert');
      utils.snap({
        numId:'002',
        mess:'Render after modal open'
      },utils.log(dom.serialize()));
      btns.openAlert(document).click();
    },
    () => { t.comment('...wait') },
    () => {
      t.comment('APP: save image and close alert');
      utils.snap({
        numId:'003',
        mess:'Open alert with animation'
      },utils.log(dom.serialize()));
      btns.closeAlert(document).click();
    },
    () => { t.comment('...wait') },
    () => {
      utils.snap({
        numId:'004',
        mess:'Alert closed with animation'
      },utils.log(dom.serialize()));
      t.comment('APP: unmount Component');
      ReactDOM.unmountComponentAtNode(rootElm);
      t.end();
    }
  ];

  syncFlow(exec, t.end, 200);
});
