import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import QRCode from 'qrcode';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: '/',
  // @ts-ignore
  plugins: [vue(), QRCode],
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
      '/@components': path.resolve(__dirname, './src/components'),
      '/@api': path.resolve(__dirname, './src/api'),
      '/@store': path.resolve(__dirname, './src/store'),
      '/utils': path.resolve(__dirname, './src/utils'),
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  server: {
    port: 5000,
    // disableHostCheck: true,
    proxy: {
      '/mall': {
        target: 'http://192.168.2.252:18080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/mall/, ''),
      },
    },
  },
  build: {
    target: 'es2015',
    assetsDir: 'static',
  },
  optimizeDeps: {
    include: ['@ant-design-vue/use', 'ant-design-vue/es/locale/zh_CN'],
  },
})
