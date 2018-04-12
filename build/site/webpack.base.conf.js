const path = require('path')
const utils = require('./utils')
const basePath = path.resolve(__dirname, '../../');

module.exports={
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.join(basePath, 'site'),
          path.join(basePath, 'src'),
          path.join(basePath, 'libs')
        ]
      },
      // {
      //   test: /\.css$/,
      //   use:  ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader : 'file-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('style/fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(jpe?g|png|gif)(\?.+)?$/,
        loader : 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.md$/,
        loader : 'raw-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('docs/[name].[hash:7].[ext]')
        }
      }      
    ]
  }
}