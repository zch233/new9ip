<template>
  <AppHeader />
  <div class="routerViewWrapper"><RouterView /></div>
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppFooter from '/@components/AppFooter/index.vue'
import AppHeader from '/@components/AppHeader/index.vue'

export default defineComponent({
  name: 'LayoutBlank',
  components:{AppFooter, AppHeader},
})
</script>

<style lang="scss" scoped>
.routerViewWrapper {min-height: calc(100vh - 39.34px - 300px - 40px)}
</style>
