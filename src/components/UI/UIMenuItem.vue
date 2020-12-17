<template>
  <AntMenuItem>
    <slot></slot>
  </AntMenuItem>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Menu} from 'ant-design-vue';

export default defineComponent({
  name: 'UIMenuItem',
  components: {AntMenuItem: Menu.Item},
})
</script>

<style lang="scss" scoped>
</style>
