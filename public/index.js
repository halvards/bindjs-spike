'use strict';

module.exports = function () {
  var Bind = require('bind.js');
  console.log('required bind');

  var data = Bind({
    score: 10
  }, {
    score: '.score'
  });
}
