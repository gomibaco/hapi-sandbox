'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  port: 3000
});

server.route({
  method: 'GET',
  path: '/',
  handler: function(req, rep) {
    rep('Hello World!!');
  }
})

server.start(() => {
  console.log('Server running at:', server.info.uri);
});