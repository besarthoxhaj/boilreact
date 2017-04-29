import * as R from 'ramda';
import queryString from 'query-string';

import * as U from './helpers';

/**
 * Substitutes
 */
export const addQueryParam = (loc:Location, keysValue:KeyValueInput):Location => {
  const newLoc = R.pick(['pathname','search'],loc);
  newLoc.query = queryString.parse(newLoc.search);
  Object.keys(keysValue).forEach((elm) => delete newLoc.query[elm]);
  newLoc.query = Object.assign(keysValue,newLoc.query);
  newLoc.search = queryString.stringify(newLoc.query);
  return newLoc;
};

export const removeQueryParam = (loc:Location, keys:Array<string>):Location => {
  const newLoc = R.pick(['pathname','search'],loc);
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

  var pathname = R.pipe(
    R.either(U.regExp(/\#(.*?)\?/), U.regExp(/\#(.*)/)),
    R.either(U.getNth(1), U.curryIdentity('/'))
  )(url);

  var search = R.pipe(
    U.regExp(/\?(.*)/),
    R.either(U.getNth(0), U.curryIdentity(''))
  )(url);

  var query = queryString.parse(search);

  return {
    pathname,
    search,
    query,
  };
}
