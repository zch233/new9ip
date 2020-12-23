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
        {
          path: '/patent/:number',
          name: 'PatentDetail',
          meta: { title: '专利详情' },
          component: () => import('../views/PatentDetail/index.vue'),
        },
      ]
    },
    {
      path: '/order',
      component: () => import('../views/Layout/Blank.vue'),
      children: [
        {
          path: 'confirm',
          name: 'OrderConfirm',
          meta: { title: '确认订单' },
          component: () => import('../views/OrderConfirm/index.vue')
        },
        {
          path: 'pay/code',
          name: 'QRCodePay',
          meta: { title: '聚合支付' },
          component: () => import('../views/OrderPay/QRCodePay.vue')
        },
        {
          path: 'pay/wechat',
          name: 'WechatPay',
          meta: { title: '微信支付' },
          component: () => import('../views/OrderPay/WechatPay.vue')
        },
        {
          path: 'pay/form',
          name: 'FormPay',
          meta: { title: '表单支付' },
          component: () => import('../views/OrderPay/FormPay.vue')
        },
        {
          path: 'pay/result',
          name: 'Result',
          meta: { title: '支付结果' },
          component: () => import('../views/OrderPay/Result.vue')
        }
      ],
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
