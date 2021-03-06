<template>
  <UIButton :size="size" class="preorderButton" :class="[big && 'big', buttonClass]" :disabled="disabled" customer-class="default" @click="showModal">预留</UIButton>
  <UIModal :width="416" v-model:visible="visible" :maskClosable="false" title="预留专利" :onOk="preorderPatent">
    <div class="wrapper">
      <Icon class="warning" icon="warning" />
      <div>
        <p><b>预留专利：{{ patent.name }}</b></p>
<!--        预留天数：-->
<!--        <InputNumber autoFocus min={1} max={3} value={days} onChange={(day) => setDays(parseInt((day || 1).toString()))} /> 天-->
        <p>将消耗 <b>{{ oneDayConsumePoints }}</b> 个积分，是否继续？</p>
        <span>当前剩余：<b>{{ userPoints }}</b> 积分</span>
      </div>
    </div>
  </UIModal>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
import UIButton from '../UI/UIButton.vue'
import UIModal from '../UI/UIModal.vue';
import Icon from '../Icon/index.vue';
import * as patentApi from '../../api/patent'
import { message, Modal } from 'ant-design-vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '/@/store';

export default defineComponent({
  name: 'PreorderButton',
  components: {UIButton, UIModal, Icon},
  props: {
    patent: {
      type: Object as PropType<Patent>,
      default: () => ({}),
    },
    big: Boolean,
    disabled: Boolean,
    size: String,
    buttonClass: String,
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const visible = ref(false)
    const showModal = () => {
      if (!store.state.user.account) {
        message.error('您尚未登录')
        router.push({ path: '/auth/sign_in', query: {redirect: route.fullPath} })
        return
      }
      if (store.state.oneDayConsumePoints > store.state.userPoints) {
        Modal.confirm({
          title: '积分不足',
          content: '抱歉，您的剩余积分不足',
          okText: '立即充值',
          cancelText: '继续逛逛',
          onOk() {
            router.push('/user/orderPoints');
          },
        })
        return
      }
      visible.value = true
    }
    const preorderPatent = async () => {
      await patentApi.preorderPatent({ days: 1, productId: props.patent.id }).finally(() => visible.value = false)
      message.success('预留成功');
      await router.push('/user/preorder');
      store.commit('COMMIT_consumePointsByPreorder')
    }
    return {
      userPoints: computed(() => store.getters.userPoints),
      oneDayConsumePoints: computed(() => store.getters.oneDayConsumePoints),
      preorderPatent,
      visible,
      showModal,
    }
  },
})
</script>

<style lang="scss" scoped>
.preorderButton {
  vertical-align: top;
  margin-left: .7em;
  &.big {height: 40px;width: 110px;}
  &_noGap {margin-left: 0;}
}
.wrapper {
  display: flex;
  .warning {
    font-size: 50px;
    color: rgb(250, 173, 20);
    margin-right: 16px;
  }
}
</style>
