var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
module.exports = {
	entry:{
		app:['./src/app.jsx','./src/app.css']
	},
	module: {
    	loaders: [{
		    test: /\.es6|jsx$/,
		    exclude: /node_modules/,
		    loader: 'react-hot!babel-loader',
	    },
	    {
	    	test:/\.css$/,
	    	loader:ExtractTextPlugin.extract('style', 'css')
	    }]
  	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath:'/assets/',
    	filename: 'bundle.js'
 	},
 	resolve: {
    	extensions: ['', '.js','.es6','.jsx']
    },
 	plugins: [
 		new ExtractTextPlugin('bundle.css'),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '"production"'
        // }),
    ]
}