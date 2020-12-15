<template>
  <div class="signIn">
    <UIForm layout="vertical">
      <UITabs :animated="false" v-model:activeKey="activeTabKey" @change="changeTag">
        <UITabPane key="signInWithPassword">
          <template #tab>
            <b>帐号密码登录</b>
          </template>
          <UIFormItem v-bind="validateInfos.phone">
            <div class="accountBar">
              <UIInput v-model:value="signInInfo.phone" placeholder="请输入手机号">
                <template #prefix>
                  <Icon class="inputIcon" icon="test" />
                </template>
              </UIInput>
            </div>
          </UIFormItem>
          <UIFormItem v-bind="validateInfos.password">
            <div class="passwordBar">
              <UIInput v-model:value="signInInfo.password" type="password" placeholder="请输入密码">
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
          <UIFormItem v-bind="validateInfos.phone">
            <div class="accountBar">
              <UIInput v-model:value="signInInfo.phone" placeholder="请输入手机号">
                <template #prefix>
                  <Icon class="inputIcon" icon="test" />
                </template>
              </UIInput>
            </div>
          </UIFormItem>
          <UIFormItem v-bind="validateInfos.captcha">
            <div class="captchaBar">
              <UIInput v-model:value="signInInfo.captcha" class="captcha" placeholder="验证码">
                <template #prefix>
                  <Icon class="inputIcon" icon="test" />
                </template>
                <template #addonAfter>
                  <Captcha :info="signInInfo" />
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
        <p>还没有帐号，<RouterLink class="toSignUp" to="/auth/sign_up">立即注册</RouterLink></p>
        <RouterLink class="toPassword" to="/auth/password">忘记密码</RouterLink>
      </div>
    </UIForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import UIInput from '/@components/UI/UIInput.vue'
import UITabs from '/@components/UI/UITabs.vue'
import UITabPane from '/@components/UI/UITabPane.vue'
import Icon from '/@components/Icon/index.vue'
import UIButton from '/@components/UI/UIButton.vue';
import UIForm from '/@components/UI/UIForm.vue';
import UIFormItem from '/@components/UI/UIFormItem.vue';
import * as signInApi from '../../api/signIn'
import {useForm} from '@ant-design-vue/use'
import { message } from 'ant-design-vue';
import Captcha from '/@components/Captcha/index.vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '../../store';

type ActiveTabKey = 'signInWithPassword' | 'signInWithCaptcha';

export default defineComponent({
  name: 'SignIn',
  components: {UITabs, UITabPane, UIInput, Icon, UIButton, UIForm, UIFormItem,Captcha},
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    console.log(store);
    const activeTabKey = ref<ActiveTabKey>('signInWithPassword')
    const signInInfo = reactive({
      phone: '',
      password: '',
      captcha: '',
    })
    const rules = reactive({
      phone: [{required: true, message: ''}],
      password: [{required: true, message: ''}],
      captcha: [{required: false, message: ''}],
    })
    const { validate, validateInfos } = useForm(signInInfo, rules)
    const submitLoading = ref(false)
    const changeTag = (tab) => {
      rules.captcha[0].required = tab === 'signInWithCaptcha'
      rules.password[0].required = tab === 'signInWithPassword'
    }
    const signIn = () => {
      validate().then(async () => {
        submitLoading.value = true
        await signInApi[activeTabKey.value](signInInfo).finally(() => submitLoading.value = false)
        const user = await store.dispatch('setUser')
        await router.push(route.query.redirect || '/')
        message.success(`欢迎回来，${user.nickname}`)
      }, () => message.error('表单输入有误'))
    }
    return {
      activeTabKey,
      submitLoading,
      changeTag,
      signIn,
      rules,
      signInInfo,
      validateInfos,
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
  .ant-input-group-wrapper.captcha button {
    height: 38px;
  }
}
</style>

<style lang="scss" scoped>
.signIn {
  width: 280px;
  .inputIcon {margin-right: 1em;}
}
.accountBar { margin: 22px 0 -12px; }
.buttonBar { margin: 0 0 10px; .mainButton {height: 40px;font-size: 18px} }
.infoBar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #999999;
  font-size: 12px;
  .toPassword { color: inherit; }
}
</style>
