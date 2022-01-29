const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");

module.exports = {
  entry: __dirname + "/src/app/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/public/index.html" }),
    // new HtmlWebpackPlugin({
    //   template: __dirname + "/src/public/index.html",
    //   inject: "body",
    // }),
  ],
  devServer: {
    port: 7700,
  },
};
