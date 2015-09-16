'use strict';

module.exports = function () {
  window.$ = window.jQuery = require('jquery');

  var data = require('./data.js');
  data();
}();
