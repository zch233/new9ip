<template>
  <AntEmpty :image="simpleImage">
    <slot></slot>
  </AntEmpty>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Empty} from 'ant-design-vue';

export default defineComponent({
  name: 'UIEmpty',
  components: {AntEmpty: Empty},
  setup () {
    return {
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
