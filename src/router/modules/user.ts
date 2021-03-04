export const user = {
  path: '/user',
  component: () => import('../../views/Layout/User.vue'),
  redirect: '/user/index',
  children: [
    {
      path: 'index',
      name: 'User',
      meta: { title: '会员主页' },
      component: () => import('../../views/User/index.vue')
    },
    {
      path: 'point',
      name: 'Point',
      meta: { title: '我的积分' },
      component: () => import('../../views/User/Point/index.vue')
    },
    {
      path: 'vipRecord',
      name: 'VipRecord',
      meta: { title: '开通记录' },
      component: () => import('../../views/User/VipRecord/index.vue')
    },
    {
      path: 'orderPoints',
      name: 'OrderPoints',
      meta: { title: '积分充值' },
      component: () => import('../../views/User/OrderPoints/index.vue')
    },
    {
      path: 'order',
      name: 'UserOrder',
      meta: { title: '我的订单' },
      component: () => import('../../views/User/Order/index.vue')
    },
    {
      path: 'preorder',
      name: 'UserPreorder',
      meta: { title: '我的预留' },
      component: () => import('../../views/User/Preorder/index.vue')
    },
    {
      path: 'collect',
      name: 'UserCollect',
      meta: { title: '我的收藏' },
      component: () => import('../../views/User/Collect/index.vue')
    },
    {
      path: 'setting',
      name: 'UserSetting',
      meta: { title: '账户设置' },
      component: () => import('../../views/User/Setting/index.vue')
    }
  ],
}