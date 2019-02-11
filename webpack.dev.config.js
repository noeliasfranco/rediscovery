const webpack = require('webpack');
const baseConfig = require('./webpack.config.js');
const config = require('config');

const GLOBALS = {
  API_BASE_URL: JSON.stringify(
    process.env.API_BASE_URL ||
    `${config.api.baseUrl}`
)
};

baseConfig.entry = ['webpack-hot-middleware/client?reload=true', './index'];
baseConfig.output.publicPath = '/';

baseConfig.plugins = [
  new webpack.DefinePlugin(GLOBALS), //define variables to use on development
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];

module.exports = baseConfig;
