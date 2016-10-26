var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'app.js'
    },
    devtool: 'eval',               // ReferenceError: BrotliBitReader is not defined
    // devtool: 'eval-source-map', // ReferenceError: BrotliBitReader is not defined
    module: {
        loaders: [{test: /\.js$/, loader: 'babel'}]
    },
    node: {
      fs: 'empty'
    },
};
