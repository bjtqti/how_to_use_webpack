'use strict'
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var path = require('path');
var entry = [config.entry];
var plugins = [new webpack.HotModuleReplacementPlugin()]
config.output.path = path.resolve(__dirname);
entry.unshift('webpack-dev-server/client?http://127.0.0.1:8000')
entry.unshift('webpack/hot/dev-server')
config.entry = entry;
config.plugins = plugins;
 
var compiler = webpack(config);
new WebpackDevServer(compiler, {
	publicPath: '/assets/',
	hot: true,
	noInfo: true,
	inline: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	},
	historyApiFallback: true
}).listen(8000, '127.0.0.1', function(err, result) {
	if (err) {
		console.log(err);
	}
	console.log('🌎 hmr-server Listening at %s:%d', '127.0.0.1', 8000);
});