<template>
  <div class="home">
    <section class="searchBarWrapper">
      <div class="pageWidthWithCenter searchBar">
        <h1>全网最真实的一手知产交易平台</h1>
        <div class="inputHomeSearchWrapper">
          <UIInputSearch
            class="inputHomeSearch"
            placeholder="请搜索专利号 / 名称"
            enter-button="快速搜索"
            @search="searchPatent"
          />
          <div class="hotSearch">
            <RouterLink v-for="(word, index) in hotSearchKeywords" :key="index" :to="{path: '/patent', query: {word}}">{{ word }}</RouterLink>
          </div>
        </div>
      </div>
    </section>
    <div class="restWrapper">
      <section class="pageWidthWithCenter categoryTabBar">
        <CategoryTab />
      </section>
      <section class="flowBar">
        <div class="pageWidthWithCenter">
          <SubTitle title="专利交易流程" des="优质专利 流程便捷" />
          <img src="../../assets/home/flow.png" alt="">
        </div>
      </section>
      <section class="advanceBar pageWidthWithCenter">
        <SubTitle dark title="我们的优势" des="用心满足您的需求" />
        <ul class="advanceList">
          <li v-for="item in advanceList" :key="item.title" class="advanceItem">
            <Icon :icon="item.icon" />
            <p>{{ item.title }}</p>
            <span>{{ item.des }}</span>
          </li>
        </ul>
      </section>
      <section class="leaveMessageBar">
        <div class="pageWidthWithCenter">
          <img class="bgBottom" src="../../assets/home/bgBottom.png" alt="">
<!--          <SubTitle title="免费找专利" des="一键匹配专业顾问帮您找" />-->
<!--          <div class="inputWrapper"><UIInput placeholder="请输入您的手机号" :maxlength="11" /></div>-->
<!--          <UIButton class="leaveMessageButton" type="primary" size="large" @click="leaveMessage" customerClass="warningButton">免费帮我找</UIButton>-->
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import UIInputSearch from '/@components/UI/UIInputSearch.vue';
import CategoryTab from './CategoryTab.vue';
import SubTitle from './SubTitle.vue';
import Icon from '/@components/Icon/index.vue'
import UIInput from '/@components/UI/UIInput.vue';
import UIButton from '/@components/UI/UIButton.vue';
import * as homeApi from '/@api/home'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home',
  components: {
    UIInputSearch,
    CategoryTab,
    SubTitle,
    Icon,
    UIInput,
    UIButton,
  },
  setup () {
    const router = useRouter()
    const hotSearchKeywords = ref<string[]>([])
    const advanceList = [
      {icon: 'advance1', title: '服务', des: '专注服务于知识产权领域',},
      {icon: 'advance2', title: '售后', des: '7x24小时售后服务',},
      {icon: 'advance3', title: '专心', des: '一对一专属客户经理',},
      {icon: 'advance4', title: '真实', des: '一手真实资源值得信赖',},
    ]
    const searchPatent = (word: string) => {
      if (word.trim() === '') return
      router.push({path: '/patent', query: {word: word.trim()}})
    }
    const getHotSearch = async () => {
      const {data} = await homeApi.getHotSearchKeywords()
      hotSearchKeywords.value = data

    }
    onMounted(() => {
      getHotSearch()
    })
    return {
      searchPatent,
      advanceList,
      hotSearchKeywords,
    }
  }
})
</script>

<style lang="scss">
.inputHomeSearch {
  margin-bottom: 8px;
  .ant-input, .ant-btn {height: 70px;font-size: 20px;}
  .ant-input:focus {
    border-color: #FFBB12;
    box-shadow: rgba(20, 168, 189, 0.2) 0 0 0 2px;
  }
  .ant-btn {
    background-color: #FFBB12;
    border-color: #FFBB12;
    padding: 0 30px;
    &.ant-btn-primary:hover, &.ant-btn-primary:focus {
      background-color: #FFC944;
    }
    &.ant-btn-primary.active, &.ant-btn-primary:active {
      background-color: #EEAA00;
    }
  }
}
</style>

<style lang="scss" scoped>
.home {
  position: relative;
  top: -70px;
  margin-bottom: -170px;
}
.searchBarWrapper {
  background-image: url("../../assets/home/banner1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.searchBar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10% 0;
  flex-direction: column;
  h1 {font-size: 40px;color: #fff;margin-bottom: 1.5em;}
  .inputHomeSearchWrapper {width: 58%;}
  .hotSearch {
    a {
      color: #fff;
      transition: all .3s;
      margin-right: 1em;
      &:hover {color: #72EDFF;}
    }
  }
}
.restWrapper {
  position: relative;
  top: -100px;
}
.categoryTabBar {
  margin-bottom: 30px;
}
.flowBar, .advanceBar, .leaveMessageBar {padding: 46px 0 100px;}
.flowBar {
  background-image: url('../../assets/home/bgMiddle.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  img {width: 100%;}
}
.advanceList {
  margin: 0 6.66%;
  display: flex;
  border: 1px solid #D6D6D6;
  .advanceItem {
    flex: 1;
    text-align: center;
    color: #14A8BD;
    border-right: 1px solid #D6D6D6;
    padding: 50px 0 30px;
    &:last-child {border-right: 0;}
    svg {font-size: 66px;}
    p {margin: 9px 0 16px;font-size: 24px;}
    span {color: #666;}
  }
}
.leaveMessageBar {
  background-color: #14A8BD;
  text-align: center;
  .bgBottom {width: 80%;}
  .inputWrapper {
    width: 50%;
    margin: 0 auto 30px;
    .ant-input {line-height: 60px;font-size: 20px;border-radius: 6px;}
  }
  .leaveMessageButton {font-size: 24px;color: #005A67;padding: 0 55px;height: 55px;border-radius: 6px;}
}
</style>
