<template>
  <AppTitleBar title="付款到平台">
    <OrderSteps :current="1" />
  </AppTitleBar>
  <Loading />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Loading from '../../components/Loading/index.vue'
import OrderSteps from '../../components/OrderSteps/index.vue'
import AppTitleBar from '../../components/AppTitleBar/index.vue'
import * as orderApi from '../../api/order'
import { getSingleQuery } from '/@/utils';

export default defineComponent({
  name: 'FormPay',
  components: {Loading, OrderSteps, AppTitleBar},
  setup() {
    const route = useRoute()
    const getOrder = async () => {
      (route.query.type === 'PATENT' ? orderApi.payOrderAgain : orderApi.payVipOrderAgain)({
        orderNo: getSingleQuery(route.query.orderNo!)!,
        payRoute: getSingleQuery(route.query.payRoute!)!,
        tradeType: getSingleQuery(route.query.tradeType!)!,
      }).then(({ data }) => document.write(data.codeUrl));
    }
    onMounted(() => {
      getOrder()
    })
  },
})
</script>

<style scoped lang="scss">

</style>