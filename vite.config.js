import path from 'path';
import QRCode from 'qrcode';

export default {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  port: 5000,
  disableHostCheck: true,
  proxy: {
    '/mall': {
      target: 'http://192.168.2.252:18080',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/mall/, ''),
    },
  },
  jsx: {
    factory: 'h',
    fragment: 'Fragment',
  },
  plugins: [
    QRCode,
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