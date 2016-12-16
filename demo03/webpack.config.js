module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  }
};

// exclude:是不解析的条件表达式
//loader: babel-loader可以简写成 loader:'babel'
// .babelrc 指定转换要用到的插件，有三种形式:1,babel-loader?preset=[]
// 2. 创建.babelrc文件
// 3. 在webpack.config.js中添加babel指定
/**
  {
    "name": "my-package",
    "version": "1.0.0",
    "babel": {
      // my babel config here
    }
  }
*/