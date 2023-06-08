const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  assetsDir: './',
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
