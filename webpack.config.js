var webpack = require('webpack');  
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + '/static',
    filename: 'bundle.js',
    publicPath: '/src/components'
  },
  module: {
    // rules: [
    //   { test: /\.(js)$/, use: 'babel-loader' },
    //   { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
    // ],
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'app/index.html'
    // })
  ]
};