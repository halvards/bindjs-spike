'use strict';

module.exports = function (options) {
  options = options || {};

  var path = require('path');
  var express = require('express');
  var favicon = require('serve-favicon');

  var app = express();

  app.use(favicon(path.join(__dirname, '../public/favicon.ico')));

  app.use(express.static(path.join(__dirname, '../public')));

  app.get('/hello', function (req, res) {
    res.send('Hello World!');
  });

  var server = app.listen(options.port || process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log(`App listening at http://localhost:${port}`);
  });
}
