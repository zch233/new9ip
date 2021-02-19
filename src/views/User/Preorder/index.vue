<template>
  <div class="order">
    <UITabs :animated="false" :activeKey="activeKey" @change="changeTab">
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
import UITabs from '../../../components/UI/UITabs.vue';
import OrderTabPane from './OrderTabPane.vue';
import UIInputSearch from '../../../components/UI/UIInputSearch.vue';
import { useRoute, useRouter } from 'vue-router';
import { PREORDER_STATUS } from '/@utils/dict';

const orderMap = [
  {
    title: '全部',
    key: 999,
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

export default defineComponent({
  name: 'Order',
  components: {UITabs, OrderTabPane, UIInputSearch},
  setup() {
    const route = useRoute()
    const router = useRouter()
    const activeKey = ref(route.query.status)
    const changeTab = (tab) => {
      router.push({
        path: '/user/preorder',
        query: { status: tab === 999 ? undefined : tab}
      })
    }
    return {
      PREORDER_STATUS,
      activeKey,
      orderMap,
      changeTab,
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
