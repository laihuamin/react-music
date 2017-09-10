const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const extractText = new ExtractTextPlugin({
    filename: 'bundle.css'
});
const WebpackDevServer = require('webpack-dev-server');
require('babel-polyfill');

const htmlPlugin = new HTMLWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: extractText.extract({
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader?limit=10000&name=./static/imgs/[hash].[ext]'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    WebpackDevServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 3000,
        host: '10.0.0.9',
        proxy: {
            '/recommend/*': {
                target: 'http://localhost',
                changeOrigin: true,
                secure: false
            }
        }
    },

    plugins: [
        extractText,
        htmlPlugin
    ]
}