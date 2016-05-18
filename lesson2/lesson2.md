
# 快速使用webpack

## 安装
	
```sh
	git clone https://github.com/bjtqti/how_to_use_webpack.git
	cd lesson2
	$ npm install
	$ npm run start
```
    访问www/index.html就可以看到打包后的效果，打包输出的文件在www目录下
    
## 小结
	在lesson1中，没有关于css的处理，这一节，我们实现了对样式文件的打包。
	我们在webpack.config.js中增加两个loader用来处理这一任务：
	css-loader 实现对样式文件的识别
	style-loader 用于将打包好的样式内容插入到html文档中。
