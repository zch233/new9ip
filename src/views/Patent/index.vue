<template>
  <div class="pageWidthWithCenter patent">
    <section class="userFilterBar">
      <div class="userFilterBar-left">
        <label class="filterTitle">已选条件：</label>
        <UITag closable>大明专利</UITag>
        <UITag closable>已下证专利</UITag>
      </div>
      <div class="userFilterBar-right" @click="handleFilterControl">{{ filterControl.text }} <Icon :icon="filterControl.icon" /></div>
    </section>
    <section class="systemFilterBar" :class="filterControl.visible ? '' : 'hide'">
      <ul class="systemFilterBar-list">
        <li><label class="filterTitle">专利类型：</label></li>
        <li class="systemFilterBar-list-item">不限</li>
        <li v-for="item in PATENT_TYPE.label" :key="item" class="systemFilterBar-list-item">{{ item }}</li>
      </ul>
      <ul class="systemFilterBar-list">
        <li><label class="filterTitle">技术领域：</label></li>
        <li class="systemFilterBar-list-item">不限</li>
        <li v-for="item in PATENT_TYPE.label" :key="item" class="systemFilterBar-list-item">{{ item }}</li>

      </ul>
      <ul class="systemFilterBar-list">
        <li><label class="filterTitle">法律状态：</label></li>
        <li class="systemFilterBar-list-item">不限</li>
        <li v-for="item in PATENT_CERT_STATUS.label" :key="item" class="systemFilterBar-list-item">{{ item }}</li>
      </ul>
      <ul class="systemFilterBar-list">
        <li><label class="filterTitle">　发明人：</label></li>
        <li class="systemFilterBar-list-item">不限</li>
        <li v-for="item in PATENT_ORIGIN_STATUS.label" :key="item" class="systemFilterBar-list-item">{{ item }}</li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UITag from '/@components/UI/UITag.vue';
import Icon from '/@components/Icon/index.vue';
import {PATENT_TYPE, PATENT_CERT_STATUS, PATENT_ORIGIN_STATUS} from '/@/utils/dict'

export default defineComponent({
  name: 'Patent',
  components: {UITag, Icon},
  setup() {
    const filterControl = ref({
      visible: true,
      text: '收起筛选',
      icon: 'top',
    });
    const handleFilterControl = () => {
      filterControl.value = filterControl.value.visible
        ? {
          visible: false,
          text: '显示筛选',
          icon: 'down',
        }
        : {
          visible: true,
          text: '收起筛选',
          icon: 'top',
        };
    }
    return {
      PATENT_TYPE,
      PATENT_CERT_STATUS,
      PATENT_ORIGIN_STATUS,
      filterControl,
      handleFilterControl,
    }
  },
})
</script>

<style lang="scss" scoped>
.patent {
  padding: 16px 0;
  $labelGap: 1.4em;
  .filterTitle {color: #999;padding-right: $labelGap;}
  .userFilterBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-left {
      padding-left: $labelGap;
    }
    &-right {
      background-color: #fff;
      padding: .4em 1em;
      cursor: pointer;
      transition: all .3s;
      &:hover {color: #14A8BD;}
      svg {font-size: 10px;color: #999;}
    }
  }
  .systemFilterBar {
    padding: 20px;
    background-color: #fff;
    transition: all 0.3s;
    overflow: hidden;
    &.hide {
      opacity: 0;
      height: 0;
      padding: 0 15px;
    }
    &-list {
      display: flex;
      margin-bottom: 10px;
      &:last-child {margin-bottom: 0;}
      &-item {
        margin-right: 2.4em;
        cursor: pointer;
        transition: all .3s;
        &.active, &:hover {color: #14A8BD;}
      }
    }
  }
}
</style>
