<template>
  <RouterLink :class="(patent.stockStatus === PATENT_STOCK_STATUS.SOLD_OUT || patent.stockStatus === PATENT_STOCK_STATUS.USED_SELL) ? 'disabled' : 'normal'" :to="`/patent/${patent.number}`">
    <div class="patentCard">
      <div class="patentCard-image"><PatentImage :cover="patent.categoryCover" /></div>
      <p class="patentCard-title">{{ patent.name }}</p>
      <div class="patentCard-info">
        <span class="patentCard-info-price">￥{{ patent.price }}</span>
        <span class="patentCard-info-certStatus">{{ PATENT_CERT_STATUS.label[patent.certStatus] }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PatentImage from '/@components/PatentImage/index.vue';
import { PATENT_STOCK_STATUS, PATENT_CERT_STATUS } from '/@/utils/dict';

export default defineComponent({
  name: 'PatentCard',
  components: {PatentImage},
  props: {
    patent: {
      type: Object as PropType<Patent>,
      default: () => ({}),
    }
  },
  setup() {
    return {
      PATENT_STOCK_STATUS,
      PATENT_CERT_STATUS,
    }
  }
})
</script>

<style lang="scss" scoped>
.disabled {
  background-color: #fff;
  opacity: .5;
  display: block;
  pointer-events: none;
  user-select: none;
}
.patentCard {
  border: 1px solid #DBDBDB;
  text-align: left;
  &-image {img {width: 100%;}}
  &-title {white-space: nowrap;overflow: hidden;text-overflow: ellipsis;line-height: 2.4;padding: 0 .8em;margin: 0;}
  &-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-price {color: #FF5858;font-size: 24px;line-height: 2;padding-left: 5px;}
    &-certStatus {color: #999; font-size: 12px;padding-right: 10px;}
  }
}
</style>
