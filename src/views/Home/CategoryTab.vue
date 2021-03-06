<template>
  <div class="categoryTab">
    <ul class="categoryList">
      <li class="categoryItem"
        v-for="category in categories"
        :key="category.code"
        :class="[currentCategory === category.code && 'active']"
        @mouseenter="currentCategory = category.code"
      >
        <Icon :icon="`category${category.code}${currentCategory === category.code ? '_fill' : ''}`" />
        <b>{{ category.name }}</b>
      </li>
    </ul>
    <div v-if="currentCategoryPatents.length === 0" class="emptyWrapper">
      <UIEmpty description="相关专利还在路上..." image="home">
        <RouterLink to="/patent"><UIButton customer-class="mainButton" type="primary">查看更多</UIButton></RouterLink>
      </UIEmpty>
    </div>
    <template v-else>
      <ul class="categoryCardList">
        <li v-for="item in currentCategoryPatents" :key="item.id" class="categoryCardItem">
          <a class="categoryCardItem-link" target="_blank" :href="`/patent/${item.number}`">
            <div class="categoryCardItem-imageWrapper"><PatentImage :cover="item.categoryCover" /></div>
            <p class="categoryCardItem-title">{{ item.name }}</p>
            <div class="categoryCardItem-priceBar">
              <span>￥{{ item.price }}</span>
              <em><VIPBrand class="vipBrand" />￥{{ item.vipPrice }}</em>
            </div>
          </a>
        </li>
      </ul>
      <p class="viewMore"><RouterLink :to="{path: '/patent', query: {category: currentCategory}}">查看更多 <Icon icon="right" /></RouterLink></p>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, computed } from 'vue';
import Icon from '../../components/Icon/index.vue'
import {categories} from '/@utils/dict'
import VIPBrand from '../../components/VIPBrand/index.vue'
import UIEmpty from '../../components/UI/UIEmpty.vue';
import UIButton from '../../components/UI/UIButton.vue';
import PatentImage from '../../components/PatentImage/index.vue';
import { getPatents } from '/@api/patent';

export default defineComponent({
  name: 'CategoryTab',
  components: {Icon, VIPBrand, UIEmpty, PatentImage, UIButton},
  setup() {
    const patents = reactive<{[key: string]: Patent[] }>({})
    const currentCategory = ref('A')
    const currentCategoryPatents = computed(() => patents[currentCategory.value] || [])
    onMounted(async () => {
      for (let i = 0;i<categories.length;i++) {
        const {data} = await getPatents({ category: categories[i].code, size: 10 })
        patents[categories[i].code] = data?.list || []
      }
      // categories.map(async category => {
      //   const {data} = await getPatents({ category: category.code, size: 10 })
      //   patents[category.code] = data?.list || []
      // })
    })
    return {
      currentCategory,
      categories,
      VIPBrand,
      currentCategoryPatents,
    }
  },
})
</script>

<style lang="scss" scoped>
.categoryTab {
  background-color: #fff;
  padding-bottom: 4px;
  .categoryList {
    display: flex;
    .categoryItem {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 16px;
      color: #999999;
      padding: 18.5px 0;
      background-color: #F7F7F7;
      transition: all .3s;
      cursor: pointer;
      &.active, &:hover {
        background-color: #fff;
        color: #333;
      }
      svg {margin-bottom: 18px;font-size: 40px;}
      &.active {color: #333;}
    }
  }
  .emptyWrapper, .categoryCardList {
    min-height: 609px;
    display: flex;
  }
  .emptyWrapper {
    align-items: center;
    justify-content: center;
    margin-bottom: 36px;
  }
  .categoryCardList {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 20px;
    .categoryCardItem {
      border: 1px solid #E9E9E9;
      width: 19.3%;
      margin: 0 10px 10px 0;
      &:nth-child(5n) {margin-right: 0}
      &-link {padding: 10px;display: block}
      &-imageWrapper {img {width: 100%;}}
      &-title {margin: 8px 0 26px;line-height: 1.4;height: 2em}
      &-priceBar {
        display: flex; align-items: center; justify-content: space-between;
        > span {font-size: 20px;font-weight: bold;}
        > em {
          display: flex;
          align-items: center;
          border: 1px solid #E9E9E9;
          padding: 0 4px 0 2px;
          .vipBrand {font-size: 24px}
          font-size: 16px; color: #FF5858;font-style: normal;font-weight: bold;
        }
      }
    }
  }
  .viewMore {text-align: center;color: #999999;svg {margin: 1px;font-size: 10px;}}
}
</style>
