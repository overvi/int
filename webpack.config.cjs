const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    login: "./src/assets/js/login.js",
    main: "./src/assets/js/main.js",
    "drag-drop": "./src/assets/js/drag-drop.js",
    modal: "./src/assets/js/modal.js",
    received: "./src/assets/js/reservations.js",
    tab: "./src/assets/js/tab.js",
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        "sign-in/index": "./src/sign-in/index.html",
        "sign-up/index": "./src/sign-up/index.html",
        "supplier/settings/index": "./src/supplier/settings/index.html",
        "supplier/list/index": "./src/supplier/list/index.html",
        "reservations/index": "./src/reservations/index.html",
        "reservations/hotel/1/index": "./src/reservations/hotel/1/index.html",
        "reservations/transfer/1/index":
          "./src/reservations/transfer/1/index.html",
        "hotels/index": "./src/hotels/index.html",
        "invoices/index": "./src/invoices/index.html",
      },
      js: {
        // output filename of extracted JS from source script loaded in HTML via `<script>` tag
        filename: "js/[name].[contenthash:8].js",
      },
      css: {
        // output filename of extracted CSS from source style loaded in HTML via `<link>` tag
        filename: "css/[name].[contenthash:8].css",
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Font file extensions
        type: "asset/resource", // Use built-in asset/resource for Webpack 5
        generator: {
          filename: "fonts/[name][ext]", // Output directory for fonts
        },
      },

      {
        test: /\.css$/i,
        use: ["css-loader", "postcss-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",

        generator: {
          filename: "assets/img/[name].[hash:8][ext]",
        },
      },
    ],
  },
  devServer: {
    static: "./dist",
    hot: true,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],

    alias: {
      "@assets": path.join(__dirname, "./src/assets"),
    },
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean the output directory before building
  },

  optimization: {
    runtimeChunk: "single",

    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  mode: "development",
};
