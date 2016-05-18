
# 快速使用webpack
	
	官方的例子中是全局安装webpack,然后用命令行的方式对指定的文件进行打包输出：
	```sh
		$ npm install webpack -g* 
	 	$ webpack ./entry.js bundle.js
	```
	例子非常简单，在实际工作中，这么简单的情况很少见，而且很多情况下，全局安装要sudo权限，建议局部安装就好。

## 安装
	如果是采用clone git 的方式直接使用下面的方式安装
```sh
	cd lesson1
	$ npm install
	$ npm run start
```
    访问www/index.html就可以看到打包后的效果，打包输出的文件在www/js目录下

## 延伸练习

	全新开始，怎么使用webpack ?

```sh
	$ mkdir webapp
	$ npm init
	$ npm install webpack babel-core babel-loader babel-preset-es2015 --save-dev
	$ touch webpack.config.js
``` 
*  npm init 初始化一个项目，自动创建package.json文件，中间会有一些提示信息需要确认，默认回车就行。
*  --save 或 --save-dev 用来把install的包名保存在package.json文件中，以后只要npm install 就可以了。
   --save 和 --save-dev 是有区别的，从它们在package.json文件中的位置就大概可以猜出来了。简单来说，如果只是用来辅助打包用的包，就用--save-dev
   否则就用--save
*  webpack.config.js 文件是webpack的默认配置文件，放在项目的根目录，也就是与package.json同级。当然，这个路径和名字，也是可以更改的，不过需要
	用webpack --config xxx 的方式进行指定，后面章节会有示例，这一章了解一下就好。