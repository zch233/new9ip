<template>
  <AppTitleBar title="收银台">
    <OrderSteps :current="1" />
  </AppTitleBar>
  <div class="pageWidthWithCenter QRCodePay">
    <div class="orderInfo">
      <div class="orderInfo-left">
        <Icon class="orderInfo-successIcon" icon="success" />
        <section class="orderInfo-main">
          <p class="orderInfo-main-title">订单提交成功！只差付款了~<label>订单号：</label><em>171514154145154</em></p>
          <p class="orderInfo-main-tips"><span>请您在 29 内完成支付，否则本次支付将自动取消。</span><em>订单已关闭，请重新下单</em></p>
          <article class="orderInfo-main-info" v-show="orderInfoVisible">
            <p><label>收货信息：</label>186****9865</p>
            <p><label>商品名称：</label>一种考略赛风赛风赛风的东西</p>
            <p><label>购买时间：</label>2020-12-09</p>
          </article>
          <UIButton class="orderInfo-main-button" customer-class="mainButton" type="primary">我已完成支付</UIButton>
        </section>
      </div>
      <div class="orderInfo-options">
        <p class="orderInfo-options-price"><label>订单金额：</label><b>￥15000</b></p>
        <span class="orderInfo-options-button" @click="orderInfoVisible=!orderInfoVisible">订单详情 <Icon :icon="orderInfoVisible ? 'top_fill' : 'down_fill'" /></span>
      </div>
    </div>
    <div class="QRCodeBar">
      <div>
        <p class="QRCodeBar-title">{{ wechat ? '微信支付' : '扫码支付' }}</p>
        <div class="QRCodeBar-image"><img :src="QRCodeURL" alt=""></div>
        <div class="QRCodeBar-wechatTips">
          <Icon icon="wechatPay" />
          <div><p>请使用微信扫一扫</p><p>扫描二维码支付</p></div>
        </div>
      </div>
      <div class="QRCodeBar-descriptionImage">
        <img class="QRCodeBar-descriptionImage-wechat" v-if="wechat" src="../../assets/pay/wechatPhone.png" alt="">
        <img class="QRCodeBar-descriptionImage-scan" v-else src="../../assets/pay/scan.png" alt="">
      </div>
    </div>
    <div class="UMSTips">
      <p>支持以下付款方式</p>
      <Icon v-for="icon in ['ali', 'wechat', 'union', '1', 'BOC', 'BD', 'JD', 'SF', 'Y', 'SN', 'POS', 'QM']" :key="icon" :icon="`${icon}Pay`" />
    </div>
    <RouterLink class="returnOrder" to="/user/order"><Icon icon="left" />选择其他支付方式</RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import OrderSteps from '/@components/OrderSteps/index.vue';
import AppTitleBar from '/@components/AppTitleBar/index.vue';
import Icon from '/@components/Icon/index.vue';
import UIButton from '/@components/UI/UIButton.vue';

export default defineComponent({
  name: 'QRCodePay',
  components: {AppTitleBar, OrderSteps, Icon, UIButton},
  props: {
    wechat: Boolean,
  },
  setup () {
    const orderInfoVisible = ref(false)
    const QRCodeURL = ref('')
    return {
      QRCodeURL,
      orderInfoVisible,
    }
  },
})
</script>

<style scoped lang="scss">
.QRCodePay {
  background-color: #fff;
  padding: 30px 20px;
  margin-bottom: 10px;
  .orderInfo {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    &-left {display: flex;align-items: flex-start;}
    &-successIcon {color: #52C419;font-size: 50px;}
    &-main {
      margin-left: 1em;
      &-title {color: #52C419;font-size: 16px;margin-bottom: 6px; label {font-size: 12px;color: #333;padding-left: 1em;} em {color: #FF5858;font-size: 12px;font-style: normal;}}
      &-tips {margin-bottom: 18px;font-size: 12px; > em {color: #FF5858;font-style: normal;}}
      &-info {margin-bottom: 14px; p {margin-bottom: 8px;font-size: 12px; label {color: #999;}}}
    }
    &-options {
      user-select: none;
      text-align: right;
      &-price {b {color: #FF5858;font-size: 26px;}}
      &-button {display: flex;justify-content: flex-end;align-items: center;cursor: pointer; svg {font-size: 8px;margin-left: .8em;}}
    }
  }
  .QRCodeBar {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    &-title {font-size: 16px;font-weight: bold;margin-bottom: 26px;}
    &-image {width: 210px;height: 210px;border: 1px solid #DEDEDE; img {width: 100%;}}
    &-wechatTips {margin-top: 16px;text-align: left;display: flex;align-items: center;justify-content: center; svg {font-size: 40px;margin-right: 10px;} p {margin: 0;}}
    &-descriptionImage {margin-left: 30px; &-wechat {width: 254px;} &-scan {width: 280px;}}
  }
  .UMSTips {
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
    svg {color: #FF5858;font-size: 37px;margin: 0 .16em;}
  }
  .returnOrder {display: flex;align-items: center;font-size: 12px; svg {color: #999;font-size: 9px;margin-right: .7em;}}
}
</style>
