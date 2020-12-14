<template>
  <AntTabs>
    <slot></slot>
  </AntTabs>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Tabs} from 'ant-design-vue';

export default defineComponent({
  name: 'UITabs',
  components: {AntTabs: Tabs}
})
</script>

<style lang="scss" scoped>
</style>
