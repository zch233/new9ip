<template>
  <h2 class="subTitle-title"><span :class="[dark && 'dark']">{{title}}</span></h2>
  <p class="subTitle-des" :class="[dark && 'dark']">{{des}}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SubTitle',
  props: {
    dark: Boolean,
    title: String,
    des: String,
  }
})
</script>

<style lang="scss" scoped>
.subTitle-title {
  $width: 3em;
  text-align: center;
  > span {
    font-size: 30px;
    color: #fff;
    position: relative;
    padding: .8em;
    &::after, &::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: #C0C0C0;
      height: 1px;
      width: $width;
    }
    &::before {
      left: -$width;
    }
    &::after {
      right: -$width;
    }
    &.dark {
      color: #333;
    }
  }
}
.subTitle-des {
  color: #E9E9E9;
  text-align: center;
  margin-bottom: 50px;
  &.dark {
    color: #999;
  }
}
</style>
