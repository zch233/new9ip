<template>
  <AppHeader />
  <AppMenu />
  <RouterView />
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppFooter from '/@components/AppFooter/index.vue'
import AppHeader from '/@components/AppHeader/index.vue'
import AppMenu from '/@components/AppMenu/index.vue'

export default defineComponent({
  name: 'LayoutApp',
  components:{AppFooter, AppHeader, AppMenu},
})
</script>

<style lang="scss" scoped>
</style>
