<template>
  <AntButton class="uiButton" :class="customerClass">
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
  .default.ant-btn {
    color: #14A8BD;
    border-color: #14A8BD;
    &:hover, &:focus {
      color: #16B5CB;
      border-color: #16B5CB;
    }
    &:active, &.active {
      color: #1199AD;
      border-color: #1199AD;
    }
  }
  .mainButton {
    background-color: #14A8BD;
    border-color: #14A8BD;
    color: #fff;
    &.ant-btn-primary:hover, &.ant-btn-primary:focus {
      background-color: #16B5CB;
      color: #fff;
    }
    &.ant-btn-primary.active, &.ant-btn-primary:active {
      background-color: #1199AD;
      color: #fff;
    }
  }
  .dangerButton {
    background-color: #FF5858;
    border-color: #FF5858;
    color: #fff;
    &.ant-btn-primary:hover, &.ant-btn-primary:focus {
      background-color: #FF7575;
      color: #fff;
    }
    &.ant-btn-primary.active, &.ant-btn-primary:active {
      background-color: #F14141;
      color: #fff;
    }
  }
  .warningButton {
    background-color: #FFBB12;
    border-color: #FFBB12;
    color: #fff;
    &.ant-btn-primary:hover, &.ant-btn-primary:focus {
      background-color: #FFC944;
      color: #fff;
    }
    &.ant-btn-primary.active, &.ant-btn-primary:active {
      background-color: #EEAA00;
      color: #fff;
    }
  }
  .linkButton {
    &.ant-btn-link {
      color: #666666;
    }
    &.ant-btn-link:hover, &.ant-btn-link:focus {
      color: #14A8BD;
    }
  }
  .uiButton {
    &.ant-btn-disabled, &.ant-btn.disabled, &.ant-btn[disabled], &.ant-btn-disabled:hover, &.ant-btn.disabled:hover, &.ant-btn[disabled]:hover, &.ant-btn-disabled:focus, &.ant-btn.disabled:focus, &.ant-btn[disabled]:focus, &.ant-btn-disabled:active, &.ant-btn.disabled:active, &.ant-btn[disabled]:active, &.ant-btn-disabled.active, &.ant-btn.disabled.active, &.ant-btn[disabled].active {
      color: #999999;
      background-color: #fff;
      border-color: #DFDFDF;
      text-shadow: none;
      box-shadow: none;
    }
    &.ant-btn-primary-disabled, &.ant-btn-primary.disabled, &.ant-btn-primary[disabled], &.ant-btn-primary-disabled:hover, &.ant-btn-primary.disabled:hover, &.ant-btn-primary[disabled]:hover, &.ant-btn-primary-disabled:focus, &.ant-btn-primary.disabled:focus, &.ant-btn-primary[disabled]:focus, &.ant-btn-primary-disabled:active, &.ant-btn-primary.disabled:active, &.ant-btn-primary[disabled]:active, &.ant-btn-primary-disabled.active, &.ant-btn-primary.disabled.active, &.ant-btn-primary[disabled].active {
      color: #fff;
      background-color: #DFDFDF;
      border-color: #DFDFDF;
      text-shadow: none;
      box-shadow: none;
    }
  }
</style>
