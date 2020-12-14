<template>
  <AntButton :class="customerClass">
    <slot></slot>
  </AntButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Button} from 'ant-design-vue';

export default defineComponent({
  name: 'UIButton',
  props: {
    customerClass: String,
  },
  components: {AntButton: Button}
})
</script>

<style lang="scss" scoped>
  .mainButton {
    background-color: #14A8BD;
    border-color: #14A8BD;
    &.ant-btn-primary.active, &.ant-btn-primary:active {}

    &.ant-btn-primary:hover, &.ant-btn-primary:focus {

    }
  }
</style>
