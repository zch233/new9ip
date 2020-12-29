<template>
  <ConfigProvider :locale="locale">
    <div class="routerViewWrapper"><RouterView /></div>
    <PageFooter :theme="authRoute ? 'light' : 'dark'" />
  </ConfigProvider>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import {ConfigProvider} from 'ant-design-vue'
import zhCN from '../node_modules/ant-design-vue/es/locale/zh_CN';
import PageFooter from '/@components/PageFooter/index.vue'
import { useRoute } from 'vue-router';
import * as authApi from '/@api/auth';
import { useStore } from '/@/store';

export default defineComponent({
  name: 'App',
  components: {
    ConfigProvider,
    PageFooter,
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const authRoute = computed(() => route.path.indexOf('/auth/') >= 0)
    onMounted(() => {
      document.title = import.meta.env.VITE_APP_TITLE + ' - ' + route.meta.title;
      authApi.getUserDefault().then(({ data }) => {
        store.commit('COMMIT_USER', data.data || {})
        store.commit('COMMIT_LOGIN_STATUS', !!data.data)
      }).catch(() => {
        store.commit('COMMIT_USER', {})
        store.commit('COMMIT_LOGIN_STATUS', false)
      })
    })
    return {
      authRoute,
      locale: zhCN,
    }
  }
})
</script>

<style lang="scss" scoped>
.routerViewWrapper {min-height: calc(100vh - 40px);display: flex;flex-direction: column;}
</style>
