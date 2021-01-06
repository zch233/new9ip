<template>
  <div class="error">
    <section class="error-image"><slot name="image"></slot></section>
    <p class="error-title"><slot name="title">{{ title }}</slot></p>
    <RouterLink to="/"><UIButton type="primary" customer-class="mainButton">返回首页</UIButton></RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UIButton from '/@components/UI/UIButton.vue'

export default defineComponent({
  name: 'Error',
  components: {UIButton},
  props: {
    title: String,
  }
})
</script>

<style lang="scss">
.error {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 24vh;
  &-image {
    width: 510px;
    img {width: 100%;}
  }
  &-title {
    color: #35B4C6;
    font-size: 16px;
    margin: 20px 0 30px;
  }
}
</style>
