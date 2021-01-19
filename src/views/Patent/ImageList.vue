<template>
  <ul class="patentListBar-list" :style="{paddingTop: `${startIndex * 145}px`}">
    <template v-for="(patent, index) in patents" :key="patent.number">
      <li class="patentListBar-list-item" v-if="index >= startIndex && index <= startIndex + 30">
        <a target="_blank" :href="`/patent/${patent.number}`">
          <div class="patentListBar-list-item-image patentLabel" :class="patent.newest ? 'new' : patent.hot ? 'hot' : ''"><PatentImage :cover="patent.categoryCover" /></div>
        </a>
        <div class="patentListBar-list-item-content">
          <div class="patentListBar-list-item-content-firstFloor">
            <a target="_blank" :href="`/patent/${patent.number}`"><b class="patentListBar-list-item-content-firstFloor-title searchKeyword" v-html="patent.nameHighlightKey || patent.name" /></a>
            <p class="patentListBar-list-item-content-firstFloor-info">
              <label v-if="patent.stockStatus === PATENT_STOCK_STATUS.RESERVING"><PrePatentCountdown :patent="patent" /></label>
              <StarIcon :patent="patent" />
            </p>
          </div>
          <div class="patentListBar-list-item-content-secondFloor">
            <p class="patentListBar-list-item-content-secondFloor-des">
              <label>专利号：<span class="searchKeyword" v-html="patent.numberHighlightKey || patent.number" /></label>
              <label class="patentListBar-list-item-content-secondFloor-des-tags">领域：<span class="searchKeyword" v-for="(tag, index) in (patent.tagsHighlightKey || patent.tags).split(',')" :key="tag"><RouterLink :to="`/patent?word=${encodeURIComponent(patent.tags?.split(',')[index])}`" v-html="tag" />{{index === (patent.tagsHighlightKey || patent.tags).split(',').length - 1 ? '' : '，'}}</span></label>
              <label>发明人：{{ patent.inventorExplain }}</label>
            </p>
            <p class="patentListBar-list-item-content-secondFloor-des">
              <label>专利类型：{{ PATENT_TYPE.label[patent.type] }}</label>
              <label>法律状态：{{ patent.legalStatus }}</label>
            </p>
          </div>
          <div class="patentListBar-list-item-content-thirdFloor">
            <div class="patentListBar-list-item-content-thirdFloor-status">
              <span class="patentListBar-list-item-content-thirdFloor-status-tag" :class="patent.certStatus === PATENT_CERT_STATUS.YIZHENG ? 'success' : patent.certStatus === PATENT_CERT_STATUS.WEIZHENG ? 'primary' : 'disabled'">{{ PATENT_CERT_STATUS.label[patent.certStatus] }}</span>
              <span class="patentListBar-list-item-content-thirdFloor-status-tag" :class="patent.stockStatus === PATENT_STOCK_STATUS.CAN_SELL ? 'success' : patent.stockStatus === PATENT_STOCK_STATUS.PRE_SELL ? 'primary' : 'disabled'">{{ PATENT_STOCK_STATUS.label[patent.stockStatus] }}</span>
            </div>
            <div class="patentListBar-list-item-content-thirdFloor-price">
              <label>零售价：<b>￥{{ patent.price }}</b></label>
              <VIPBrand class="vipBrand" /><b class="vipPrice">￥<em>{{ patent.vipPrice }}</em></b>
              <RouterLink class="buyButton" :to="{path: '/order/confirm', query: {commodityId: patent.id}}"><UIButton :disabled="notActivePatent(patent.stockStatus)" type="primary" customer-class="dangerButton">立即购买</UIButton></RouterLink>
              <PreorderButton buttonClass="preorderButton_imageMode" :disabled="notActivePatent(patent.stockStatus)" :patent="patent" />
            </div>
          </div>
        </div>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {PATENT_TYPE, PATENT_CERT_STATUS, PATENT_ORIGIN_STATUS, PATENT_STOCK_STATUS} from '/@/utils/dict'
import { notActivePatent } from '/@/utils';
import UITag from '/@components/UI/UITag.vue';
import Icon from '/@components/Icon/index.vue';
import UIButton from '/@components/UI/UIButton.vue';
import StarIcon from '/@components/StarIcon/index.vue';
import PreorderButton from '/@components/PreorderButton/index.vue';
import VIPBrand from '/@components/VIPBrand/index.vue';
import PatentImage from '/@components/PatentImage/index.vue';
import PrePatentCountdown from '/@components/PrePatentCountdown/index.vue';

export default defineComponent({
  name: 'ImageList',
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
      PATENT_TYPE,
      PATENT_CERT_STATUS,
      PATENT_ORIGIN_STATUS,
      PATENT_STOCK_STATUS,
      notActivePatent,
    }
  }
})
</script>

<style lang="scss" scoped>
.patentListBar {
  &-list {
    &-item {
      display: flex;
      padding: 10px 30px;
      border-bottom: 1px solid #E8E8E8;
      &-image {
        width: 118px;
        height: 118px;
        overflow: hidden;
        &.patentLabel { &::before, &::after {left: 0;} &::after { left: 4px; }}
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
          &-title {transition: color .3s;font-size: 16px; &:hover {color: #14A8BD;}}
          &-info {
            margin: 0;
            svg {transition: all .3s;cursor: pointer;font-size: 20px;color: #aaa; &:hover {color: rgb(255,171,31);}}
            .starIcon {margin-left: .5em}
            label {margin-left: 2em;}
          }
        }
        &-secondFloor {
          color: #666666;
          &-des {
            margin-bottom: 8px;
            &:last-child {margin-bottom: 4px;}
            label {width: 21em; display: inline-block;}
            &-tags span {transition: color .3s; &:hover {color: #14A8BD;}}
          }
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
            display: flex;
            align-items: flex-end;
            line-height: 1.4;
            .vipBrand {margin-left: .44em;margin-bottom: .1em;font-size: 40px;}
            .vipPrice {color: #FF5858;line-height: 1.1; em {font-size: 24px;font-style: normal;} }
            .buyButton {margin-left: 1.4em;}
          }
        }
      }
    }
  }
}
</style>
