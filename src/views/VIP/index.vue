<template>
  <div id="vip" class="first">
    <img src="../../assets/vip/pic_vip.jpg" alt="">
    <UIButton @click="visible=true" class="vipButton" customer-class="warningButton" type="primary">立即开通</UIButton>
  </div>
  <div class="second">
    <img src="../../assets/vip/pic_vip1.jpg" alt="">
  </div>
  <div class="third">
    <img src="../../assets/vip/pic_vip2.jpg" alt="">
  </div>
  <UIModal :width="650" v-model:visible="visible" title="开通/续费会员" :maskClosable="false" :confirmLoading="loading" :onOk="orderVip">
    <UISpin :spinning="loading">
      <UIForm>
        <UIFormItem label="会员账号">{{ $store.state.user.account }}</UIFormItem>
        <UIFormItem label="购买项目">VIP会员</UIFormItem>
        <UIFormItem label="购买时长">1年</UIFormItem>
        <UIFormItem label="购买数量">1</UIFormItem>
        <UIFormItem label="支付方式" name="vipInfo">
          <UIRadioGroup v-model:value="vipInfo.payRoute">
            <UIRadio v-for="payRoute in PAY_ROUTES" :key="payRoute.icon" :value="payRoute.payRoute"><Icon class="payIcon" :icon="payRoute.icon" />{{ payRoute.label }}</UIRadio>
          </UIRadioGroup>
        </UIFormItem>
      </UIForm>
    </UISpin>
  </UIModal>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import UIButton from '/@components/UI/UIButton.vue';
import UIModal from '/@components/UI/UIModal.vue';
import UIForm from '/@components/UI/UIForm.vue';
import UIFormItem from '/@components/UI/UIFormItem.vue';
import UIRadioGroup from '/@components/UI/UIRadioGroup.vue';
import UIRadio from '/@components/UI/UIRadio.vue';
import Icon from '/@components/Icon/index.vue';
import UISpin from '/@components/UI/UISpin.vue';
import { PAY_ROUTES } from '/@/utils/dict';
import * as vipApi from '/@api/vip'
import { TYPE_PAY_ROUTES } from '/@/utils/dictTypes';
import { showPollGetPayRequestModal } from '/@components/PollGetPayRequestModal/index';
import { openNewWindow } from '/@/utils';
import { useRouter } from 'vue-router';

type VipPurchase = {
  days: number;
  id: number;
  level: number;
  name: string;
  price: number;
};

export default defineComponent({
  name: 'VIP',
  components: {UIButton, UIModal, UIForm, UIFormItem, UIRadioGroup, UIRadio, Icon, UISpin},
  setup() {
    const visible = ref(false)
    const loading = ref(false)
    const router = useRouter()
    const vipInfo = reactive({
      payRoute: PAY_ROUTES[0].payRoute,
    })
    const orderVip = async () => {
      loading.value = true
      const {data}: {data:VipPurchase[]} = await vipApi.getVipPurchase().finally(() => loading.value = false)
      loading.value = true
      const currentPay = PAY_ROUTES.find((item) => item.payRoute === vipInfo.payRoute);
      const { payRoute, tradeType } = currentPay as TYPE_PAY_ROUTES[number];
      const {data: orderData} = await vipApi.orderVip({vipLevelId: data[0].id, payRoute, tradeType}).finally(() => loading.value = false)
      const { orderNo, tradeNo } = orderData;
      const payURL = `/order/pay/${payRoute === 'UMS_PAY' ? 'code' : payRoute === 'WXPAY' ? 'wechat' : 'form'}?orderNo=${orderNo}&tradeNo=${tradeNo}&type=VIP&payRoute=${payRoute}&tradeType=${tradeType}`
      if (payRoute === 'UMS_PAY' || payRoute === 'WXPAY') {
        await router.push(payURL);
      } else {
        showPollGetPayRequestModal({ tradeNo, orderNo, type: 'VIP' })
        openNewWindow(payURL);
      }
    }
    return {
      loading,
      vipInfo,
      PAY_ROUTES,
      visible,
      orderVip,
    }
  }
})
</script>

<style lang="scss" scoped>
.first, .second, .third {
  img {width: 100%;}
}
.first {
  position: relative;
  .vipButton {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    width: 230px;
    height: 70px;
  }
}
.payIcon {
  font-size: 24px;
  margin-right: .3em;
  vertical-align: -.3em;
}
</style>
