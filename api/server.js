import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import favicon from 'serve-favicon';

/* eslint-disable no-console */

const app = express();

const isDevelopment = process.env.NODE_ENV !== 'production';
const DIST_DIR = path.join(__dirname, 'dist/app');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (isDevelopment) {
  const config = require('../webpack.dev.config');
  const compiler = webpack(config);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    })
  );
  app.use(require('webpack-hot-middleware')(compiler));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/index.html'));
  });
} else {
  app.get('/');

  app.use(express.static(path.join(__dirname, '../app')));

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../app', 'index.html'));
  });
}

app.listen(3000, err => {
  if (err) return console.log(err);
  open(`http://localhost:3000}`);
});
