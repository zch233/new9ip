<template>
  <AntCard>
    <slot></slot>
  </AntCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Card} from 'ant-design-vue';

export default defineComponent({
  name: 'UICard',
  components: {AntCard: Card},
})
</script>

<style lang="scss" scoped>
</style>
