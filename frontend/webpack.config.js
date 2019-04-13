const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dist = path.resolve(__dirname, "dist");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: dist,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: dist
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),

    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "crate")
      // WasmPackPlugin defaults to compiling in "dev" profile. To change that, use forceMode: 'release':
      // forceMode: 'release'
    })
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".wasm"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.wasm$/, type: "webassembly/experimental" }
    ]
  }
};
