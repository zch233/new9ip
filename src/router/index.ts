import { createRouter, createWebHistory } from 'vue-router';
import { root } from '/@/router/modules/root';
import { auth } from '/@/router/modules/auth';
import { user } from '/@/router/modules/user';
import { order } from '/@/router/modules/order';
import { others } from '/@/router/modules/others';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    root,
    order,
    user,
    auth,
    others,
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/Error/404.vue') },
  ],
})
