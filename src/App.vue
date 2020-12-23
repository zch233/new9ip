<template>
  <ConfigProvider :locale="locale">
    <div class="routerViewWrapper"><RouterView /></div>
    <PageFooter :theme="authRoute ? 'light' : 'dark'" />
  </ConfigProvider>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import {ConfigProvider} from 'ant-design-vue'
import zhCN from '../node_modules/ant-design-vue/es/locale/zh_CN';
import PageFooter from '/@components/PageFooter/index.vue'
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    ConfigProvider,
    PageFooter,
  },
  setup() {
    const route = useRoute()
    const authRoute = computed(() => route.path.indexOf('/auth/') >= 0)
    return {
      authRoute,
      locale: zhCN
    }
  }
})
</script>

<style lang="scss" scoped>
.routerViewWrapper {min-height: calc(100vh - 40px);display: flex;flex-direction: column;}
</style>
