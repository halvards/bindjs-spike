'use strict';

var path = require('path');

module.exports = {
  context: path.join(__dirname, "public"),
  entry: "./index.js",
  output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|lib)/,
        loader: 'babel'
      }
    ]
  },
  externals: {
    'jquery': 'jQuery'
  },
  node: {
    fs: 'empty'
  }
};
