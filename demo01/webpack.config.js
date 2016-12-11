
module.exports = {
    entry: './main.js', //入口文件,webpack会从入口文件出开始查找依赖递归进行打包
    output: {
        filename: 'bundle.js',　　//打包后的文件名
    }
};