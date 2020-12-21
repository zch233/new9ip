<template>
  <AntPagination>
    <slot></slot>
  </AntPagination>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Pagination} from 'ant-design-vue';

export default defineComponent({
  name: 'UIPagination',
  components: {AntPagination: Pagination}
})
</script>

<style lang="scss" scoped>
</style>
