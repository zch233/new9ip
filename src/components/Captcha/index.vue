<template>
  <UIButton class="captchaButton" :loading="captchaLoading" v-if="!countdownVisible" block @click="getCaptcha">获取</UIButton>
  <UICountdown
    v-else
    @finish="countdownVisible=!countdownVisible"
    :value="Date.now() + 1000 * 60"
    suffix="s"
    format="ss"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UIButton from '/@components/UI/UIButton.vue'
import UICountdown from '/@components/UI/UICountdown.vue';
import * as authApi from '../../api/auth'
import { message } from 'ant-design-vue';

export default defineComponent({
  name: 'Captcha',
  components: { UIButton, UICountdown },
  props: {
    info: Object,
  },
  setup({info}) {
    const countdownVisible = ref(false)
    const captchaLoading = ref(false)
    const getCaptcha = async () => {
      captchaLoading.value = true
      await authApi.getCaptcha(info).finally(() => captchaLoading.value = false)
      countdownVisible.value = !countdownVisible.value
      message.success('获取验证码成功')
    }
    return {
      captchaLoading,
      countdownVisible,
      getCaptcha,
    }
  },
})
</script>

<style lang="scss" scoped>
.captchaButton {color: #14A8BD;}
</style>
