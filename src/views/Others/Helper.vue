<template>
  <div class="helper">
    <AppTitleBar title="帮助中心">
      <RouterLink class="returnHome" to="/">返回首页</RouterLink>
    </AppTitleBar>
    <section class="pageWidthWithCenter helper-main">
      <div class="helper-main-left">
        <div class="helperWrapper" v-for="(menu, index) in helpers" :key="menu.menuTitle">
          <p class="helperList-title">{{ menu.menuTitle }}</p>
          <ul class="helperList">
            <li class="helperList-item" :class="[subMenu === currentSubMenuContent && 'active']" v-for="(subMenu, subIndex) in menu.menuChildren" :key="subMenu.subMenuTitle" @click="switchContent(index, subIndex)">{{ subMenu.subMenuTitle }}</li>
          </ul>
        </div>
      </div>
      <div class="helper-main-right">
        <h2 class="helperContent-title">{{ currentSubMenuContent.subMenuTitle }}</h2>
        <article class="helperContent-item"  v-for="item in currentSubMenuContent.subMenuContent" :key="item.subMenuTitle">
          <p class="helperContent-item-title">{{ item.title }}</p>
          <div class="helperContent-item-content">
            <p v-for="content in item.content" :key="content">{{ content }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppTitleBar from '/@components/AppTitleBar/index.vue'

export default defineComponent({
  name: 'Helper',
  components: {AppTitleBar},
  setup() {
    const helpers = ref([
      {
        menuTitle: '常见问题1',
        menuChildren: [
          {
            subMenuTitle: '专利申请',
            subMenuContent: [
              {
                title: '1、专利的分类有哪些',
                content: ['1、专利包括发明专利、实用新型专利和外观设计专利。', '2、专利包括发明专利、实用新型专利和外观设计专利。'],
              },
              {
                title: '2、专利的分类有哪些',
                content: ['专利包括发明专利、实用新型专利和外观设计专利。'],
              },
            ]
          }
        ]
      },
      {
        menuTitle: '常见问题2',
        menuChildren: [
          {
            subMenuTitle: '专利申请',
            subMenuContent: [
              {
                title: '1、专利的分类有哪些',
                content: ['专利包括发明专利、实用新型专利和外观设计专利。'],
              },
              {
                title: '2、专利的分类有哪些',
                content: ['专利包括发明专利、实用新型专利和外观设计专利。'],
              },
            ]
          }
        ]
      },
    ])
    const currentSubMenuContent = ref(helpers.value[0].menuChildren[0])
    const switchContent = (index, subIndex) => currentSubMenuContent.value = helpers.value[index].menuChildren[subIndex]
    return {
      helpers,
      currentSubMenuContent,
      switchContent,
    }
  },
})
</script>

<style lang="scss" scoped>
.returnHome {
  color: #999999;
  font-size: 16px;
}
.helper-main {
  display: flex;
  font-size: 12px;
  &-left {
    margin-right: 10px;
    background-color: #fff;
    width: 150px;
  }
  &-right {
    background-color: #fff;
    flex: 1;
  }
}
.helperList {
  &-title {
    color: #FFF;
    background-color: #14A8BD;
    font-size: 14px;
    padding: 10px 20px;
    margin: 0;
  }
  &-item {
    padding: 12px 20px;
    transition: all .3s;
    cursor: pointer;
    &.active, &:hover {
      background-color: #F3FAFF;
      color: #14A8BD;
    }
  }
}
.helperContent {
  &-title {
    color: #14A8BD;
    padding: 20px 50px;
    border-bottom: 1px solid #E8E8E8;
  }
  &-item {
    padding: 10px 20px;
    &-title {
      font-weight: bold;
      padding: 15px 30px;
      background-color: #E8E8E8;
      margin: 0;
    }
    &-content {
      padding: 20px 30px;
      background-color: #F6F6F6;
    }
  }
}
</style>
