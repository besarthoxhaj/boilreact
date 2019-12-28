import * as utils from '../index';

test('utils -> parseUrl -> pass just a query', () => {
  // const res = utils.parseUrl('?event=1-18926');
  // sst.deepEqual(res,{ pathname: '/',
  //   search: '?event=1-18926',
  //   query: { event: '1-18926' }
  // }, 'url is parsed into an object');
  // sst.end();
});

test('utils -> parseUrl -> pass just an entire path', () => {
  // const res = utils.parseUrl('http://localhost:9000/serverPath#/hashPath?event=1-18926');
  // sst.deepEqual(res,{ pathname: '/hashPath',
  //   search: '?event=1-18926',
  //   query: { event: '1-18926' }
  // }, 'url is parsed into an object');
  // sst.end();
});
