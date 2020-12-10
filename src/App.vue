<template>
  <ConfigProvider :locale="locale">
    <RouterView />
    <PageFooter />
  </ConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {ConfigProvider} from 'ant-design-vue'
import zhCN from '../node_modules/ant-design-vue/es/locale/zh_CN';
import PageFooter from './components/PageFooter/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    ConfigProvider,
    PageFooter,
  },
  setup() {
    return {
      locale: zhCN
    }
  }
})
</script>
