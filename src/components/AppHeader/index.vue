<template>
  <footer class="appHeader">
    <div class="pageWidthWithCenter">
      <div class="appHeader-left">
        <em>最真实的一手知产服务平台</em>
        <span><Icon icon="scan" />关注第九区</span>
      </div>
      <div class="appHeader-right">
        <span>我的订单</span>
        <span>客户服务</span>
        <span>会员中心</span>
        <span>我的订单</span>
        <em>登陆/注册</em>
        <template>
          <em>186****1346</em>
          <span>退出</span>
        </template>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '/@components/Icon/index.vue'

export default defineComponent({
  name: 'AppHeader',
  components: {Icon},
  setup() {
    return {
    }
  },
})
</script>

<style lang="scss" scoped>
.appHeader {
  background-color: #F3FAFF;
  color: #999999;
  font-size: 12px;
  padding: 8px 0;
  .appHeader-left {}
  .appHeader-right {}
}
</style>
