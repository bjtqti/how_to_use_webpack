module.exports = {
  entry: ['./main.js','./icon.css'],
  output: {
  	path:'./dist',
    publicPath:'./dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders:[
    	{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
    	{ test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  }
};
