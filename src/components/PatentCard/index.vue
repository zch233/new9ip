<template>
  <div class="patentCard">
    <div class="patentCard-image"><img src="../../assets/patent/A.jpg" alt=""></div>
    <p class="patentCard-title">一种考虑车队离散特征的公交车和一种考虑车队离散特征的公交车和一种考虑车队离散特征的公交车和</p>
    <div class="patentCard-price">￥20000</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PatentCard',
})
</script>

<style lang="scss" scoped>
.patentCard {
  border: 1px solid #DBDBDB;
  text-align: left;
  &-image {img {width: 100%;}}
  &-title {white-space: nowrap;overflow: hidden;text-overflow: ellipsis;line-height: 2.4;padding: 0 .8em;margin: 0;}
  &-price {color: #FF5858;font-size: 24px;line-height: 2;padding-left: 5px;}
}
</style>
