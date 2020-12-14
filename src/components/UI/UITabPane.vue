<template>
  <AntTabPane>
    <slot></slot>
  </AntTabPane>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Tabs} from 'ant-design-vue';

export default defineComponent({
  name: 'UITabPane',
  components: {AntTabPane: Tabs.TabPane}
})
</script>

<style lang="scss" scoped>
</style>
