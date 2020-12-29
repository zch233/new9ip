<template>
  <div class="order">
    <UITabs :animated="false" v-model:activeKey="activeKey">
<!--      <template #tabBarExtraContent><div style="padding: 0 20px;">-->
<!--        <UIInputSearch placeholder="搜索订单号/订单名称" />-->
<!--      </div></template>-->
      <OrderTabPane v-for="item in orderMap" :key="item.key" :status="ORDER_STATUS[item.key]">
        <template #tab>
          <b>{{ item.title }}</b>
        </template>
      </OrderTabPane>
    </UITabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UITabs from '/@components/UI/UITabs.vue';
import OrderTabPane from './OrderTabPane.vue';
import UIInputSearch from '/@components/UI/UIInputSearch.vue';
import { useRoute } from 'vue-router';
import { ORDER_STATUS } from '/@/utils/dict';

export default defineComponent({
  name: 'Order',
  components: {UITabs, OrderTabPane, UIInputSearch},
  setup() {
    const route = useRoute()
    const activeKey = ref(ORDER_STATUS[route.query.status])
    const orderMap = [
      {
        title: '全部订单',
        key: 'ALL',
      },
      {
        title: '待付款',
        key: ORDER_STATUS.CREATED,
      },
      {
        title: '已付款',
        key: ORDER_STATUS.PAYED,
      },
      {
        title: '已关闭',
        key: ORDER_STATUS.CLOSED,
      },
    ]
    return {
      ORDER_STATUS,
      activeKey,
      orderMap,
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
