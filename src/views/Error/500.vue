<template>
  <Error title="抱歉，服务器好像开小差了~">
    <template #image><img src="../../assets/error/500.png" alt=""></template>
  </Error>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Error from './Error.vue';

export default defineComponent({
  name: 'Page500',
  components: {Error},
})
</script>

<style lang="scss" scoped>
img {width: 100%;}
</style>
