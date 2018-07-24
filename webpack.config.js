const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "/"),
  devServer: {
    historyApiFallback: true,
  },
  entry: [
    './src/main.jsx', './src/components/app/App.scss'
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  watchOptions: {
    poll: true
  },
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'html-loader'
    },
      {
        test: /\.(otf|eot|woff2|woff|ttf|svg)$/,
        loader: "file-loader"
      },
      {
        test: /\.(png|jpg|ico|gif|mp4)$/,
        loader: 'file-loader',
        query: {
          name: 'assets/img/[name].[ext]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        query: {
          name: 'assets/fonts/[name].[ext]'
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }]
        })
      }
    ]
  },
  output: {
    path: path.join(__dirname, "./build"),
    filename: "app.min.js"
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([{
      from: './public/index.html'
    },
      {
        from: 'images/**/*'
      }
    ])
  ]
};