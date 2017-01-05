 

# Webpack学习参考书
	
### Webpack简介
	1. Webpack是由Tobias Koppers开发的一个开源前端模块构建工具。
	2. 它的基本功能是将以模块格式书写的多个JavaScript文件打包成一个文件，同时支持CommonJS和AMD格式。
	3. 它与众不同的是，它提供了强大的loader API来定义对不同文件格式的预处理逻辑，从而让我们可以将CSS、模板，
	   甚至是自定义的文件格式当做JavaScript模块来使用。
	4. Webpack 基于loader还可以实现大量高级功能，比如自动分块打包并按需加载、对图片资源引用的自动定位、
	   根据图片大小决定是否用base64内联、开发时的模块热替换等等，可以说是目前前端构建领域最有竞争力的解决方案之一。

### 怎么使用

* 首先安装Webpack

```sh
  $ npm i -g webpack webpack
```
或者

```sh
  $ npm install webpack webpack
```
这里加上-g 是表示全局安装，可以直接在终端输入webpack命令运行，不加-g则安装在当前目录下，两种安装方式各有优点：全局安装的好处是一次安装，到处可以用。局部安装的好处是程序调用快一点点。推荐全局安装，这样方便我们练习。

### 目录

1. [Entry file](#demo01-entry-file-source)
1. [Multiple entry files](#demo02-multiple-entry-files-source)
1. [Babel-loader](#demo03-babel-loader-source)
1. [CSS-loader](#demo04-css-loader-source)
1. [Image loader](#demo05-image-loader-source)
1. [CSS Module](#demo06-css-module-source)
1. [UglifyJs Plugin](#demo07-uglifyjs-plugin-source)
1. [HTML Webpack Plugin and Open Browser Webpack Plugin](#demo08-html-webpack-plugin-and-open-browser-webpack-plugin-source)
1. [Environment flags](#demo09-environment-flags-source)
1. [Code splitting](#demo10-code-splitting-source)
1. [Code splitting with bundle-loader](#demo11-code-splitting-with-bundle-loader-source)
1. [Common chunk](#demo12-common-chunk-source)
1. [Vendor chunk](#demo13-vendor-chunk-source)
1. [Exposing Global Variables](#demo14-exposing-global-variables-source)
1. [Hot Module Replacement](#demo15-hot-module-replacement-source)
1. [React router](#demo16-react-router-source)

## Demo01: Entry file ([source](https://github.com/bjtqti/how_to_use_webpack/tree/master/demo01))

Entry file is a file which Webpack will read to build bundle.js.

For example, `main.js` is an entry file.

```javascript
// main.js
document.write('<h1>Hello World</h1>');
```

index.html

```html
<html>
  <body>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
</html>
```

Webpack follows `webpack.config.js` to build `bundle.js`.

```javascript
// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
```

Launch the server, visit http://127.0.0.1:8080 .

```bash
$ webpack-dev-server
```


### 参考

1. [官方文档](http://webpack.github.io/)
2. [源码fork](https://github.com/ruanyf/webpack-demos)
1. [WebPack 简明学习教程](http://www.jianshu.com/p/b95bbcfc590d)
1. [一小时包教会 —— webpack 入门指南](http://www.w2bc.com/Article/50764)
1. [轻松入门React和Webpack](https://segmentfault.com/a/1190000002767365)
    1.1 [解读Webpack官方文档](https://segmentfault.com/a/1190000003506497)
    1.1 [npm-scripts](http://blog.csdn.net/ricohzhanglong/article/details/50726256)
1. [WEBPACK 入门](http://www.jianshu.com/p/cc1e6f2d6380)
1. [使用 Babel + React + Webpack 搭建 Web 应用](http://www.tuicool.com/articles/yU73qay)

### Blog

* [我的博客](http://www.cnblogs.com/afrog)