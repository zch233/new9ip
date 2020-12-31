<template>
  <RouterLink :class="(patent.stockStatus === PATENT_STOCK_STATUS.SOLD_OUT || patent.stockStatus === PATENT_STOCK_STATUS.USED_SELL) ? 'disabled' : 'normal'" :to="`/patent/${patent.number}`">
    <div class="patentCard">
      <div class="patentCard-image"><img :src="`https://market.img.9ip.com/${patent.category.slice(0, 1)}.jpg`" alt=""></div>
      <p class="patentCard-title">{{ patent.name }}</p>
      <div class="patentCard-price">￥{{ patent.price }}</div>
    </div>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PATENT_STOCK_STATUS } from '/@/utils/dict';

export default defineComponent({
  name: 'PatentCard',
  props: {
    patent: {
      type: Object as PropType<Patent>,
      default: () => ({}),
    }
  },
  setup() {
    return {
      PATENT_STOCK_STATUS
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
  &-price {color: #FF5858;font-size: 24px;line-height: 2;padding-left: 5px;}
}
</style>
