const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

const basePath = path.resolve(__dirname, '../../');

process.env.NODE_ENV = 'production'

module.exports = merge(baseWebpackConfig, {
  devtool: '#source-map',
  entry: {
    app: path.join(basePath, 'site')
  },
  output: {
    path: path.resolve(basePath, 'dist/site'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash:7].js'),
    filename: utils.assetsPath('js/[name].[chunkhash:7].js')
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap:true,
      extract:true
    })
  },
  plugins: [
    new ExtractTextPlugin({
      filename: utils.assetsPath('style/[name].[chunkhash:7].css')
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename:'index.html',
      template: './site/index.html',      
      favicon: path.join(basePath, 'site/assets/favicon.ico'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    })
  ].concat(process.env.TRAVIS_CI ? [] : [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true
      },
      output: {
        comments: false
      }
    })
  ])
})
