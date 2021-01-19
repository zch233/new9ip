<template>
  <AntEmpty class="myEmpty" :image="image ? `https://market.img.9ip.com/empty-${image}.png` : simpleImage">
    <template #description>
      <slot name="description">{{ description }}</slot>
    </template>
    <slot />
  </AntEmpty>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Empty} from 'ant-design-vue';

export default defineComponent({
  name: 'UIEmpty',
  components: {AntEmpty: Empty},
  props: {
    image: String,
    description: {
      type: String,
      default: '暂无数据',
    }
  },
  setup () {
    return {
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE
    }
  }
})
</script>

<style lang="scss">
.myEmpty {
  .ant-empty-image { width: 300px; height: auto; }
  .ant-empty-description {color: #999999; font-size: 14px;}
}
</style>
