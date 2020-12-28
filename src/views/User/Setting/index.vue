<template>
  <div class="setting">
    <UITabs :animated="false">
      <UITabPane key="info">
        <template #tab>
          <b>基本信息</b>
        </template>
        <div class="wrapper">
          <UIForm :labelCol="{span: 2}">
            <UIFormItem label="头像">1</UIFormItem>
            <UIFormItem label="用户名">{{store.state.user.account}}</UIFormItem>
            <UIFormItem label="昵称"><UIInput v-model:value="userInfo.nickname" placeholder="请填写昵称" /></UIFormItem>
            <UIFormItem label="性别">
              <UIRadioGroup v-model:value="userInfo.sex">
                <UIRadio :value="0">男</UIRadio>
                <UIRadio :value="1">女</UIRadio>
              </UIRadioGroup>
            </UIFormItem>
          </UIForm>
          <UIButton :loading="submitLoading" @click="updateUserInfo" customer-class="mainButton" type="primary">保存修改</UIButton>
        </div>
      </UITabPane>
      <UITabPane key="security">
        <template #tab>
          <b>帐号安全</b>
        </template>
        <div class="wrapper">
          <p class="security-item"><label class="item-label">登录密码</label><UIButton customer-class="linkButton" type="link" @click="updatePasswordModalVisible=true">修改密码</UIButton></p>
        </div>
      </UITabPane>
    </UITabs>
  </div>
  <UpdatePasswordModal v-model:visible="updatePasswordModalVisible" />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import UITabs from '/@components/UI/UITabs.vue';
import UITabPane from '/@components/UI/UITabPane.vue';
import UIButton from '/@components/UI/UIButton.vue';
import UIInput from '/@components/UI/UIInput.vue';
import UIForm from '/@components/UI/UIForm.vue';
import UIFormItem from '/@components/UI/UIFormItem.vue';
import UIRadio from '/@components/UI/UIRadio.vue';
import UIRadioGroup from '/@components/UI/UIRadioGroup.vue';
import UpdatePasswordModal from './UpdatePasswordModal.vue';
import { useStore } from '/@/store';
import { useForm } from '@ant-design-vue/use';
import * as settingApi from '/@api/setting'
import { message } from 'ant-design-vue';

export default defineComponent({
  name: 'Setting',
  components: {UITabs, UITabPane, UIButton, UIInput, UIForm, UIFormItem, UIRadio, UIRadioGroup, UpdatePasswordModal},
  setup() {
    const store = useStore()
    const submitLoading = ref(false)
    const userInfo = reactive<User>({
      avatar: store.state.user.avatar,
      nickname: store.state.user.nickname,
      sex: store.state.user.sex,
    })
    const rules = reactive({})
    useForm(userInfo, rules)
    const updatePasswordModalVisible = ref(false)
    const updateUserInfo = async () => {
      submitLoading.value = true
      const hide = message.loading('正在更新，请稍候...');
      await settingApi.updateUserInfo(userInfo).finally(() => {
        submitLoading.value = false
        hide()
      })
      message.success('更新成功');
    }
    return {
      store,
      userInfo,
      updateUserInfo,
      submitLoading,
      updatePasswordModalVisible,
    }
  }
})
</script>

<style lang="scss">
.ant-form-item-label > label {color: #999;}
</style>
<style lang="scss" scoped>
.item-label {
  color: #999;
  display: inline-block;
  text-align: right;
  width: 4em;
}
.info-item {padding: 20px;}
.security-item {padding: 30px;}
.wrapper {padding-left: 30px;padding-bottom: 30px;}
</style>
