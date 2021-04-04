/*******************************
 * Environment and Imports
 ******************************/
var env = process.env.NODE_ENV.trim();
var devMode = env != "production";

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const path = require("path");

const here = (p) => path.join(__dirname, p);

/*******************************
 * Entry
 ******************************/
const entry = {
  main: [here("./src/index.js")],
};

/*******************************
 * Output
 ******************************/
const output = {
  path: here("./dist"),
  filename: "[name].bundle.js",
};

/*******************************
 * Module
 ******************************/
const modules = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    },
    {
      test: /\.(sa|sc|c)ss$/,
      // exclude: [/node_modules/],
      use: [
        devMode ? "style-loader" : MiniCssExtractPlugin.loader,
        "css-loader",
        // {
        //   loader: "postcss-loader",
        //   options: {
        //     config: {
        //       path: here("./"),
        //     },
        //   },
        // },
        "sass-loader",
      ],
    },
  ],
};

console.log(modules.rules[1].use[0]);

/*******************************
 * Plugins
 ******************************/
const plugins = [
  new MiniCssExtractPlugin({
    filename: devMode ? "[name].css" : "[name].[hash].css",
    chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
  }),
  new HtmlWebpackPlugin({
    template: here("./src/index.html"),
  }),
  new StyleLintPlugin({
    configFile: here("./stylelint.config.js"),
  }),
];

// Enabling HMR only if dev mode is enabled
if (devMode) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

/*******************************
 * Optimization
 ******************************/
const optimization = {
  minimize: true,
  minimizer: [new TerserPlugin()],
};

/*******************************
 * Exporting configuration
 ******************************/
var configObject = {
  mode: env,
  entry,
  devServer: {
    port: 3000,
    hot: true,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  // optimization,
  devtool: "eval-cheap-module-source-map",
  output,
  resolveLoader: {
    // Configure how Webpack finds `loader` modules.
    modules: [here("./node_modules")],
  },
  module: modules,
  plugins,
};

if (!devMode) {
  configObject.optimization = optimization;
  configObject.devtool = "inline-cheap-module-source-map";
}

module.exports = (env, argv) => {
  configObject.mode = argv.mode;
  return configObject;
};
