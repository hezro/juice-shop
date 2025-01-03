/*
 * Copyright (c) 2014-2020 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

require('./lib/startup/validateDependencies')().then(() => {
  const server = require('./server')
  server.start()
})


var express = require('express'),
    app = express(),
    server = require('http').createServer(app),

app.configure(function () {
  app.use(express.static(__dirname + '.'));
});
