/**
 * TODO
 * Explain what's going on here.
 */
require('babel-core/register')({presets:['es2015'],plugins:[
  'transform-object-rest-spread',
  'transform-flow-strip-types'
]});

require('./hello.test.js');
