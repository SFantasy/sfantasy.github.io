// Module dependencies
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {

    devtool: 'eval',

    entry: [
        'webpack-dev-server/client?http://localhost:4000',
        'webpack/hot/only-dev-server',
        './index'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'home.bundle.js',
        publicPath: '/dist/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        }]
    }

};
