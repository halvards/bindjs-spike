'use strict';

module.exports = function () {
  var Bind = require('bind.js');

  var data = {
    score: 10
  };

  Bind(data, {
    score: '.score'
  });
};
