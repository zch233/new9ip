<template>
  <AntSpin>
    <slot></slot>
  </AntSpin>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Spin} from 'ant-design-vue';

export default defineComponent({
  name: 'UISpin',
  components: {AntSpin: Spin}
})
</script>

<style lang="scss" scoped>
</style>
