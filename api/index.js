'use strict';

var server = require('./server');

server.start(() => {
  console.log('Server running on port:', server.info.port);
});
