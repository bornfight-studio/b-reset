const webpack = require("webpack");
const path = require("path");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
    entry: {
        "b-reset": ["./src/b-reset.scss"],
    },
    output: {
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [new FixStyleOnlyEntriesPlugin(), new MiniCssExtractPlugin(), new CleanWebpackPlugin()],
};

module.exports = config;
