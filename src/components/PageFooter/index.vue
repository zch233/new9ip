<template>
  <div class="pageFooter" :class="theme">
    <span>杭州第九区知识产权运营有限公司 © 2018-2021 9ip.com All rights reserved.</span>
    <a class="gov1" href="http://www.miit.gov.cn" target="_blank" rel="noopener noreferrer">
      <img src="../../assets/page/ba.png" alt="" />浙ICP备18033218号-1
    </a>
    <a class="gov2" href="http://zjamr.zj.gov.cn" target="_blank" rel="noopener noreferrer">
      <img src="../../assets/page/gs.gif" alt="" />浙江工商
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageFooter',
  props: {
    theme: {
      type: String,
      default: 'light',
      validator (value: 'light' | 'dark') {
        return ['light', 'dark'].includes(value)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.pageFooter {
  padding: 10px 0;
  text-align: center;
  color: #999999;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.light { background-color: #ECECEC; }
  &.dark { background-color: #272E3F; }
  a { color: inherit; }
  .gov1, .gov2 {
    display: inline-flex;
    align-items: center;
    img {margin-right: 1em;}
  }
  .gov1 {
    padding-left: 30px;
    padding-right: 42px;
  }
  .govIcon {}
}
</style>
