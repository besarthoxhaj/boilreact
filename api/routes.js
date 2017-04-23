'use strict';

const handlers = require('./handlers.js');
const path = require('path')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      reply.file(path.join(__dirname,'..','public','index.html'));
    }
  },
  {
    method: 'GET',
    path: '/bundle.js',
    handler: (req, reply) => {
      reply.file(path.join(__dirname,'..','public','bundle.js'));
    }
  }
];
