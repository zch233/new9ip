<template>
  <AntTooltip>
    <slot></slot>
  </AntTooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Tooltip} from 'ant-design-vue';

export default defineComponent({
  name: 'UITooltip',
  components: {AntTooltip: Tooltip}
})
</script>

<style lang="scss" >

</style>
