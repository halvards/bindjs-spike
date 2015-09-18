'use strict';

module.exports = (options) => {
  options = options || {};

  let consolidate = require('consolidate'),
      express = require('express'),
      fs = require('fs'),
      handlebars = require('handlebars'),
      path = require('path');

  let app = express();

  app.engine('html', consolidate.handlebars);
  app.set('view engine', 'html');
  app.set('views', path.join(__dirname, '../public/views'));

  // Register Handlebars partials
  let partialsDir = path.join(__dirname, '../public/views/partials');
  fs.readdirSync(partialsDir).forEach(function (file) {
      let source = fs.readFileSync(path.join(partialsDir, file), 'utf8');
      let partial = /(.+)\.html/.exec(file).pop();
      handlebars.registerPartial(partial, source);
  });

  app.use(express.static(path.join(__dirname, '../public')));

  app.get('/', (req, res) => {
    res.render('index');
  });

  let server = app.listen(options.port || process.env.PORT || 3000, () => {
    let port = server.address().port;
    console.log(`App listening at http://localhost:${port}`);
  });
}
