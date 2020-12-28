<template>
  <UIModal title="修改密码" :onOk="updatePassword" :maskClosable="false">
    <UIForm>
      <UIFormItem label="会员帐号">{{ store.state.user.account }}</UIFormItem>
      <UIFormItem label="验证码" v-bind="validateInfos.captcha">
        <UIInput v-model:value="passwordInfo.captcha" class="captcha" placeholder="验证码" :maxlength="6">
          <template #addonAfter>
            <Captcha member :info="{phone: store.state.user.account}" />
          </template>
        </UIInput>
      </UIFormItem>
      <UIFormItem label="新密码" v-bind="validateInfos.newPassword"><UIInput type="password" v-model:value="passwordInfo.newPassword" placeholder="请输入新密码" /></UIFormItem>
    </UIForm>
  </UIModal>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import UIModal from '/@components/UI/UIModal.vue'
import UIForm from '/@components/UI/UIForm.vue';
import UIFormItem from '/@components/UI/UIFormItem.vue';
import UIInput from '/@components/UI/UIInput.vue';
import Captcha from '/@components/Captcha/index.vue'
import { useStore } from '/@/store';
import * as settingApi from '/@api/setting'
import { message } from 'ant-design-vue';
import { useForm } from '@ant-design-vue/use';

export default defineComponent({
  name: 'UpdatePasswordModal',
  components: {UIModal, UIForm, UIFormItem, UIInput, Captcha},
  setup(props, context) {
    const store = useStore()
    const passwordInfo = reactive({
      newPassword: '',
      captcha: '',
    })
    const rules = reactive({
      captcha: [{required: true, message: ''}, {len: 6, message: ''}],
      newPassword: [{required: true, message: ''}],
    })
    const { validate, validateInfos } = useForm(passwordInfo, rules)
    const updatePassword = () => {
      validate().then(async () => {
        const hide = message.loading('正在更新，请稍候...');
        await settingApi.updateUserInfo({ ...passwordInfo, phone: store.state.user.account }).finally(() => hide())
        context.emit('update:visible', false);
        message.success('更新成功');
      }, () => message.error('表单输入有误'))
    }
    return {
      store,
      updatePassword,
      passwordInfo,
      validateInfos,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
