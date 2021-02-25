export const root = {
  path: '/',
  component: () => import('../../views/Layout/App.vue'),
  children: [
    {
      path: '',
      name: 'Home',
      meta: { title: '首页' },
      alias: ['index', '9ip', 'home'],
      component: () => import('../../views/Home/index.vue'),
    },
    {
      path: 'vip',
      name: 'VIP',
      meta: { title: '开通会员' },
      component: () => import('../../views/VIP/index.vue'),
    },
    {
      path: 'patent',
      name: 'Patent',
      meta: { title: '专利列表' },
      component: () => import('../../views/Patent/index.vue'),
    },
    {
      path: 'sales',
      name: 'PatentSales',
      meta: { title: '活动专场' },
      component: () => import('../../views/PatentSales/index.vue'),
    },
    {
      path: 'patent/:number',
      name: 'PatentDetail',
      meta: { title: '专利详情' },
      component: () => import('../../views/PatentDetail/index.vue'),
    },
    {
      path: '404',
      name: 'Page404',
      meta: { title: '404' },
      component: () => import('../../views/Error/404.vue'),
    },
    {
      path: '429',
      name: 'Page429',
      meta: { title: '429' },
      component: () => import('../../views/Error/429.vue'),
    },
    {
      path: '500',
      name: 'Page500',
      meta: { title: '500' },
      component: () => import('../../views/Error/500.vue'),
    },
  ]
}