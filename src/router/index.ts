import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      meta: { title: '首页' },
      component: () => import('../views/Home/index.vue'),
    },
    {
      path: '/patent',
      meta: { title: '专利列表' },
      component: () => import('../views/Patent/index.vue'),
    },
    {
      path: '/auth',
      meta: { title: '用户认证' },
      component: () => import('../views/Auth/index.vue')
    }
  ],
})
