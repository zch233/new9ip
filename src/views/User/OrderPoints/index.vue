<template>
  <div class="orderPoints">
    <RouterLink to="/user/index"><Icon icon="left" />返回</RouterLink>
    <UISpin :spinning="loading">
      <div class="orderPoints-main">
        <div class="orderPoints-main-left">
          <div class="iconPointWrapper"><Icon class="iconPoint" icon="point" /></div>
          <p class="orderPoints-main-left-title">第九区积分</p>
          <p class="orderPoints-main-left-subTitle">10元/积分</p>
          <p class="orderPoints-main-left-content">·积分可以用来兑换第九区平台（www.9ip.com）预留服务；</p>
          <p class="orderPoints-main-left-content">·积分仅能用于兑换第九区平台（www.9ip.com）直接运营的产品和服务，不能兑换现金，不能进行转账交易，不能兑换第九区平台体系外的产品和服务。</p>
        </div>
        <div class="orderPoints-main-right">
          <p class="orderPoints-main-right-title">积分充值</p>
          <div class="orderPoints-main-right-content">
              <UIForm>
                <UIFormItem label="会员账号">{{ $store.state.user.account }}</UIFormItem>
                <UIFormItem label="购买项目" class="orderFormItem">
                  <div class="orderList">
                    <div class="orderItem" :class="orderInfo.currentPointsPack.id === item.id && 'active'" v-for="item in pointsPacks" :key="item.id" @click="orderInfo.currentPointsPack=item">
                      <Icon class="iconPoint" icon="point" />
                      <label><em>{{ item.credit }}</em>{{ item.unit }}</label>
                      <span v-if="item.presentCredit > 0">送{{ item.presentCredit }}积分</span>
                    </div>
                  </div>
                </UIFormItem>
                <UIFormItem label="支付方式" name="orderInfo">
                  <UIRadioGroup v-model:value="orderInfo.payRoute">
                    <UIRadio v-for="payRoute in PAY_ROUTES" :key="payRoute.icon" :value="payRoute.payRoute"><Icon class="payIcon" :icon="payRoute.icon" />{{ payRoute.label }}</UIRadio>
                  </UIRadioGroup>
                </UIFormItem>
              </UIForm>
              <div class="orderPoints-main-right-content-options">
                <label class="orderPrice">金额：<span>￥<em>{{ orderInfo.currentPointsPack.price || '加载中' }}</em></span></label>
                <UIButton class="orderButton" customer-class="dangerButton" type="primary" @click="orderPoints">支付</UIButton>
              </div>
          </div>
        </div>
      </div>
    </UISpin>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import UIForm from '../../../components/UI/UIForm.vue';
import UIFormItem from '../../../components/UI/UIFormItem.vue';
import UIRadioGroup from '../../../components/UI/UIRadioGroup.vue';
import UIRadio from '../../../components/UI/UIRadio.vue';
import Icon from '../../../components/Icon/index.vue';
import UISpin from '../../../components/UI/UISpin.vue';
import UIButton from '../../../components/UI/UIButton.vue';
import { PAY_ROUTES } from '/@utils/dict';
import { TYPE_PAY_ROUTES } from '/@utils/dictTypes';
import * as orderPointsApi from '../../../api/orderPoins'
import { AxiosResponse } from 'axios';
import { openNewWindow } from '/@/utils';

type PointsPacks = {
  credit: number;
  id: number;
  presentCredit: number;
  price: number;
  unit: string;
}

export default defineComponent({
  name: 'VipRecord',
  components: { UIButton, Icon, UIForm, UIFormItem, UIRadioGroup, UIRadio, UISpin },
  setup() {
    const loading = ref(false)
    const pointsPacks = ref<PointsPacks[]>([])
    const orderInfo = reactive({
      payRoute: PAY_ROUTES[0].payRoute,
      currentPointsPack: {},
    })
    const getPointsPacks = async () => {
      loading.value = true
      const {data} = await orderPointsApi.getPointsPacks().finally(() => loading.value = false)
      pointsPacks.value = data || []
      orderInfo.currentPointsPack = pointsPacks.value[0]
    }
    const orderPoints = async () => {
      loading.value = true;
      const {data}: {data:VipPurchase[]} = await vipApi.getVipPurchase().finally(() => loading.value = false);
      loading.value = true
      const currentPay = PAY_ROUTES.find((item) => item.payRoute === vipInfo.payRoute);
      const { payRoute, tradeType } = currentPay as TYPE_PAY_ROUTES[number];
      const {data: orderData}: AxiosResponse<OrderResult> = await vipApi.orderVip({vipLevelId: data[0].id, payRoute, tradeType}).finally(() => loading.value = false)
      const { orderNo, tradeNo } = orderData;
      const payURL = `/order/pay/${payRoute === 'UMS_PAY' ? 'code' : payRoute === 'WXPAY' ? 'wechat' : 'form'}?orderNo=${orderNo}&tradeNo=${tradeNo}&type=VIP&payRoute=${payRoute}&tradeType=${tradeType}`
      if (payRoute === 'UMS_PAY' || payRoute === 'WXPAY') {
        await router.push(payURL);
      } else {
        openNewWindow(payURL);
      }
    }
    onMounted(() => {
      getPointsPacks()
    })
    return {
      loading,
      pointsPacks,
      orderInfo,
      PAY_ROUTES,
      orderPoints,
    }
  }
})
</script>

<style lang="scss">
.orderFormItem {
  display: flex;
  .ant-col.ant-form-item-control-wrapper {flex: 1;}
}
</style>

<style lang="scss" scoped>
.orderPoints {
  padding: 20px;
  font-size: 12px;
  > a { svg {margin-right: .5em;}}
  &-main {
    display: flex;
    border: 1px solid #DEDEDE;
    margin-top: 22px;
    &-left {
      width: 24%;
      text-align: center;
      padding: 50px 15px 80px;
      color: #666;
      border-right: 1px solid #DEDEDE;
      .iconPointWrapper {display: inline-flex;border-radius: 50%;overflow: hidden;}
      .iconPoint {background-color: #FFFAEB;color: #C5AF74;font-size: 120px;padding: 41px;}
      > p {margin-top: 10px;margin-bottom: 0;}
      & &-title {margin-bottom: 20px;}
      &-content {text-align: left;}
    }
    &-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      &-title {padding: 11px 30px;background-color: #FFFAEB;color: #C5AF74;margin: 0;}
      &-content {
        flex: 1;
        padding: 30px;
        display: flex;
        flex-direction: column;
        .orderList {
          display: inline-flex;
          flex-wrap: wrap;
        }
        .orderItem {
          background-color: #fff;
          border: 1px solid #DEDEDE;
          border-radius: 4px;
          padding: 10px;
          line-height: 1;
          width: 170px;
          color: #C5AF74;
          font-size: 12px;
          cursor: pointer;
          transition: all .3s;
          align-items: flex-end;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          &:nth-child(-n+3) {margin-bottom: 20px;}
          &:not(:nth-child(3n)) {margin-right: 20px;}
          .iconPoint {font-size: 16px;margin-right: .3em;margin-bottom: 0.18em;}
          > label {font-size: 12px;margin-right: .6em;em {font-size: 24px;font-style: normal;}}
          &:hover, &.active {
            background-color: #FFFAEB;
            border-color: #C5AF74;
          }
        }
        &-options {
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          margin-top: auto;
          .orderPrice {margin-right: 30px;line-height: 1;color: #999;span {color: #14A8BD;font-size: 20px;em {font-size: 30px;font-style: normal;}}}
          .orderButton {padding: 0 2.6em;}
        }
      }
    }
  }
  .payIcon {
    font-size: 24px;
    margin-right: .3em;
    vertical-align: -.3em;
  }
}
</style>
