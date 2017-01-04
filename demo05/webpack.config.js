var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: ['./main.js','./icon.css'],
  output: {
  	path:'./dist',
    //publicPath:'./dist/',
    filename: 'bundle_[hash:8].js'
  },
  module: {
    loaders:[
    	{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
    	{ test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
  ]
};
