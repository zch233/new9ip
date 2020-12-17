<template>
  <AntInputSearch>
    <slot></slot>
  </AntInputSearch>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Input} from 'ant-design-vue';

export default defineComponent({
  name: 'UIInputSearch',
  components: {AntInputSearch: Input.Search},
})
</script>

<style lang="scss" scoped>
</style>
