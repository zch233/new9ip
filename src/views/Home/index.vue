<template>
  <section class="searchBar">
    <h1>全网最真实的一手知产交易平台</h1>
    <div class="inputHomeSearchWrapper">
      <UIInputSearch
        class="inputHomeSearch"
        placeholder="请搜索专利号 / 名称"
        enter-button="快速搜索"
      />
      <div class="hotSearch">
        <RouterLink to="/patent">只能装置</RouterLink>
        <RouterLink to="/patent">只装置</RouterLink>
        <RouterLink to="/patent">只能装置</RouterLink>
      </div>
    </div>
  </section>
  <section class="pageWidthWithCenter categoryTabBar">
    <CategoryTab />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UIInputSearch from '/@components/UI/UIInputSearch.vue';
import CategoryTab from './CategoryTab.vue';

export default defineComponent({
  name: 'Home',
  components: {
    UIInputSearch,
    CategoryTab,
  },
})
</script>

<style lang="scss">
.inputHomeSearch {
  margin-bottom: 8px;
  .ant-input, .ant-btn {height: 70px;font-size: 20px;}
  .ant-input:focus {
    border-color: #FFBB12;
    box-shadow: rgba(20, 168, 189, 0.2) 0 0 0 2px;
  }
  .ant-btn {
    background-color: #FFBB12;
    border-color: #FFBB12;
    padding: 0 30px;
    &.ant-btn-primary:hover, &.ant-btn-primary:focus {
      background-color: #16B5CB;
    }
    &.ant-btn-primary.active, &.ant-btn-primary:active {
      background-color: #1199AD;
    }
  }
}
</style>

<style lang="scss" scoped>
.searchBar {
  background-image: url("../../assets/home/banner1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -70px;
  padding: 10% 0;
  flex-direction: column;
  h1 {font-size: 40px;color: #fff;margin-bottom: 1.5em;}
  .inputHomeSearchWrapper {width: 58%;}
  .hotSearch {
    a {
      color: #fff;
      transition: all .3s;
      margin-right: 1em;
      &:hover {color: #72EDFF;}
    }
  }
}
</style>
