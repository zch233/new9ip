import { createRouter, createWebHistory } from 'vue-router';
import { root } from '/@/router/modules/root';
import { auth } from '/@/router/modules/auth';
import { user } from '/@/router/modules/user';
import { order } from '/@/router/modules/order';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    root,
    order,
    user,
    auth,
  ],
})
