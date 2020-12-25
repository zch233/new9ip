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
  ]
}