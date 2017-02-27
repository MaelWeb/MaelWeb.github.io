var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');
var Html = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            "./src/app/app.js"
        ],
        vendors: ['react', 'react-dom', 'jquery']
    },
    output: {
        path: path.resolve(__dirname, "build/"),
        publicPath: "build/",
        filename: "js/[name].[hash:8].js",
        chunkFilename: "js/[name].[chunkhash:8].js",
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
            test: /\.css?$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
        }, {
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            loader: 'url-loader'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "url-loader?limit=8192&name=[name]-[hash].[ext]"
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'js/[name].[hash:8].js'),
        new ExtractTextPlugin("css/[name]-[contenthash].css", {
            allChunks: false
        }),
        new Html({
            filename: path.join(__dirname, 'index.html'),
            template: path.join(__dirname, 'index.tml')
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments
            },
            compress: {
                warnings: false
            },
            compressor: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            'jQuery': 'jquery'
        })
    ]
};
