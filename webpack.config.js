'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, "public"),
  entry: "./index.js",
  output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
  },
  devtool: false, //'source-map',
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|lib)/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  node: {
    fs: 'empty'
  },
  resolve: {
    alias: {
      'handlebars': 'handlebars/dist/cjs/handlebars.js'
    }
  }
};
