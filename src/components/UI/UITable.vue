<template>
  <AntTable>
    <slot></slot>
  </AntTable>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Table} from 'ant-design-vue';

export default defineComponent({
  name: 'UITable',
  components: {AntTable: Table}
})
</script>

<style lang="scss" scoped>
</style>
