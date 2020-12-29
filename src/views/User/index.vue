<template>
  <div class="user">
    <section class="user-head">
      <div class="user-head-left">
        <div class="user-head-left-headImage"><img v-if="user.avatar" src="../../assets/patent/A.jpg" alt=""><Icon v-else icon="defaultHeadImage" /></div>
        <div class="user-head-left-info">
          <p class="user-head-left-info-account">1861861615165</p>
          <div class="user-head-left-info-vip" v-if="user.hasVip">
            <VIPBrand />
            <p>到期时间：2022-12-09</p>
          </div>
          <span v-else>普通会员</span>
        </div>
      </div>
      <div class="user-head-right">
        <RouterLink to="/vip"><button class="darkButton">立即{{user.hasVip ? '续费' : '开通'}}<Icon icon="right_fill" /></button></RouterLink>
        <RouterLink to="/user/vipRecord">开通记录</RouterLink>
      </div>
    </section>
    <section class="user-orders">
      <p class="cardTitle"><em>我的订单</em><RouterLink to="/user/order">查看全部 <Icon icon="right" /></RouterLink></p>
      <div class="orderViews">
        <RouterLink to="/user/order?status=0">
          <Icon icon="waitPay" />
          <p>待付款</p>
        </RouterLink>
        <RouterLink to="/user/order?status=1">
          <Icon icon="hadPay" />
          <p>已付款</p>
        </RouterLink>
        <RouterLink to="/user/order?status=3">
          <Icon icon="finishPay" />
          <p>已完成</p>
        </RouterLink>
      </div>
    </section>
    <section class="user-recommend">
      <p class="cardTitle"><em>猜你喜欢</em><RouterLink to="/user/order">查看全部 <Icon icon="right" /></RouterLink></p>
      <div class="recommendPatents">
        <div class="recommendPatents-item" v-for="patent in recommendPatents" :key="patent.id"><PatentCard :patent="patent" /></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import VIPBrand from '/@components/VIPBrand/index.vue'
import PatentCard from '/@components/PatentCard/index.vue'
import Icon from '/@components/Icon/index.vue'
import UIButton from '/@components/UI/UIButton.vue';
import { useStore } from '/@/store';
import * as patentApi from '/@api/patent';

export default defineComponent({
  name: 'User',
  components: {VIPBrand, UIButton, Icon, PatentCard},
  setup() {
    const store = useStore()
    const recommendPatents = ref<Patent[]>([])
    const getRecommendPatents = async () => {
      const {data} = await patentApi.getRecommendPatents({size: 8})
      recommendPatents.value = data.list
    }
    onMounted(() => {
      getRecommendPatents()
    })
    return {
      user: store.state.user,
      recommendPatents,
      store,
    }
  }
})
</script>

<style lang="scss" scoped>
.cardTitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  em {
    font-style: normal;font-size: 16px;text-indent: .7em;position: relative;
    line-height: 1;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      background-color: #14A8BD;
    }
  }
  a {margin-right: 13px;display: flex;align-items: center;justify-content: center;color: #999999; svg {font-size: 10px;margin-left: .5em;}}
}
.user {
  padding: 20px;
  &-head {
    background-color: #465069;
    border-radius: 4px;
    padding: 3% 5% 0;
    display: flex;
    justify-content: space-between;
    &-left {
      display: flex;
      padding-top: 1%;
      &-headImage {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 1.4em;
        img {width: 100%;}
        svg {font-size: 80px}
      }
      &-info {
        color: #A1AAC1;
        font-size: 12px;
        margin-top: 4px;
        &-account {color: #FFFFFF;font-size: 20px;margin-bottom: 2px;}
        &-vip {color: #fff;.VIPBrandWrapper {font-size: 40px;margin-bottom: 6px}}
      }
    }
    &-right {
      width: 340px;
      height: 130px;
      background-image: url("../../assets/user/vipCardBg.png");
      background-size: cover;
      background-repeat: no-repeat;
      text-align: right;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      color: #AF7231;
      font-size: 12px;
      .darkButton {
        font-size: 14px;
        color: #FFEAD2;
        padding: .4em 1.5em;
        background-color: #465069;
        border: none;
        border-radius: 2em;
        display: flex;
        align-items: center;
        cursor: pointer;
        svg {font-size: 8px;margin-left: 1em;}
      }
    }
  }
  &-orders, &-recommend {
    padding: 20px 7px 0 20px;
    border: 1px solid #DEDEDE;
    border-radius: 4px;
    margin-top: 20px;
  }
  &-orders {
    .orderViews {
      display: flex;
      align-items: center;
      padding: 1em 0;
      svg {color: #465069;font-size: 40px}
      p {margin-bottom: 0;margin-top: .7em;}
      > a {flex: 1;text-align: center;padding: 2.6em;margin-bottom: 20px;}
    }
  }
  &-recommend {
    .recommendPatents {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      &-item {width: 25%;padding-right: 13px;padding-bottom: 20px}
    }
  }
}
</style>
