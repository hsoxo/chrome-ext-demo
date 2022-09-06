const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[id].[contenthash].bundle.js',
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false,
              configFile: path.resolve(__dirname, 'tsconfig.json'),
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        ],
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  devServer: {
    port: 3888,
    allowedHosts: 'all',
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
    devMiddleware: {
      stats: { colors: true },
    },
    client: {
      progress: true,
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Roller Dev',
      template: './public/index.html'
    })
  ],
};
