<template>
  <Error title="网络挤爆了，请稍候重试~">
    <template #image><img src="../../assets/error/429.png" alt=""></template>
  </Error>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Error from '/@/views/Error/Error.vue';

export default defineComponent({
  name: 'Page429',
  components: {Error},
})
</script>

<style lang="scss" scoped>
img {width: 100%;}
</style>
