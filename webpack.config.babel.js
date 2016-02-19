import path from 'path';
import webpack from 'webpack';
const scriptsDir = path.join(__dirname, './src/FantasyNameGenerator');
const indexJs = path.join(scriptsDir, 'app', 'app.jsx');
const outputDir = './dist/';

export default {
  entry: {
    "main": indexJs,
  },
  output: {
    path: outputDir,
    publicPath: outputDir,
    filename: '[name]-bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint-loader', include: scriptsDir }
    ],
    loaders: [
      {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
      {test: /\.css$/, loader: 'style!css!postcss'},
      {test: /\.less$/, loader: 'style!css!postcss!less'},
      {test: /\.json$/, loader: 'json'}
    ]
  }
};

