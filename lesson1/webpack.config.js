var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: './src/main.js', //入口文件,webpack会从入口文件出开始查找依赖递归进行打包
    output: {
        path: path.join(__dirname, 'www'),　　//打包后的文件位置
        filename: 'bundle.js',　　//打包后的文件名
    }
};