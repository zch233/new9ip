import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Home from './views/Home'
import {createRouter, createWebHistory} from 'vue-router'
import Patent from './views/Patent.vue';
import { key, store } from './store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/patent',
      component: Patent,
    },
  ],
})

createApp(App).use(store, key).use(router).mount('#app')
