export const auth = {
  path: '/auth',
  component: () => import('../../views/Layout/Auth.vue'),
  redirect: '/auth/sign_in',
  children: [
    {
      path: 'sign_in',
      name: 'AuthSignIn',
      meta: { title: '欢迎注册' },
      component: () => import('../../views/Auth/SignIn.vue')
    },
    {
      path: 'sign_up',
      name: 'AuthSignUp',
      meta: { title: '欢迎登录' },
      component: () => import('../../views/Auth/SignUp.vue')
    },
    {
      path: 'password',
      name: 'AuthPassword',
      meta: { title: '忘了密码' },
      component: () => import('../../views/Auth/Password.vue')
    },
  ],
}