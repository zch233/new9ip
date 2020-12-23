<template>
  <AntInputTextArea>
    <slot></slot>
  </AntInputTextArea>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Input} from 'ant-design-vue';

export default defineComponent({
  name: 'UIInputTextArea',
  components: {AntInputTextArea: Input.TextArea},
})
</script>

<style lang="scss" scoped>
</style>
