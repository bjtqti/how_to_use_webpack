var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, 'node_modules');
 
module.exports = {
	entry:[
	 	//'webpack-dev-server/client?http://localhost:8081',//资源服务器地址
    	//'webpack/hot/dev-server',
		'./src/app.jsx','./src/app.css'
	],
	module: {
    	loaders: [{
		    test: /\.es6|jsx$/,
		    exclude: [node_modules_dir],
		    loaders: ['react-hot','babel-loader'],
	    },
	    {
	    	test:/\.css$/,
	    	loaders:['style', 'css']
	    }]
  	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath:"/assets/",
    	filename: 'bundle.js'
 	},
 	resolve: {
    	extensions: ['', '.js','.es6','.jsx']
    },
 	plugins: [
 		new webpack.DefinePlugin({
		    'process.env.NODE_ENV': '"development"'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
    ]
}