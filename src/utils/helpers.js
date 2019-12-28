import * as R from 'ramda';

/**
 * [curryIdentity description]
 * @param  {[type]} a [description]
 * @return {[type]}   [description]
 */
export const curryIdentity = (a) => () => a;

/**
 * [log description]
 * @param  {[type]} a [description]
 * @return {[type]}   [description]
 */
export const log = (a) => {
  console.log(`log:`,a); // eslint-disable-line no-console
  return a;
};

/**
 * Simply inverts RegExp order to make it functional
 * @param  {[type]} reg [description]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
export const regExp = (rgx) => (str) => rgx.exec(str);

/**
 * Tries to access any array index. If the arg is not an array
 * will return undefined.
 * @param  {Number} nth    index to access
 * @param  {Any} arr       possible array
 * @return {Any|Undefined}
 */
export const getNth = (nth) => (arr) => {
  try {
    return arr[nth];
  } catch (err) {
    return undefined;
  }
};

export const normUser = (data) => {
  return data;
};
