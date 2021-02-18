import { createRouter, createWebHistory } from 'vue-router';
import { root } from './modules/root';
import { auth } from './modules/auth';
import { user } from './modules/user';
import { order } from './modules/order';
import { others } from './modules/others';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    root,
    order,
    user,
    auth,
    others,
    { path: '/:pathMatch(.*)*', redirect: { name: 'Page404' } },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    }
  },
})
