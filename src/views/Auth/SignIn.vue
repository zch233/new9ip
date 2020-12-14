<template>
  <div class="signIn">
    <UITabs :animated="false">
      <UITabPane key="1">
        <template #tab>
          <b>帐号密码登录</b>
        </template>
        <div class="accountBar">
          <UIInput placeholder="请输入手机号">
            <template #prefix>
              <Icon style="margin-right: 1em" icon="test" />
            </template>
          </UIInput>
        </div>
        <div class="passwordBar">
          <UIInput placeholder="请输入密码">
            <template #prefix>
              <Icon style="margin-right: 1em" icon="test" />
            </template>
          </UIInput>
        </div>
      </UITabPane>
      <UITabPane key="2">
        <template #tab>
          <b>手机动态登录</b>
        </template>
        <div class="accountBar">
          <UIInput placeholder="请输入手机号">
            <template #prefix>
              <Icon style="margin-right: 1em" icon="test" />
            </template>
          </UIInput>
        </div>
        <div class="captchaBar">
          <UIInput class="captcha" placeholder="验证码">
            <template #prefix>
              <Icon style="margin-right: 1em" icon="test" />
            </template>
            <template #addonAfter>
              <UIButton :loading="captchaLoading" v-if="!countdownVisible" block @click="getCaptcha">获取</UIButton>
              <UICountdown
                v-else
                @finish="countdownVisible=!countdownVisible"
                :value="Date.now() + 1000 * 60"
                suffix="s"
                format="ss"
              />
            </template>
          </UIInput>
        </div>
      </UITabPane>
    </UITabs>
    <div class="buttonBar">
      <UIButton type="primary" block customer-class="mainButton">登录</UIButton>
    </div>
    <div class="infoBar">
      <p>还没有帐号，<a href="">立即注册</a></p>
      <p>忘记密码</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UIInput from '../../components/UI/UIInput.vue'
import UITabs from '../../components/UI/UITabs.vue'
import UITabPane from '../../components/UI/UITabPane.vue'
import Icon from '../../components/Icon/index.vue'
import UIButton from '../../components/UI/UIButton.vue';
import UICountdown from '../../components/UI/UICountdown.vue';

export default defineComponent({
  name: 'SignIn',
  components: {UITabs, UITabPane, UIInput, Icon, UIButton, UICountdown},
  setup () {
    const countdownVisible = ref(false)
    const captchaLoading = ref(false)
    const getCaptcha = () => {
      captchaLoading.value = true
      setTimeout(() => {
        captchaLoading.value = false
        countdownVisible.value = !countdownVisible.value
      }, 1000)
    }
    return {
      captchaLoading,
      countdownVisible,
      getCaptcha,
    }
  }
})
</script>

<style lang="scss">
.signIn {
  .ant-tabs-nav .ant-tabs-tab-active, .ant-tabs-nav .ant-tabs-tab:hover {
    color: #14A8BD;
  }
  .ant-tabs-ink-bar {
    background-color: #14A8BD;
  }
  .ant-input-affix-wrapper {
    padding: 8px 18px;
  }
}
</style>

<style lang="scss" scoped>
.signIn {
  width: 280px;
}
.accountBar { margin: 22px 0 20px; }
.buttonBar { margin: 30px 0 10px; .mainButton {height: 40px;font-size: 18px} }
.infoBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #999999;
  font-size: 12px;
}
</style>
