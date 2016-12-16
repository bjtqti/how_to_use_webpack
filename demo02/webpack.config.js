 

//多个入口地址的情况，注意打包之后的文件名是动态指定的
//提示name 是和 entry的key值一一对应的哦

module.exports = {
  entry: {
    bundle1: './main1.js', //还可以用数组-> bundle1:['./main1.js','./main1.css']
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  }
};
