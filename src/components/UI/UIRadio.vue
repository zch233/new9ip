<template>
  <AntRadio>
    <slot></slot>
  </AntRadio>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Radio} from 'ant-design-vue';

export default defineComponent({
  name: 'UIRadio',
  components: {AntRadio: Radio}
})
</script>

<style lang="scss" scoped>
</style>
