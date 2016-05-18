var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app:['./src/main.js','./style/main.css'] //入口文件,webpack会从入口文件出开始查找依赖递归进行打包
    },
    module:{
    	loaders:[
    		{ 
    			test: /\.css$/, 
    			loader:ExtractTextPlugin.extract("style-loader", "css-loader")
    		}
    	]
    },
    output: {
        path: path.join(__dirname, 'www'),　　//打包后的文件位置
        filename: '[name].js',　　//打包后的文件名
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};