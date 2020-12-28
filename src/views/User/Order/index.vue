<template>
  <div class="order">
    <UITabs :animated="false">
      <template #tabBarExtraContent><div style="padding: 0 20px;">
        <UIInputSearch placeholder="搜索订单号/订单名称" />
      </div></template>
      <OrderTabPane v-for="item in orderMap"  :key="item.key" :status="item.key">
        <template #tab>
          <b>{{ item.title }}</b>
        </template>
      </OrderTabPane>
    </UITabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UITabs from '/@components/UI/UITabs.vue';
import OrderTabPane from './OrderTabPane.vue';
import UIInputSearch from '/@components/UI/UIInputSearch.vue';

export default defineComponent({
  name: 'Order',
  components: {UITabs, OrderTabPane, UIInputSearch},
  setup() {
    const orderMap = [
      {
        title: '全部订单',
        key: 'ALL',
      },
      {
        title: '待付款',
        key: 'CREATED',
      },
      {
        title: '已付款',
        key: 'PAYED',
      },
      {
        title: '已关闭',
        key: 'CLOSED',
      },
    ]
    return {
      orderMap,
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
