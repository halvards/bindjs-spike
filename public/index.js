'use strict';

module.exports = () => {
  window.$ = window.jQuery = require('jquery');

  require('./render')();
  require('./data')();
}();
