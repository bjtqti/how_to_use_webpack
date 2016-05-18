[![Join the chat at https://gitter.im/reactjs-cn/react-docs](https://badges.gitter.im/Join%20Chat.svg)](http://webpack.github.io/docs/)
webpack官方文档

# 如何使用webpack构建前端打包方案 
	
	从零开始，一步一步地介绍webpack的使用，最终实现利用webpack构建一个自动化的打包方案

### 自动安装

```sh
	cd lesson1
	$ npm install
```
### 手动安装

```sh
	$ mkdir webapp
	$ npm init
	$ npm install webpack babel-core babel-loader babel-preset-es2015 --save-dev
	$ npm install react react-dom --save
	$ touch webpack.config.js
``` 

### 依赖
	
	需要安装nodejs 4.4.4+ 版本
	npm 3.0+
	推荐在Mac OS X 或 ubuntu  等环境下使用how_to_use_webpack 下的所有示例

> 注意:
>
> Windows下未经测试，npm install 部分包可能会因缺少组件而报错。比如sass需要自行安装phyton2.7，c++

### 提示信息

*  npm init 初始化一个项目，自动创建package.json文件，中间会有一些提示信息需要确认，默认回车就行。[文档](https://docs.npmjs.com/files/package.json)
*  --save 或 --save-dev 用来把install的包名保存在package.json文件中，以后只要npm install 就可以了。
   --save 和 --save-dev 是有区别的，从它们在package.json文件中的位置就大概可以猜出来了。简单来说，如果只是用来辅助打包用的包，就用--save-dev
   否则就用--save
*  webpack.config.js 文件是webpack的默认配置文件，放在项目的根目录，也就是与package.json同级。当然，这个路径和名字，也是可以更改的，不过需要
	用webpack --config xxx 的方式进行指定，后面章节会有示例，这一章了解一下就好。
*  npm 安装有些包会很慢，可以参考淘宝的npm镜像 [淘宝加速](https://npm.taobao.org/)
*  最后打开package.json文件，在scripts：后面加上"start":"webpack",这样就可以用npm run start 方式启动打包过程了。start这是任务的名字，可以
	用自己喜欢的，比如build,release等等，但是后面的webpack则是固定用法。更多用法参考[npm-scripts](https://docs.npmjs.com/misc/scripts)


### 启动

使用了webpack-dev-server 的情况下（默认地址是`http://localhost:4000`）：
否则直接访问对应目录下的index.html文件

```sh
$ npm run start
```
### 文档目录

* [lesson1](/lesson1)
* [lesson2](/lesson2)
* [lesson3](/lesson3)
* [lesson4](/lesson4)
* [lesson5](/lesson5)

### 参考

* [一小时包教会 —— webpack 入门指南](http://www.w2bc.com/Article/50764)
* [轻松入门React和Webpack](https://segmentfault.com/a/1190000002767365)
    - [解读Webpack官方文档](https://segmentfault.com/a/1190000003506497)
    - [npm-scripts](http://blog.csdn.net/ricohzhanglong/article/details/50726256)
* [WEBPACK 入门](http://www.jianshu.com/p/cc1e6f2d6380)
* [使用 Babel + React + Webpack 搭建 Web 应用](http://www.tuicool.com/articles/yU73qay)

### Blog

* [我的博客](http://www.cnblogs.com/afrog)