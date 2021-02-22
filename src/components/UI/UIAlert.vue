<template>
  <AntAlert>
    <template #message>
      <slot name="message"></slot>
    </template>
  </AntAlert>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Alert} from 'ant-design-vue';

export default defineComponent({
  name: 'UIAlert',
  components: {AntAlert: Alert},
})
</script>

<style lang="scss" scoped>
</style>
