<template>
  <AntMenu>
    <slot></slot>
  </AntMenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Menu} from 'ant-design-vue';

export default defineComponent({
  name: 'UIMenu',
  components: {AntMenu: Menu},
})
</script>

<style lang="scss" scoped>
</style>
