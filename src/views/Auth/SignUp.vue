<template>
  <div class="signUp">
    <UIForm layout="vertical">
      <UITabs :animated="false">
        <UITabPane key="signUp">
          <template #tab>
            <b>新用户注册</b>
          </template>
          <UIFormItem v-bind="validateInfos.phone">
            <div class="shrinkBar accountBar">
              <UIInput v-model:value="signUpInfo.phone" placeholder="请输入手机号" :maxlength="11">
                <template #prefix>
                  <Icon class="inputIcon" icon="inputPhone" />
                </template>
              </UIInput>
            </div>
          </UIFormItem>
          <UIFormItem v-bind="validateInfos.captcha">
            <div class="shrinkBar captchaBar">
              <UIInput v-model:value="signUpInfo.captcha" class="captcha" placeholder="验证码" :maxlength="6">
                <template #prefix>
                  <Icon class="inputIcon" icon="inputCaptcha" />
                </template>
                <template #addonAfter>
                  <Captcha :info="signUpInfo" />
                </template>
              </UIInput>
            </div>
          </UIFormItem>
          <UIFormItem v-bind="validateInfos.password">
            <div class="shrinkBar passwordBar">
              <UIInput v-model:value="signUpInfo.password" type="password" placeholder="请输入密码">
                <template #prefix>
                  <Icon class="inputIcon" icon="inputPassword" />
                </template>
              </UIInput>
            </div>
          </UIFormItem>
          <UIFormItem v-bind="validateInfos.referrer">
            <div class="referrerBar">
              <UIInput :readonly="!!route.query.code" v-model:value="signUpInfo.referrer" placeholder="推荐人手机号或者工号（选填）" :maxlength="11">
                <template #prefix>
                  <Icon class="inputIcon" icon="inputAgent" />
                </template>
              </UIInput>
            </div>
          </UIFormItem>
        </UITabPane>
      </UITabs>
      <div class="buttonBar">
        <UIButton :loading="submitLoading" type="primary" block customer-class="mainButton" @click="signUp">注册</UIButton>
      </div>
      <div class="infoBar">
        <p>点击注册代表已同意 <RouterLink class="toSignUp" to="/others/helper?aq=1-2">《用户服务协议》</RouterLink></p>
        <RouterLink class="darkLink" to="/auth/sign_in">返回登录</RouterLink>
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
import * as signUpApi from '../../api/signUp'
import {useForm} from '@ant-design-vue/use'
import { message } from 'ant-design-vue';
import Captcha from '/@components/Captcha/index.vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '/@/store';
import { getSingleQuery } from '/@/utils';

export default defineComponent({
  name: 'AuthSignUp',
  components: {UITabs, UITabPane, UIInput, Icon, UIButton, UIForm, UIFormItem,Captcha},
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const submitLoading = ref(false)
    const signUpInfo = reactive({
      phone: '',
      password: '',
      captcha: '',
      referrer: getSingleQuery(route.query.code) || '',
    })
    const rules = reactive({
      phone: [{required: true, message: ''}, {len: 11, message: ''}],
      password: [{required: true, message: ''}],
      captcha: [{required: true, message: ''}, {len: 6, message: ''}],
    })
    const { validate, validateInfos } = useForm(signUpInfo, rules)
    const signUp = () => {
      validate().then(async () => {
        submitLoading.value = true
        await signUpApi.signUp(signUpInfo).finally(() => submitLoading.value = false)
        message.success('注册成功!');
        const hide = message.loading('正在为您自动登录...');
        submitLoading.value = true
        await signInApi.signInWithPassword(signUpInfo)
        const user = await store.dispatch('setUser')
        await store.dispatch('setOneDayConsumePoints')
        await store.dispatch('setUserPoints').finally(() => hide());
        await router.push(getSingleQuery(route.query.redirect) || '/')
        message.success(`欢迎回来，${user.nickname}`)
      }, () => message.error('表单输入有误'))
    }
    return {
      route,
      signUpInfo,
      validateInfos,
      submitLoading,
      signUp,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
