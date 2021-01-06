export const others = {
  path: '/others',
  component: () => import('../../views/Layout/Blank.vue'),
  redirect: '/others/helper',
  children: [
    {
      path: 'helper',
      name: 'Helper',
      meta: { title: '帮助中心' },
      component: () => import('../../views/Others/Helper.vue')
    },
  ],
}