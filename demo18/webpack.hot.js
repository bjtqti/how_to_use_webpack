var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
module.exports = {
	entry:[
	 	'webpack-dev-server/client?http://127.0.0.1:8090',//资源服务器地址
    	'webpack/hot/dev-server',
		'./src/app.es6'
	],
	module: {
    	loaders: [{
		    test: /\.es6$/,
		    exclude: /node_modules/,
		    loader: 'babel-loader',
	    },
	    {
	    	test:/\.css$/,
	    	loader:ExtractTextPlugin.extract('style', 'css')
	    }]
  	},
  	watch:true,
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath:'http://127.0.0.1:8090/assets/',
    	filename: 'bundle.js'
 	},
 	plugins: [
 		new ExtractTextPlugin('bundle.css'),
 		new webpack.DefinePlugin({
		    'process.env.NODE_ENV': '"development"'
		}),
		new webpack.HotModuleReplacementPlugin()
    ]
}