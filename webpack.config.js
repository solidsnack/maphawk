const webpack = require("webpack");
const pkg = require("./package.json");

module.exports = {
    devtool: "source-map",
    entry: "./src/index.ts",

    output: {
        filename: "dist/bundle/app.js",
        libraryTarget: "umd",
        library: "app",
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
        }],
    },

    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },

    plugins: [
        new webpack.DefinePlugin({
            "__VERSION__": JSON.stringify(pkg.version),
        })
    ],
};