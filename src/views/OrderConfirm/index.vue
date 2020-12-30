<template>
  <div id="orderConfirm" class="orderConfirm">
    <AppTitleBar title="确认订单">
      <OrderSteps />
    </AppTitleBar>
    <div class="pageWidthWithCenter orderConfirmWrapper">
      <section class="orderConfirm-left">
        <div class="orderConfirm-left-patent">
          <UICard title="商品信息">
            <UISkeleton active :paragraph="{ rows: 5 }" :loading="pageLoading">
              <div class="patentContent">
                <div class="patentContent-image"><img src="../../assets/patent/A.jpg" alt=""></div>
                <div class="patentContent-info">
                  <h2 class="patentContent-info-title">一种考虑车队离散特征的公交车和私家车干线绿波同步协调的控制方法装置</h2>
                  <p class="patentContent-info-col"><span><label>专利类型</label>{{ orderConfirmation.number }}</span><span><label>发明人</label>{{ orderConfirmation.inventorExplain }}</span></p>
                  <p class="patentContent-info-col"><span><label>专利号</label>{{ PATENT_TYPE.label[orderConfirmation.type] }}</span><span><label>标签</label>{{ orderConfirmation.tags }}</span></p>
                  <p class="patentContent-info-col"><span><label>法律状态</label>{{ orderConfirmation.legalStatus }}</span><span><label>价格</label>￥{{ orderConfirmation.price }}</span></p>
                  <p class="patentContent-info-col"><span><label>缴费截止</label>{{ orderConfirmation.paymentDeadline || '暂无' }}</span><span><label>数量</label>1</span></p>
                </div>
              </div>
            </UISkeleton>
          </UICard>
        </div>
        <div class="orderConfirm-left-remark">
          <UICard title="订单备注">
            <UISkeleton active :paragraph="{ rows: 3 }" :loading="pageLoading">
              <UIInputTextArea v-model:value="remark" html-type="textarea" placeholder="请输入订单备注（选填）" :rows="6" />
            </UISkeleton>
          </UICard>
        </div>
      </section>
      <section class="orderConfirm-right">
        <UICard title="订单金额">
          <UISkeleton active :paragraph="{ rows: 13 }" :loading="pageLoading">
            <p class="orderConfirm-right-priceItem"><label>原价</label><span>￥{{ orderConfirmation.price }}</span></p>
            <p class="orderConfirm-right-priceItem" v-for="item in orderConfirmation.discounts || []" :key="item.price"><label>VIP会员</label><span>-￥{{ item.price }}</span></p>
            <p class="orderConfirm-right-priceItem totalAmount"><label>实付款</label><b>￥{{ orderConfirmation.totalAmount }}</b></p>
            <ul class="orderConfirm-right-payRoutes">
              <li v-for="payRoute in PAY_ROUTES" :key="payRoute.icon" @click="currentPayRoute = payRoute" class="orderConfirm-right-payRoutes-item">
                <Icon class="orderConfirm-right-payRoutes-item-payIcon" :icon="payRoute.icon" />
                <div class="orderConfirm-right-payRoutes-item-info"><b>{{payRoute.label}}</b><p>{{payRoute.description}}</p></div>
                <div class="orderConfirm-right-payRoutes-item-radio" :class="[currentPayRoute.payRoute === payRoute.payRoute && 'active']"><Icon icon="tick" /></div>
              </li>
            </ul>
            <UIButton :loading="submitLoading" class="orderConfirm-right-payButton" @click="handleBuyClick" customer-class="dangerButton" type="primary" block>确认付款</UIButton>
          </UISkeleton>
        </UICard>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import AppTitleBar from '/@components/AppTitleBar/index.vue'
import OrderSteps from '/@components/OrderSteps/index.vue'
import UICard from '/@components/UI/UICard.vue';
import UIInputTextArea from '/@components/UI/UIInputTextArea.vue';
import UIButton from '/@components/UI/UIButton.vue';
import UISkeleton from '/@components/UI/UISkeleton.vue';
import Icon from '/@components/Icon/index.vue'
import { useRoute, useRouter } from 'vue-router';
import * as orderConfirmApi from '/@api/orderConfirm'
import {PATENT_TYPE, PAY_ROUTES} from '/@/utils/dict';
import { TYPE_PAY_ROUTES } from '/@/utils/dictTypes';
import { openNewWindow } from '/@/utils';
import { showPollGetPayRequestModal } from '/@components/PollGetPayRequestModal/index';

export default defineComponent({
  name: 'OrderConfirm',
  components: {
    AppTitleBar,
    OrderSteps,
    UIInputTextArea,
    UICard,
    Icon,
    UISkeleton,
    UIButton,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const pageLoading = ref(false)
    const submitLoading = ref(false)
    const remark = ref('')
    const currentPayRoute = ref<TYPE_PAY_ROUTES[number]>(PAY_ROUTES[0])
    const orderConfirmation = ref<OrderConfirmation>({})
    const getOrderConfirm = async () => {
      pageLoading.value = true
      const { data } = await orderConfirmApi.getOrderConfirm({ commodityId: route.query.commodityId, commodityType: 'PATENT' }).finally(() => pageLoading.value = false)
      orderConfirmation.value = data
    }
    const handleBuyClick = async () => {
      const { payRoute, tradeType } = currentPayRoute.value;
      submitLoading.value = true
      const { data } = await orderConfirmApi.orderPatent({
        commodityId: route.query.commodityId,
        commodityType: 'PATENT',
        payRoute,
        tradeType,
        remark: remark.value,
      }).finally(() => submitLoading.value = false)
      const { orderNo, tradeNo } = data;
      const payURL = `/order/pay/${payRoute === 'UMS_PAY' ? 'code' : payRoute === 'WXPAY' ? 'wechat' : 'form'}?orderNo=${orderNo}&tradeNo=${tradeNo}&type=PATENT&payRoute=${payRoute}&tradeType=${tradeType}`
      if (payRoute === 'UMS_PAY' || payRoute === 'WXPAY') {
        await router.push(payURL);
      } else {
        showPollGetPayRequestModal({ tradeNo, orderNo, type: 'PATENT' })
        openNewWindow(payURL);
      }
    }
    onMounted(() => {
      getOrderConfirm()
    })
    return {
      PATENT_TYPE,
      PAY_ROUTES,
      remark,
      pageLoading,
      submitLoading,
      currentPayRoute,
      handleBuyClick,
      orderConfirmation,
    }
  }
})
</script>

<style scoped lang="scss">
.orderConfirm {
  margin-bottom: 10px;
  .ant-card {height: 100%;}
  &-left {
    margin-right: 10px;
    flex: 1 1 0;
    display: inline-flex;
    flex-direction: column;
    &-patent {
      margin-bottom: 10px;
      .patentContent {
        display: flex;
        &-image {width: 200px;border: 1px solid #DBDBDB;padding: 4px; img {width: 100%;}}
        &-info {
          flex: 1;
          margin-left: 34px;
          &-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: .9em;
            line-height: 1.4;
            height: 2.8em;
          }
          &-col {
            margin-bottom: 9px;
            color: #333;
            display: flex;
            > span {width: 46%;}
            &:last-child {margin-bottom: 0;}
            label {color: #666;display: inline-block;width: 40%;}
          }
        }
      }
    }
    &-remark {
      flex: 1 1 0;
    }
  }
  &-right {
    user-select: none;
    width: 30%;
    &-priceItem {
      color: #333;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      align-items: flex-end;
      line-height: 1.6;
      &:last-child {margin-bottom: 20px;}
      &.totalAmount {margin-top: 30px; b {color: #FF5858;font-size: 30px;line-height: 1;}}
    }
    &-payRoutes {
      border-top: 1px dashed #E8E8E8;
      padding: 20px 0;
      &-item {
        padding: 10px 0;
        display: flex;
        cursor: pointer;
        &-payIcon {font-size: 42px}
        &-info {
          flex: 1;
          color: #999999;
          font-size: 12px;
          padding-left: 20px;
          p {margin-bottom: 0;}
          b {font-size: 14px;color: #333;}
        }
        &-radio {
          color: #fff;
          border: 1px solid #DEDEDE;
          border-radius: 50%;
          user-select: none;
          font-size: 14px;
          width: 1.8em;
          height: 1.8em;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .2s;
          &.active {
            background-color: #FF5858;
            border-color: #FF5858;
          }
        }
      }
    }
    &-payButton {
      height: 50px;
      font-size: 18px;
      margin-top: 10px;
    }
  }
}
.orderConfirmWrapper {
  display: flex;
  padding: 20px 0;
}
</style>
