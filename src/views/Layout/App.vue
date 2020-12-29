<template>
  <AppHeader />
  <AppMenu />
  <div class="routerViewWrapper"><RouterView /></div>
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
.routerViewWrapper {min-height: calc(100vh - 40px - 69.78px - 300px - 40px);}
</style>
