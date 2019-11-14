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
  }
}
