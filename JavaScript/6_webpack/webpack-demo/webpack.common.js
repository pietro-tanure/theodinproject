const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: 'Webpack 5 Video tutorials',
            filename: 'index.html', // can choose to use another file
            inject: 'head',  // where we put js sources
            scriptLoading: 'defer',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
};