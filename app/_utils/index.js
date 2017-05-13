import jsdom, { JSDOM, VirtualConsole } from 'jsdom';
import { createMemoryHistory } from 'history';
import takeSnap from '@bes/snap';
import createStore from './store';
import log from './log';
import domHtml from './dom';

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

const snap = takeSnap({
  outputDir: `${process.cwd()}/tests/_snapshots/html`,
  outputFile: `${process.cwd()}/tests/_snapshots/index.json`,
});

export default {
  start,
  createStore,
  log,
  snap,
};
