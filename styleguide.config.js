const webpack = require('webpack');
const config = require('config');

module.exports = {
  components: 'app/components/**/*.js',
  webpackConfig: Object.assign({}, require('./webpack.config.js'),  {
    plugins: [
      new webpack.DefinePlugin({
          API_BASE_URL: JSON.stringify(
          process.env.API_BASE_URL || `${config.api.baseUrl}`
        )
      }),
    ],
  })
};
