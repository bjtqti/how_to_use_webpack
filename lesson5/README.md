
# 快速使用webpack
	
	官方的例子中是全局安装webpack,然后用命令行的方式对指定的文件进行打包输出：
	```sh
		$ npm install webpack -g
	 	$ webpack ./entry.js bundle.js
	```
	例子非常简单，在实际工作中，这么简单的情况很少见，而且很多情况下，全局安装要sudo权限，建议局部安装就好。

## 安装
	
```sh
	git clone https://github.com/bjtqti/how_to_use_webpack.git
	cd lesson4
	$ npm install
	$ npm run start
```
    访问http://127.0.0.1:4000/build/
    或者http://127.0.0.1:4000/www/
    然后改变一下样式，是不是发现实时生效了呢

## 小结
	本章演示了如何使用webpack 把采用es6和jsx 语法编写的源码转换成浏览器可以运行的普通js，
	这很有趣，不是吗？