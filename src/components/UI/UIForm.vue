<template>
  <AntForm>
    <slot></slot>
  </AntForm>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Form} from 'ant-design-vue';

export default defineComponent({
  name: 'UIForm',
  components: {AntForm: Form}
})
</script>

<style lang="scss" scoped>
</style>
