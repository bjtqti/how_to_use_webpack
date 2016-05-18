
# 快速使用webpack

## 安装
	
```sh
	git clone https://github.com/bjtqti/how_to_use_webpack.git
	cd lesson3
	$ npm install
	$ npm run start
```
    访问www/index.html就可以看到打包后的效果，打包输出的文件在www目录下
    
## 小结
	在lesson2中，css是直接内联在html文档中的，这与我们的实际情况不符，这一节中，我们通过引入webpack的插件机制
	实现样式文件与html文件的分离,这一切要归功于extract-text-webpack-plugin这个神奇的插件
	此外，我们还把引入css的方式从js模块中，移到了webpack.config.js中，这样做有于利多入口项目的管理，因此，相应
	的entery属性值的写法也发生了一些变化，属性名做为打包后的资源名，通过[name] 的方式进行指定。
