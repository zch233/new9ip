import { router } from '/@/router';

router.afterEach((to, from, next) => {
  window.scrollTo(0,0);
  document.title = import.meta.env.VITE_APP_TITLE + ' - ' + to.meta.title;
})