 
//多入口示例
module.exports = {
  entry: {
    bundle1: './main1.js', //入口1
    bundle2: './main2.js'//入口2
  },
  output: {
    filename: '[name].js' // [name]是一个变量，会自动替换成entry的key
  }
};
