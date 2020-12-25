export const user = {
  path: '/user',
  component: () => import('../../views/Layout/User.vue'),
  children: [
    {
      path: 'index',
      name: 'User',
      meta: { title: '会员主页' },
      component: () => import('../../views/User/index.vue')
    },
    {
      path: 'order',
      name: 'UserOrder',
      meta: { title: '我的订单' },
      component: () => import('../../views/Order/index.vue')
    },
    {
      path: 'collect',
      name: 'UserCollect',
      meta: { title: '我的收藏  ' },
      component: () => import('../../views/Collect/index.vue')
    },
    {
      path: 'setting',
      name: 'UserSetting',
      meta: { title: '账户设置' },
      component: () => import('../../views/Setting/index.vue')
    }
  ],
}