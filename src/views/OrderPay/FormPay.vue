<template>
  <OrderSteps :current="1" />
  <Loading />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Loading from '/@components/Loading/index.vue'
import OrderSteps from '/@components/OrderSteps/index.vue'
import * as orderApi from '/@api/order'

export default defineComponent({
  name: 'FormPay',
  components: {Loading, OrderSteps},
  setup() {
    const route = useRoute()
    const getOrder = async () => {
      (route.query.type === 'PATENT' ? orderApi.payOrderAgainV1 : orderApi.payVipOrderAgainV1)({
        orderNo: route.query.orderNo,
        payRoute: route.query.payRoute,
        tradeType: route.query.tradeType,
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