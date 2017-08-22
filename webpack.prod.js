const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsPlugin = require('favicons-webpack-plugin');

const paths = require('./paths');

module.exports = {
  devtool: 'source-map',

  entry: {
    main: paths.main,
  },

  output: {
    filename: '[name].[chunkhash].js',
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
        use: {
          loader: 'vue-loader',
          options: {
            extractCSS: true,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(?:sa|s?c)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(?:gif|png|jpe?g|svg|eot|ttf|woff2?)$/,
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
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.[chunkhash].js',
      minChunks: function (module) {
        return module.context &&
          module.context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: 'manifest.[chunkhash].js',
      minChunks: Infinity,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new HtmlPlugin({
      template: paths.index,
      minify: {
        collapseWhitespace: true,
        conservativeCollapse: false,
      },
    }),
    new HtmlPlugin({
      template: paths.index,
      filename: '404.html',
      minify: {
        collapseWhitespace: true,
        conservativeCollapse: false,
      },
    }),
    new FaviconsPlugin(paths.favicon),
    new ExtractTextPlugin('styles.[contenthash].css'),
  ],
};
