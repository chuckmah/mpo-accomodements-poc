module.exports = {
 chainWebpack: config => {
    config.optimization.delete('splitChunks');
  },
    // pages: {
    //   app: {
    //     entry: 'src/main.ts',
    //   },
    // },
    filenameHashing: false
  };