<template>
  <AntSteps>
    <slot></slot>
  </AntSteps>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Steps} from 'ant-design-vue';

export default defineComponent({
  name: 'UISteps',
  components: {AntSteps: Steps}
})
</script>

<style lang="scss" scoped>
</style>
