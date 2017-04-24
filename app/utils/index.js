import * as R from 'ramda';
import queryString from 'query-string';

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
