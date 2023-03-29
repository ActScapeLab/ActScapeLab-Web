const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  assetsDir: './',
  publicPath: '/ActScapeLab-Web',
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
})
