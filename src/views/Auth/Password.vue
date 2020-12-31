<template>
  <div class="password">
    <UIForm layout="vertical">
      <UITabs :animated="false">
        <UITabPane key="password">
          <template #tab>
            <b>找回密码</b>
          </template>
          <UIFormItem v-bind="validateInfos.phone">
            <div class="shrinkBar accountBar">
              <UIInput v-model:value="resetPasswordInfo.phone" placeholder="请输入手机号" :maxlength="11">
                <template #prefix>
                  <Icon class="inputIcon" icon="inputPhone" />
                </template>
              </UIInput>
            </div>
          </UIFormItem>
          <UIFormItem v-bind="validateInfos.captcha">
            <div class="shrinkBar captchaBar">
              <UIInput v-model:value="resetPasswordInfo.captcha" class="captcha" placeholder="验证码" :maxlength="6">
                <template #prefix>
                  <Icon class="inputIcon" icon="inputCaptcha" />
                </template>
                <template #addonAfter>
                  <Captcha :info="resetPasswordInfo" />
                </template>
              </UIInput>
            </div>
          </UIFormItem>
          <UIFormItem v-bind="validateInfos.newPassword">
            <div class="shrinkBar newPasswordBar">
              <UIInput v-model:value="resetPasswordInfo.newPassword" type="password" placeholder="请输入新密码">
                <template #prefix>
                  <Icon class="inputIcon" icon="inputPassword" />
                </template>
              </UIInput>
            </div>
          </UIFormItem>
          <UIFormItem v-bind="validateInfos.newPassword2">
            <div class="newPasswordBar">
              <UIInput v-model:value="resetPasswordInfo.newPassword2" type="password" placeholder="请输入再次新密码">
                <template #prefix>
                  <Icon class="inputIcon" icon="inputPassword" />
                </template>
              </UIInput>
            </div>
          </UIFormItem>
        </UITabPane>
      </UITabs>
      <div class="buttonBar">
        <UIButton :loading="submitLoading" type="primary" block customer-class="mainButton" @click="resetPassword">确认</UIButton>
      </div>
      <div class="infoBar">
        <span></span>
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
import * as passwordApi from '../../api/password'
import {useForm} from '@ant-design-vue/use'
import { message } from 'ant-design-vue';
import Captcha from '/@components/Captcha/index.vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AuthPassword',
  components: {UITabs, UITabPane, UIInput, Icon, UIButton, UIForm, UIFormItem,Captcha},
  setup () {
    const router = useRouter()
    const submitLoading = ref(false)
    const resetPasswordInfo = reactive({
      phone: '',
      newPassword: '',
      captcha: '',
      newPassword2: '',
    })
    const rules = reactive({
      phone: [{required: true, message: ''}, {len: 11, message: ''}],
      newPassword: [{required: true, message: ''}],
      newPassword2: [{required: true, message: ''}, {validator: (rule: any, value: string) => value !== resetPasswordInfo.newPassword ? Promise.reject('密码不一致') : Promise.resolve(), message: ''}],
      captcha: [{required: true, message: ''}, {len: 6, message: ''}],
    })
    const { validate, validateInfos } = useForm(resetPasswordInfo, rules)
    const resetPassword = () => {
      validate().then(async () => {
        submitLoading.value = true
        await passwordApi.forgetPassword(resetPasswordInfo).finally(() => submitLoading.value = false)
        await router.push('/auth/sign_in')
        message.success('找回密码成功，请重新登录')
      }, () => message.error('表单输入有误'))
    }
    return {
      resetPasswordInfo,
      validateInfos,
      submitLoading,
      resetPassword,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
