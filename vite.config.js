import path from 'path';
import babel from "vite-babel-plugin";

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
    fragment: 'Fragment',
  },
  plugins: [
    babel(),
  ],
  alias: {
    '/@/': path.resolve(__dirname, './src'),
    '/@components/': path.resolve(__dirname, './src/components'),
    '/@api/': path.resolve(__dirname, './src/api'),
  },
  optimizeDeps: {
    include: ['@ant-design-vue/use'],
  },
};