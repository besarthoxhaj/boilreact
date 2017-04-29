/**
 * TODO
 * Explain what's going on here and find a better wha
 */
require('babel-polyfill');
require('isomorphic-fetch');

require('babel-core/register')({presets:['es2015'],plugins:[
  'transform-object-rest-spread',
  'transform-flow-strip-types'
]});

const BASE_PATH = '../app';

/**
 * Globals
 * Are used to change the behaviour of the App in
 * specific points.
 */
_TEST_ = true;
window = {
  _REACT_ENV_: undefined
};

// require(`${BASE_PATH}/_tests/main.test.js`);
// require(`${BASE_PATH}/containers/Home/_tests/index.test.js`);
require(`${BASE_PATH}/utils/_tests/index.test.js`);
