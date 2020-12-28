<template>
  <AntRadioGroup>
    <slot></slot>
  </AntRadioGroup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Radio} from 'ant-design-vue';

export default defineComponent({
  name: 'UIRadioGroup',
  components: {AntRadioGroup: Radio.Group}
})
</script>

<style lang="scss" scoped>
</style>
