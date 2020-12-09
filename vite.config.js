export default {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  port: 5000,
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, ''),
    },
  },
  jsx: {
    factory: 'h',
    fragment: 'Fragment'
  }
};