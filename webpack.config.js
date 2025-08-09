const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/favicon.png', to: 'favicon.png' },
        { from: 'public/apple-touch-icon.png', to: 'apple-touch-icon.png' },
        { from: 'public/og-image.png', to: 'og-image.png' },
        { from: 'public/robots.txt', to: 'robots.txt' },
        { from: 'public/sitemap.xml', to: 'sitemap.xml' },
      ],
    }),
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
      },
      {
        directory: path.join(__dirname, 'dist'),
        publicPath: '/',
      }
    ],
    port: 3001,
    historyApiFallback: true,
    open: true,
  },
};