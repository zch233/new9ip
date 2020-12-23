<template>
  <AntStep>
    <slot></slot>
  </AntStep>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Steps} from 'ant-design-vue';

export default defineComponent({
  name: 'UIStep',
  components: {AntStep: Steps.Step}
})
</script>

<style lang="scss" scoped>
</style>
