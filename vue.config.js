module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/style/main.scss";`,
      },
    },
  }
}