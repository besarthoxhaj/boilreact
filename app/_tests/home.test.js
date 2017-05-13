import test from 'tape';
import syncFlow from 'sync-flow';

import { btns } from './_helpers';
import utils from '../_utils';

test('HOME', t => {

  const { store, history, dom, rootElm } = utils.start();

  global.window = dom.window;
  global.document = window.document;
  global.navigator = window.navigator
  global.React = require('react');
  global.ReactDOM = require('react-dom');
  const Main = require('../main').default;

  syncFlow([
    () => {
      ReactDOM.render(<Main store={store} history={history} />, rootElm);
    },
    () => {
      t.comment('Type text into input');
      btns.insertSearch(window,document,'Hello');
    },
    () => {
      t.comment('...wait and press `Enter`');
      btns.enterSearch(window,document);
    },
    () => { t.comment('...wait') },
    () => {
      utils.snap({
        numId:'005',
        mess:'Enter input text',
        body:dom.serialize(),
      });
    },
    () => {
      t.comment('APP: unmount Component');
      ReactDOM.unmountComponentAtNode(rootElm);
      t.end();
    }
  ],t.end,100);
});
