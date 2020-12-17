<template>
  <AntPopover>
    <template #content>
      <slot name="content"></slot>
    </template>
    <slot></slot>
  </AntPopover>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Popover} from 'ant-design-vue';

export default defineComponent({
  name: 'UIPopover',
  components: {AntPopover: Popover}
})
</script>

<style lang="scss" scoped>
</style>
