var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: "./js/main.js",
    },
    output: {
        path: path.resolve(__dirname, "pack"),
        publicPath: "pack",
        filename: "main.min.js",
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
        }, {
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            loader: 'url-loader'
                // loader: 'url-loader'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "url-loader?limit=8192&name=/images/[name]-[hash].[ext]"
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin("style.css", {
            allChunks: false
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            'jQuery': 'jquery'
        })
    ],
}
