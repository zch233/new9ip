<template>
  <ConfigProvider :locale="locale">
    {{store.state.count}}
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/patent">patent</RouterLink>
    <RouterView />
  </ConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from './store';
import {ConfigProvider} from 'ant-design-vue'
import zhCN from '/@modules/ant-design-vue/es/locale/zh_CN';

export default defineComponent({
  name: 'App',
  components: {
    ConfigProvider,
  },
  setup() {
    const store = useStore()
    return {
      store,
      locale: zhCN
    }
  }
})
</script>
