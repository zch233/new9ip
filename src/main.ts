import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Home from './views/Home.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Patent from './views/Patent.vue';

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

createApp(App).use(router).mount('#app')
