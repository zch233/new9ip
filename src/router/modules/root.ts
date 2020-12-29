export const root = {
  path: '/',
  component: () => import('../../views/Layout/App.vue'),
  children: [
    {
      path: '',
      name: 'Home',
      meta: { title: '首页' },
      component: () => import('../../views/Home/index.vue'),
    },
    {
      path: '/vip',
      name: 'VIP',
      meta: { title: '开通会员' },
      component: () => import('../../views/VIP/index.vue'),
    },
    {
      path: '/patent',
      name: 'Patent',
      meta: { title: '专利列表' },
      component: () => import('../../views/Patent/index.vue'),
    },
    {
      path: '/patent/:number',
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
      path: '500',
      name: 'Page500',
      meta: { title: '500' },
      component: () => import('../../views/Error/500.vue'),
    },
  ]
}