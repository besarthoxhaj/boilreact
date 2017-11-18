import jsdom, { JSDOM, VirtualConsole } from 'jsdom';
import { createMemoryHistory } from 'history';
import takeSnap from '@bes/snap';

import createStore from './store';
import log from './log';
import domHtml from './dom';
import * as utils from '../utils';

const startDom = () => {

  const history = createMemoryHistory();
  const store = createStore({ history });

  const virtualConsole = new VirtualConsole();

  const myConsole = {
    log:(...args) => {
      console.log('DOM LOG:',args);
    },
    error:(...args) => {
      if(args[0].match(/Error: Not implemented:/)) {
        console.log('__JSDOM ERROR__');
        return;
      }
      console.log('DOM ERROR:',args);
    }
  };

  const dom = new JSDOM(domHtml, {
    virtualConsole: virtualConsole.sendTo(myConsole)
  });

  const rootElm = dom.window.document.body.querySelector('#root');

  Object.defineProperty(dom.window.document.body, "clientWidth", {
    get() {
      return 1400;
    }
  });

  Object.defineProperty(dom.window, "innerHeight", {
    get() {
      return 900;
    }
  });

  global.window = dom.window;
  global.document = window.document;
  global.navigator = window.navigator;
  global.React = require('react');
  global.ReactDOM = require('react-dom');

  return {
    dom,
    rootElm,
  };
};

const startApp = (initUrl) => {

  const history = utils.createHistory(`${initUrl || '/'}`);
  const store = createStore({ history });

  return {
    store,
    history,
  };
};

const snap = takeSnap({
  outputDir: `${process.cwd()}/tests/_snapshots/html`,
  outputFile: `${process.cwd()}/tests/_snapshots/index.json`,
});

export default {
  startApp,
  startDom,
  log,
  snap,
};
