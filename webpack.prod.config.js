const baseConfig = require('./webpack.config.js');
const webpack = require('webpack');
const config = require('config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const GLOBALS = {
  API_BASE_URL: JSON.stringify(
    process.env.API_BASE_URL ||
    `${config.api.baseUrl}`
  )
};

baseConfig.plugins = [
  new webpack.DefinePlugin(GLOBALS), //define variables to use on development
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
      BABEL_ENV: JSON.stringify('production')
    }
  }),
  new HtmlWebpackPlugin({
    title: 'LCLite POC',
    template: 'index.tmpl.html'
  }),
  new UglifyJsPlugin({
    uglifyOptions: {
      sourceMap: false,
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      },
      output: {
        comments: false
      }
    }
  })
];

module.exports = baseConfig;
