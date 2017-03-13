 const webpack = require('webpack');
 const webpackMerge = require('webpack-merge');
 const commonConfig = require('./base.js');

 module.exports = function(env) {
    return webpackMerge(commonConfig(), {
        devtool: 'cheap-module-source-map',
        // devServer: {
        //     port: 7777,
        //     host: 'localhost',
        //     historyApiFallback: true,
        //     noInfo: false,
        //     stats: 'minimal',
        //     // publicPath: publicPath
        // }
    })
 }