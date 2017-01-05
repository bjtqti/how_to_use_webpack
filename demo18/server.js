var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin())

var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  hot: true,
  inline:true,
  noInfo:true
});
server.listen(8080,'0.0.0.0',function(err,std){
	console.log(err,std)
});