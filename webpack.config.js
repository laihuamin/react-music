const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const extractText = new ExtractTextPlugin({
    filename: 'bundle.css'
});
// const WebpackDevServer = require('webpack-dev-server');
require('babel-polyfill');
// require('react-hot-loader');

const htmlPlugin = new HTMLWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    // devtool 指明了sourcemap的生成方式，它有七个选项，具体请参考 https://segmentfault.com/a/1190000004280859
    // sourcemap 的作用就是为调试代码提供便利
    // cheap-module-eval-source-map 绝大多数情况下都会是最好的选择，这也是下版本 webpack 的默认选项。

    entry: [
        // 'react-hot-loader',
        //reload
        // 'webpack-hot-middleware/client?reload=true',
        // 这里reload=true的意思是，如果碰到不能hot reload的情况，就整页刷新。

        'babel-polyfill', 
        './src/index.js'
    ],

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

    plugins: [
        new webpack.HotModuleReplacementPlugin(),    //热启动，仅开发者模式
        new webpack.NoEmitOnErrorsPlugin(),    // 允许错误不打断程序，,仅开发模式需要
        extractText,
        htmlPlugin
    ]
}