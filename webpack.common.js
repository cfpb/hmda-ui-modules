const path = require('path')
const webpack = require('webpack')

module.exports = {
  output: {
    path: path.resolve('./dist/js')
  },
  devtool: 'source-map',
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
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
