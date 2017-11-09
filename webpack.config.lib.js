const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';

const SOURCE_DIR = path.resolve(__dirname, 'components');
const OUTPUT_DIR = path.resolve(__dirname, 'lib');

module.exports = {
  context: SOURCE_DIR,
  entry: {
    index: './index.js',
  },

  output: {
    path: OUTPUT_DIR,
    publicPath: '/',
    libraryTarget: 'umd',
    filename: 'index.js',
  },

  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.(scss|css)$/,
      include: [
        SOURCE_DIR,
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
          loader: 'sass-loader',
          options: {
            sourceMap: ENV === 'development',
          },
        }],
      }),
    }, {
      test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
      use: ENV === 'production' ? {
        loader: 'file-loader?name=[path][name]_[hash].[ext]',
        options: {
          name: '[hash:8].[ext]',
          outputPath: 'assets/images/',
        },
      } : {
        loader: 'url-loader',
      },
    }],
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules',
    ],
    alias: {},
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
      disable: ENV !== 'production',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
    }),
  ].concat(ENV !== 'production' ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]),

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
};
