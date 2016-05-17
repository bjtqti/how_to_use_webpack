var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: './src/main.js', //入口文件,webpack会从入口文件出开始查找依赖递归进行打包
    output: {
        path: path.join(__dirname, 'www'),　　//打包后的文件位置
        filename: 'js/bundle.js',　　//打包后的文件名
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
        ],
    }
};