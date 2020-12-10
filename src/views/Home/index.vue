<template>
  <div>home</div>
  <Button>123</Button>
  <TimePicker></TimePicker>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button, TimePicker } from 'ant-design-vue';

export default defineComponent({
  name: 'Home',
  components: {
    Button,
    TimePicker,
  }
})
</script>

<style lang="scss" scoped>
</style>
