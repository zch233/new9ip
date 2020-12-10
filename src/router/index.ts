import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home/index.vue'),
    },
    {
      path: '/patent',
      component: () => import('../views/Patent/index.vue'),
    },
  ],
})
