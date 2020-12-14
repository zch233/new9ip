export default {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  port: 5000,
  proxy: {
    '/mall': {
      target: 'http://192.168.9.252:18080',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/mall/, ''),
    },
  },
  jsx: {
    factory: 'h',
    fragment: 'Fragment'
  }
};