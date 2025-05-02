const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
    clean: true,
  },
  devtool: !isProduction ? 'source-map' : false,
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'webfonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: 'original/android-chrome-192x192.png',
          to: 'android-chrome-192x192.png' 
        },
        { 
          from: 'original/android-chrome-256x256.png',
          to: 'android-chrome-256x256.png' 
        },
        { 
          from: 'original/apple-touch-icon.png',
          to: 'apple-touch-icon.png' 
        },
        { 
          from: 'original/browserconfig.xml',
          to: 'browserconfig.xml' 
        },
        { 
          from: 'original/favicon-16x16.png',
          to: 'favicon-16x16.png' 
        },
        { 
          from: 'original/favicon-32x32.png',
          to: 'favicon-32x32.png' 
        },
        { 
          from: 'original/favicon.ico',
          to: 'favicon.ico' 
        },
        { 
          from: 'original/mstile-150x150.png',
          to: 'mstile-150x150.png' 
        },
        { 
          from: 'original/safari-pinned-tab.svg',
          to: 'safari-pinned-tab.svg' 
        },
        { 
          from: 'original/site.webmanifest',
          to: 'site.webmanifest' 
        },
        { 
          from: 'original/webfonts',
          to: 'webfonts' 
        },
      ],
    }),
  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
