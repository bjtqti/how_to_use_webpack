var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        bundle:['./src/main.js','./style/main.css']
    },
    module: {
        loaders: [　　//配置模块加载器,数组形式
            {   
                test: /\.(js|jsx)$/, 
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },//babel加载器用于将es6转化成es5,使用前请先安装babel-loader再引入加载器
            { 
                test: /\.css$/, 
                loader:ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ],
    },
    output: {
        path: path.join(__dirname, 'build'),　　//打包后的文件位置
        filename: 'js/[name].js',　　//打包后的文件名
        publicPath:'/build'
    },
    //watch:true,
    devServer: {
        hot: true,
        port:4000,
        inline:true
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};