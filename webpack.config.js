const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ReplacePlugin = require('replace-bundle-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const path = require('path');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: path.resolve(__dirname, 'website'),
  entry: {
    app: './index.js',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'app.[hash].js',
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.(less|css)$/,
      include: [
        path.resolve(__dirname, 'website'),
      ],
      exclude: [
        path.resolve(__dirname, 'website/pages'),
      ],
      use: ExtractTextPlugin.extract({
        fallback: {
          loader: 'style-loader',
          options: {
            singleton: true,
          },
        },
        use: [{
          loader: 'css-loader',
          options: {
            minimize: ENV === 'production',
            sourceMap: ENV === 'development',
            importLoaders: 1,
          },
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({ browsers: 'last 5 versions' }),
            ],
            sourceMap: true,
          },
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: ENV === 'development',
          },
        }],
      }),
    }, {
      test: /\.(less|css)$/,
      include: [
        path.resolve(__dirname, 'website/pages'),
      ],
      use: ExtractTextPlugin.extract({
        fallback: {
          loader: 'style-loader',
          options: {
            singleton: true,
          },
        },
        use: [{
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]',
            minimize: ENV === 'production',
            sourceMap: ENV === 'development',
            importLoaders: 1,
          },
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({ browsers: 'last 5 versions' }),
            ],
            sourceMap: true,
          },
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: ENV === 'development',
          },
        }],
      }),
    }, {
      test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
      use: ENV === 'production' ? {
        loader: 'file-loader?name=[path][name]_[hash].[ext]',
      } : {
        loader: 'url-loader',
      },
    }],
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.less'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules',
    ],
    alias: {
      styles: path.resolve(__dirname, 'website/styles'),
    },
  },

  plugins: ([
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'style.[hash].css',
      allChunks: true,
      disable: ENV !== 'production',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
    }),
    new HtmlWebpackPlugin({
      template: './index.ejs',
    }),
  ]).concat(ENV === 'production' ? [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new Visualizer({
      filename: '../stats/statistics.html',
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false,
        drop_console: true,
      },
    }),
    new ReplacePlugin([{
      partten: /throw\s+(new\s+)?[a-zA-Z]+Error\s*\(/g,
      replacement: () => 'return;(',
    }]),
  ] : []),

  stats: { colors: true },

  node: {
    global: true,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false,
  },

  devtool: ENV === 'production' ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',

  devServer: {
    port: process.env.PORT || 8000,
    host: 'localhost',
    publicPath: '/',
    contentBase: './website',
    historyApiFallback: true,
    open: true,
    proxy: {
      // OPTIONAL: proxy configuration:
      // '/optional-prefix/**': { // path pattern to rewrite
      //   target: 'http://target-host.com',
      //   pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
      // }
    },
  },
};
