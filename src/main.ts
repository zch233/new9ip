import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import '/@modules/ant-design-vue/dist/antd.css';
import { key, store } from './store';
import { router } from './router';

createApp(App).use(store, key).use(router).mount('#app')
