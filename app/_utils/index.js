import jsdom, { JSDOM, VirtualConsole } from 'jsdom';
import { createMemoryHistory } from 'history';
import createStore from './store';
import log from './log';
import domHtml from './dom';
import snap from './snap';

const start = () => {

  const history = createMemoryHistory();
  const store = createStore({ history });

  const virtualConsole = new VirtualConsole();
  const dom = new JSDOM(domHtml, {
    virtualConsole: virtualConsole.sendTo(console)
  });
  const rootElm = dom.window.document.body.querySelector('#root');

  return {
    store,
    history,
    dom,
    rootElm,
  };
};

export default {
  start,
  createStore,
  log,
  snap,
};
