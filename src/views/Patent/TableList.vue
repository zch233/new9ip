<template>
  <section class="patentList-title">
    <span class="col-order">序号</span>
    <span class="col-name">专利名称</span>
    <span class="col-number">专利号</span>
    <span class="col-legalStatus">法律状态</span>
    <span class="col-tag">领域</span>
    <span class="col-inventorExplain">发明人</span>
    <span class="col-status">状态</span>
    <span class="col-price">零售价</span>
    <span class="col-vipPrice">VIP价</span>
    <span class="col-options">操作</span>
  </section>
  <section class="patentList-content" :style="{paddingTop: `${startIndex * 45}px`}">
    <template v-for="(patent, index) in patents" :key="patent.number">
      <div class="patentList-content-item" v-if="index >= startIndex && index <= startIndex + 30">
        <span class="col-order">{{ index + 1 }}</span>
        <label class="col-name searchKeyword"><a class="patentLabel" :class="patent.newest ? 'new' : patent.hot ? 'hot' : patent.price < 20000 ? 'sale' : patent.price > 20000 ? 'rare' : ''" :href="`/patent/${patent.number}`" target="_blank"><b v-html="patent.nameHighlightKey || patent.name" /></a></label>
        <span class="col-number searchKeyword" v-html="patent.numberHighlightKey || patent.number" />
        <span class="col-legalStatus">{{ patent.legalStatus }}</span>
        <span class="col-tag">
          <span class="searchKeyword" v-for="(tag, index) in (patent.tagsHighlightKey || patent.tags).split(',')" :key="tag"><RouterLink :to="`/patent?word=${encodeURIComponent(patent.tags?.split(',')[index])}`" v-html="tag" />{{index === (patent.tagsHighlightKey || patent.tags).split(',').length - 1 ? '' : ','}}</span>
        </span>
        <span class="col-inventorExplain">{{ patent.inventorExplain }}</span>
        <span class="col-status">{{ PATENT_STOCK_STATUS.label[patent.stockStatus] }}</span>
        <span class="col-price">￥{{ patent.price }}</span>
        <span class="col-vipPrice">￥{{ patent.vipPrice }}</span>
        <div class="col-options">
          <RouterLink class="buyButton" :to="{path: '/order/confirm', query: {commodityId: patent.id}}">
            <UIButton size="small" :disabled="notActivePatent(patent.stockStatus)" type="primary" customer-class="dangerButton">立即购买</UIButton>
          </RouterLink>
          <PreorderButton buttonClass="preorderButton_noGap" size="small" v-if="!notActivePatent(patent.stockStatus)" :patent="patent" />
          <div class="preStatus" v-if="patent.stockStatus === PATENT_STOCK_STATUS.RESERVING"><PrePatentCountdown :patent="patent" /></div>
          <StarIcon class="starIcon_noGap" :patent="patent" />
        </div>
      </div>
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import UITag from '../../components/UI/UITag.vue';
import Icon from '../../components/Icon/index.vue';
import UIButton from '../../components/UI/UIButton.vue';
import VIPBrand from '../../components/VIPBrand/index.vue';
import StarIcon from '../../components/StarIcon/index.vue';
import PreorderButton from '../../components/PreorderButton/index.vue';
import PatentImage from '../../components/PatentImage/index.vue';
import PrePatentCountdown from '../../components/PrePatentCountdown/index.vue';
import { notActivePatent } from '/@/utils';
import { PATENT_STOCK_STATUS } from '/@utils/dict';

export default defineComponent({
  name: 'TableList',
  components: {UITag, Icon, UIButton, VIPBrand, StarIcon, PreorderButton, PatentImage, PrePatentCountdown},
  props: {
    patents: {
      type: Object as PropType<Patent[]>,
      default: () => ([]),
    },
    startIndex: Number,
  },
  setup() {
    return {
      PATENT_STOCK_STATUS,
      notActivePatent,
    }
  }
})
</script>

<style lang="scss" scoped>
.col {
  &-order, &-name, &-number, &-legalStatus, &-tag, &-inventorExplain, &-status, &-price, &-vipPrice, &-options {padding-left: 8px;word-break: break-all;}
  &-order {flex: 0 0 3%;}
  &-name {flex: 0 0 27.35%;padding-right: 8px;}
  &-number {flex: 0 0 8.6em;}
  &-legalStatus {flex: 0 0 6.4%;}
  &-tag {flex: 0 0 20.18%;}
  &-inventorExplain {flex: 0 0 4.4%;}
  &-status {flex: 0 0 3.8%;}
  &-price {flex: 0 0 5.9em}
  &-vipPrice {flex: 0 0 5.9em}
  &-options{flex: 0 0 14.4%;}
}
.patentList {
  &-title {
    font-size: 12px;
    display: flex;
    align-items: center;
    background-color: #F3F3F3;
    color: #999;
    padding: 6px 0;
    font-weight: bold;
  }
  &-content {
    font-size: 12px;
    .col {
      &-name {font-size: 13px;}
      &-name, &-tag span {transition: color .3s; &:hover {color: #14A8BD;}}
    }
    &-item {
      padding: 10px 0;
      border-bottom: 1px solid #DEDEDE;
      display: flex;
      align-items: center;
      .col-options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .starIcon_noGap { margin-left: -.4em;}
        .preStatus {text-align: center;padding: 0 2px; > p {color: #14A8BD;margin-bottom: 3px;} svg {margin-right: 0.4em}}
      }
    }
    .patentLabel {
      &.new, &.hot, &.rare, &.sale {
        &::before, &::after {
          left: 100%;
          transform: scale(.7);
          top: -.32em;
        }
        &::after { left: calc(100% + .5em); top: .06em; }
      }
    }
  }
}
</style>
