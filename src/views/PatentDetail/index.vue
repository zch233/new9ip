<template>
  <div class="pageWidthWithCenter patentDetail">
    <section class="patentNavigation">
      <RouterLink to="/">首页</RouterLink>
      <Icon icon="right" />
      <RouterLink to="/patent">专利市场</RouterLink>
      <Icon icon="right" />
      <span>{{ patent.name }}</span>
    </section>
    <section class="contentTop">
      <div class="mainContent">
        <div v-else class="patentCard">
          <UISkeleton :loading="loading" :avatar="{shape: 'square', size: 'large'}" :paragraph="{rows: 14}" active >
            <div class="patentCard-left">
              <div class="patentCard-left-imageWrapper"><img src="../../assets/patent/A.jpg" alt=""></div>
              <div class="patentCard-left-options">
                <UIPopover title="复制链接以分享" trigger="click" placement="bottomRight">
                  <span>分享 <Icon icon="share" /></span>
                  <template #content>
                    <div class="contentWrapper">
                      <label>分享链接</label>
                      <UIInput disabled :defaultValue="shareURL" />
                      <UIButton customer-class="mainButton" type="primary" @click="copyToClipboard(shareURL)">复制链接</UIButton>
                    </div>
                  </template>
                </UIPopover>
                <span>收藏 <Icon icon="start" /></span>
              </div>
            </div>
            <div class="patentCard-right">
              <b class="patentCard-right-title">{{ patent.name }}</b>
              <div class="patentCard-right-price">
                <p><label>零售价</label><b>￥{{ patent.price }}</b></p>
                <p><label>VIP会员</label><b class="vipPrice">￥{{ patent.vipPrice }}</b><em class="updateVip">成为VPI会员</em></p>
              </div>
              <p class="patentCard-right-info"><label>专利号</label>{{ patent.number }}</p>
              <p class="patentCard-right-info"><label>专利类型</label>{{ PATENT_TYPE.label[patent.type] }}</p>
              <p class="patentCard-right-info"><label>法律状态</label>{{ patent.legalStatus }}</p>
              <p class="patentCard-right-info"><label>缴费截止</label>{{ patent.paymentDeadline || '未知' }}</p>
              <p class="patentCard-right-info"><label>发明人</label>{{ patent.inventorExplain }}</p>
              <p class="patentCard-right-info"><label>销售状态</label>{{ PATENT_STOCK_STATUS.label[patent.stockStatus] }}</p>
              <div class="patentCard-right-button">
                <UIButton customer-class="dangerButton" type="primary">立即购买</UIButton>
                <UIButton customer-class="default">预留</UIButton>
              </div>
              <p class="patentCard-right-patentTips">此商品已全权委托平台寄卖，平台免费提供担保交易服务。</p>
            </div>
          </UISkeleton>
        </div>
        <ul class="advance">
          <li v-for="advance in advances" :key="advance.icon"><Icon :icon="advance.icon" />{{ advance.title }}</li>
        </ul>
      </div>
      <div class="managerCard">
        <UISkeleton :loading="loading" :avatar="{size: 'large'}" :paragraph="false" :title="false" active >
          <div class="managerCard-image" data-manager="专属顾问"><img src="../../assets/patent/A.jpg" alt=""></div>
        </UISkeleton>
        <UISkeleton :loading="loading" :avatar="false" :paragraph="{rows: 5}" active >
          <div class="managerCard-phone"><UIButton customer-class="default">登录</UIButton>查看详细手机号</div>
          <a class="managerCard-qqLink" href=""><UIButton customer-class="mainButton" type="primary">QQ在线咨询</UIButton></a>
        </UISkeleton>
        <ul class="managerCard-advance">
          <li class="managerCard-advance-item" v-for="advance in pageAdvances" :key="advance.icon">
            <Icon :icon="advance.icon" />
            <div><b>{{ advance.title }}</b><p>{{ advance.des }}</p></div>
          </li>
        </ul>
      </div>
    </section>
    <section class="contentBottom">
      <div class="contentBottom-left">
        <ul class="contentBottom-left-tab">
          <li class="contentBottom-left-tab-item" v-for="(item, index) in ['交易资料', '过户资料', '常见问题']" :class="[index === currentDetailTab && 'active' ]" @click="scrollToContent(index)">{{ item }}</li>
        </ul>
        <div class="contentBottom-left-content">
          <UIButton customer-class="default">查看更多常见问题</UIButton>
        </div>
      </div>
      <div class="contentBottom-right">
        <h4 class="contentBottom-right-title">猜你喜欢</h4>
        <div class="contentBottom-right-patent"><PatentCard /></div>
        <div class="contentBottom-right-patent"><PatentCard /></div>
        <div class="contentBottom-right-patent"><PatentCard /></div>
        <div class="contentBottom-right-patent"><PatentCard /></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Icon from '/@components/Icon/index.vue';
import UIButton from '/@components/UI/UIButton.vue';
import UISkeleton from '/@components/UI/UISkeleton.vue';
import UIPopover from '/@components/UI/UIPopover.vue';
import UIInput from '/@components/UI/UIInput.vue';
import PatentCard from '/@components/PatentCard/index.vue'
import * as patentApi from '/@api/patent'
import { PATENT_TYPE, PATENT_STOCK_STATUS } from '/@/utils/dict';
import { copyToClipboard } from '/@/utils';

export default defineComponent({
  name: 'PatentDetail',
  components: {Icon, UIButton, PatentCard, UISkeleton, UIPopover, UIInput},
  setup() {
    const route = useRoute()
    const loading = ref(false)
    const currentDetailTab = ref(0)
    const pageAdvances = [
      {
      icon: 'pageAdvance1',
      title: '全程在线',
      des: '专属顾问全程一对一服务',
      },{
        icon: 'pageAdvance2',
        title: '一手资源',
        des: '真是海量精品资源',
      },{
        icon: 'pageAdvance3',
        title: '快捷交易',
        des: '一站式服务 快捷省心',
      }
    ]
    const advances = [
      {
      icon: 'shopCard',
      title: '实名认证',
      },{
        icon: 'shopOne',
        title: '一手认证',
      },{
        icon: 'shopAgent',
        title: '独家代理认证',
      },{
        icon: 'shopSell',
        title: '平台寄卖',
      }
    ]
    const patent = ref<Patent>({})
    const getPatentDetail = async () => {
      loading.value = true
      const { data } = await patentApi.getPatentDetail(route.params.number).finally(() => loading.value = false)
      patent.value = data
    }
    const scrollToContent = (index: number) => {
      currentDetailTab.value = index
    }
    const shareURL = window.location.href
    onMounted(() => {
      getPatentDetail()
    })
    return {
      PATENT_STOCK_STATUS,
      PATENT_TYPE,
      shareURL,
      patent,
      loading,
      pageAdvances,
      advances,
      currentDetailTab,
      scrollToContent,
      copyToClipboard,
    }
  },
})
</script>

<style lang="scss" scoped>
.contentWrapper {
  display: flex;
  align-items: center;
  > label {white-space: nowrap;}
  > input {width: 23em;}
  > * {
    margin-right: 1em;
    &:last-child {margin-right: 0}
  }
}
.patentDetail {
  .patentNavigation {
    color: #999990;
    display: flex;
    align-items: center;
    padding: 18px 0;
    svg {font-size: 10px;margin: 0 .7em;}
  }
  .contentTop {
    display: flex;
    margin-bottom: 10px;
    .mainContent {background-color: #fff;margin-right: 10px;flex: 1;}
    .patentCard {
      display: flex;
      padding: 30px 20px;
      &-left {
        &-imageWrapper {padding: 5px;border: 1px solid #DBDBDB;width: 262px; img {width: 100%;} }
        &-options {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          color: #999;
          > span {cursor: pointer;transition: all .3s; &:hover {color: #14A8BD;} }
          svg {font-size: 22px;margin-left: .2em;}
        }
      }
      &-right {
        flex: 1;
        margin-left: 25px;
        &-title {font-size: 20px;line-height: 1.4;min-height: 2.8em;display: block}
        &-price {
          background-color: #F3FAFF;
          margin: 18px 0;
          padding: 12px 10px;
          font-size: 18px;
          label {width: 5em;display: inline-block;font-size: 12px;color: #999;}
          > p {margin: 0;}
          .vipPrice {color: #FF5858;font-size: 30px;}
          .updateVip {background-image: linear-gradient(135deg, #FF8D25 0%, #FE942F 35%, #FFAC5C 48%, #FFDDB4 100%);border-radius: 4px;color: #fff;
            padding: 4px 10px;font-size: 14px;font-style: normal;margin-left: 1.6em;vertical-align: super;}
        }
        &-info {margin-bottom: 10px; > label {display: inline-block;width: 10em;color: #666;} }
        &-button {margin: 20px 0; button {height: 40px;width: 110px;} > * {margin-right: 1em;} }
        &-patentTips {color: #999;font-size: 12px;}
      }
    }
    .advance {
      display: flex;
      border-top: 1px solid #E8E8E8;
      padding: 19px 40px;
      > li {margin-right: 50px;}
      svg {color: #999;font-size: 30px;margin-right: .3em;vertical-align: middle}
    }
    .managerCard {
      text-align: center;
      background-color: #fff;
      padding-top: 40px;
      &-image {width: 140px;height: 140px;margin: 0 auto;border-radius: 50%;overflow: hidden;border: 1px solid #14A8BD; img {width: 100%;}}
      &-phone {margin: 16px 0 20px;button {width: 48px;height: 24px;padding: 0;font-size: 12px;margin-right: 10px;}}
      &-qqLink {button {width: 110px; height: 40px;}}
      &-advance {
        text-align: left;
        padding: 40px 58px 40px 20px;
        margin-top: 36px;
        border-top: 1px dashed #E8E8E8;
        &-item {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          &:last-child {margin-bottom: 0}
          svg {font-size: 50px;margin-right: 10px;}
          p {color: #999;font-size: 12px;margin: 2px 0 0 0}
        }
      }
    }
  }
  .contentBottom {
    display: flex;
    margin-bottom: 20px;
    &-left {
      flex: 1;
      background-color: #fff;
      margin-right: 10px;
      &-tab {
        display: flex;
        padding: 0 40px;
        border-bottom: 1px solid #E8E8E8;
        &-item {
          padding: 20px 0;
          margin-right: 4em;
          transition: all .3s;
          cursor: pointer;
          position: relative;
          &.active, &:hover {color: #14A8BD;}
          &.active::after {
            content: '';
            position: absolute;
            background-color: #14A8BD;
            height: 2px;
            width: 2.4em;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
          }
        }
      }
      &-content {
        text-align: center;
        img {width: 100%;}
        button {width: 180px;height: 50px;}
      }
    }
    &-right {
      background-color: #fff;
      width: 270px;
      padding: 20px 10px;
      text-align: center;
      &-title {
        font-weight: bold;
        margin-bottom: 1em;
        position: relative;
        display: inline-block;
        padding: 0 .4em;
        &::before, &::after {
          content: '';
          position: absolute;
          height: 1px;
          width: 4em;
          top: 50%;
          transform: translateY(-50%);
          background-color: #E8E8E8;
        }
        &::before {right: -100%;}
        &::after {left: -100%;}
      }
      &-patent {margin-bottom: 11px;}
    }
  }
}
</style>
