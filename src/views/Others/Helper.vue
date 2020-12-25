<template>
  <div class="helper">
    <AppTitleBar title="帮助中心">
      <RouterLink class="returnHome" to="/">返回首页</RouterLink>
    </AppTitleBar>
    <section class="pageWidthWithCenter helper-main">
      <div class="helper-main-left">
        <div class="helperWrapper">
          <p class="helperList-title">234234</p>
          <ul class="helperList">
            <li class="helperList-item">234234</li>
            <li class="helperList-item">234234</li>
            <li class="helperList-item">234234</li>
            <li class="helperList-item">234234</li>
          </ul>
        </div>
      </div>
      <div class="helper-main-right">
        <h2 class="helperContent-title">专利申请</h2>
        <article class="helperContent-item">
          <p class="helperContent-item-title">1、专利分类有哪些</p>
          <div class="helperContent-item-content">
            <p>专利包括发明专利、实用新型专利和外观设计专利。</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppTitleBar from '/@components/AppTitleBar/index.vue'

export default defineComponent({
  name: 'Helper',
  components: {AppTitleBar},
  setup() {},
})
</script>

<style lang="scss" scoped>
.returnHome {
  color: #999999;
  font-size: 16px;
}
.helper-main {
  display: flex;
  font-size: 12px;
  &-left {
    margin-right: 10px;
    background-color: #fff;
    width: 150px;
  }
  &-right {
    background-color: #fff;
    flex: 1;
  }
}
.helperList {
  &-title {
    color: #FFF;
    background-color: #14A8BD;
    font-size: 14px;
    padding: 10px 20px;
    margin: 0;
  }
  &-item {
    padding: 12px 20px;
    transition: all .3s;
    cursor: pointer;
    &.active, &:hover {
      background-color: #F3FAFF;
      color: #14A8BD;
    }
  }
}
.helperContent {
  &-title {
    color: #14A8BD;
    padding: 20px 50px;
    border-bottom: 1px solid #E8E8E8;
  }
  &-item {
    padding: 10px 20px;
    &-title {
      font-weight: bold;
      padding: 15px 30px;
      background-color: #E8E8E8;
      margin: 0;
    }
    &-content {
      padding: 20px 30px;
      background-color: #F6F6F6;
    }
  }
}
</style>
