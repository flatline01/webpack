const path = require('path');

var webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
        })     
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};