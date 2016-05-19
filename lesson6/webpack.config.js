var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        bundle:'./src/main.js'
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
    //devtool: 'cheap-module-source-map',
    output: {
        path: path.join(__dirname, 'build'),　　//打包后的文件位置
        filename: 'js/[name].js',　　//打包后的文件名
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
              comments: false
            },
            sourceMap: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify("production")
            }
        })

    ]
};