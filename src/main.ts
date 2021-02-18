import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import './index.scss'
import './antd.scss'
import './permission'
import { key, store } from './store/index';
import { router } from './router/index';

createApp(App).use(store, key).use(router).mount('#app')

