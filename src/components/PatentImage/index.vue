<template>
<!--  <img :src="`https://market.img.9ip.com/${category?.slice(0, 1)}.jpg`" alt="">-->
  <img v-if="category?.slice(0, 1) === 'A'" src="../../assets/patent/A.jpg" alt="">
  <img v-if="category?.slice(0, 1) === 'B'" src="../../assets/patent/B.jpg" alt="">
  <img v-if="category?.slice(0, 1) === 'C'" src="../../assets/patent/C.jpg" alt="">
  <img v-if="category?.slice(0, 1) === 'D'" src="../../assets/patent/D.jpg" alt="">
  <img v-if="category?.slice(0, 1) === 'E'" src="../../assets/patent/E.jpg" alt="">
  <img v-if="category?.slice(0, 1) === 'F'" src="../../assets/patent/F.jpg" alt="">
  <img v-if="category?.slice(0, 1) === 'G'" src="../../assets/patent/G.jpg" alt="">
  <img v-if="category?.slice(0, 1) === 'H'" src="../../assets/patent/H.jpg" alt="">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PatentImage',
  props: {
    category: String,
  }
})
</script>

<style lang="scss" scoped>
img { width: 100%; }
</style>
