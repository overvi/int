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
    reservationSingle: "./src/assets/js/reservations-single.js",
    tab: "./src/assets/js/tab.js",
    reports: "./src/assets/js/reports.js",
    accordion: "./src/assets/js/accordion.js",
    "general-info": "./src/assets/js/general-info.js",
    select: "./src/assets/js/select.js",
    contracts: "./src/assets/js/contracts.js",
    contractDetails: "./src/assets/js/contractDetails.js",
    specialOffers: "./src/assets/js/specialOffers.js",
    cancellationPolicies: "./src/assets/js/cancellationPolicies.js",
    cancellationPoliciesEdit: "./src/assets/js/editCancellationPolicies.js",
    extraBedPolicies: "./src/assets/js/extraBedPolicies.js",
    extraBedPoliciesEdit: "./src/assets/js/extraBedPoliciesEdit.js",
    childPolicies: "./src/assets/js/childPolicies.js",
    childPoliciesEdit: "./src/assets/js/childPoliciesEdit.js",
    availability: "./src/assets/js/availability.js",
  },
  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        "sign-in/index": "./src/sign-in/index.html",
        "sign-up/index": "./src/sign-up/index.html",
        "supplier/settings/index": "./src/supplier/settings/index.html",
        "supplier/list/index": "./src/supplier/list/index.html",
        "reservations/index": "./src/reservations/index.html",
        "reservations-single/index": "./src/reservations-single/index.html",
        "reservations-single/1/index": "./src/reservations-single/1/index.html",
        "reservations/hotel/1/index": "./src/reservations/hotel/1/index.html",
        "reservations/transfer/1/index":
          "./src/reservations/transfer/1/index.html",
        "hotels/index": "./src/hotels/index.html",
        "invoices/index": "./src/invoices/index.html",
        "reports/index": "./src/reports/index.html",
        "transfer/zones/index": "./src/transfer/zones/index.html",
        "transfer/cars/index": "./src/transfer/cars/index.html",
        "transfer/airports/index": "./src/transfer/airports/index.html",
        "transfer/rates/index": "./src/transfer/rates/index.html",
        "general-info/index": "./src/general-info/index.html",
        "images/index": "./src/images/index.html",
        "facilities/index": "./src/facilities/index.html",
        "rooms/index": "./src/rooms/index.html",
        "boards/index": "./src/boards/index.html",
        "rates-period/index": "./src/rates-period/index.html",
        "invoices-single/index": "./src/invoices-single/index.html",
        "contracts/index": "./src/contracts/index.html",
        "contracts/1/index": "./src/contracts/1/index.html",
        "special-offers/index": "./src/special-offers/index.html",
        "special-offers/edit/index": "./src/special-offers/edit/index.html",
        "cancellation-policies/index": "./src/cancellation-policies/index.html",
        "extrabed-policies/index": "./src/extrabed-policies/index.html",
        "cancellation-policies/edit/index":
          "./src/cancellation-policies/edit/index.html",
        "extrabed-policies/edit/index":
          "./src/extrabed-policies/edit/index.html",
        "child-policies/index": "./src/child-policies/index.html",
        "child-policies/edit/index": "./src/child-policies/edit/index.html",
        "hotel-policies/index": "./src/hotel-policies/index.html",
        "availability/index": "./src/availability/index.html",
        "invoice-1/index": "./src/invoice-1/index.html",
        "invoice-2/index": "./src/invoice-2/index.html",
        "invoice-3/index": "./src/invoice-3/index.html",
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
