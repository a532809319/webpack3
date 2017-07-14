var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            // 'webpack-dev-server/client',
            // 'webpack/hot/only-dev-server',
            './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name][hash:7].js',
        // publicPath: 'assets'
    },
    resolve: {
        extensions: ['.css', '.js', 'jsx']
    },
    module: {
        loaders: [{
            test: /\.css/,
            use: [
                "style-loader",

                // "postcss-loader",
                "css-loader"
            ]
        },
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'admin.html',
            template: './index.html',
        }),
        // new webpack.HotModuleReplacementPlugin() ,// 启
        // new ExtractTextPlugin({
        //     filename: "css/[name].[contenthash].css"
        // }),
        //   new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        // hot: true,

        contentBase: "./assets",  //以public为根目录提供文件
        inline: true
    }

}
