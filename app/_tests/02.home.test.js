import test from 'tape';
import syncFlow from 'sync-flow';
import nock from 'nock';

import { btns } from './_helpers';
import utils from '../_utils';

test('002 - HOME - INTEGRATION', t => {

  nock.cleanAll();
  const {dom,rootElm} = utils.startDom();
  const Main = require('../main').default;
  const appSagas = require('../containers/App/sagas').default;

  t.test('002.01 - HOME - INIT', st => {

    nock.cleanAll();
    btns.cleanCookies();
    const {store,history} = utils.startApp();

    syncFlow([
      () => {
        appSagas({history}).map(store.runSaga);
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
          numId:'002.01.01',
          mess:'Enter input text',
          body:dom.serialize(),
        });
      },
      () => {
        t.comment('APP: unmount Component');
        st.deepEqual(nock.pendingMocks(),[],'No requests left');
        st.equal(nock.isDone(),true,'All requests were satisfied');
        ReactDOM.unmountComponentAtNode(rootElm);
        t.end();
      }
    ],t.end,100);
  });
});
