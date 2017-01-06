var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.hot.js');
var proxy = require('proxy-middleware');
var url = require('url');
var opn = require('opn');
var ip = 'localhost';
var port = 8081;
var uri =(`http://${ip}:${port}`);
var publicPath = `${uri}/assets/`;
module.exports = function(app) {
  // 使用8081端口
  app.use('/assets', proxy(url.parse(publicPath)));
  config.entry.unshift('webpack/hot/dev-server');
  config.entry.unshift('webpack-dev-server/client?'+uri);
  config.output.publicPath = publicPath;
  var server = new WebpackDevServer(webpack(config), {
    //contentBase: config.output.path,
    hot: true,
    inline:true,
    //quiet: false,
    noInfo: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: {
      colors: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  });
  server.listen(port, ip, function() {
    console.log('🌎 hmr-server Listening at %s',uri);
    opn(uri)
  });
}