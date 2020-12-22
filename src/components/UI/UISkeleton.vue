<template>
  <AntSkeleton>
    <slot></slot>
  </AntSkeleton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Skeleton} from 'ant-design-vue';

export default defineComponent({
  name: 'UISkeleton',
  components: {AntSkeleton: Skeleton}
})
</script>

<style lang="scss" scoped>
</style>
