<template>
  <Error title="很抱歉，页面不小心走丢了~">
    <template #image><img src="../../assets/error/404.png" alt=""></template>
  </Error>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Error from './Error.vue';

export default defineComponent({
  name: 'Page404',
  components: {Error},
})
</script>

<style lang="scss" scoped>
img {width: 100%;}
</style>
