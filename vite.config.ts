import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import QRCode from 'qrcode';
import path from 'path';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // @ts-ignore
    QRCode,
    styleImport({
      libs: [{
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/index.less`;
        },
      }]
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#14A8BD', // 全局主色
          'link-color': '#14A8BD', // 链接色
          'success-color': '#52c41a', // 成功色
          'warning-color': '#FFBB12', // 警告色
          'error-color': '#FF5858', // 错误色
          'font-size-base': '14px', // 主字号
          'heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
          'text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
          'text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
          'disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
          'border-radius-base': '2px', // 组件/浮层圆角
          'border-color-base': '#DEDEDE', // 边框色
          'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
      '/@components': path.resolve(__dirname, './src/components'),
      '/@api': path.resolve(__dirname, './src/api'),
      '/@store': path.resolve(__dirname, './src/store'),
      '/@utils': path.resolve(__dirname, './src/utils'),
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  server: {
    port: 3000,
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
