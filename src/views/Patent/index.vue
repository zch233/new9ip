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
    <section class="patentListBar">
      <div class="patentListBar-options">
        <div class="patentListBar-options-order">
          <span>综合排序</span>
          <span>发布时间</span>
        </div>
        <div class="patentListBar-options-extra">
          <UIButton customer-class="default">导出全部</UIButton>
          <UIButton type="primary" customer-class="mainButton">导出结果</UIButton>
          <Icon icon="refresh" />
          <Icon icon="fullscreen" />
        </div>
      </div>
      <ul class="patentListBar-list">
        <li class="patentListBar-list-item">
          <div class="patentListBar-list-item-image new"><img src="../../assets/patent/A.jpg" alt=""></div>
          <div class="patentListBar-list-item-content">
            <div class="patentListBar-list-item-content-firstFloor">
              <RouterLink to="/order"><b class="patentListBar-list-item-content-firstFloor-title">一种防撞的交通指挥站台</b></RouterLink>
              <p class="patentListBar-list-item-content-firstFloor-info"><label>浏览量：</label><span>290</span><label>收藏</label><Icon class="starIcon" icon="start" /></p>
            </div>
            <div class="patentListBar-list-item-content-secondFloor">
              <p class="patentListBar-list-item-content-secondFloor-des"><label>专利号：201912102120</label><label>领域：交通技术</label><label>发明人：不提供</label></p>
              <p class="patentListBar-list-item-content-secondFloor-des"><label>专利类型：发明专利</label><label>法律状态：待质检抽案</label></p>
            </div>
            <div class="patentListBar-list-item-content-thirdFloor">
              <div class="patentListBar-list-item-content-thirdFloor-status">
                <span class="patentListBar-list-item-content-thirdFloor-status-tag primary">已下证</span>
                <span class="patentListBar-list-item-content-thirdFloor-status-tag success">可售</span>
                <span class="patentListBar-list-item-content-thirdFloor-status-tag disabled">可售</span>
              </div>
              <div class="patentListBar-list-item-content-thirdFloor-price">
                <label>零售价：<b>￥20000</b></label>
                <VIPBrand class="vipBrand" /><b class="vipPrice">￥<em>15000</em></b>
                <RouterLink class="buyButton" to="/order"><UIButton type="primary" customer-class="dangerButton">立即购买</UIButton></RouterLink>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UITag from '/@components/UI/UITag.vue';
import Icon from '/@components/Icon/index.vue';
import VIPBrand from '/@components/VIPBrand/index.vue'
import UIButton from '/@components/UI/UIButton.vue';
import {PATENT_TYPE, PATENT_CERT_STATUS, PATENT_ORIGIN_STATUS} from '/@/utils/dict'

export default defineComponent({
  name: 'Patent',
  components: {UITag, Icon, VIPBrand, UIButton},
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
    user-select: none;
    &-left {padding-left: $labelGap;}
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
    user-select: none;
    &.hide {opacity: 0;height: 0;padding: 0 15px;}
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
  .patentListBar {
    margin: 20px 0 40px;
    background-color: #fff;
    user-select: none;
    &-options {
      padding: 1.2em 2.1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #E8E8E8;
      &-order {
        > span {
          cursor: pointer;
          font-size: 12px;
          transition: all .3s;
          margin-right: 2em;
          &.active, &:hover {color: #14A8BD;}
        }
      }
      &-extra {
        > * {margin-left: 20px;font-size: 12px;}
        svg {transition: all .3s;cursor: pointer;font-size: 24px;vertical-align: -.3em;color: #aaa; &:hover {color: #14A8BD;}}
      }
    }
    &-list {
      &-item {
        display: flex;
        padding: 30px;
        &-image {
          width: 118px;
          overflow: hidden;
          position: relative;
          &.new {
            &::before {
              content: '新';
              font-size: 12px;
              color: #fff;
              position: absolute;
              left: 0; top: 0; bottom: 0; right: 0;
              padding: 2px 0 0 4px;
              background-image: linear-gradient(135deg, #FF5858 0%, #FF5858 14%, transparent 14%, transparent 100%);
            }
          }
          img {width: 100%;}
        }
        &-content {
          flex: 1;
          padding-left: 20px;
          &-firstFloor {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 7px;
            &-title {font-size: 16px;}
            &-info {
              margin: 0;
              svg {transition: all .3s;cursor: pointer;font-size: 20px;color: #aaa; &:hover {color: rgb(255,171,31);}}
              .starIcon {margin-left: .5em}
              label {margin-left: 2em;}
            }
          }
          &-secondFloor {
            color: #666666;
            &-des {margin-bottom: 8px; &:last-child {margin-bottom: 4px;} label {width: 16em; display: inline-block;}}
          }
          &-thirdFloor {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-status {
              &-tag {
                border-radius: 4px;
                display: inline-block;
                padding: 0 .6em;
                font-size: 12px;
                margin-right: .6em;
                &.primary {color: #2F86DD;border: 1px solid #2F86DD;}
                &.success {color: #0DB272;border: 1px solid #0DB272;}
                &.disabled {color: #999;border: 1px solid #999;}
              }
            }
            &-price {
              .vipBrand {margin-left: .44em;font-size: 40px;}
              .vipPrice {color: #FF5858; em {font-size: 24px;font-style: normal;} }
              .buyButton {vertical-align: top;margin-left: 1.4em;}
            }
          }
        }
      }
    }
  }
}
</style>
