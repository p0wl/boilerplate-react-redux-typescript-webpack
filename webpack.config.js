const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: [
            "webpack-dev-server/client?http://localhost:8080",
            "webpack/hot/only-dev-server",
            "./src/index.tsx"
        ],
        vendor: [
            "react",
            "react-dom",
            "redux",
            "react-redux"
        ]
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist",
        publicPath: "dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                include: path.join(__dirname, 'src'),
                loaders: ["react-hot", "ts-loader"]
            }
        ],

        preLoaders: [
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
    ]
};