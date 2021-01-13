<template>
  <UIModal
    title="我要付款"
    :visible="visible"
    @update:visible="$emit('update:visible', $event)"
    @afterClose="clearPollGetPayResult"
    :maskClosable="false"
    :onOk="handleOk"
    cancelText="选择其他方式"
    okText="已完成支付"
    :confirmLoading="loading"
    :getContainer="getContainerFn"
    :okButtonProps="{ type: 'danger' }"
  >
    <div class="wrapper">
      <Icon class="icon" icon="warning" />
      <div class="description">
        <h4 class="description-title">请您在新打开的页面上完成付款！</h4>
        <p>完成付款前请不要关闭此窗口。</p>
        <p>完成付款后请根据实际情况点击下面的按钮。</p>
      </div>
    </div>
  </UIModal>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, toRefs } from 'vue';
import UIModal from '/@components/UI/UIModal.vue';
import Icon from '/@components/Icon/index.vue'
import { isWaitOrder, usePollGetPayResult } from '/@/utils';
import { router } from '/@/router';

export default defineComponent({
  name: 'PollGetPayRequestModal',
  components: {UIModal, Icon},
  props: {
    orderNo: String,
    tradeNo: String,
    type: String,
    visible: Boolean,
    getContainer: String,
  },
  emits: ['update:visible'],
  setup (props, context) {
    const loading = ref(false)
    const { tradeNo, orderNo, type, visible } = toRefs(props)
    const { clearPollGetPayResult, startPollGetPayResult } = usePollGetPayResult()
    const handleOk = async () => {
      loading.value = true
      if (!(await isWaitOrder(tradeNo.value).finally(() => loading.value = false))) return;
      context.emit('update:visible', false)
      await router.push(`/order/pay/result?orderNo=${orderNo.value}&tradeNo=${tradeNo.value}&status=1&type=${type.value}`);
    }
    onMounted(() => {
      startPollGetPayResult({ tradeNo: tradeNo.value, orderNo: orderNo.value, commodityType: type.value })
    })
    onUnmounted(() => {
      clearPollGetPayResult()
    })
    return {
      loading,
      getContainerFn: () => props.getContainer ? document.getElementById(props.getContainer) : document.body,
      visible,
      handleOk,
      clearPollGetPayResult,
    }
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  .icon {
    font-size: 50px;
    color: #faad14;
  }
  .description {
    margin-left: 2em;
    &-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 1em;
    }
  }
}
</style>
