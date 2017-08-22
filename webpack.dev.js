const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    main: paths.main,
  },

  output: {
    filename: '[name].bundle.js',
    path: paths.docs,
    publicPath: paths.publicPath,
  },

  resolve: {
    extensions: ['.js', '.vue'],
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(?:sa|s?c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(?:gif|png|jpe?g|svg|ttf|eot|woff2?)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlPlugin({
      template: paths.index,
    }),
  ],

  devServer: {
    noInfo: true,
    hot: true,
    historyApiFallback: {
      index: paths.publicPath,
    },
  },
};
