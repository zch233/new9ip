<template>
  <div class="categoryTab">
    <ul class="categoryList">
      <li class="categoryItem" v-for="category in categories" :key="category.code">
        <Icon :icon="`category${category.code}`" />
        <b>{{ category.name }}</b>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '/@components/Icon/index.vue'
import {categories} from '../../utils/dict'

export default defineComponent({
  name: 'CategoryTab',
  components: {Icon},
  setup() {
    return {
      categories,
    }
  },
})
</script>

<style lang="scss" scoped>
.categoryTab {
  background-color: #fff;
  .categoryList {
    background-color: #F7F7F7;
    display: flex;
    .categoryItem {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 16px;
      color: #999999;
      svg {margin-bottom: 18px;font-size: 70px;}
      &.active {color: #333;}
    }
  }
}
</style>
