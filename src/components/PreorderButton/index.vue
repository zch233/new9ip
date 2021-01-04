<template>
  <UIButton class="preorderButton" :class="big && 'big'" customer-class="default" @click="showModal">预留</UIButton>
  <UIModal :width="416" v-model:visible="visible" :maskClosable="false" title="预留专利" :onOk="preorderPatent">
    <div class="wrapper">
      <Icon class="warning" icon="warning" />
      <div>
        <p class="fontWeight">预留专利：{{ patent.name }}</p>
<!--        预留天数：-->
<!--        <InputNumber autoFocus min={1} max={3} value={days} onChange={(day) => setDays(parseInt((day || 1).toString()))} /> 天-->
<!--        <p />-->
        将消耗 <span class="fontWeight">{{ $store.state.oneDayConsumePoints }}</span> 个积分，是否继续？
      </div>
    </div>
  </UIModal>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import UIButton from '/@components/UI/UIButton.vue'
import UIModal from '/@components/UI/UIModal.vue';
import Icon from '/@components/Icon/index.vue';
import * as patentApi from '/@api/patent'
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
      visible.value = true
    }
    const preorderPatent = () => {
      patentApi.preorderPatent({ days: 1, productId: props.patent.id }).then(async () => {
        message.success('预留成功');
        await router.push('/user/preorder');
      }).catch((e) => {
        visible.value = false
        e.code && e.code === 3500 &&
        Modal.confirm({
          title: '积分不足',
          content: '抱歉，您的剩余积分不足',
          okText: '立即充值',
          cancelText: '继续逛逛',
          onOk() {
            router.push('/vip');
          },
        })
      })
    }
    return {
      preorderPatent,
      visible,
      showModal,
    }
  },
})
</script>

<style lang="scss" scoped>
.preorderButton {
  vertical-align: top;margin-left: .7em;
  &.big {height: 40px;width: 110px;}
}
.wrapper {
  display: flex;
  .fontWeight {
    font-weight: bold;

  }
  .warning {
    font-size: 50px;
    color: rgb(250, 173, 20);
    margin-right: 16px;
  }
}
</style>
