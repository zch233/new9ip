<template>
  <AntBadge>
    <slot></slot>
  </AntBadge>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Badge} from 'ant-design-vue';

export default defineComponent({
  name: 'UIBadge',
  components: {AntBadge: Badge},
})
</script>

<style lang="scss" scoped>
</style>
