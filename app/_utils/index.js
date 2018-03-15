import jsdom, { JSDOM, VirtualConsole } from 'jsdom';
import { createMemoryHistory } from 'history';
import takeSnap from '@bes/snap';
import EventEmitter from 'events';

import createStore from './store';
import log from './log';
import domHtml from './dom';
import * as utils from '../utils';

const startDom = () => {

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
    virtualConsole: virtualConsole.sendTo(myConsole),
    // TODO: explain
    runScripts: 'dangerously',
    resources: 'usable',
  });

  const body = dom.window.document.body;
  const rootElm = body.querySelector('#root');

  Object.defineProperty(dom.window.document.body, 'clientWidth', {
    get() {
      return 1400;
    }
  });

  Object.defineProperty(dom.window, 'matchMedia', {
    value: (arg) => {

      const isMin = arg.indexOf('min') !== -1;
      const pixel = (arg.match(/: (.*)px/) || ['',0])[1];
      const isMatch = isMin ? (pixel < 1400) : (pixel > 1400);

      return {
        matches: isMatch,
        addListener: () => {},
        removeListener: () => {},
      };
    }
  });

  Object.defineProperty(dom.window, 'innerHeight', {
    get() {
      return 900;
    }
  });

  Object.defineProperty(dom.window, 'open', {
    value: (arg) => {
      const dom = (new JSDOM('',{
        virtualConsole: (new VirtualConsole).sendTo(console)
      }));
      const win = dom.window;
      win['_dom'] = dom;
      return win;
    }
  });

  Object.defineProperty(dom.window, 'scrollTo', {
    value: () => {}
  });

  // Remove React warning https://git.io/vxIYF
  global.requestAnimationFrame = (cb) => setTimeout(cb, 0);

  global.window = dom.window;
  global.document = window.document;
  global.navigator = window.navigator;
  global.React = require('react');
  global.ReactDOM = require('react-dom');
  global.testEmitter = new EventEmitter();

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
