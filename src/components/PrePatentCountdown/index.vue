<template>
  <div class="prePatentCountdown">
    <template v-if="countdownVisible">
      <Icon icon="clock" />
      <UICountdown
        @finish="handleFinish"
        :value="reserveExpireTime"
        valueStyle="font-size: 12px;"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, toRefs, watch } from 'vue';
import UIButton from '../UI/UIButton.vue'
import UICountdown from '../UI/UICountdown.vue';
import Icon from '../Icon/index.vue';

export default defineComponent({
  name: 'PrePatentCountdown',
  components: { UIButton, UICountdown, Icon },
  props: {
    patent: {
      type: Object as PropType<Patent>,
      default: () => ({}),
    },
  },
  setup(props, context) {
    const {patent} = toRefs(props)
    const countdownVisible = ref(false)
    const reserveExpireTime = ref(0)
    const handleFinish = () => {
      countdownVisible.value = !countdownVisible.value
      context.emit('finish')
    }
    watch(patent, (value) => {
      reserveExpireTime.value = value.reserveExpireTime
      countdownVisible.value = !!value.reserveExpireTime
    }, {immediate: true,})
    return {
      reserveExpireTime,
      countdownVisible,
      handleFinish,
    }
  },
})
</script>

<style lang="scss" scoped>
.prePatentCountdown {
  display: inline-flex;
  align-items: center;
  > svg {font-size: 14px;margin-right: .1em;}
}
</style>
