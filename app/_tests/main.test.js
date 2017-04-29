import React from 'react';
import { shallow } from 'enzyme';
import { prettyPrint } from 'html';
import syncFlow from 'sync-flow';
import test from 'tape';

import utils from '../_utils';
import Main from '../main';

test('APP', t => {

  const store = utils.createStore();
  const App = shallow(<Main store={store}/>);

  t.test('start application', st => {
    // console.log('store',store.getState());
    console.log(utils.log(App.html()));
    st.end();
  });
});
