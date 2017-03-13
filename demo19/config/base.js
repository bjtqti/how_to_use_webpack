var path = require('path');
module.exports = function() {
    return {
        entry: {
            'index': './index.js'
        },
        output: {
            path: path.join(__dirname, '/../dist'),
            filename: '[name].bundle.js',
            //publicPath: publicPath,
            sourceMapFilename: '[name].map'
        },
        resolve: {
            extensions: ['.ts', '.js', '.json'],
            modules: ['node_modules']

        },
        module: {
            rules: [{
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader']
            }, {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                  loader: 'url-loader',
                  options: {
                    limit: 100000
                  }
                }
            }],
        },
        plugins: [
           
        ],
    };
}