<template>
  <AntDropdown>
    <slot></slot>
    <template #overlay>
      <slot name="overlay"></slot>
    </template>
  </AntDropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Dropdown} from 'ant-design-vue';

export default defineComponent({
  name: 'UIDropdown',
  components: {AntDropdown: Dropdown}
})
</script>

<style lang="scss" scoped>
</style>
