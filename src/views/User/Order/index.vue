<template>
  <div class="order">
    <UITabs :animated="false" v-model:activeKey="activeKey" @change="changeTab">
<!--      <template #tabBarExtraContent><div style="padding: 0 20px;">-->
<!--        <UIInputSearch placeholder="搜索订单号/订单名称" />-->
<!--      </div></template>-->
      <OrderTabPane v-for="item in orderMap" :key="item.key" :status="item.key">
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
import { useRoute, useRouter } from 'vue-router';
import { ORDER_STATUS } from '/@/utils/dict';

const orderMap = [
  {
    title: '全部订单',
    key: 999,
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

export default defineComponent({
  name: 'Order',
  components: {UITabs, OrderTabPane, UIInputSearch},
  setup() {
    const route = useRoute()
    const router = useRouter()
    const activeKey = ref(Number(route.query.status || 999))
    const changeTab = (tab: number) => {
      router.push({
        path: '/user/order',
        query: { status: tab === 999 ? undefined : tab}
      })
    }
    return {
      changeTab,
      ORDER_STATUS,
      activeKey,
      orderMap,
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
