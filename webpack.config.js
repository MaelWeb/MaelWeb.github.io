var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        "./src/app/app.js"
    ],
    output: {
        path: path.resolve(__dirname, "build/"),
        publicPath: "build/",
        filename: "app.js",
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
            test: /\.css?$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
        }, {
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            loader: 'url-loader'
        }, {
            test:  /\.(png|jpg|gif)$/,
            loader: "url-loader?limit=8192&name=/images/[name]-[hash].[ext]"
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin("style.css", {
            allChunks: false
        })
    ]
};