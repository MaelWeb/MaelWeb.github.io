var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
var pathTojQuery = path.resolve(node_modules, 'jquery/dist/jquery.min.js');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        "./js/main.js"
    ],
    output: {
        path: path.resolve(__dirname, "pack"),
        publicPath: "pack",
        filename: "main.min.js",
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'react': pathToReact,
            'react-dom': pathToReactDom,
            "jquery": pathTojQuery
        }
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
            test:  /\.(png|jpg|gif)$/,
            loader: "url-loader?limit=8192&name=/images/[name]-[hash].[ext]"
        }],
        noParse: ['jquery', 'react', 'readct-dom']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin("style.css", {
            allChunks: false
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            'jQuery': 'jquery'
        })
    ]
};
