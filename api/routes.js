'use strict';

const handlers = require('./handlers.js');
const path = require('path');
const data = require('../data');

module.exports = [
  {
    method: 'GET',
    path: '/{param*}',
    config: {
      auth: 'simple'
    },
    handler: {
      directory: {
        path: './build',
        redirectToSlash: true,
        index: true
      }
    }
  },
  {
    method: 'GET',
    path: '/test/{param*}',
    config: {
      auth: 'simple'
    },
    handler: {
      directory: {
        path: './tests/_snapshots',
        redirectToSlash: true,
        index: true
      }
    }
  },
  {
    method: 'GET',
    path: '/api/data',
    config: {
      auth: 'simple'
    },
    handler: (req, res) => {
      return res(data['GET']);
    }
  },
];
