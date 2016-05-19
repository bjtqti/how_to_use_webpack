
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
	cd lesson6
	$ npm install
	$ npm run start
```
	注意观察build/css 和 build/js 下面文件的变化

## 小结
	本章演示了在生产环境如何打包并输出压缩后的js和css