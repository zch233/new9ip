<template>
  <div class="signIn">
    <UIForm layout="vertical" :modal="signInInfo" :rules="rules">
      <UITabs :animated="false" v-model:activeKey="activeTabKey">
        <UITabPane key="signInWithPassword">
          <template #tab>
            <b>帐号密码登录</b>
          </template>
          <UIFormItem name="account">
            <div class="accountBar">
              <UIInput v-model:value="signInInfo.account" placeholder="请输入手机号">
                <template #prefix>
                  <Icon class="inputIcon" icon="test" />
                </template>
              </UIInput>
            </div>
          </UIFormItem>
          <UIFormItem name="password">
            <div class="passwordBar">
              <UIInput v-model:value="signInInfo.password" placeholder="请输入密码">
                <template #prefix>
                  <Icon class="inputIcon" icon="test" />
                </template>
              </UIInput>
            </div>
          </UIFormItem>
        </UITabPane>
        <UITabPane key="signInWithCaptcha">
          <template #tab>
            <b>手机动态登录</b>
          </template>
          <UIFormItem name="account">
            <div class="accountBar">
              <UIInput v-model:value="signInInfo.account" placeholder="请输入手机号">
                <template #prefix>
                  <Icon class="inputIcon" icon="test" />
                </template>
              </UIInput>
            </div>
          </UIFormItem>
          <UIFormItem name="captcha">
            <div class="captchaBar">
              <UIInput v-model:value="signInInfo.captcha" class="captcha" placeholder="验证码">
                <template #prefix>
                  <Icon class="inputIcon" icon="test" />
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
          </UIFormItem>
        </UITabPane>
      </UITabs>
      <div class="buttonBar">
        <UIButton :loading="submitLoading" type="primary" block customer-class="mainButton" @click="signIn">登录</UIButton>
      </div>
      <div class="infoBar">
        <p>还没有帐号，<a href="">立即注册</a></p>
        <p>忘记密码</p>
      </div>
    </UIForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import UIInput from '../../components/UI/UIInput.vue'
import UITabs from '../../components/UI/UITabs.vue'
import UITabPane from '../../components/UI/UITabPane.vue'
import Icon from '../../components/Icon/index.vue'
import UIButton from '../../components/UI/UIButton.vue';
import UICountdown from '../../components/UI/UICountdown.vue';
import UIForm from '../../components/UI/UIForm.vue';
import UIFormItem from '../../components/UI/UIFormItem.vue';
import * as api from '../../api/signIn'

type ActiveTabKey = 'signInWithPassword' | 'signInWithCaptcha';

export default defineComponent({
  name: 'SignIn',
  components: {UITabs, UITabPane, UIInput, Icon, UIButton, UICountdown, UIForm, UIFormItem,},
  setup () {
    const activeTabKey = ref<ActiveTabKey>('signInWithPassword')
    const signInInfo = reactive({
      account: '',
      password: '',
      captcha: '',
    })
    const rules = {
      account: [{required: true, message: '请输入帐号'}],
      password: [{required: true, message: '请输入密码'}],
      captcha: [{required: true, message: '请输入验证码'}],
    }
    const countdownVisible = ref(false)
    const captchaLoading = ref(false)
    const submitLoading = ref(false)
    const getCaptcha = () => {
      captchaLoading.value = true
      setTimeout(() => {
        captchaLoading.value = false
        countdownVisible.value = !countdownVisible.value
      }, 1000)
    }
    const signIn = async () => {
      submitLoading.value = true
      await api[activeTabKey.value](signInInfo).finally(() => (submitLoading.value = false))
    }
    return {
      activeTabKey,
      captchaLoading,
      submitLoading,
      countdownVisible,
      getCaptcha,
      signIn,
      signInInfo,
      rules,
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
  .inputIcon {margin-right: 1em;}
}
.accountBar { margin: 22px 0 0; }
.buttonBar { margin: 0 0 10px; .mainButton {height: 40px;font-size: 18px} }
.infoBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #999999;
  font-size: 12px;
}
</style>
