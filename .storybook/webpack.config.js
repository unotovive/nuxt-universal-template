const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [path.resolve(__dirname, '../src/assets/scss/common.scss')]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [
              {
                removeDoctype: true
              },
              {
                removeComments: true
              }
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.svg', '.css', '.scss'],
    alias: {
      assets: path.resolve(__dirname, '../src/assets'),
      '@': path.resolve(__dirname, '../'),
      '~': path.resolve(__dirname, '../src')
    }
  }
};
