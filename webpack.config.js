const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    devtool: "source-map",
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"), // Updated line
        },
        compress: true,
        port: 9000,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html",
        }),
    ],
};
