const config = require('config');
const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist', 'app');
const CLIENT_DIR = path.join(__dirname, 'app');

const reStyle = /\.(css|less|scss|sss)$/;
const dir = path.join(__dirname, 'app');

const GLOBALS = {
  API_BASE_URL: JSON.stringify(
    process.env.API_BASE_URL || `${config.api.baseUrl}`
  )
};

module.exports = {
  context: CLIENT_DIR,
  devtool: 'inline-source-map', // Inlines SourceMap into orginal file.
  entry: './index',
  output: {
    path: DIST_DIR, // Note: Physical files are only output by the production
    publicPath: `${config.api.host}:${config.api.port}/`,
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /(\.css)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      },
      {
        test: reStyle,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoader: 1,
              modules: false,
              camelCase: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.font\.(js|json)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'webfonts-loader'
        }]
      },
      {
        test: /\.(woff|woff2)$/,
        use: [{
          loader: 'url-loader',
          options: {
            prefix: 'font',
            limit: 5000
          }
        }]
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            prefix: 'font',
            limit: 5000
          }
        }]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream'
          }
        }]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000', {
            loader: 'img-loader',
            options: {
              gifsicle: {
                interlaced: false
              },
              mozjpeg: {
                progressive: true,
                arithmetic: false
              },
              optipng: false, // disabled
              pngquant: {
                floyd: 0.5,
                speed: 2
              },
              svgo: {
                plugins: [{
                  removeTitle: true
                }, {
                  convertPathData: false
                }
                ]
              }
            }
          }
        ]
      }
    ]
  }
};
