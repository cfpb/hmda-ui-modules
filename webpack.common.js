const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve('./dist/js')
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './src/index.html',
      inject: false,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve('./src'),
          path.resolve('./node_modules/hmda-ui')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env',
                {
                  modules: false,
                  useBuiltIns: 'entry'
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../css/[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
}
