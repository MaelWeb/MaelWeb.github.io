var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');

console.log(11111);
module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            "./src/app/app.js"
        ],
        vendors: ['react', 'react-dom', 'jquery']
    },
    output: {
        path: path.resolve(__dirname, "build/"),
        publicPath: "build/",
        filename: "app.js",
        chunkFilename: "[name].js",
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
        },{
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
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', '[name].js'),
        new ExtractTextPlugin("style.css", {
            allChunks: false
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            'jQuery': 'jquery'
        })
    ]
};
