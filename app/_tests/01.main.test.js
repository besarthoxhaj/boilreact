import test from 'tape';
import syncFlow from 'sync-flow';
import nock from 'nock';

import { btns, api } from './_helpers';
import utils from '../_utils';

test('001 - MAIN - INTEGRATION', t => {

  nock.cleanAll();
  const {dom,rootElm} = utils.startDom();
  const Main = require('../main').default;
  const appSagas = require('../containers/App/sagas').default;

  t.test('001.01 - MAIN - INIT', st => {

    nock.cleanAll();
    btns.cleanCookies();
    const {store,history} = utils.startApp();

    syncFlow([
      () => {
        appSagas({history}).map(store.runSaga);
        ReactDOM.render(<Main store={store} history={history} />, rootElm);
      },
      () => {
        const state = store.getState();
        utils.snap({
          numId:'001.01.01',
          mess:'Inital rendering',
          body:dom.serialize(),
        });
        t.equal(state.alertRouter.isVisible,false,'alert is initially false');
        btns.openModal(document).click();
      },
      () => {
        const state = store.getState();
        t.equal(state.alertRouter.isVisible,false,'alert is true');
        btns.goToCounter(document).click();
      },
      () => {
        t.comment('APP: open alert');
        utils.snap({
          numId:'001.01.02',
          mess:'Render after modal open',
          body:dom.serialize(),
        });
        btns.openAlert(document).click();
      },
      () => { t.comment('...wait') },
      () => {
        t.comment('APP: save image and close alert');
        utils.snap({
          numId:'001.01.03',
          mess:'Open alert with animation',
          body:dom.serialize(),
        });
        btns.closeAlert(document).click();
      },
      () => { t.comment('...wait') },
      () => {
        utils.snap({
          numId:'001.01.04',
          mess:'Alert closed with animation',
          body:dom.serialize()
        });
        t.comment('APP: unmount Component');
        st.deepEqual(nock.pendingMocks(),[],'No requests left');
        st.equal(nock.isDone(),true,'All requests were satisfied');
        ReactDOM.unmountComponentAtNode(rootElm);
        t.end();
      }
    ],t.end,100);
  });
});
