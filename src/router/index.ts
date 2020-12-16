import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Layout/App.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          meta: { title: '首页' },
          component: () => import('../views/Home/index.vue'),
        },
        {
          path: '/patent',
          name: 'Patent',
          meta: { title: '专利列表' },
          component: () => import('../views/Patent/index.vue'),
        },
      ]
    },
    {
      path: '/auth',
      component: () => import('../views/Layout/Auth.vue'),
      redirect: '/auth/sign_in',
      children: [
        {
          path: 'sign_in',
          name: 'AuthSignIn',
          meta: { title: '欢迎注册' },
          component: () => import('../views/Auth/SignIn.vue')
        },
        {
          path: 'sign_up',
          name: 'AuthSignUp',
          meta: { title: '欢迎登录' },
          component: () => import('../views/Auth/SignUp.vue')
        },
        {
          path: 'password',
          name: 'AuthPassword',
          meta: { title: '忘了密码' },
          component: () => import('../views/Auth/Password.vue')
        },
      ],
    }
  ],
})
