'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: Number(process.env.PORT) || 9010,
  routes: {
    cors: {
      origin: ['*'],
      credentials: true
    }
  }
});

server.register([
  require('inert'),
  require('h2o2'),
], err => {
  if (err) {
    console.log('Failed to load inert');
    throw err;
  }
  server.route(require('./routes.js'));
});

module.exports = server;
