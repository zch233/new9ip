import { router } from '/@/router';

router.afterEach((to, from, next) => {
  document.title = import.meta.env.VITE_APP_TITLE + to.meta.title ? ` - ${to.meta.title}` : '';
})