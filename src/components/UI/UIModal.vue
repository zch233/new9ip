<template>
  <AntModal>
    <slot></slot>
  </AntModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Modal} from 'ant-design-vue';

export default defineComponent({
  name: 'UIModal',
  components: {AntModal: Modal},
})
</script>

<style lang="scss" scoped>
</style>
