<template>
  <AntCountdown />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Statistic} from 'ant-design-vue';

export default defineComponent({
  name: 'UICountdown',
  components: {AntCountdown: Statistic.Countdown}
})
</script>

<style lang="scss" scoped>
</style>
