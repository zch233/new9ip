<template>
  <AntEmpty>
    <slot></slot>
  </AntEmpty>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Empty} from 'ant-design-vue';

export default defineComponent({
  name: 'UIEmpty',
  components: {AntEmpty: Empty}
})
</script>

<style lang="scss" scoped>
</style>
