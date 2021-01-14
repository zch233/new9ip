<template>
  <img :src="cover" alt="">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PatentImage',
  props: {
    cover: String,
  }
})
</script>

<style lang="scss" scoped>
img { width: 100%; }
</style>
