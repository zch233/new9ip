<template>
  <div class="result">
    <Icon :class="routeQuery.status === '0' ? 'error' : 'success'" :icon="routeQuery.status === '0' ? 'error' : 'success'" />
    <h2>订单支付{{ routeQuery.status === '0' ? '失败' : '成功' }}！</h2>
    <p v-if="routeQuery.orderNo"><label>订单号：</label>{{ routeQuery.orderNo }}</p>
    <p v-if="routeQuery.tradeNo"><label>交易流水号：</label>{{ routeQuery.tradeNo }}</p>
    <div>
      <template v-if="routeQuery.type === 'VIP'">
        <RouterLink to="/user/index"><UIButton customer-class="mainButton" type="primary">会员主页</UIButton></RouterLink>
        <RouterLink to="/"><UIButton customer-class="default">返回首页</UIButton></RouterLink>
      </template>
      <template v-else>
        <RouterLink to="/user/order"><UIButton customer-class="mainButton" type="primary">我的订单</UIButton></RouterLink>
        <RouterLink to="/patent"><UIButton customer-class="default">继续购买</UIButton></RouterLink>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from '/@components/Icon/index.vue'
import { useRoute } from 'vue-router';
import UIButton from '/@components/UI/UIButton.vue';

export default defineComponent({
  name: 'Result',
  components: { Icon, UIButton },
  setup() {
    const route = useRoute()
    return {
      routeQuery: route.query,
    }
  },
})
</script>

<style scoped lang="scss">
.result {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(((100vh - 40px) - 300px) - 40px);
  svg {font-size: 50px;margin-bottom: 10px; &.success {color: #52C419} &.error {color: #FF5858}}
  h2 {font-size: 18px;font-weight: bold;}
  p {text-align: left;font-size: 12px;color: #999999;}
  label {display: inline-block;width: 7em;text-align: right;}
  .mainButton {margin-right: 1em;}
}
</style>
