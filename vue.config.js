module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '^/https://uinames.com': {
        target: 'https://cors-anywhere.herokuapp.com',
        ws: true,
        changeOrigin: true,
      }      
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: '../baseUIconfig.js',
          to: 'public/UIconfig.js'
        }
      ])
    ]
  }
}
