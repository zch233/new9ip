import { router } from '/@/router';
import * as authApi from '/@api/auth'
import { store } from '/@/store';

router.afterEach((to, from, next) => {
  document.title = import.meta.env.VITE_APP_TITLE + ' - ' + to.meta.title;
  authApi.getUserDefault().then(({ data }) => {
    store.commit('COMMIT_USER', data.data)
    store.commit('COMMIT_LOGIN_STATUS', true)
  }).catch(() => {})
})