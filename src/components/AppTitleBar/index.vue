<template>
  <div class="appTitleBar">
    <div class="pageWidthWithCenter appTitleBarWrapper">
      <div class="appTitleBar-left">
        <div class="logoIconWrapper"><Icon class="logoIcon" icon="logoText" /></div>
        <div class="titleWrapper"><slot name="title">{{ title }}</slot></div>
      </div>
      <div class="appTitleBar-right">
        <slot name="extra"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from '../Icon/index.vue'

export default defineComponent({
  name: 'AppTitleBar',
  components: {Icon},
  props: {
    title: String,
  },
})
</script>

<style lang="scss" scoped>
.appTitleBar {
  background-color: #fff;
  padding: 10px 0;
  margin-bottom: 10px;
  &-left {
    display: flex;
    align-items: center;
    .logoIconWrapper {
      overflow: hidden;
      height: 50px;
      display: flex;
      align-items: center;
      .logoIcon {font-size: 148px;margin-right: 30px;}
    }
    .titleWrapper {font-size: 16px;}
  }
  &-right {}
}
.appTitleBarWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
