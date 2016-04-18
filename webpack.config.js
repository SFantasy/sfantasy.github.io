// Module dependencies
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {

    entry: [
        './index'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'home.bundle.js',
        publicPath: '/dist/'
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
          test: /\.scss$/,
          loader: 'style!css!sass!postcss'
        }]
    },

    postcss: function () {
      return [autoprefixer];
    }

};
