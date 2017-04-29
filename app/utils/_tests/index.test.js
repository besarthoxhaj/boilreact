import test from 'tape';

import * as utils from '../index';

test('UTILS', t => {

  t.test('parseUrl', st => {

    st.test('pass just a query', sst => {
      const res = utils.parseUrl('?event=1-18926');
      sst.deepEqual(res,{ pathname: '/',
        search: '?event=1-18926',
        query: { event: '1-18926' }
      }, 'url is parsed into an object');
      sst.end();
    });

    st.test('pass just an entire path', sst => {
      const res = utils.parseUrl('http://localhost:9000/serverPath#/hashPath?event=1-18926');
      sst.deepEqual(res,{ pathname: '/hashPath',
        search: '?event=1-18926',
        query: { event: '1-18926' }
      }, 'url is parsed into an object');
      sst.end();
    });
  });
});
