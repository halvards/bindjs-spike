'use strict';

module.exports = (options) => {
  options = options || {};

  let path = require('path');
  let express = require('express');
  let favicon = require('serve-favicon');

  let app = express();

  app.use(favicon(path.join(__dirname, '../public/favicon.ico')));

  app.use(express.static(path.join(__dirname, '../public')));

  app.get('/hello', (req, res) => {
    res.send('Hello World!');
  });

  let server = app.listen(options.port || process.env.PORT || 3000, () => {
    let port = server.address().port;
    console.log(`App listening at http://localhost:${port}`);
  });
}
