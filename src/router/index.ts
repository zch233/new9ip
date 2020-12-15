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
      component: () => import('../views/Auth/index.vue'),
      redirect: '/auth/sign_in',
      children: [
        {
          path: 'sign_in',
          meta: { title: '欢迎登录' },
          component: () => import('../views/Auth/SignIn.vue')
        },
        {
          path: 'sign_up',
          meta: { title: '欢迎登录' },
          component: () => import('../views/Auth/SignUp.vue')
        },
        {
          path: 'password',
          meta: { title: '欢迎登录' },
          component: () => import('../views/Auth/Password.vue')
        },
      ],
    }
  ],
})
