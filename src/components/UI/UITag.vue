<template>
  <AntTag>
    <slot></slot>
  </AntTag>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Tag} from 'ant-design-vue';

export default defineComponent({
  name: 'UITag',
  components: {AntTag: Tag}
})
</script>

<style lang="scss" >
.ant-tag.filterTag {
  color: #14A8BD;
  background-color: #DAF6FA;
  padding: .2em .8em;
  border: none;
  .anticon-close {
    color: #14A8BD;
    font-size: 10px;
    &:hover {}
  }
}
</style>
