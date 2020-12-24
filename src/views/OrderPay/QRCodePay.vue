<template>
  <AppTitleBar title="收银台">
    <OrderSteps :current="1" />
  </AppTitleBar>
  <div class="pageWidthWithCenter QRCodePay">
    <UISkeleton :loading="pageLoading" :avatar="{size: 'large'}" :paragraph="{rows: 13}" active >
      <div class="orderInfo">
        <div class="orderInfo-left">
          <Icon class="orderInfo-successIcon" icon="success" />
          <section class="orderInfo-main">
            <p class="orderInfo-main-title">订单提交成功！只差付款了~<label>订单号：</label><em>{{ orderInfo.orderNo }}</em></p>
            <p class="orderInfo-main-tips"><em v-if="codeExpired">订单已关闭，请重新下单。</em><template v-else>请您在 <UICountdown class="orderCountDown" @finish="codeExpired=!codeExpired" :value="Date.now() + (orderInfo.timeRemainingSec ? orderInfo.timeRemainingSec * 1000 : 0)" format="m分s秒"/> 内完成支付，否则本次支付将自动取消。</template></p>
            <article class="orderInfo-main-info" v-show="orderInfoVisible">
              <p><label>收货信息：</label>{{ store.state.user.account }}</p>
              <p><label>商品名称：</label>{{ orderInfo.subject }}</p>
              <p><label>购买时间：</label>{{ orderInfo.orderTime }}</p>
            </article>
            <UIButton v-if="!codeExpired" class="orderInfo-main-button" customer-class="mainButton" :loading="checkOrderStatusLoading" type="primary" @click="checkOrderStatus(orderInfo.tradeNo)">我已完成支付</UIButton>
          </section>
        </div>
        <div class="orderInfo-options">
          <p class="orderInfo-options-price"><label>订单金额：</label><b>￥{{ orderInfo.totalAmount }}</b></p>
          <span class="orderInfo-options-button" @click="orderInfoVisible=!orderInfoVisible">订单详情 <Icon :icon="orderInfoVisible ? 'top_fill' : 'down_fill'" /></span>
        </div>
      </div>
      <div class="QRCodeBar">
        <div>
          <p class="QRCodeBar-title">{{ wechat ? '微信支付' : '扫码支付' }}</p>
          <div class="QRCodeBar-image" :class="[codeExpired && 'codeExpired']"><img :src="QRCodeURL" alt=""></div>
          <div v-if="wechat" class="QRCodeBar-wechatTips">
            <Icon icon="wechatPay" />
            <div><p>请使用微信扫一扫</p><p>扫描二维码支付</p></div>
          </div>
        </div>
        <div class="QRCodeBar-descriptionImage">
          <img class="QRCodeBar-descriptionImage-wechat" v-if="wechat" src="../../assets/pay/wechatPhone.png" alt="">
          <img class="QRCodeBar-descriptionImage-scan" v-else src="../../assets/pay/scan.png" alt="">
        </div>
      </div>
      <div v-if="!wechat" class="UMSTips">
        <p>支持以下付款方式</p>
        <Icon v-for="icon in ['ali', 'wechat', 'union', '1', 'BOC', 'BD', 'JD', 'SF', 'Y', 'SN', 'POS', 'QM']" :key="icon" :icon="`${icon}Pay`" />
      </div>
      <RouterLink class="returnOrder" to="/user/order"><Icon icon="left" />选择其他支付方式</RouterLink>
    </UISkeleton>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import OrderSteps from '/@components/OrderSteps/index.vue';
import AppTitleBar from '/@components/AppTitleBar/index.vue';
import Icon from '/@components/Icon/index.vue';
import UIButton from '/@components/UI/UIButton.vue';
import UICountdown from '/@components/UI/UICountdown.vue';
import UISkeleton from '/@components/UI/UISkeleton.vue';
import * as orderApi from '/@api/order'
import { useRoute, useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import QRCode from 'qrcode';
import { useStore } from '/@/store';
import {isWaitOrder} from '/@/utils'

export default defineComponent({
  name: 'QRCodePay',
  components: {AppTitleBar, OrderSteps, Icon, UIButton, UICountdown, UISkeleton},
  props: {
    wechat: Boolean,
  },
  setup () {
    const orderInfoVisible = ref(false)
    const QRCodeURL = ref('')
    const pageLoading = ref(false)
    const checkOrderStatusLoading = ref(false)
    const codeExpired = ref(false)
    const orderInfo = ref<OrderResult>({})
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const {type, orderNo, payRoute, tradeType} = route.query
    const generatorQrcode = (text: string) => {
      QRCode.toDataURL(text, { errorCorrectionLevel: 'H', margin: 1 }, (err, url) => {
        codeExpired.value = true;
        if (err) {
          console.log(err);
          message.error('生成二维码失败！');
          return;
        }
        codeExpired.value = false;
        QRCodeURL.value = url;
      });
    };
    const getOrderInfo = async () => {
      pageLoading.value = true
      const apiMap = {
        PATENT: orderApi.payOrderAgain,
        VIP: orderApi.payVipOrderAgain,
      }
      await apiMap[type]({ orderNo, payRoute, tradeType}).then(({data}) => {
        generatorQrcode(data.codeUrl)
        orderInfo.value = data
        // startPollGetPayResult(form)
      }).catch((error) => {
        message.error(error.msg);
        router.push(`/order/pay/result?status=0&type=${type}`);
      }).finally(() => pageLoading.value = false)
    }
    const checkOrderStatus = async (tradeNo: string) => {
      checkOrderStatusLoading.value = true
      if (!(await isWaitOrder(tradeNo).finally(() => checkOrderStatusLoading.value = false))) return;
      history.push(`/order/pay/result?orderNo=${orderInfo.orderNo}&tradeNo=${orderInfo.tradeNo}&type=${orderInfo.commodityType}&status=1`);
    }
    onMounted(() => {
      getOrderInfo()
    })
    return {
      store,
      pageLoading,
      checkOrderStatusLoading,
      checkOrderStatus,
      codeExpired,
      QRCodeURL,
      orderInfo,
      orderInfoVisible,
    }
  },
})
</script>

<style lang="scss">
.orderCountDown .ant-statistic-content {font-size: 14px;color: #FF5858;margin: 0 .3em;}
</style>
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
      &-tips {display: flex;align-items: center;margin-bottom: 18px;font-size: 12px; > em {color: #FF5858;font-style: normal;}}
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
    &-image {width: 210px;height: 210px;border: 1px solid #DEDEDE; &.codeExpired {filter: blur(10px)} img {width: 100%;}}
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
