<template>
  <div class="orderSteps">
    <UISteps :current="current" size="small">
      <UIStep title="确认信息"></UIStep>
      <UIStep title="付款到平台"></UIStep>
      <UIStep title="订单完成"></UIStep>
    </UISteps>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UISteps from '/@components/UI/UISteps.vue'
import UIStep from '/@components/UI/UIStep.vue'

export default defineComponent({
  name: 'OrderSteps',
  components: {UISteps, UIStep},
  props: {
    current: {
      type: Number,
      default: 0,
    },
  }
})
</script>

<style lang="scss">
.orderSteps {
  //.ant-steps-small .ant-steps-item-title {font-size: 12px;}
  .ant-steps-item-process .ant-steps-item-icon {background-color: #F3FAFF; border-color: #DEDEDE;}
  .ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {color: #333333;}
  .ant-steps-item-finish .ant-steps-item-icon {border-color: #14A8BD;}
  .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {color: #14A8BD;}

}
</style>
