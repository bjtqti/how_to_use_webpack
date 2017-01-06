var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, 'node_modules');
 
module.exports = {
	entry:[
	 	//'webpack-dev-server/client?http://localhost:8081',//资源服务器地址
    	//'webpack/hot/dev-server',
		'./src/app.es6'
	],
	module: {
    	loaders: [{
		    test: /\.es6$/,
		    exclude: [node_modules_dir],
		    loaders: ['babel-loader'],
	    },
	    {
	    	test:/\.css$/,
	    	loader:ExtractTextPlugin.extract('style', 'css')
	    }]
  	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath:"/assets/",
    	filename: 'bundle.js'
 	},
 	resolve: {
    	extensions: ['', '.js','.es6']
    },
 	plugins: [
 		new ExtractTextPlugin('bundle.css'),
 		new webpack.DefinePlugin({
		    'process.env.NODE_ENV': '"development"'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
    ]
}