'use strict';

module.exports = () => {
  let Bind = require('bind.js');

  let data = {
    score: 10
  };

  Bind(data, {
    score: '.score'
  });
};
