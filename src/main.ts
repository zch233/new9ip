import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import '../node_modules/ant-design-vue/dist/antd.css';
import {createRouter, createWebHistory} from 'vue-router'
import { key, store } from './store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/patent',
      component: () => import('./views/Patent.vue'),
    },
  ],
})

createApp(App).use(store, key).use(router).mount('#app')
