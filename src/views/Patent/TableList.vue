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
  <section class="patentList-content">
    <div class="patentList-content-item" v-for="(patent, index) in patents" :key="patent.number">
      <span class="col-order">{{ index + 1 }}</span>
      <label class="col-name searchKeyword"><a target="_blank" :href="`/patent/${patent.number}`"><b v-html="patent.nameHighlightKey || patent.name" /></a></label>
      <span class="col-number searchKeyword" v-html="patent.numberHighlightKey || patent.number" />
      <span class="col-legalStatus">{{ patent.legalStatus }}</span>
      <span class="col-tag">
        <span class="searchKeyword" v-for="(tag, index) in (patent.tagsHighlightKey || patent.tags).split(',')" :key="tag"><RouterLink :to="`/patent?word=${encodeURIComponent(patent.tags?.split(',')[index])}`" v-html="tag" />{{index === (patent.tagsHighlightKey || patent.tags).split(',').length - 1 ? '' : '，'}}</span>
      </span>
      <span class="col-inventorExplain">{{ patent.inventorExplain }}</span>
      <span class="col-status">{{ PATENT_STOCK_STATUS.label[patent.stockStatus] }}</span>
      <span class="col-price">￥{{ patent.price }}</span>
      <span class="col-vipPrice">￥{{ patent.vipPrice }}</span>
      <div class="col-options">
        <RouterLink class="buyButton" :to="{path: '/order/confirm', query: {commodityId: patent.id}}">
          <UIButton size="small" :disabled="notActivePatent(patent.stockStatus)" type="primary" customer-class="dangerButton">立即购买</UIButton>
        </RouterLink>
        <PreorderButton size="small" v-if="!notActivePatent(patent.stockStatus)" :patent="patent" />
        <div class="preStatus" v-if="patent.stockStatus === PATENT_STOCK_STATUS.RESERVING"><p>预留中</p><PrePatentCountdown :patent="patent" /></div>
        <StarIcon :patent="patent" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import UITag from '/@components/UI/UITag.vue';
import Icon from '/@components/Icon/index.vue';
import UIButton from '/@components/UI/UIButton.vue';
import VIPBrand from '/@components/VIPBrand/index.vue';
import StarIcon from '/@components/StarIcon/index.vue';
import PreorderButton from '/@components/PreorderButton/index.vue';
import PatentImage from '/@components/PatentImage/index.vue';
import PrePatentCountdown from '/@components/PrePatentCountdown/index.vue';
import { notActivePatent } from '/@/utils';
import { PATENT_STOCK_STATUS } from '/@/utils/dict';

export default defineComponent({
  name: 'TableList',
  components: {UITag, Icon, UIButton, VIPBrand, StarIcon, PreorderButton, PatentImage, PrePatentCountdown},
  props: {
    patents: {
      type: Object as PropType<Patent[]>,
      default: () => ([]),
    }
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
  &-order, &-name, &-number, &-legalStatus, &-tag, &-inventorExplain, &-status, &-price, &-vipPrice, &-options {padding: 0 8px;}
  &-order {flex: 0 0 3.67%;}
  &-name {flex: 0 0 27.17%;}
  &-number {flex: 0 0 9%;}
  &-legalStatus {flex: 0 0 7%;}
  &-tag {flex: 0 0 14.25%;}
  &-inventorExplain {flex: 0 0 4.67%;}
  &-status {flex: 0 0 4.67%;}
  &-price {flex: 0 0 6.33%;}
  &-vipPrice {flex: 0 0 6.33%;}
  &-options{flex: 0 0 16.92%;}
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
    }
    &-item {
      padding: 14px 0;
      border-bottom: 1px solid #DEDEDE;
      display: flex;
      align-items: center;
      .col-options {
        display: flex;
        align-items: center;
        .preStatus {text-align: center;padding: 0 10px; > p {color: #14A8BD;margin-bottom: 3px;} svg {margin-right: 0.4em}}
      }
    }
  }
}
</style>
