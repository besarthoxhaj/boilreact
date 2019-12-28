import * as R from 'ramda';
import queryString from 'query-string';

import * as U from './helpers';
// import config from '../config';
const config = () => {};

/**
 * Substitutes
 */
export const addQueryParam = (loc:Location, keysValue:KeyValueInput):Location => {
  const newLoc = R.pick(['pathname','search'], loc);
  newLoc.query = queryString.parse(newLoc.search);
  Object.keys(keysValue).forEach((elm) => delete newLoc.query[elm]);
  newLoc.query = Object.assign(keysValue,newLoc.query);
  newLoc.search = queryString.stringify(newLoc.query);
  return newLoc;
};

export const removeQueryParam = (loc:Location, keys:Array<string>):Location => {
  const newLoc = R.pick(['pathname','search'], loc);
  newLoc.query = queryString.parse(newLoc.search);
  keys.forEach((elm) => delete newLoc.query[elm]);
  newLoc.search = queryString.stringify(newLoc.query);
  return newLoc;
};

/**
 * Light wrapper around Fetch API. Check MDN docs:
 * - https://developer.mozilla.org/en/docs/Web/API/Fetch_API
 */
export const request = R.curry((opts, url) => {

  const mergeOpts = R.merge({}, opts);

  return fetch(url, mergeOpts)
    .then(checkStatus)
    .then(parseJSON);

  function parseJSON(res) {
    return res.json();
  }

  function checkStatus(res) {
    if(res.status >= 200 && res.status < 300) {
      return res;
    }
    const err = new Error(res.statusText);
    err.res = res;
    throw err;
  }
});

/**
 * [parseUrl description]
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
export const parseUrl = (url) => {

  const pathname = R.pipe(
    R.either(U.regExp(/\#(.*?)\?/), U.regExp(/\#(.*)/)),
    R.either(U.getNth(1), U.curryIdentity('/'))
  )(url);

  const search = R.pipe(
    U.regExp(/\?(.*)/),
    R.either(U.getNth(0), U.curryIdentity(''))
  )(url);

  const query = queryString.parse(search);

  return {
    pathname,
    search,
    query,
  };
}

/**
 * Create a `randomString`
 */
export const getRandomString = (length) => {
  const chars = '01236789abcdefghijkltuvwxyzABNOPQRWXYZ';
  let result = '';
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

/**
 * Just a list of random colors
 * to use as placeholder for
 * development
 */
export const getColor = () => {

  const COLORS = [
    '#15B371',
    '#DB3737',
    '#FF7373',
    '#F29D49',
    '#669EFF',
    '#29A634',
    '#C274C2',
    '#30404D',
    '#9E2B0E',
    '#A82A2A',
    '#10161A',
  ];

  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

/**
 * Creates a wrapper around the npm history api.
 * Testing is the main reason. When running the
 * tests with JSDOM we are in a node enviorment.
 * This means there is no browser history api
 * available. Fortunatley the npm module 'history'
 * provides a `createMemoryHistory()` function.
 * This create an history instance with entries
 * visited.
 *
 * Resources:
 * - https://github.com/ReactTraining/history/issues/441
 *
 */
export const createHistory = (initUrl) => {

  if(global._TEST_) {
    var history = require('history').createMemoryHistory();
  } else {
    var history = require('history').createHashHistory();
  }

  history.listen((payload, action) => {
    history.entries.push(payload);
  });

  if(history.entries === undefined) {
    history.entries = [];
    const currentLoc = parseUrl(initUrl);
    history.entries.push(currentLoc);
  }

  if(global._TEST_) {
    history.push(initUrl);
    delete history.entries;
    history.entries = [];
    const currentLoc = parseUrl(`${config('api')}/#${initUrl}`);
    history.entries.push(currentLoc);
  }

  return history;
};

/**
 * Get previous history state. This is strictly
 * related to the function above `createHistory`.
 */
export const getPrev = (history):{
  pathname: string,
  search: string,
  hash: string,
  key: string,
} => {

  // BUG: during the tests for some reason
  // past entries are duplicated. This filter
  // will ensure that only unique keys are
  // present. To make it more weird it
  // doesn't happend in production
  if(history.entries && global._TEST_) {
    history.entries = R.uniqWith(
      (a,b) => a['key'] === b['key'],
      history.entries
    );
  }

  const len = (history.entries || {}).length;

  if(len === 1 || len === 0 || len === undefined) {
    return {};
  }

  const prev = history.entries.slice(len-2,len-1);
  const clone = JSON.parse(JSON.stringify(prev[0]));
  return clone;
};
