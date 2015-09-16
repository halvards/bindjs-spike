'use strict';

module.exports = () => {
  window.$ = window.jQuery = require('jquery');

  let data = require('./data.js');
  data();
}();
