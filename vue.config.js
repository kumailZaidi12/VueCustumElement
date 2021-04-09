module.exports = {
    productionSourceMap: true,  
    configureWebpack: {
        optimization: {
          splitChunks: false
        },
        devtool: 'source-map',
        output: {
          filename: '[name].js',
          chunkFilename: '[name].js'
        }},
      css: {
          extract: false,
      }
  };