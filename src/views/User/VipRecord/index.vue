<template>
  <div class="vipRecord">
    <RouterLink to="/user/index"><Icon icon="left" />返回</RouterLink>
    <div class="emptyWrapper" v-if="vipRecords.length === 0"><UIEmpty v-if="!loading" image="vip" description="暂无开通记录" /></div>
    <template v-else>
      <div class="vipRecord-title"><em>付款时间</em><em>预购订单号</em><em>类型</em><em>金额</em><em>状态</em></div>
      <ul class="vipRecord-list">
        <li class="vipRecord-list-item" v-for="record in vipRecords" :key="record.orderNo">
          <span>{{ record.paymentTime }}</span>
          <span>{{ record.orderNo }}</span>
          <b>{{ record.days / 365 }}年会员</b>
          <b>{{ record.price }}</b>
          <span>已付款</span>
        </li>
      </ul>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Icon from '../../../components/Icon/index.vue'
import UIEmpty from '../../../components/UI/UIEmpty.vue';
import * as vipApi from '../../../api/vip'

type VipRecord = {
  days: number;
  expireDate: string;
  hasPay: boolean;
  level: number;
  orderNo: string;
  paymentTime: string;
  price: number;
}

export default defineComponent({
  name: 'VipRecord',
  components: { Icon, UIEmpty },
  setup() {
    const loading = ref(false)
    const vipRecords = ref<VipRecord[]>([])
    const getVipRecords = async () => {
      loading.value = true
      const {data} = await vipApi.getVipRecords({size: 100}).finally(() => loading.value = false)
      vipRecords.value = data.list || []
    }
    onMounted(() => {
      getVipRecords()
    })
    return {
      loading,
      vipRecords,
    }
  }
})
</script>

<style lang="scss" scoped>
.vipRecord {
  padding: 20px;
  font-size: 12px;
  > a { svg {margin-right: .5em;}}
  &-title {
    margin-top: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #E8E8E8;
    padding: 1em 0;
    em {flex: 1;font-style: normal;}
  }
  &-list {
    &-item {
      margin-top: 10px;
      display: flex;
      align-items: center;
      text-align: center;
      padding: 1.4em;
      border: 1px solid #DEDEDE;
      > * {flex: 1;font-style: normal;}
      b {font-size: 14px;}
    }
  }
  .emptyWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
