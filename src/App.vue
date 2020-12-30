<template>
  <ConfigProvider :locale="locale">
    <div class="routerViewWrapper"><RouterView /></div>
    <SlideArt />
    <PageFooter :theme="authRoute ? 'light' : 'dark'" />
  </ConfigProvider>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import {ConfigProvider} from 'ant-design-vue'
import zhCN from '../node_modules/ant-design-vue/es/locale/zh_CN';
import PageFooter from '/@components/PageFooter/index.vue'
import SlideArt from '/@components/SlideArt/index.vue'
import { useRoute } from 'vue-router';
import * as authApi from '/@api/auth';
import { useStore } from '/@/store';
import * as pointApi from '/@api/point'

export default defineComponent({
  name: 'App',
  components: {
    ConfigProvider,
    PageFooter,
    SlideArt,
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const authRoute = computed(() => route.path.indexOf('/auth/') >= 0)
    onMounted(() => {
      authApi.getUserDefault().then(async ({ data }) => {
        if (data.data) {
          store.commit('COMMIT_LOGIN_STATUS', !!data.data)
          store.commit('COMMIT_USER', data.data)
          const { data: oneDayConsumePointsData } = await pointApi.getOneDayConsumePoints()
          store.commit('commit_oneDayConsumePoints', oneDayConsumePointsData?.credit || 0)
        }
      }).catch(() => {})
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
