<template>
  <div class="order">
    <UITabs :animated="false" v-model:activeKey="activeKey">
      <OrderTabPane v-for="item in orderMap" :key="item.key" :status="PREORDER_STATUS[item.key]">
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
import { PREORDER_STATUS } from '/@/utils/dict';

export default defineComponent({
  name: 'Order',
  components: {UITabs, OrderTabPane, UIInputSearch},
  setup() {
    const route = useRoute()
    const activeKey = ref(PREORDER_STATUS[route.query.status])
    const orderMap = [
      {
        title: '全部',
        key: 'ALL',
      },
      {
        title: '预留中',
        key: PREORDER_STATUS.CREATED,
      },
      {
        title: '已下单',
        key: PREORDER_STATUS.ORDER,
      },
      {
        title: '已付款',
        key: PREORDER_STATUS.PAYED,
      },
      {
        title: '已取消',
        key: PREORDER_STATUS.CANCEL,
      },
    ]
    return {
      PREORDER_STATUS,
      activeKey,
      orderMap,
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
