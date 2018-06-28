const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  entry: {
    main: './src/index.js'
  },
  mode: 'development',
  output: {
    filename: 'app.min.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './src/dev.index.html',
      inject: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
})
