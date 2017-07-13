var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        home:'./src/index.js'
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'js/[name][hash:7].js',
        // publicPath: 'assets'
    },
    resolve:{
        extensions:['.css','.js','jsx']
    },
    module: {
        rules:[{
            test:/\.css/,
            use: [
                "style-loader",
                "css-loader",
                "postcss-loader"
            ]
        },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'admin.html',
            template:'./index.html',
        }),
        // new ExtractTextPlugin({
        //     filename: "css/[name].[contenthash].css"
        // }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        contentBase: "./assets",  //以public为根目录提供文件

        inline: true
    }

}
